import{_ as n,c as s,o as a,a as e}from"./app.14440598.js";const h='{"title":"v4.0.10 Release Notes","description":"","frontmatter":{"title":"v4.0.10 Release Notes","slug":"v4-0-10"},"headers":[{"level":2,"title":"Debug Links","slug":"debug-links"},{"level":2,"title":"Auto Mapping","slug":"auto-mapping"},{"level":2,"title":"Async Support","slug":"async-support"},{"level":2,"title":"NuGet packages specify min versions","slug":"nuget-packages-specify-min-versions"}],"relativePath":"releases/v4.0.10.md","lastUpdated":1634495308430}',t={},o=e(`__VP_STATIC_START__<h2 id="debug-links" tabindex="-1">Debug Links <a class="header-anchor" href="#debug-links" aria-hidden="true">#</a></h2><p>To provide better visibility to the hidden functionality in ServiceStack we&#39;ve added <strong>Debug Info</strong> links section to the <code>/metadata</code> page which add links to any Plugins with Web UI&#39;s, e.g:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/debug-links.png" alt="Debug Info Links"></p><p>The Debug Links section is only available in <strong>DebugMode</strong> (recap: set by default in Debug builds or explicitly with <code>Config.DebugMode = true</code>). In addition, users with the <strong>Admin</strong> role (or if <code>Config.AdminAuthSecret</code> is enabled) can also view the debug Plugins UI&#39;s in production.</p><p>You can add links to your own <a href="/plugins.html">Plugins</a> in the metadata pages with:</p><div class="language-csharp"><pre><code>appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MetadataFeature<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddPluginLink</span><span class="token punctuation">(</span><span class="token string">&quot;swagger-ui/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Swagger UI&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
appHost<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MetadataFeature<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AddDebugLink</span><span class="token punctuation">(</span><span class="token string">&quot;?debug=requestinfo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Request Info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>AddPluginLink</code> adds links under the <strong>Plugin Links</strong> section and should be used if your plugin is publicly visible, otherwise use <code>AddDebugLink</code> for plugins only available during debugging or development.</p><h2 id="auto-mapping" tabindex="-1"><a href="/auto-mapping.html">Auto Mapping</a> <a class="header-anchor" href="#auto-mapping" aria-hidden="true">#</a></h2><h4 id="improved-support-for-non-poco-types" tabindex="-1">Improved Support for non-POCO types <a class="header-anchor" href="#improved-support-for-non-poco-types" aria-hidden="true">#</a></h4><p>Previously you could only map between top-level POCO models, now you can map between scalars and collections directly, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> intVal <span class="token operator">=</span> <span class="token number">2L</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertTo</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> decimalVal <span class="token operator">=</span> <span class="token number">4.4d</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertTo</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">decimal</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> usersSet <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertTo</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HashSet<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="improved-auto-mapping-performance" tabindex="-1">Improved Auto-Mapping Performance <a class="header-anchor" href="#improved-auto-mapping-performance" aria-hidden="true">#</a></h4><p>A better caching strategy is used for conversions paths and now mapping fields utilize cached Delegate expressions so POCO&#39;s with fields Map much faster.</p><h2 id="async-support" tabindex="-1">Async Support <a class="header-anchor" href="#async-support" aria-hidden="true">#</a></h2><h4 id="consistent-handling-of-async-responses" tabindex="-1">Consistent handling of Async Responses <a class="header-anchor" href="#consistent-handling-of-async-responses" aria-hidden="true">#</a></h4><p>Previously Response Filters were called with the Task response returned from async services for the Response DTO, e.g. <code>Task&lt;TResponse&gt;</code>. The response filters are now chained to the task so Response filters see the same native <code>TResponse</code> DTO that are passed in from Sync services.</p><h4 id="async-services-can-now-be-used-in-mq-servers" tabindex="-1">Async services can now be used in MQ Servers <a class="header-anchor" href="#async-services-can-now-be-used-in-mq-servers" aria-hidden="true">#</a></h4><p>Async responses now block for results which is in-line with sync Services behavior where Message Queue Handlers only process one message at a time for each worker thread assigned to the Request type.</p><h2 id="nuget-packages-specify-min-versions" tabindex="-1">NuGet packages specify min versions <a class="header-anchor" href="#nuget-packages-specify-min-versions" aria-hidden="true">#</a></h2><p>To ensure NuGet pulls the latest dependencies when installing any ServiceStack package, a minimum version is now specified for all NuGet package dependencies. This <a href="http://stackoverflow.com/a/21670294/85785" target="_blank" rel="noopener noreferrer">should alleviate dependency issues</a> people are seeing from NuGet&#39;s default behavior of pulling down old packages.</p>__VP_STATIC_END__`,20),p=[o];function c(i,r,l,u,d,k){return a(),s("div",null,p)}var m=n(t,[["render",c]]);export{h as __pageData,m as default};
