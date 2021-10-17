import{_ as s,c as a,o as n,a as e}from"./app.14440598.js";const h='{"title":"JSV Format","description":"","frontmatter":{"slug":"jsv-format","title":"JSV Format"},"headers":[{"level":3,"title":"JSV Text Format (JSON + CSV)","slug":"jsv-text-format-json-csv"},{"level":3,"title":"CSV escaping","slug":"csv-escaping"},{"level":3,"title":"JavaScript JSV Serializer","slug":"javascript-jsv-serializer"}],"relativePath":"jsv-format.md","lastUpdated":1634495308422}',t={},p=e(`__VP_STATIC_START__<p>ServiceStack provides a fast, compact format called JSV:</p><h3 id="jsv-text-format-json-csv" tabindex="-1">JSV Text Format (JSON + CSV) <a class="header-anchor" href="#jsv-text-format-json-csv" aria-hidden="true">#</a></h3><p>JSV is a text-based format that is optimized for both size and speed.</p><p>In many ways it is similar to JavaScript, e.g. any List, Array, Collection of ints, longs, etc are stored in exactly the same way, i.e:</p><div class="language-js"><pre><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
</code></pre></div><p>Any IDictionary is serialized like JavaScript, i.e:</p><div class="language-js"><pre><code><span class="token punctuation">{</span><span class="token constant">A</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token constant">B</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token constant">C</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token constant">D</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span>
</code></pre></div><p>Which also happens to be the same as C# POCO class with the values</p><div class="language-csharp"><pre><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyClass</span> <span class="token punctuation">{</span> A<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> B<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> C<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> D<span class="token operator">=</span><span class="token number">4</span> <span class="token punctuation">}</span>
</code></pre></div><p>Which serializes to:</p><div class="language-js"><pre><code><span class="token punctuation">{</span><span class="token constant">A</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token constant">B</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token constant">C</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token constant">D</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span>
</code></pre></div><p>JSV is <em>white-space significant</em>, which means normal string values can be serialized without quotes, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyClass</span> <span class="token punctuation">{</span> Foo<span class="token operator">=</span><span class="token string">&quot;Bar&quot;</span><span class="token punctuation">,</span> Greet<span class="token operator">=</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">}</span>
</code></pre></div><p>is serialized as:</p><div class="language-js"><pre><code><span class="token punctuation">{</span>Foo<span class="token operator">:</span>Bar<span class="token punctuation">,</span>Greet<span class="token operator">:</span>Hello World<span class="token operator">!</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="csv-escaping" tabindex="-1">CSV escaping <a class="header-anchor" href="#csv-escaping" aria-hidden="true">#</a></h3><p>Any string with any of the following characters: <code>[]{},&quot;</code> is escaped using CSV-style escaping where the value is wrapped in double quotes, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyClass</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Me, Junior&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>is serialized as:</p><div class="language-js"><pre><code><span class="token punctuation">{</span>Name<span class="token operator">:</span><span class="token string">&quot;Me, Junior&quot;</span><span class="token punctuation">}</span>
</code></pre></div><p>A value with a double-quote is escaped with another double quote e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyClass</span> <span class="token punctuation">{</span> Size <span class="token operator">=</span> <span class="token string">&quot;2\\&quot; x 1\\&quot;&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>is serialized as:</p><div class="language-js"><pre><code><span class="token punctuation">{</span>Size<span class="token operator">:</span><span class="token string">&quot;2&quot;</span><span class="token string">&quot; x 1&quot;</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
</code></pre></div><h4 id="net-jsvserviceclient" tabindex="-1"><a href="/csharp-client.html#httpwebrequest-service-clients">.NET JsvServiceClient</a> <a class="header-anchor" href="#net-jsvserviceclient" aria-hidden="true">#</a></h4><p>Thanks to the performance benefits of JSV&#39;s CSV-style escaping, the <code>JsvServiceClient</code> is our fastest text-based <a href="/csharp-client.html">.NET ServiceClient</a>:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsvServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Hello</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="javascript-jsv-serializer" tabindex="-1"><a href="https://github.com/ServiceStack/ServiceStack/blob/v5.4.1/lib/js/JSV.js" target="_blank" rel="noopener noreferrer">JavaScript JSV Serializer</a> <a class="header-anchor" href="#javascript-jsv-serializer" aria-hidden="true">#</a></h3><p>A JavaScript JSV parser is also available from <a href="https://github.com/ServiceStack/ServiceStack/blob/v5.4.1/lib/js/JSV.js" target="_blank" rel="noopener noreferrer">JSV.js</a>:</p><div class="language-javascript"><pre><code><span class="token keyword">var</span> jsv <span class="token operator">=</span> <span class="token constant">JSV</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dto <span class="token operator">=</span> <span class="token constant">JSV</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="javascript-jsvserviceclient" tabindex="-1">JavaScript JsvServiceClient <a class="header-anchor" href="#javascript-jsvserviceclient" aria-hidden="true">#</a></h4><p><a href="https://github.com/ServiceStack/ServiceStack/blob/v5.4.1/lib/js/JSV.js#L464" target="_blank" rel="noopener noreferrer">JSV.js</a> also includes the <code>JsvServiceClient</code> for consuming JSV Services:</p><div class="language-javascript"><pre><code><span class="token keyword">var</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsvServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
client<span class="token punctuation">.</span><span class="token function">getFromService</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;World&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,33),o=[p];function c(r,l,i,u,k,d){return n(),a("div",null,o)}var m=s(t,[["render",c]]);export{h as __pageData,m as default};
