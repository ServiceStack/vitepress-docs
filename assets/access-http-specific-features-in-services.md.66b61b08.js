import{_ as s,c as n,o as e,a}from"./app.14440598.js";const m='{"title":"Access HTTP-specific Features in Services","description":"","frontmatter":{"slug":"access-http-specific-features-in-services","title":"Access HTTP-specific Features in Services"},"headers":[{"level":3,"title":"Request Filters","slug":"request-filters"},{"level":3,"title":"Communicating throughout the Request Pipeline","slug":"communicating-throughout-the-request-pipeline"},{"level":2,"title":"Advantages for having dependency-free services","slug":"advantages-for-having-dependency-free-services"},{"level":3,"title":"Injecting the IRequest into your Service","slug":"injecting-the-irequest-into-your-service"}],"relativePath":"access-http-specific-features-in-services.md","lastUpdated":1634495307606}',t={},p=a(`<p>ServiceStack is based on <a href="http://msdn.microsoft.com/en-us/library/system.web.ihttphandler.aspx" target="_blank" rel="noopener noreferrer">http handlers</a>, but ServiceStack provides a clean, dependency-free <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/IService.cs" target="_blank" rel="noopener noreferrer">IService</a> to implement your Web Services logic in. The philosophy behind this approach is that the less dependencies you have on your environment and its request context, the more testable and re-usable your services become.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The core <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IRequest.cs" target="_blank" rel="noopener noreferrer">IRequest</a> and <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IResponse.cs" target="_blank" rel="noopener noreferrer">IResponse</a> interfaces used in filters and Services</p></div><h3 id="request-filters" tabindex="-1">Request Filters <a class="header-anchor" href="#request-filters" aria-hidden="true">#</a></h3><p>The Request Filters are applied before the service gets called and accepts: (IRequest, IResponse, RequestDto) e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Add a request filter to check if the user has a session initialized</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>RequestFilters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>httpReq<span class="token punctuation">,</span> httpResponse<span class="token punctuation">,</span> requestDto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    httpReq<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;HttpHeader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    httpReq<span class="token punctuation">.</span>QueryString<span class="token punctuation">[</span><span class="token string">&quot;queryParam&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    httpReq<span class="token punctuation">.</span>Form<span class="token punctuation">[</span><span class="token string">&quot;htmlFormParam&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    httpReq<span class="token punctuation">.</span><span class="token function">GetParam</span><span class="token punctuation">(</span><span class="token string">&quot;aParamInAnyOfTheAbove&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    httpReq<span class="token punctuation">.</span>Cookies<span class="token punctuation">[</span><span class="token string">&quot;requestCookie&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    httpReq<span class="token punctuation">.</span>AbsoluteUri<span class="token punctuation">;</span>
    httpReq<span class="token punctuation">.</span>Items<span class="token punctuation">[</span><span class="token string">&quot;requestData&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Share data between Filters and Services&quot;</span><span class="token punctuation">;</span>

     <span class="token comment">//Access underlying Request in ASP.NET hosts</span>
    <span class="token class-name"><span class="token keyword">var</span></span> aspNetRequest <span class="token operator">=</span> httpResponse<span class="token punctuation">.</span>OriginalRequest <span class="token keyword">as</span> <span class="token class-name">HttpRequestBase</span><span class="token punctuation">;</span>
     <span class="token comment">//Access underlying Request in HttpListener hosts</span>
    <span class="token class-name"><span class="token keyword">var</span></span> listenerRequest <span class="token operator">=</span> httpResponse<span class="token punctuation">.</span>OriginalRequest <span class="token keyword">as</span> <span class="token class-name">HttpListenerRequest</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="services" tabindex="-1">Services <a class="header-anchor" href="#services" aria-hidden="true">#</a></h4><p>When inheriting from Service you can access them via <code>base.Request</code> and <code>base.Response</code>:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">value</span> <span class="token operator">=</span> <span class="token keyword">base</span><span class="token punctuation">.</span>Request<span class="token punctuation">.</span><span class="token function">GetParam</span><span class="token punctuation">(</span><span class="token string">&quot;aParamInAnyHeadersFormOrQueryString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span>Response<span class="token punctuation">.</span><span class="token function">AddHeader</span><span class="token punctuation">(</span><span class="token string">&quot;X-CustomHeader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Modify HTTP Response in Service&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="response-filters" tabindex="-1">Response Filters <a class="header-anchor" href="#response-filters" aria-hidden="true">#</a></h4><p>The Response Filters are applied after your service is called and accepts: (IRequest, IResponse, ResponseDto) e.g Add a response filter to add a &#39;Content-Disposition&#39; header so browsers treat it as a native .csv file:</p><div class="language-csharp"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>ResponseFilters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> responseDto<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>ResponseContentType <span class="token operator">==</span> ContentType<span class="token punctuation">.</span>Csv<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">AddHeader</span><span class="token punctuation">(</span>HttpHeaders<span class="token punctuation">.</span>ContentDisposition<span class="token punctuation">,</span>
            <span class="token interpolation-string"><span class="token string">$&quot;attachment;filename=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">req<span class="token punctuation">.</span>OperationName</span><span class="token punctuation">}</span></span><span class="token string">.csv&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//Access underlying Response in ASP.NET hosts</span>
    <span class="token class-name"><span class="token keyword">var</span></span> aspNetResponse <span class="token operator">=</span> httpResponse<span class="token punctuation">.</span>OriginalResponse <span class="token keyword">as</span> <span class="token class-name">HttpResponseBase</span><span class="token punctuation">;</span>
    <span class="token comment">//Access underlying Response in HttpListener hosts</span>
    <span class="token class-name"><span class="token keyword">var</span></span> listenerResponse <span class="token operator">=</span> httpResponse<span class="token punctuation">.</span>OriginalResponse <span class="token keyword">as</span> <span class="token class-name">HttpListenerResponse</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="communicating-throughout-the-request-pipeline" tabindex="-1">Communicating throughout the Request Pipeline <a class="header-anchor" href="#communicating-throughout-the-request-pipeline" aria-hidden="true">#</a></h3><p>The recommended way to pass additional metadata about the request is to use the <code>IRequest.Items</code> collection. E.g. you can change what Razor View template the response DTO gets rendered in with:</p><div class="language-csharp"><pre><code>httpReq<span class="token punctuation">.</span>Items<span class="token punctuation">[</span><span class="token string">&quot;Template&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;_CustomLayout&quot;</span><span class="token punctuation">;</span>

<span class="token range operator">..</span><span class="token punctuation">.</span>

<span class="token class-name"><span class="token keyword">var</span></span> preferredLayout <span class="token operator">=</span> httpReq<span class="token punctuation">.</span>Items<span class="token punctuation">[</span><span class="token string">&quot;Template&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="advantages-for-having-dependency-free-services" tabindex="-1">Advantages for having dependency-free services <a class="header-anchor" href="#advantages-for-having-dependency-free-services" aria-hidden="true">#</a></h2><p>If you don&#39;t need to access the HTTP specific features your services can be called by any non-HTTP endpoint, like from a <a href="/messaging.html">message queue</a>.</p><h3 id="injecting-the-irequest-into-your-service" tabindex="-1">Injecting the IRequest into your Service <a class="header-anchor" href="#injecting-the-irequest-into-your-service" aria-hidden="true">#</a></h3><p>Although working in a clean-room can be ideal from re-usability and testability point of view, you stand the chance of missing out a lot of the features present in HTTP.</p><p>Just like using built-in Funq IOC container, the way to tell ServiceStack to inject the request context is by implementing the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IRequiresRequest.cs" target="_blank" rel="noopener noreferrer">IRequiresRequest</a> interface which will get the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IRequest.cs" target="_blank" rel="noopener noreferrer">IRequest</a> injected before each request.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>ServiceStack&#39;s Convenient <code>Service</code> base class already implements <code>IRequiresRequest</code> which allows you to access the <code>IRequest</code> with <code>base.Request</code> and the HTTP Response with <code>base.Response</code></p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>To return a customized HTTP Response, e.g. set Response Cookies or Headers, return the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/HttpResult.cs" target="_blank" rel="noopener noreferrer">HttpResult</a> object</p></div>`,21),o=[p];function c(i,r,u,l,k,d){return e(),n("div",null,o)}var v=s(t,[["render",c]]);export{m as __pageData,v as default};
