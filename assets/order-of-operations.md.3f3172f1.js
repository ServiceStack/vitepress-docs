import{_ as s}from"./servicestack-overview-01.ed500f58.js";import{_ as n,c as r,o as l,b as e,e as t}from"./app.14440598.js";var o="/assets/servicestack-overview-02.423c8b02.png";const $='{"title":"HTTP Custom hooks","description":"","frontmatter":{"slug":"order-of-operations"},"headers":[{"level":2,"title":"HTTP Custom hooks","slug":"http-custom-hooks"},{"level":2,"title":"Internal Service Gateway Requests","slug":"internal-service-gateway-requests"},{"level":2,"title":"MQ (non-HTTP) Custom hooks","slug":"mq-non-http-custom-hooks"},{"level":2,"title":"RpcGateway","slug":"rpcgateway"},{"level":2,"title":"Implementation architecture diagram","slug":"implementation-architecture-diagram"}],"relativePath":"order-of-operations.md","lastUpdated":1634495308426}',i={},a=e("h2",{id:"http-custom-hooks",tabindex:"-1"},[t("HTTP Custom hooks "),e("a",{class:"header-anchor",href:"#http-custom-hooks","aria-hidden":"true"},"#")],-1),u=e("p",null,"This list shows the order in which any user-defined custom hooks are executed.",-1),c=e("p",null,[t("The first set of filters is used to return the matching "),e("code",null,"IHttpHandler"),t(" for the request:")],-1),h=e("ol",null,[e("li",null,[e("code",null,"HostContext.RawHttpHandlers"),t(" are executed before anything else, i.e. returning any "),e("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),t(),e("code",null,"IHttpHandler"),t(" by-passes ServiceStack completely and processes your custom "),e("code",null,"IHttpHandler"),t(" instead.")]),e("li",null,"Request is checked if matches any registered routes or static files and directories"),e("li",null,[t("If the Request doesn't match it will search "),e("code",null,"IAppHost.CatchAllHandlers"),t(" for a match")]),e("li",null,[e("code",null,"IAppHost.FallbackHandlers"),t(" is the last handler executed for finding a handler to handle the request")])],-1),d=e("p",null,[t("Any unmatched requests will not be handled by ServiceStack and either returns a 404 NotFound Response in "),e("strong",null,[e("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET")]),t(" or "),e("strong",null,"HttpListener"),t(" AppHosts or executes the next middleware in-line in "),e("strong",null,".NET Core"),t(" Apps.")],-1),p=e("p",null,"Requests handled by ServiceStack execute the custom hooks and filters in the following order:",-1),f=e("ol",null,[e("li",null,[t("The "),e("code",null,"IAppHost.PreRequestFilters"),t(" gets executed before the Request DTO is deserialized")]),e("li",null,[t("Default Request DTO Binding or "),e("a",{href:"/serialization-deserialization.html#create-a-custom-request-dto-binder"},"Custom Request Binding"),t(),e("em",null,"(if registered)")]),e("li",null,[t("Any "),e("a",{href:"/customize-http-responses.html#request-converters"},"Request Converters"),t(" are executed")]),e("li",null,[e("a",{href:"/filter-attributes.html"},"Request Filter Attributes"),t(" with "),e("strong",null,"Priority < 0"),t(" gets executed")]),e("li",null,[t("Then any "),e("a",{href:"/request-and-response-filters.html"},"Global Request Filters"),t(" get executed")]),e("li",null,[t("Followed by "),e("a",{href:"/filter-attributes.html"},"Request Filter Attributes"),t(" with "),e("strong",null,"Priority >= 0")]),e("li",null,"Action Request Filters"),e("li",null,[t("Then your "),e("strong",null,"Service is executed"),t(" with the configured "),e("a",{href:"/customize-http-responses.html#intercept-service-requests"},"Service Filters"),t(" and "),e("a",{href:"/customize-http-responses.html#using-a-custom-servicerunner"},"Service Runner"),t(),e("strong",null,"OnBeforeExecute"),t(", "),e("strong",null,"OnAfterExecute"),t(" and "),e("strong",null,"HandleException"),t(" custom hooks are fired")]),e("li",null,"Action Response Filters"),e("li",null,[t("Any "),e("a",{href:"/customize-http-responses.html#response-converters"},"Response Converters"),t(" are executed")]),e("li",null,[t("Followed by "),e("a",{href:"/filter-attributes.html"},"Response Filter Attributes"),t(" with "),e("strong",null,"Priority < 0")]),e("li",null,[t("Then "),e("a",{href:"/request-and-response-filters.html"},"Global Response Filters")]),e("li",null,[t("Followed by "),e("a",{href:"/filter-attributes.html"},"Response Filter Attributes"),t(" with "),e("strong",null,"Priority >= 0")]),e("li",null,[t("Finally at the end of the Request "),e("code",null,"IAppHost.OnEndRequest"),t(" and any "),e("code",null,"IAppHost.OnEndRequestCallbacks"),t(" are fired")])],-1),m=e("p",null,[t("Any time you close the Response in any of your filters, i.e. "),e("code",null,"httpRes.EndRequest()"),t(" the processing of the response is short-circuited and no further processing is done on that request.")],-1),g=e("h2",{id:"internal-service-gateway-requests",tabindex:"-1"},[t("Internal Service Gateway Requests "),e("a",{class:"header-anchor",href:"#internal-service-gateway-requests","aria-hidden":"true"},"#")],-1),v=e("p",null,[t("Internal "),e("a",{href:"/service-gateway.html"},"Service Gateway"),t(" Requests are executed using "),e("code",null,"ServiceController.GatewayExecuteAsync"),t(" API for invoking "),e("strong",null,"internal/trusted"),t(" Services:")],-1),R=e("ol",null,[e("li",null,[t("Any "),e("code",null,"Gateway"),t(),e("a",{href:"/request-and-response-filters.html#global-request-and-response-filters"},"Global Request Filters"),t(" get executed")]),e("li",null,"Any Validation Filters"),e("li",null,"Action Request Filters"),e("li",null,[t("Then your "),e("strong",null,"Service is executed"),t(" with the configured "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IServiceRunner.cs",target:"_blank",rel:"noopener noreferrer"},"IServiceRunner"),t(" and its "),e("strong",null,"OnBeforeExecute"),t(", "),e("strong",null,"OnAfterExecute"),t(" and "),e("strong",null,"HandleException"),t(" custom hooks are fired")]),e("li",null,"Action Response Filters"),e("li",null,[t("Then "),e("code",null,"Gateway"),t(),e("a",{href:"/request-and-response-filters.html#global-request-and-response-filters"},"Global Response Filters")])],-1),q=e("h2",{id:"mq-non-http-custom-hooks",tabindex:"-1"},[t("MQ (non-HTTP) Custom hooks "),e("a",{class:"header-anchor",href:"#mq-non-http-custom-hooks","aria-hidden":"true"},"#")],-1),_=e("p",null,[t("MQ Requests are executed using "),e("code",null,"ServiceController.ExecuteMessage"),t(" for invoking "),e("strong",null,"internal/trusted"),t(" Services such as "),e("a",{href:"/messaging.html"},"ServiceStack MQ"),t(":")],-1),b=e("ol",null,[e("li",null,[t("Any "),e("code",null,"Message"),t(),e("a",{href:"/request-and-response-filters.html#message-queue-endpoints"},"Global Request Filters"),t(" get executed")]),e("li",null,"Action Request Filters"),e("li",null,[t("Then your "),e("strong",null,"Service is executed"),t(" with the configured "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IServiceRunner.cs",target:"_blank",rel:"noopener noreferrer"},"IServiceRunner"),t(" and its "),e("strong",null,"OnBeforeExecute"),t(", "),e("strong",null,"OnAfterExecute"),t(" and "),e("strong",null,"HandleException"),t(" custom hooks are fired")]),e("li",null,"Action Response Filters"),e("li",null,[t("Then "),e("code",null,"Message"),t(),e("a",{href:"/request-and-response-filters.html#message-queue-endpoints"},"Global Response Filters")]),e("li",null,[t("Finally at the end of the Request "),e("code",null,"IAppHost.OnEndRequest"),t(" is fired")])],-1),k=e("h2",{id:"rpcgateway",tabindex:"-1"},[t("RpcGateway "),e("a",{class:"header-anchor",href:"#rpcgateway","aria-hidden":"true"},"#")],-1),S=e("p",null,[t("The "),e("code",null,"RpcGateway"),t(" provides a pure object model API for executing requests through the full HTTP Request pipeline including converting all Errors inc. short-circuited Request Pipeline requests into an Error ResponseStatus that's populated into the Response DTO's "),e("code",null,"ResponseStatus"),t(".")],-1),y=e("p",null,[t("The "),e("code",null,"RpcGateway"),t(" is available via the single "),e("code",null,"AppHost.RpcGateway"),t(" API:")],-1),x=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[e("span",{class:"token return-type class-name"},[t("Task"),e("span",{class:"token punctuation"},"<"),t("TResponse"),e("span",{class:"token punctuation"},">")]),t(),e("span",{class:"token generic-method"},[e("span",{class:"token function"},"ExecuteAsync"),e("span",{class:"token generic class-name"},[e("span",{class:"token punctuation"},"<"),t("TResponse"),e("span",{class:"token punctuation"},">")])]),e("span",{class:"token punctuation"},"("),e("span",{class:"token class-name"},[e("span",{class:"token keyword"},"object")]),t(" requestDto"),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token class-name"},"IRequest"),t(" req"),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),w=e("p",null,[t("Unlike MQ Requests which uses "),e("code",null,"ServiceController.ExecuteMessage"),t(" to execute "),e("strong",null,"internal/trusted"),t(" Services, the "),e("code",null,"RpcGateway"),t(" executes the full "),e("strong",null,"HTTP Request Pipeline"),t(" below:")],-1),A=e("ol",null,[e("li",null,[t("The "),e("code",null,"IAppHost.PreRequestFilters"),t(" gets executed before the Request DTO is deserialized")]),e("li",null,[t("Any "),e("a",{href:"/customize-http-responses.html#request-converters"},"Request Converters"),t(" are executed")]),e("li",null,[e("a",{href:"/filter-attributes.html"},"Request Filter Attributes"),t(" with "),e("strong",null,"Priority < 0"),t(" gets executed")]),e("li",null,[t("Then any "),e("a",{href:"/request-and-response-filters.html"},"Global Request Filters"),t(" get executed")]),e("li",null,[t("Followed by "),e("a",{href:"/filter-attributes.html"},"Request Filter Attributes"),t(" with "),e("strong",null,"Priority >= 0")]),e("li",null,"Action Request Filters"),e("li",null,[t("Then your "),e("strong",null,"Service is executed"),t(" with the configured "),e("a",{href:"/customize-http-responses.html#intercept-service-requests"},"Service Filters"),t(" and "),e("a",{href:"/customize-http-responses.html#using-a-custom-servicerunner"},"Service Runner"),t(),e("strong",null,"OnBeforeExecute"),t(", "),e("strong",null,"OnAfterExecute"),t(" and "),e("strong",null,"HandleException"),t(" custom hooks are fired")]),e("li",null,"Action Response Filters"),e("li",null,[t("Any "),e("a",{href:"/customize-http-responses.html#response-converters"},"Response Converters"),t(" are executed")]),e("li",null,[t("Followed by "),e("a",{href:"/filter-attributes.html"},"Response Filter Attributes"),t(" with "),e("strong",null,"Priority < 0")]),e("li",null,[t("Then "),e("a",{href:"/request-and-response-filters.html"},"Global Response Filters")]),e("li",null,[t("Followed by "),e("a",{href:"/filter-attributes.html"},"Response Filter Attributes"),t(" with "),e("strong",null,"Priority >= 0")]),e("li",null,[t("Finally at the end of the Request "),e("code",null,"IAppHost.OnEndRequest"),t(" and any "),e("code",null,"IAppHost.OnEndRequestCallbacks"),t(" are fired")])],-1),T=e("p",null,[t("Where requests are executed through the same global Request/Response filters that normal HTTP ServiceStack Services execute making them suitable for executing external "),e("strong",null,"untrusted"),t(" requests.")],-1),H=e("h2",{id:"implementation-architecture-diagram",tabindex:"-1"},[t("Implementation architecture diagram "),e("a",{class:"header-anchor",href:"#implementation-architecture-diagram","aria-hidden":"true"},"#")],-1),F=e("p",null,[t("The "),e("a",{href:"/architecture-overview.html"},"Implementation architecture diagram"),t(" shows a visual cue of the internal order of operations that happens in ServiceStack:")],-1),E=e("p",null,[e("img",{src:s,alt:"ServiceStack Overview"})],-1),I=e("p",null,[t("After the IHttpHandler is returned, it gets executed with the current "),e("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),t(" or HttpListener request wrapped in a common "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/ServiceHost/IHttpRequest.cs",target:"_blank",rel:"noopener noreferrer"},"IHttpRequest"),t(" instance.")],-1),P=e("p",null,[t("The implementation of "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/WebHost.Endpoints/RestHandler.cs",target:"_blank",rel:"noopener noreferrer"},"RestHandler"),t(" shows what happens during a typical ServiceStack request:")],-1),G=e("p",null,[e("img",{src:o,alt:"ServiceStack Request Pipeline"})],-1),O=[a,u,c,h,d,p,f,m,g,v,R,q,_,b,k,S,y,x,w,A,T,H,F,E,I,P,G];function C(z,N,B,M,D,Q){return l(),r("div",null,O)}var V=n(i,[["render",C]]);export{$ as __pageData,V as default};
