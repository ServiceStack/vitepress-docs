import{_ as t,c as e,o as p,a as n,b as a,e as s}from"./app.14440598.js";const S='{"title":"Truly Empty ASP.NET Project Template","description":"","frontmatter":{"title":"Truly Empty ASP.NET Project Template","slug":"templates-aspnet-empty"},"headers":[{"level":3,"title":"The Minimal ASP.NET Template we wanted","slug":"the-minimal-asp-net-template-we-wanted"},{"level":3,"title":"Minimal but still Useful","slug":"minimal-but-still-useful"}],"relativePath":"templates-aspnet-empty.md","lastUpdated":1634495308450}',o={},c=n(`__VP_STATIC_START__<p><img src="http://i.imgur.com/ZCHoJFA.png" alt=""></p><p>Over the years it&#39;s becoming harder and harder to create an Empty <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> Template as it continues to accumulate more cruft, unused dlls, hidden behavior, hooks into external services and other unnecessary bloat. Most of the bloat added since <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> 2.0 for the most part has been unnecessary yet most .NET developers end up living with it because it&#39;s in the default template and they&#39;re unsure what each unknown dlls and default configuration does or what unintended behavior it will cause down the line if they remove it.</p><p>For ServiceStack and other lightweight Web Frameworks this added weight is completely unnecessary and can be safely removed. E.g. <a href="https://github.com/ServiceStackApps/Chat#super-lean-front-and-back" target="_blank" rel="noopener noreferrer">most ServiceStack Apps just needs a few ServiceStack .dlls</a> and a <a href="https://github.com/ServiceStack/ServiceStack/wiki/Create-your-first-webservice#register-servicestack-handler" target="_blank" rel="noopener noreferrer">single Web.config mapping</a> to tell <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> to route all calls to ServiceStack. Any other <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> config you would add in ServiceStack projects is just to get <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> to disable any conflicting default behavior, e.g:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appSettings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webPages:Enabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appSettings</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Tells <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> to stop hijacking Razor Views, required even when no <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Pages or MVC dlls are referenced. If using <a href="https://github.com/ServiceStack/ServiceStack/wiki/Server-Events" target="_blank" rel="noopener noreferrer">Server Events</a> you&#39;ll also need to disable dynamic compression:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>urlCompression</span> <span class="token attr-name">doStaticCompression</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">doDynamicCompression</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>To prevent <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> from buffering responses, required even when <code>HttpResponseBase.BufferOutput=false</code>.</p><p>Or to reduce unnecessary requests and speed up iteration times, you can disable Browser Link with:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appSettings</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vs:EnableBrowserLink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appSettings</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="the-minimal-asp-net-template-we-wanted" tabindex="-1">The Minimal <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Template we wanted <a class="header-anchor" href="#the-minimal-asp-net-template-we-wanted" aria-hidden="true">#</a></h3><p>We&#39;ve decided to reverse this trend and instead of focusing on what can be added, we&#39;re focusing on what can be removed whilst still remaining useful for most modern <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Apps.</p><p>With this goal we&#39;ve reduced the <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Empty Template down to a single project with the only external dependency being Roslyn:</p><p><img src="http://i.imgur.com/jKFga3J.png" alt=""></p><p>Most dlls have been removed and the <code>Web.config</code> just contains registration for Roslyn and config for disabling <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a>&#39;s unwanted default behavior:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appSettings</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vs:EnableBrowserLink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webPages:Enabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appSettings</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpRuntime</span> <span class="token attr-name">targetFramework</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>compilation</span> <span class="token attr-name">debug</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.codedom</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>compilers</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>compiler</span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c#;cs;csharp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">extension</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.cs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.CodeDom.Providers.DotNetCompilerPlatform.CSharpCodeProvider, Microsoft.CodeDom.Providers.DotNetCompilerPlatform, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35<span class="token punctuation">&quot;</span></span> <span class="token attr-name">warningLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">compilerOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/langversion:6 /nowarn:1659;1699;1701<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>compiler</span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vb;vbs;visualbasic;vbscript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">extension</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.vb<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.CodeDom.Providers.DotNetCompilerPlatform.VBCodeProvider, Microsoft.CodeDom.Providers.DotNetCompilerPlatform, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35<span class="token punctuation">&quot;</span></span> <span class="token attr-name">warningLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">compilerOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/langversion:14 /nowarn:41008 /define:_MYTYPE=\\<span class="token entity named-entity" title="&quot;">&amp;quot;</span>Web\\<span class="token entity named-entity" title="&quot;">&amp;quot;</span> /optionInfer+<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>compilers</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.codedom</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>The only <code>.cs</code> file is an Empty <code>Global.asax.cs</code> with an empty placeholder for running custom code on Startup:</p><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">WebApplication</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Global</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">System<span class="token punctuation">.</span>Web<span class="token punctuation">.</span>HttpApplication</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Application_Start</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>And that&#39;s it! <code>ASP.NET Empty</code> is a single project empty <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Application with no additional references which we wont be adding to in future other than any configuration necessary to disable default <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> behavior or enable C#&#39;s latest language features so you can safely use this template for creating small stand-alone <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Web Apps using lightweight Web Frameworks like ServiceStack or <a href="http://nancyfx.org/" target="_blank" rel="noopener noreferrer">Nancy</a>.</p><h3 id="minimal-but-still-useful" tabindex="-1">Minimal but still Useful <a class="header-anchor" href="#minimal-but-still-useful" aria-hidden="true">#</a></h3><p>You can then easily <a href="https://github.com/ServiceStack/ServiceStack/wiki/Create-your-first-webservice" target="_blank" rel="noopener noreferrer">Convert this empty template into a functional ServiceStack Web App</a> by:</p><ol><li>Installing <a href="https://github.com/ServiceStackApps/Todos/blob/master/src/Todos/packages.config" target="_blank" rel="noopener noreferrer">ServiceStack and any other dependency</a> you want to use, e.g:</li></ol>__VP_STATIC_END__`,21),l=a("div",{class:"package-reference-box"},[a("div",{class:"flex"},[a("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[a("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[a("p",null,[a("code",null,'<PackageReference Include="ServiceStack" Version="5.*" />')]),s(`
`)])]),a("div",{class:"flex-shrink"},[a("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),a("b")])]),a("div",{class:"copy-text w-full text-right h-6"})],-1),r=a("div",{class:"package-reference-box"},[a("div",{class:"flex"},[a("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[a("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[a("p",null,[a("code",null,'<PackageReference Include="ServiceStack.Redis" Version="5.*" />')]),s(`
`)])]),a("div",{class:"flex-shrink"},[a("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),a("b")])]),a("div",{class:"copy-text w-full text-right h-6"})],-1),u=n(`__VP_STATIC_START__<ol start="2"><li>Adding the <a href="https://github.com/ServiceStackApps/Todos/blob/fdcffd37d4ad49daa82b01b5876a9f308442db8c/src/Todos/Web.config#L34-L39" target="_blank" rel="noopener noreferrer">ASP.NET HTTP Handler mapping</a> to route all requests to ServiceStack:</li></ol><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validation</span> <span class="token attr-name">validateIntegratedModeConfiguration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>handlers</span><span class="token punctuation">&gt;</span></span>
	    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.Factory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">preCondition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>integratedMode<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resourceType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Unspecified<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowPathInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>handlers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="3"><li>Adding your <a href="https://github.com/ServiceStackApps/Todos/blob/master/src/Todos/Global.asax.cs" target="_blank" rel="noopener noreferrer">ServiceStack AppHost and Services in Global.asax.cs</a>.</li></ol><p>That&#39;s all that&#39;s needed to create a functional Web App, which in this case creates a <a href="https://github.com/ServiceStackApps/Todos/" target="_blank" rel="noopener noreferrer">Backbone TODO compatible REST API with a Redis back-end</a> which can power all <a href="http://todomvc.com" target="_blank" rel="noopener noreferrer">todomvc.com</a> Single Page Apps.</p>__VP_STATIC_END__`,4),i=[c,l,r,u];function k(d,g,m,h,f,v){return p(),e("div",null,i)}var y=t(o,[["render",k]]);export{S as __pageData,y as default};
