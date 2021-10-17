import{_ as n,c as s,o as a,a as t}from"./app.14440598.js";const d='{"title":"Multiple Sitemap Indexes","description":"","frontmatter":{"slug":"sitemaps"},"headers":[{"level":3,"title":"Multiple Sitemap Indexes","slug":"multiple-sitemap-indexes"}],"relativePath":"sitemaps.md","lastUpdated":1634495308450}',p={},e=t(`<p>A good SEO technique for helping Search Engines index your website is to tell them where the can find all your content using <a href="https://support.google.com/webmasters/answer/156184?hl=en" target="_blank" rel="noopener noreferrer">Sitemaps</a>. Sitemaps are basic xml documents but they can be tedious to maintain manually, more so for database-driven dynamic websites.</p><p>The <code>SitemapFeature</code> reduces the effort required by letting you add Site Urls to a .NET collection of <code>SitemapUrl</code> POCO&#39;s. In its most basic usage you can populate a single Sitemap with urls of your Website Routes, e.g:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SitemapFeature</span>
<span class="token punctuation">{</span>
    UrlSet <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TechnologyStack<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ConvertAll</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SitemapUrl</span> <span class="token punctuation">{</span>
        Location <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ClientTechnologyStack</span> <span class="token punctuation">{</span> Slug <span class="token operator">=</span> x<span class="token punctuation">.</span>Slug <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">ToAbsoluteUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        LastModified <span class="token operator">=</span> x<span class="token punctuation">.</span>LastModified<span class="token punctuation">,</span>
        ChangeFrequency <span class="token operator">=</span> SitemapFrequency<span class="token punctuation">.</span>Weekly<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The above example uses <a href="https://github.com/ServiceStack/ServiceStack.OrmLite" target="_blank" rel="noopener noreferrer">OrmLite</a> to generate a collection of <code>SitemapUrl</code> entries containing Absolute Urls for all <a href="https://techstacks.io/tech" target="_blank" rel="noopener noreferrer">techstacks.io Technology Pages</a>. This is another good showcase for the <a href="/routing.html#reverse-routing">Reverse Routing available on Request DTO&#39;s</a> which provides a Typed API for generating Urls without any additional effort.</p><p>Once populated your sitemap will be available at <code>/sitemap.xml</code> which looks like:</p><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>urlset</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.sitemaps.org/schemas/sitemap/0.9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loc</span><span class="token punctuation">&gt;</span></span>https://techstacks.io/the-guardian<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>loc</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastmod</span><span class="token punctuation">&gt;</span></span>2015-01-14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastmod</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>changefreq</span><span class="token punctuation">&gt;</span></span>weekly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>changefreq</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>urlset</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Which you can checkout in this <a href="https://techstacks.io/sitemap-techstacks.xml" target="_blank" rel="noopener noreferrer">live Sitemap example</a>.</p><h3 id="multiple-sitemap-indexes" tabindex="-1">Multiple Sitemap Indexes <a class="header-anchor" href="#multiple-sitemap-indexes" aria-hidden="true">#</a></h3><p>For larger websites, Sitemaps also support multiple <a href="https://support.google.com/webmasters/answer/75712?hl=en" target="_blank" rel="noopener noreferrer">Sitemap indexes</a> which lets you split sitemap urls across multiple files. To take advantage of this in <code>SitemapFeature</code> you would instead populate the <code>SitemapIndex</code> collection with multiple <code>Sitemap</code> entries. An example of this is in the full <a href="https://github.com/ServiceStackApps/TechStacks/blob/a114348e905b4334e93a5408c2fb76c5fb589501/src/TechStacks/TechStacks/AppHost.cs#L90-L128" target="_blank" rel="noopener noreferrer">Sitemap used by techstacks.io</a>:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SitemapFeature</span> <span class="token punctuation">{</span>
SitemapIndex <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Sitemap</span> <span class="token punctuation">{</span>
        AtPath <span class="token operator">=</span> <span class="token string">&quot;/sitemap-techstacks.xml&quot;</span><span class="token punctuation">,</span>
        LastModified <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">,</span>
        UrlSet <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TechnologyStack<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SitemapUrl</span> <span class="token punctuation">{</span>
            Location <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ClientTechnologyStack</span> <span class="token punctuation">{</span>Slug<span class="token operator">=</span>x<span class="token punctuation">.</span>Slug<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">ToAbsoluteUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            LastModified <span class="token operator">=</span> x<span class="token punctuation">.</span>LastModified<span class="token punctuation">,</span>
            ChangeFrequency <span class="token operator">=</span> SitemapFrequency<span class="token punctuation">.</span>Weekly<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Sitemap</span> <span class="token punctuation">{</span>
        AtPath <span class="token operator">=</span> <span class="token string">&quot;/sitemap-technologies.xml&quot;</span><span class="token punctuation">,</span>
        LastModified <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">,</span>
        UrlSet <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Technology<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SitemapUrl</span> <span class="token punctuation">{</span>
            Location <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ClientTechnology</span> <span class="token punctuation">{</span>Slug <span class="token operator">=</span> x<span class="token punctuation">.</span>Slug<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">ToAbsoluteUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            LastModified <span class="token operator">=</span> x<span class="token punctuation">.</span>LastModified<span class="token punctuation">,</span>
            ChangeFrequency <span class="token operator">=</span> SitemapFrequency<span class="token punctuation">.</span>Weekly<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Sitemap</span>
    <span class="token punctuation">{</span>
        AtPath <span class="token operator">=</span> <span class="token string">&quot;/sitemap-users.xml&quot;</span><span class="token punctuation">,</span>
        LastModified <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">,</span>
        UrlSet <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>CustomUserAuth<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SitemapUrl</span> <span class="token punctuation">{</span>
            Location <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ClientUser</span> <span class="token punctuation">{</span>UserName <span class="token operator">=</span> x<span class="token punctuation">.</span>UserName<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">ToAbsoluteUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            LastModified <span class="token operator">=</span> x<span class="token punctuation">.</span>ModifiedDate<span class="token punctuation">,</span>
            ChangeFrequency <span class="token operator">=</span> SitemapFrequency<span class="token punctuation">.</span>Weekly<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which now generates the following <code>&lt;sitemapindex/&gt;</code> at <a href="https://techstacks.io/sitemap.xml" target="_blank" rel="noopener noreferrer">/sitemap.xml</a>:</p><div class="language-xml"><pre><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sitemapindex</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.sitemaps.org/schemas/sitemap/0.9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sitemap</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loc</span><span class="token punctuation">&gt;</span></span>https://techstacks.io/sitemap-techstacks.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>loc</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastmod</span><span class="token punctuation">&gt;</span></span>2015-01-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastmod</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sitemap</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sitemap</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loc</span><span class="token punctuation">&gt;</span></span>https://techstacks.io/sitemap-technologies.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>loc</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastmod</span><span class="token punctuation">&gt;</span></span>2015-01-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastmod</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sitemap</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sitemap</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loc</span><span class="token punctuation">&gt;</span></span>https://techstacks.io/sitemap-users.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>loc</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastmod</span><span class="token punctuation">&gt;</span></span>2015-01-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastmod</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sitemap</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sitemapindex</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>With each entry linking to the urlset for each Sitemap:</p><ul><li><a href="https://techstacks.io/sitemap-techstacks.xml" target="_blank" rel="noopener noreferrer">techstacks.io/sitemap-techstacks.xml</a></li><li><a href="https://techstacks.io/sitemap-technologies.xml" target="_blank" rel="noopener noreferrer">techstacks.io/sitemap-technologies.xml</a></li><li><a href="https://techstacks.io/sitemap-users.xml" target="_blank" rel="noopener noreferrer">techstacks.io/sitemap-users.xml</a></li></ul>`,14),o=[e];function c(l,u,i,k,r,g){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{d as __pageData,h as default};