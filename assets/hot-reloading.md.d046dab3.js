import{_ as e,c as t,o,a as s,b as a,e as n}from"./app.14440598.js";const w='{"title":"Hot Reloading","description":"","frontmatter":{"slug":"hot-reloading","title":"Hot Reloading"},"headers":[{"level":3,"title":"Hot Reload Static Files","slug":"hot-reload-static-files"}],"relativePath":"hot-reloading.md","lastUpdated":1634495307618}',p={},c=s(`<p>ServiceStack includes 2 Hot Reloading solutions to automatically detect file changes and reload your page on save.</p><h3 id="hot-reload-static-files" tabindex="-1">Hot Reload Static Files <a class="header-anchor" href="#hot-reload-static-files" aria-hidden="true">#</a></h3><p>If you&#39;re not developing your Website with <code>#Script</code> or are developing a Single Page App where it&#39;s mostly contained in static files you can use the <code>HotReloadFeature</code> plugin which has added support for monitoring multiple File Search Patterns and can now be configured to monitor a different VFS provider (defaults to WebRoot).</p><p>The new &quot;lite&quot; projects utilize both these features for its hot reloading support:</p><div class="language-csharp"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>Config<span class="token punctuation">.</span>DebugMode<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HotReloadFeature</span> <span class="token punctuation">{</span>
        DefaultPattern <span class="token operator">=</span> <span class="token string">&quot;*.html;*.js;*.css&quot;</span><span class="token punctuation">,</span>
        VirtualFiles <span class="token operator">=</span> VirtualFiles <span class="token comment">// Monitor ContentRoot to detect changes in /src</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Which is enabled during development in <code>_layout.html</code> by including <code>/js/hot-fileloader.js</code>:</p>`,6),l=a("div",null,[a("div",{class:"language-html"},[a("pre",{"v-pre":""},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("i")]),n(),a("span",{class:"token attr-name"},"hidden"),a("span",{class:"token punctuation"},">")]),n("{{ '/js/hot-fileloader.js' |> ifDebugIncludeScript }}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("i")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])])],-1),i=s(`<p>Or if you&#39;re not using <a href="https://sharpscript.net/docs/sharp-pages" target="_blank" rel="noopener noreferrer">#Script Pages</a> you can add the script tag:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/js/hot-fileloader.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="hot-reload-sharp-pages" tabindex="-1">Hot Reload Sharp Pages <a class="header-anchor" href="#hot-reload-sharp-pages" aria-hidden="true">#</a></h4><p>The <a href="https://sharpscript.net/docs/hot-reloading" target="_blank" rel="noopener noreferrer">Hot Reloading</a> support in Sharp Pages enables the <code>HotReloadFilesService</code> when registering the <code>SharpPagesFeature</code>, e.g:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SharpPagesFeature</span> <span class="token punctuation">{</span>
    EnableHotReload <span class="token operator">=</span> Config<span class="token punctuation">.</span>DebugMode <span class="token comment">//default</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>This is enabled in your pages with this snippet which renders the hot reload client script during development:</p>`,6),r=a("div",null,[a("div",{class:"language-html"},[a("pre",{"v-pre":""},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("i")]),n(),a("span",{class:"token attr-name"},"hidden"),a("span",{class:"token punctuation"},">")]),n("{{ '/js/hot-loader.js' |> ifDebugIncludeScript }}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("i")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])])],-1),d=s('<p>Which starts a long poll that calls the smart <code>HotReloadFilesService</code> which recursively inspects the current tokenized <a href="https://sharpscript.net/docs/sharp-pages" target="_blank" rel="noopener noreferrer">Sharp Pages</a> to find if it or any dependent layouts, partials or file includes have changed.</p><p>Sharp Page&#39;s Hot Reload feature now also monitors <strong>Paged Based Routing Pages</strong> and <strong>View Pages</strong>.</p><p>If enabled and working correctly hot reloading should allow you to view instant UI changes on save:</p><p><a href="https://www.vuedesktop.com" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-livereload.gif" alt=""></a></p>',4),u=[c,l,i,r,d];function h(g,k,_,f,v,m){return o(),t("div",null,u)}var b=e(p,[["render",h]]);export{w as __pageData,b as default};
