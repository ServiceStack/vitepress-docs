import{_ as t,c as s,o as n,a,b as e,e as r}from"./app.14440598.js";const S='{"title":"v4.0.30 Release Notes","description":"","frontmatter":{"title":"v4.0.30 Release Notes","slug":"v4-0-30"},"headers":[{"level":2,"title":"Add ServiceStack Reference","slug":"add-servicestack-reference"},{"level":3,"title":"Example Usage","slug":"example-usage"},{"level":3,"title":"Consuming Services from Mobile Clients now Easier than Ever!","slug":"consuming-services-from-mobile-clients-now-easier-than-ever"},{"level":3,"title":"Advantages over WCF","slug":"advantages-over-wcf"},{"level":3,"title":"Available from v4.0.30+ ServiceStack Projects","slug":"available-from-v4-0-30-servicestack-projects"},{"level":3,"title":"Upgrade ServiceStackVS","slug":"upgrade-servicestackvs"},{"level":2,"title":"Improved PCL Story","slug":"improved-pcl-story"},{"level":3,"title":"New ServiceStack + AngularJS Example - StackApis","slug":"new-servicestack-angularjs-example-stackapis"},{"level":3,"title":"StackApis AutoQuery Service","slug":"stackapis-autoquery-service"},{"level":2,"title":"Swagger Support","slug":"swagger-support"},{"level":3,"title":"All static resources are now embedded","slug":"all-static-resources-are-now-embedded"},{"level":3,"title":"New Bootstrap theme for Swagger","slug":"new-bootstrap-theme-for-swagger"},{"level":2,"title":"Authentication","slug":"authentication"},{"level":3,"title":"Unique Emails","slug":"unique-emails"},{"level":3,"title":"CustomValidationFilter","slug":"customvalidationfilter"},{"level":2,"title":"Breaking Changes","slug":"breaking-changes"},{"level":3,"title":"Upgrade all ServiceStack NuGet packages","slug":"upgrade-all-servicestack-nuget-packages"},{"level":3,"title":"TypeDescriptor support removed","slug":"typedescriptor-support-removed"}],"relativePath":"releases/v4.0.30.md","lastUpdated":1634495308430}',o={},i=a(`__VP_STATIC_START__<h2 id="add-servicestack-reference" tabindex="-1"><a href="/add-servicestack-reference.html">Add ServiceStack Reference</a> <a class="header-anchor" href="#add-servicestack-reference" aria-hidden="true">#</a></h2><p>We have an exciting feature in this release showcasing our initial support for generating Native Types from client <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> projects using <a href="/create-your-first-webservice.html#step-1-download-and-install-servicestackvs">ServiceStackVS</a> new <strong>Add ServiceStack Reference</strong> feature. It provides a simpler, cleaner and more versatile alternative to WCF&#39;s <strong>Add Service Reference</strong> in <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>.</p><p>Our goal with Native Types is to provide an alternative for sharing DTO dlls, that can enable a better dev workflow for external clients who are now able to generate (and update) Typed APIs for your Services from a remote url - reducing the burden and effort required to consume ServiceStack Services whilst benefiting from clients native language strong-typing feedback.</p><p>This is just the beginning, whilst C# is the first language supported it lays the groundwork and signals our approach on adding support for typed API&#39;s in other languages in future. Add a <a href="http://servicestack.uservoice.com/forums/176786-feature-requests" target="_blank" rel="noopener noreferrer">feature request for your favorite language</a> to prioritize support for it sooner!</p><h3 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-hidden="true">#</a></h3><p>The easiest way to Add a ServiceStack reference to your project is to right-click on your project to bring up <a href="/create-your-first-webservice.html">ServiceStackVS&#39;s</a> <code>Add ServiceStack Reference</code> context-menu item. This opens a dialog where you can add the url of the ServiceStack instance you want to typed DTO&#39;s for, as well as the name of the T4 template that&#39;s added to your project.</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/add-service-ref-flow.png" alt="Add ServiceStack Reference"></p><p>After clicking OK, the servers DTO&#39;s and <a href="https://www.nuget.org/packages/ServiceStack.Client" target="_blank" rel="noopener noreferrer">ServiceStack.Client</a> NuGet package are added to the project, providing an instant typed API:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/call-service.png" alt="Calling ServiceStack Service"></p><h3 id="consuming-services-from-mobile-clients-now-easier-than-ever" tabindex="-1">Consuming Services from Mobile Clients now Easier than Ever! <a class="header-anchor" href="#consuming-services-from-mobile-clients-now-easier-than-ever" aria-hidden="true">#</a></h3><p>In addition with our improved PCL Support in this release, it&#39;s never been easier to create an instant Typed API for a remote Service consumable from any Xamarin.Android, Xamarin.iOS, Silverlgiht 5, Windows Store or .full NET4.0+ platforms - Here&#39;s a quick demo of it working in Android:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/ServiceStackVS/master/Images/android-add-ref-demo.gif" alt="Android Add ServiceStack Reference"></p><h3 id="advantages-over-wcf" tabindex="-1">Advantages over WCF <a class="header-anchor" href="#advantages-over-wcf" aria-hidden="true">#</a></h3><ul><li><strong>Simple</strong> Uses a small T4 template to save generated POCO Types. Updating as easy as re-running T4 template</li><li><strong>Versatile</strong> Clean DTOs works in all JSON, XML, JSV, MsgPack and ProtoBuf <a href="/csharp-client.html#built-in-clients">generic service clients</a></li><li><strong>Reusable</strong> Generated DTO&#39;s are not coupled to any endpoint or format. Defaults are both partial and virtual for maximum re-use</li><li><strong>Resilient</strong> Messaging-based services offer a number of <a href="/advantages-of-message-based-web-services.html">advantages over RPC Services</a></li><li><strong>Flexible</strong> DTO generation is customizable, Server and Clients can override built-in defaults</li><li><strong>Integrated</strong> Rich Service metadata annotated on DTO&#39;s, <a href="/auth-restricting-services.html">Internal Services</a> are excluded when accessed externally</li></ul><h3 id="available-from-v4-0-30-servicestack-projects" tabindex="-1">Available from v4.0.30+ ServiceStack Projects <a class="header-anchor" href="#available-from-v4-0-30-servicestack-projects" aria-hidden="true">#</a></h3><p>Native Types is now available by default on all <strong>v4.0.30+</strong> ServiceStack projects. It can be disabled by removing the <code>NativeTypesFeature</code> plugin with:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">RemoveAll</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x <span class="token keyword">is</span> <span class="token class-name">NativeTypesFeature</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>For detailed info on how NativeTypesFeature works, its different customization options and improvements over WCF, checkout the <a href="/add-servicestack-reference.html">Add ServiceStack Reference</a> docs.</p><h3 id="upgrade-servicestackvs" tabindex="-1"><a href="/create-your-first-webservice.html">Upgrade ServiceStackVS</a> <a class="header-anchor" href="#upgrade-servicestackvs" aria-hidden="true">#</a></h3><p>To take advantage of this feature <a href="/create-your-first-webservice.html">Upgrade or Install ServiceStackVS</a> <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> Extension. If you already have <strong>ServiceStackVS</strong> installed, uninstall it first from <code>Tools -&gt; Extensions and Updates... -&gt; ServiceStackVS -&gt; Uninstall</code>.</p><h2 id="improved-pcl-story" tabindex="-1">Improved PCL Story <a class="header-anchor" href="#improved-pcl-story" aria-hidden="true">#</a></h2><p>Our <a href="https://github.com/ServiceStackApps/HelloMobile" target="_blank" rel="noopener noreferrer">PCL Story</a> has been greatly improved in this release now that <code>ServiceStack.Interfaces</code> has been converted into a pure PCL dll. This now lets you maintain your server DTO&#39;s in a pure PCL DLL that can be shared as-is on most supported platforms (Profile136):</p><ul><li>Xamarin.iOS</li><li>Xamarin.Android</li><li>Windows Store</li><li>WPF app using .NET 4.0 PCL support</li><li>Silverlight 5</li></ul><p>Whilst our impl-free <code>ServiceStack.Interfaces.dll</code> was able to be converted into a pure PCL dll, our Client libraries have instead resorted to using <a href="http://log.paulbetts.org/the-bait-and-switch-pcl-trick/" target="_blank" rel="noopener noreferrer">PCL&#39;s Bait and Switch technique</a> to provide platform-specific extensions and optimizations. The one outlier is Silverlight5 which remains a custom (non-PCL) SL5 build, that whilst can now share DTO&#39;s, still can&#39;t support projects with dependencies on the PCL-compatible version of <strong>ServiceStack.Client</strong>.</p><p>As of this release all PCL, platform and Silverlight dlls are now merged into the main <a href="https://www.nuget.org/packages/ServiceStack.Client" target="_blank" rel="noopener noreferrer">ServiceStack.Client</a> NuGet packages so now any clients need only reference the main Client NuGet package:</p>__VP_STATIC_END__`,25),c=e("div",{class:"package-reference-box"},[e("div",{class:"flex"},[e("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[e("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[e("p",null,[e("code",null,'<PackageReference Include="ServiceStack.Client" Version="5.*" />')]),r(`
`)])]),e("div",{class:"flex-shrink"},[e("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),e("b")])]),e("div",{class:"copy-text w-full text-right h-6"})],-1),p=a(`__VP_STATIC_START__<p>The <a href="https://github.com/ServiceStackApps/HelloMobile" target="_blank" rel="noopener noreferrer">Hello PCL</a> project now contains examples of reusing a Server DTO project with all supported client platforms as well as showing re-use of a high-level <code>SharedGateway</code> which referenes <code>ServiceStack.Client</code> that&#39;s shared between all PCL-compatible platforms.</p><h3 id="new-servicestack-angularjs-example-stackapis" tabindex="-1">New ServiceStack + AngularJS Example - <a href="http://stackapis.netcore.io" target="_blank" rel="noopener noreferrer">StackApis</a> <a class="header-anchor" href="#new-servicestack-angularjs-example-stackapis" aria-hidden="true">#</a></h3><p><a href="http://stackapis.netcore.io/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/stackapis-home.png" alt="StackApis Home"></a></p><p><a href="http://stackapis.netcore.io/" target="_blank" rel="noopener noreferrer">StackApis</a> is a simple new ServiceStack + AngularJS example project created with <a href="https://github.com/ServiceStack/ServiceStackVS#servicestackvs" target="_blank" rel="noopener noreferrer">ServiceStackVS AngularJS Template</a> showcasing how quick and easy it is to create responsive feature-rich Single Page Apps with AngularJS and <a href="/autoquery.html">AutoQuery</a>. StackApis is powered by a Sqlite database containing <a href="https://github.com/ServiceStackApps/StackApis/blob/master/src/StackApis.Tests/UnitTests.cs#L67" target="_blank" rel="noopener noreferrer">snapshot of ServiceStack questions from StackOverflow APIs</a> that&#39;s <a href="https://github.com/ServiceStackApps/StackApis/blob/master/src/StackApis.Tests/UnitTests.cs#L119-L124" target="_blank" rel="noopener noreferrer">persisted in an sqlite database</a> using <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/" target="_blank" rel="noopener noreferrer">OrmLite</a>.</p><h3 id="stackapis-autoquery-service" tabindex="-1">StackApis AutoQuery Service <a class="header-anchor" href="#stackapis-autoquery-service" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/ServiceStackApps/StackApis/blob/master/src/StackApis/default.cshtml" target="_blank" rel="noopener noreferrer">Home Page</a> is built with less than <strong>&lt;50 Lines</strong> of JavaScript which thanks to <a href="/autoquery.html">AutoQuery</a> routes all requests to the single AutoQuery Service below:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/questions&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StackOverflowQuery</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">QueryBase<span class="token punctuation">&lt;</span>Question<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> ScoreGreaterThan <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>Not even <code>ScoreGreaterThan</code> is a required property, it&#39;s just an example of a <a href="/autoquery.html#advantages-of-well-defined-service-contracts">formalized convention</a> enabling queries from Typed Service Clients.</p></blockquote><p>Feel free to play around with a deployed version of StackApis at <a href="http://stackapis.netcore.io/" target="_blank" rel="noopener noreferrer">stackapis.netcore.io</a>.</p><p>You can also use the public <code>http://stackapis.netcore.io/</code> url to test out ServiceStack&#39;s new <strong>Add ServiceStack Reference</strong> feature \u{1F603}</p><h2 id="swagger-support" tabindex="-1"><a href="/swagger-api.html">Swagger Support</a> <a class="header-anchor" href="#swagger-support" aria-hidden="true">#</a></h2><h3 id="all-static-resources-are-now-embedded" tabindex="-1">All static resources are now embedded <a class="header-anchor" href="#all-static-resources-are-now-embedded" aria-hidden="true">#</a></h3><p>ServiceStack&#39;s <a href="/swagger-api.html">Swagger Support</a> received some welcomed enhancements thanks to <a href="https://github.com/tvjames" target="_blank" rel="noopener noreferrer">@tvjames</a> and <a href="https://github.com/tyst" target="_blank" rel="noopener noreferrer">@tyst</a>&#39;s efforts which now sees all of Swagger&#39;s static resources embedded into a single <code>ServiceStack.Api.Swagger.dll</code>, taking advantage of the Virtual File Systems <a href="https://github.com/ServiceStack/ServiceStack.Gap#creating-an-embedded-servicestack-app" target="_blank" rel="noopener noreferrer">transparent support for Embedded Resources</a>, making it easier to manage and upgrade Swagger as a self-contained unit.</p><h3 id="new-bootstrap-theme-for-swagger" tabindex="-1">New Bootstrap theme for Swagger <a class="header-anchor" href="#new-bootstrap-theme-for-swagger" aria-hidden="true">#</a></h3><p>A new attractive Bootstrap Theme was also added to Swagger, available from <a href="http://stackapis.netcore.io/swagger-ui-bootstrap/" target="_blank" rel="noopener noreferrer">/swagger-ui-bootstrap/</a>:</p><p><a href="http://stackapis.netcore.io/swagger-ui-bootstrap/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/stackapis-swagger-bootstrap.png" alt="Swagger Bootstrap"></a></p><p>You can change the <a href="/metadata-page.html#adding-links-to-metadata-page">metadata page plugin link</a> to point to this new theme with:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SwaggerFeature</span> <span class="token punctuation">{</span>
    UseBootstrapTheme <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
    LogoUrl <span class="token operator">=</span> <span class="token string">&quot;your-logo.png&quot;</span> <span class="token comment">//optional use your own logo</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Swagger was also been updated to the latest version.</p><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h2><h3 id="unique-emails" tabindex="-1">Unique Emails <a class="header-anchor" href="#unique-emails" aria-hidden="true">#</a></h3><p>ServiceStack now verifies emails returned by OAuth providers are now unique where if there&#39;s already another UserAuth with an existing email, authentication will fail and redirect (for HTML/Web Browser requests) with the Error token:</p><pre><code>/#f=EmailAlreadyExists
</code></pre><p>This behavior is in-line with ServiceStack&#39;s other AuthProviders. If this change causes any issues, it can be disabled with:</p><div class="language-csharp"><pre><code>AuthProvider<span class="token punctuation">.</span>ValidateUniqueEmails <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>This doesn&#39;t apply to Users who login with multiple OAuth Providers as there accounts automatically get merged into a single UserAuth entity.</p></blockquote><h3 id="customvalidationfilter" tabindex="-1">CustomValidationFilter <a class="header-anchor" href="#customvalidationfilter" aria-hidden="true">#</a></h3><p>A new <code>CustomValidationFilter</code> was added to all AuthProviders which can be used to return a <code>IHttpResult</code> to control what error response is returned, e.g:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">AuthFeature</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CustomUserSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IAuthProvider<span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FacebookAuthProvider</span><span class="token punctuation">(</span>appSettings<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            CustomValidationFilter <span class="token operator">=</span> authCtx <span class="token operator">=&gt;</span> 
                <span class="token function">CustomIsValid</span><span class="token punctuation">(</span>authCtx<span class="token punctuation">)</span> 
                    <span class="token punctuation">?</span> authCtx<span class="token punctuation">.</span>Service<span class="token punctuation">.</span><span class="token function">Redirect</span><span class="token punctuation">(</span>authCtx<span class="token punctuation">.</span>Session<span class="token punctuation">.</span>ReferrerUrl
                        <span class="token punctuation">.</span><span class="token function">AddHashParam</span><span class="token punctuation">(</span><span class="token string">&quot;f&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;CustomErrorCode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="breaking-changes" tabindex="-1">Breaking Changes <a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a></h2><h3 id="upgrade-all-servicestack-nuget-packages" tabindex="-1">Upgrade all ServiceStack NuGet packages <a class="header-anchor" href="#upgrade-all-servicestack-nuget-packages" aria-hidden="true">#</a></h3><p>The primary breaking change was converting ServiceStack&#39;s core <code>ServiceStack.Interfaces.dll</code> into a pure portable class library which as it&#39;s incompatible with the previous non-PCL ServiceStack.Interfaces.dll requires that all NuGet dependenices (inc. transitive dependencies) be upgraded to <strong>v4.0.30</strong>. The version number was bumped to <strong>v4.0.30</strong> specifically to stress that it&#39;s incompatible with any <strong>&lt;v4.0.2x</strong> before it. The only other issue we ran into after upgrading most of ServiceStack projects is on projects that reference or mock Interfaces that reference a <code>System.Net.*</code> Type like <code>HttpWebResponse</code> in <code>IServiceClient</code> will now require an explicit reference to <code>System.Net</code> for the C# compiler to consider them to be of the same type.</p><p>In summary if you have a build error when upgrading v4.0.30 then:</p><ul><li>Delete any older v4.0.2x SS packages from NuGet /packages</li><li>Reference <code>System.Net</code> on projects that still have build errors</li></ul><p>More details about these issues is available on the <a href="https://plus.google.com/+DemisBellot/posts/SyVJR419sdE" target="_blank" rel="noopener noreferrer">announcement post</a>.</p><h3 id="typedescriptor-support-removed" tabindex="-1">TypeDescriptor support removed <a class="header-anchor" href="#typedescriptor-support-removed" aria-hidden="true">#</a></h3><p>In order to convert ServiceStack.Interfaces into a portable class library we&#39;ve had to remove support for an undocumented feature allowing adding of Attributes via .NET&#39;s TypeDescriptor. If you were using TypeDescriptor, you can switch to adding attributes dynamically using <a href="https://github.com/ServiceStack/ServiceStack.Text/blob/master/tests/ServiceStack.Text.Tests/AttributeTests.cs" target="_blank" rel="noopener noreferrer">ServiceStack&#39;s Reflection APIs</a>.</p>__VP_STATIC_END__`,37),l=[i,c,p];function u(d,h,g,k,v,f){return n(),s("div",null,l)}var b=t(o,[["render",u]]);export{S as __pageData,b as default};
