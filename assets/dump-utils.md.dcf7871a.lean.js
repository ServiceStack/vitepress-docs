import{_ as n,c as s,o as a,a as e}from"./app.14440598.js";const h='{"title":"Dump Utils","description":"","frontmatter":{"slug":"dump-utils","title":"Dump Utils"},"headers":[{"level":2,"title":"Example Usage","slug":"example-usage"},{"level":3,"title":"Example Output","slug":"example-output"},{"level":3,"title":"Dump Table","slug":"dump-table"},{"level":3,"title":"Circular References","slug":"circular-references"},{"level":3,"title":"Inbuilt into ServiceStack JSV web service endpoint","slug":"inbuilt-into-servicestack-jsv-web-service-endpoint"}],"relativePath":"dump-utils.md","lastUpdated":1634495307618}',t={},p=e(`__VP_STATIC_START__<p>ServiceStack.Text has extension methods which recursively dumps all the public properties of any type into a human readable <strong>pretty formatted</strong> string. The <code>Dump()</code> utils are invaluable when explanatory coding or creating tests as you can quickly see what&#39;s in an object without having to set breakpoints and navigate nested properties in <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s Watch window.</p><h4 id="extension-methods" tabindex="-1">Extension Methods <a class="header-anchor" href="#extension-methods" aria-hidden="true">#</a></h4><div class="language-csharp"><pre><code><span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token generic-method"><span class="token function">Dump</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">T</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token generic-method"><span class="token function">DumpTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">T</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name"><span class="token keyword">string</span></span> text<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">PrintDump</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">T</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">PrintDumpTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">T</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The convenient <code>Print()</code>, <code>PrintDump()</code> and <code>PrintDumpTable()</code> extension just writes the output to the Console to provide a wrist-friendly API for a common use-case, e.g:</p><div class="language-"><pre><code>var response = client.Send(request);
response.PrintDump(); // Dumps contents to Console in human-friendly format

$&quot;Top Technologies: {response.TopTechnologies.Dump()}&quot;.Print();
</code></pre></div><h2 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-hidden="true">#</a></h2><p>After importing the <strong>ServiceStack.Text</strong> namespace you can view the values of all fields as seen in <a href="https://github.com/ServiceStack/ServiceStack.Text/blob/master/tests/ServiceStack.Text.Tests/Utils/JsvFormatterTests.cs" target="_blank" rel="noopener noreferrer">the following example</a>:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
model<span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="example-output" tabindex="-1">Example Output <a class="header-anchor" href="#example-output" aria-hidden="true">#</a></h3><div class="language-csharp"><pre><code><span class="token punctuation">{</span>
    Int<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">String</span><span class="token punctuation">:</span> One<span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">DateTime</span><span class="token punctuation">:</span> <span class="token number">2010</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">Guid</span><span class="token punctuation">:</span> c050437f6fcd46be9b2d0806a0860b3e<span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">EmptyIntList</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">IntList</span><span class="token punctuation">:</span>
    <span class="token punctuation">[</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token number">3</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">StringList</span><span class="token punctuation">:</span>
    <span class="token punctuation">[</span>
        <span class="token attribute"><span class="token class-name">one</span><span class="token punctuation">,</span>
        <span class="token class-name">two</span><span class="token punctuation">,</span>
        <span class="token class-name">three</span></span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">StringIntMap</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
        a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token named-parameter punctuation">b</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token named-parameter punctuation">c</span><span class="token punctuation">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="dump-table" tabindex="-1">Dump Table <a class="header-anchor" href="#dump-table" aria-hidden="true">#</a></h3><p>Whilst to quickly visualize tabular data, e.g. returned from <a href="https://github.com/ServiceStack/ServiceStack.OrmLite" target="_blank" rel="noopener noreferrer">OrmLite</a> or an API Response you can use the <code>PrintDump()</code> extension method to return the results formatted in an easy to read Markdown table, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GithubRepo</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Language <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Watchers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Forks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> orgRepos <span class="token operator">=</span> <span class="token string">&quot;https://api.github.com/orgs/dotnet/repos&quot;</span>
    <span class="token punctuation">.</span><span class="token function">GetJsonFromUrl</span><span class="token punctuation">(</span>httpReq <span class="token operator">=&gt;</span> httpReq<span class="token punctuation">.</span>UserAgent <span class="token operator">=</span> <span class="token string">&quot;ServiceStack&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>GithubRepo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderByDescending</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>Watchers<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

orgRepos<span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which will output:</p><div class="language-"><pre><code>| #  | Name            | Language | Watchers | Forks |
|----|-----------------|----------|----------|-------|
| 1  | aspnetcore      | C#       | 20376    | 5793  |
| 2  | corefx          |          | 17905    | 5340  |
| 3  | core            | Shell    | 14975    | 3762  |
| 4  | roslyn          | C#       | 13757    | 3186  |
| 5  | coreclr         |          | 12436    | 2852  |
| 6  | efcore          | C#       | 9765     | 2454  |
| 7  | AspNetCore.Docs | C#       | 8268     | 20654 |
| 8  | orleans         | C#       | 7147     | 1622  |
| 9  | BenchmarkDotNet | C#       | 6048     | 639   |
| 10 | reactive        | C#       | 4679     | 587   |
</code></pre></div><h3 id="circular-references" tabindex="-1">Circular References <a class="header-anchor" href="#circular-references" aria-hidden="true">#</a></h3><p>The <code>T.PrintDump()</code> and <code>T.Dump()</code> extension methods can also be used on objects with cyclical references where it will display the first-level <code>ToString()</code> value of properties that have circular references.</p><p>Whilst our Text Serializers don&#39;t support serializing DTOs with cyclical dependencies (which are actively discouraged), the APIs below can be used instead to partially serialize objects where it uses the <code>ToString()</code> on any properties containing Circular references:</p><ul><li><code>T.ToSafeJson()</code></li><li><code>T.ToSafeJsv()</code></li><li><code>T.ToSafePartialObjectDictionary()</code></li></ul><p>The API used to detect whether an object has Circular References is also available for your use:</p><div class="language-csharp"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">HasCircularReferences</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="inbuilt-into-servicestack-jsv-web-service-endpoint" tabindex="-1">Inbuilt into ServiceStack JSV web service endpoint <a class="header-anchor" href="#inbuilt-into-servicestack-jsv-web-service-endpoint" aria-hidden="true">#</a></h3><p>As this feature has come in super useful for debugging, it&#39;s also included it as part of the JSV endpoint by simply appending <code>&amp;debug</code> anywhere in the request\u2019s query string.</p><p>Even if you don\u2019t use the new JSV endpoint you can still benefit from it by instantly being able to read the data provided by your web service. Here are some live examples showing the same web services called from the XML and JSV endpoint that shows the difference in readability:</p><ul><li><a href="http://northwind.netcore.io/json/reply/Orders?debug" target="_blank" rel="noopener noreferrer">GetNorthwindCustomerOrders</a></li></ul>__VP_STATIC_END__`,25),o=[p];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{h as __pageData,g as default};
