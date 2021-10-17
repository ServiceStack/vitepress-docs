import{_ as s,r as t,c as e,b as o,d as p,a as n,o as c}from"./app.14440598.js";const v='{"title":"Wire Format","description":"","frontmatter":{"slug":"wire-format","title":"Wire Format"},"headers":[{"level":2,"title":"Installing via NuGet","slug":"installing-via-nuget"},{"level":2,"title":"Client Usage","slug":"client-usage"}],"relativePath":"wire-format.md","lastUpdated":1634495308454}',i={},l=n('<p><a href="https://github.com/akkadotnet/Wire" target="_blank" rel="noopener noreferrer">Wire</a> is an efficient binary serialization format from the <a href="http://getakka.net" target="_blank" rel="noopener noreferrer">Akka.NET Team</a> with comparable performance to ProtoBuf but like MsgPack doesn\u2019t require your POCO\u2019s to be annotated with <code>[DataContract]</code> attributes making it more suitable for code-first POCO DTOs.</p><h2 id="installing-via-nuget" tabindex="-1">Installing via NuGet <a class="header-anchor" href="#installing-via-nuget" aria-hidden="true">#</a></h2><p>Wire is easily installed with the <a href="https://nuget.org/packages/ServiceStack.Wire" target="_blank" rel="noopener noreferrer">ServiceStack.Wire</a> NuGet package:</p>',3),r=n(`<p>After the NuGet Package is added to your Project, enable the Wire format in your <code>AppHost</code> with:</p><div class="language-cs"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">WireFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The NuGet plugin also includes the <strong>WireServiceClient</strong> client below so you can easily call it from any C# Client.</p><h2 id="client-usage" tabindex="-1">Client Usage <a class="header-anchor" href="#client-usage" aria-hidden="true">#</a></h2><p>Just like the rest of ServiceStack C# Clients, <code>WireServiceClient</code> is interchangeable with the other Service clients and provides and end-to-end API for consuming ServiceStack&#39;s Services, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WireServiceClient</span><span class="token punctuation">(</span>BaseUri<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Todo<span class="token punctuation">&gt;</span></span> all <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// Count = 0</span>

<span class="token class-name"><span class="token keyword">var</span></span> todo <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todo</span> <span class="token punctuation">{</span> Content <span class="token operator">=</span> <span class="token string">&quot;New TODO&quot;</span><span class="token punctuation">,</span> Order <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// todo.Id = 1</span>
all <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                      <span class="token comment">// Count = 1</span>

todo<span class="token punctuation">.</span>Content <span class="token operator">=</span> <span class="token string">&quot;Updated TODO&quot;</span><span class="token punctuation">;</span>
todo <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span><span class="token punctuation">;</span>                            <span class="token comment">// todo.Content = Updated TODO</span>

client<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
all <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
</code></pre></div>`,6);function u(k,d,g,m,_,h){const a=t("nugetPackage");return c(),e("div",null,[l,o("p",null,[p(a,{"package-name":"ServiceStack.Wire","package-version":"*"})]),r])}var w=s(i,[["render",u]]);export{v as __pageData,w as default};
