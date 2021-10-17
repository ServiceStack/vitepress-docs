import{_ as e,c as s,o as t,a as n,b as a,e as o}from"./app.14440598.js";const f='{"title":"Smart MVC Razor Pages","description":"","frontmatter":{"title":"Smart MVC Razor Pages","slug":"netcore-razor"},"headers":[{"level":3,"title":"RazorFormat Usage","slug":"razorformat-usage"},{"level":3,"title":"MVC Razor Pages","slug":"mvc-razor-pages"},{"level":2,"title":"Page Based Routing","slug":"page-based-routing"},{"level":2,"title":"Stand-alone Razor Views","slug":"stand-alone-razor-views"}],"relativePath":"netcore-razor.md","lastUpdated":1634495308426}',p={},c=n('<p>Driven by our preference for <a href="/api-first-development.html">API-first style of Web Development</a> we&#39;ve developed our own <a href="http://razor.netcore.io" target="_blank" rel="noopener noreferrer">ServiceStack Razor Pages</a> which lets you develop dynamic Web Pages using Razor to generate the HTML view of your existing Services - saving you from maintaining a parallel Controller implementation that&#39;s limited to just Web Pages. The benefits of an API-first approach is that you&#39;ll naturally get a well-defined servicified interface which can be consumed by all consumers including Web, Native Mobile and Desktop Apps whilst also enabling simplified B2B Integrations, Automation, Integration testing, etc.</p><h3 id="razorformat-usage" tabindex="-1">RazorFormat Usage <a class="header-anchor" href="#razorformat-usage" aria-hidden="true">#</a></h3><p>You can find .NET Core Razor features documented in <a href="http://razor.netcore.io" target="_blank" rel="noopener noreferrer">razor.netcore.io</a> which is maintained in our MVC NuGet package that can be installed with:</p>',3),r=a("div",{class:"package-reference-box"},[a("div",{class:"flex"},[a("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[a("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[a("p",null,[a("code",null,'<PackageReference Include="ServiceStack.Mvc" Version="5.*" />')]),o(`
`)])]),a("div",{class:"flex-shrink"},[a("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),a("b")])]),a("div",{class:"copy-text w-full text-right h-6"})],-1),i=n(`<p>Then to enable, register the <code>RazorFormat</code> plugin:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RazorFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="no-ceremony-dynamic-pages-without-controllers" tabindex="-1"><a href="http://razor.netcore.io/#no-ceremony" target="_blank" rel="noopener noreferrer">No Ceremony Dynamic Pages without Controllers</a> <a class="header-anchor" href="#no-ceremony-dynamic-pages-without-controllers" aria-hidden="true">#</a></h4><p>In a lot of cases where you&#39;re not developing Web Forms accepting User Input (e.g. generating a dynamic page using simple page-specific db queries) you won&#39;t need a Controller or Service at all. For this scenario we developed <a href="http://razor.netcore.io/#smart-views" target="_blank" rel="noopener noreferrer">Controller-less Razor Pages</a>, where if you specify a Typed <code>@model</code>, ServiceStack automatically populates it from the HTTP Request Params and when no <code>@model</code> exists ServiceStack instead populates the Request params in a <code>ViewDataDictionary</code> - in both cases letting you access any Request Params using <strong>@Model.Name</strong> notation.</p><p>Razor Pages also lets you layout your Razor Views in whatever structure you want under <code>/wwwroot</code> which it will let you call using <a href="http://razor.netcore.io/#no-ceremony" target="_blank" rel="noopener noreferrer">Pretty URLs by default</a> so you&#39;re not led into following the MVC-specific <code>{Controller}/{Action}</code> pattern or made to define Custom Routes.</p><p>.NET Core Razor Pages implementation also lets you structure your Razor Pages under <code>/Views/Pages</code> as an alternative to maintaining them under <code>/wwwroot</code>.</p><h3 id="mvc-razor-pages" tabindex="-1">MVC Razor Pages <a class="header-anchor" href="#mvc-razor-pages" aria-hidden="true">#</a></h3><p>Unfortunately in .NET Core we weren&#39;t able to reuse any of our existing <strong>ServiceStack.Razor</strong> implementation, but as we found the development model and end-user experience of Razor without MVC Controllers and Actions much more productive we investigated how it could best be implemented in .NET Core. Unfortunately .NET Core&#39;s Razor support is tightly coupled to MVC&#39;s implementation, but fortunately for us MVC also provided the necessary APIs where we could re-implement ServiceStack.Razor&#39;s user-facing features using just MVC Razor Views.</p><p>In many ways this turned out to be a blessing in disguise as by using MVC&#39;s implementation we also get access to new MVC .NET Core features and its surrounding ecosystem like Tag Helpers. MVC also takes care of live-reloading Razor Views behind-the-scenes so we&#39;re also able to get the same iterative development experience we&#39;re used to. By using MVC Views we also naturally get good tooling support which <a href="https://docs.servicestack.net/razor-notes.html" target="_blank" rel="noopener noreferrer">can be a dark art in .NET 4.5</a> which was tightly coupled to <strong>Web.config</strong> configuration and therefore poorly supported in Self-Hosting Console Apps.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Currently ReSharper&#39;s tooling has issues with Razor Views inheriting Custom base classes - which can be resolved by installing the latest EAP or disabling its <strong><a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Razor</strong> support</p></div><p>Overall we&#39;re ecstatic with the end-result, we retain our Controller-free development model whilst Razor under .NET Core executes noticeably quicker than <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> and significantly faster on Linux vs using Mono.</p><h2 id="page-based-routing" tabindex="-1">Page Based Routing <a class="header-anchor" href="#page-based-routing" aria-hidden="true">#</a></h2><p>Another value-added feature of ServiceStack.Razor is support for Page Based Routing in <a href="/netcore-razor.html">ASP.NET Core Razor</a> which lets you use a <code>_</code> prefix to declare a variable placeholder for dynamic routes defined solely by directory and file names.</p><p>With this feature we can use a <code>_id</code> directory name to declare an <code>id</code> variable place holder:</p><ul><li><a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-razor/contacts/_id/edit.cshtml" target="_blank" rel="noopener noreferrer">/contacts/_id/edit.cshtml</a></li></ul><p>This will let you navigate to the <code>edit.cshtml</code> page directly to edit a contact using the ideal &quot;pretty url&quot; we want:</p><ul><li><a href="http://validation.web-app.io/server-razor/contacts/1/edit" target="_blank" rel="noopener noreferrer">/contacts/1/edit</a></li></ul><p>Placeholders can be on both directory or file names, e.g:</p><ul><li><code>/contacts/edit/_id.cshtml</code> -&gt; <strong>/contacts/edit/1</strong></li></ul><p>Inside your Razor page you can fetch any populated placeholders from the <code>ViewBag</code>:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>ViewBag<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> contact <span class="token operator">=</span> Html<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetContact</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-razor/contacts/_id/edit.cshtml" target="_blank" rel="noopener noreferrer">/_id/edit.cshtml</a> uses to call the <code>GetContact</code> Service using the <a href="/service-gateway.html">Service Gateway</a>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>Html.Exec()</code> is a UX-friendly alternative to using <code>try/catch</code> boilerplate in Razor</p></div><h2 id="stand-alone-razor-views" tabindex="-1">Stand-alone Razor Views <a class="header-anchor" href="#stand-alone-razor-views" aria-hidden="true">#</a></h2><p>Rendering stand-alone HTML Views from Razor Pages can use the <code>GetViewPage()</code> API for retrieving View Pages (e.g. under <code>~/Views</code>) and the <code>GetContentPage()</code> API for retrieving Content Pages (e.g. under <code>/wwwroot</code>).</p><p>You can then use <code>RenderToHtmlAsync()</code> API to render the HTML output in a UTF-8 <code>ReadOnlyMemory&lt;char&gt;</code> which your Services can return directly for optimal efficiency, or if needed the rendered output can be converted to a <code>string</code> with <code>.ToString()</code>:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> razor <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>RazorFormat<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> view <span class="token operator">=</span> razor<span class="token punctuation">.</span><span class="token function">GetViewPage</span><span class="token punctuation">(</span><span class="token string">&quot;MyView&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>view <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> HttpError<span class="token punctuation">.</span><span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token string">&quot;Razor view not found: &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;MyView&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> ret <span class="token operator">=</span> <span class="token keyword">await</span> razor<span class="token punctuation">.</span><span class="token function">RenderToHtmlAsync</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyModel</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token named-parameter punctuation">layout</span><span class="token punctuation">:</span><span class="token string">&quot;_MyLayout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if Layout specified in \`.cshtml\` page it uses that</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>For even better efficiency the Razor View can render to the Response <code>OutputStream</code> directly with <code>WriteHtmlAsync()</code> to write the rendered UTF-8 bytes directly to the <code>OutputStream</code> instead of above where it converts it into a UTF-8 string before converting it back to UTF-8 bytes when ServiceStack writes it to the response:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">MyRequest</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> razor <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>RazorFormat<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> view <span class="token operator">=</span> razor<span class="token punctuation">.</span><span class="token function">GetViewPage</span><span class="token punctuation">(</span><span class="token string">&quot;MyView&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>view <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> HttpError<span class="token punctuation">.</span><span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token string">&quot;Razor view not found: &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;MyView&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> razor<span class="token punctuation">.</span><span class="token function">WriteHtmlAsync</span><span class="token punctuation">(</span>Response<span class="token punctuation">.</span>OutputStream<span class="token punctuation">,</span> view<span class="token punctuation">,</span> 
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyModel</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token named-parameter punctuation">layout</span><span class="token punctuation">:</span><span class="token string">&quot;_MyLayout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//if Layout specified in \`.cshtml\` page it uses that</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If needed you can also render the view with an anonymous Model Type, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">await</span> razor<span class="token punctuation">.</span><span class="token function">RenderToHtmlAsync</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Where the Razor View would need to specify it&#39;s using a <code>dynamic</code> model with:</p><div class="language-html"><pre><code>@model dynamic
</code></pre></div><h4 id="limitation" tabindex="-1">Limitation <a class="header-anchor" href="#limitation" aria-hidden="true">#</a></h4><p>One drawback of page based routing is that MVC is unable to resolve Page Based Routes when pre-compiled and will need to disabled with:</p><h4 id="net-core-3" tabindex="-1">.NET Core 3+ <a class="header-anchor" href="#net-core-3" aria-hidden="true">#</a></h4><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RazorCompileOnPublish</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RazorCompileOnPublish</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="net-core-2-x" tabindex="-1">.NET Core 2.x <a class="header-anchor" href="#net-core-2-x" aria-hidden="true">#</a></h4><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MvcRazorCompileOnPublish</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MvcRazorCompileOnPublish</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,39),l=[c,r,i];function u(d,k,h,g,m,w){return t(),s("div",null,l)}var v=e(p,[["render",u]]);export{f as __pageData,v as default};
