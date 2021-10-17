import{_ as n,c as s,o as a,a as t}from"./app.14440598.js";const m='{"title":"Lisp TCP REPL Server","description":"","frontmatter":{"slug":"lisp-tcp-repl-server","title":"Lisp TCP REPL Server"},"headers":[{"level":3,"title":"Password Protection","slug":"password-protection"}],"relativePath":"lisp-tcp-repl-server.md","lastUpdated":1634495308422}',e={},p=t(`__VP_STATIC_START__<p>In addition to launching a <a href="/dotnet-tool.html#lisp-repl">Lisp REPL in the web and app dotnet tools</a> you can also open a Lisp REPL into any ServiceStack App configured with the <code>LispReplTcpServer</code> ServiceStack plugin. This effectively opens a <strong>&quot;programmable gateway&quot;</strong> into any ServiceStack App where it&#39;s able to perform live queries, access IOC dependencies, invoke internal Server functions and query the state of a running Server which like the <a href="/debugging.html#debug-inspector">Debug Inspector</a> can provide invaluable insight when diagnosing issues on a remote server.</p><p>To see it in action we&#39;ll enable it one of our production Apps <a href="https://techstacks.io" target="_blank" rel="noopener noreferrer">techstacks.io</a> which as it&#39;s a Vuetify SPA App is only configured with an empty <code>SharpPagesFeature</code> as it doesn&#39;t use any server-side scripting features.</p><p>We&#39;ll enable it in <code>DebugMode</code> where we can enable by setting <code>DebugMode</code> in our App&#39;s <code>appsettings.Production.json</code> which will launch a TCP Socket Server which by default is configured to listen to the <strong>loopback</strong> IP on port <code>5005</code>.</p><div class="language-csharp"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>Config<span class="token punctuation">.</span>DebugMode<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">LispReplTcpServer</span> <span class="token punctuation">{</span>
        ScriptMethods <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DbScripts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ScriptNamespaces <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token keyword">nameof</span><span class="token punctuation">(</span>TechStacks<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token keyword">nameof</span><span class="token punctuation">(</span>TechStacks<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token keyword">nameof</span><span class="token punctuation">(</span>ServiceInterface<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
            <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token keyword">nameof</span><span class="token punctuation">(</span>TechStacks<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp"><span class="token keyword">nameof</span><span class="token punctuation">(</span>ServiceModel<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://sharpscript.net/docs/script-net#type-resolution" target="_blank" rel="noopener noreferrer">ScriptNamespaces</a> behaves like C#&#39;s <code>using Namespace;</code> statement letting you reference Types by <code>Name</code> instead of its fully-qualified Namespace</p></div><p>Whilst you can now connect to it with basic <code>telnet</code>, it&#39;s a much nicer experience to use it with the <a href="https://linux.die.net/man/1/rlwrap" target="_blank" rel="noopener noreferrer">rlwrap</a> readline wrap utility which provides an enhanced experience with line editing, persistent history and completion.</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> rlwrap
</code></pre></div><p>Then you can open a TCP Connection to connect to a new Lisp REPL with:</p><div class="language-bash"><pre><code>$ rlwrap telnet localhost <span class="token number">5005</span>
</code></pre></div><p>Where you now have full scriptability of the running server as allowed by <a href="https://sharpscript.net/docs/sharp-pages" target="_blank" rel="noopener noreferrer">#Script Pages</a> <code>SharpPagesFeature</code> which allows <a href="https://sharpscript.net/docs/script-net#allowscriptingofalltypes" target="_blank" rel="noopener noreferrer">scripting of all .NET Types</a> by default.</p><h4 id="techstacks-tcp-lisp-repl-demo" tabindex="-1">TechStacks TCP Lisp REPL Demo <a class="header-anchor" href="#techstacks-tcp-lisp-repl-demo" aria-hidden="true">#</a></h4><p>In this demo we&#39;ll explore some of the possibilities of scripting the live <a href="https://techstacks.io" target="_blank" rel="noopener noreferrer">techstacks.io</a> Server where we can <code>resolve</code> IOC dependencies to send out tweets using its registered <code>ITwitterUpdates</code> dependency, view the source and load a remote <a href="https://gist.github.com/gistlyn/3624b0373904cfb2fc7bb3c2cb9dc1a3" target="_blank" rel="noopener noreferrer">parse-rss</a> lisp function into the new Lisp interpreter attached to the TCP connection, use it to parse <a href="https://news.ycombinator.com/rss" target="_blank" rel="noopener noreferrer">Hacker News RSS Feed</a> into a .NET Collection where it can be more easily queried using its built-in functions which is used to construct an email body with <strong>HN&#39;s current Top 5 links</strong>.</p><p>It then uses <a href="https://sharpscript.net/docs/db-scripts" target="_blank" rel="noopener noreferrer">DB Scripts</a> to explore its configured AWS RDS PostgreSQL RDBMS, listing its DB tables and viewing its column names and definitions before retrieving the Email addresses of all <strong>Admin</strong> users, sending them each an email with HN&#39;s Top 5 Links by publishing <strong>5x</strong> <code>SendEmail</code> Request DTOs using the <a href="https://sharpscript.net/docs/servicestack-scripts#publishmessage" target="_blank" rel="noopener noreferrer">publishMessage</a> ServiceStack Script to where they&#39;re processed in the background by its configured <a href="/messaging.html">MQ Server</a> that uses it to execute the <code>SendEmail</code> ServiceStack Service where it uses its configured AWS SES SMTP Server to finally send out the Emails:</p><p><a href="https://youtu.be/HO523cFkDfk" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/sharpscript/lisp-tcp-repl.gif" alt=""></a></p><div class="info custom-block"><p class="custom-block-title">YouTube</p><p><a href="https://youtu.be/HO523cFkDfk" target="_blank" rel="noopener noreferrer">youtu.be/HO523cFkDfk</a></p></div><h3 id="password-protection" tabindex="-1">Password Protection <a class="header-anchor" href="#password-protection" aria-hidden="true">#</a></h3><p>Since TCP Server effectively opens your remote Server up to being scripted you&#39;ll want to ensure the TCP Server is only accessible within a trusted network, effectively treating it the same as <a href="https://redis.io/topics/security" target="_blank" rel="noopener noreferrer">Redis Security Model</a>.</p><p>A secure approach would be to leave the default of only binding to <code>IPAddress.Loopback</code> so only trusted users with SSH access will be able to access it, which they&#39;ll still be able to access remotely via <code>Local PC &gt; ssh &gt; telnet 127.0.0.1 5005</code>.</p><p>Just like <a href="https://redis.io/commands/auth" target="_blank" rel="noopener noreferrer">Redis AUTH</a> you can also add password protection for an additional layer of Security:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">LispReplTcpServer</span> <span class="token punctuation">{</span>
    RequireAuthSecret <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which will only allow access to users with the <a href="/debugging.html#authsecret">configured AuthSecret</a>:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span> 
    AdminAuthSecret <span class="token operator">=</span> <span class="token string">&quot;secretz&quot;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="annotated-lisp-tcp-repl-transcript" tabindex="-1">Annotated Lisp TCP REPL Transcript <a class="header-anchor" href="#annotated-lisp-tcp-repl-transcript" aria-hidden="true">#</a></h4><div class="language-lisp"><pre><code><span class="token comment">; resolve \`ITwitterUpdates\` IOC dependency and assign it to \`twitter\`</span>
<span class="token punctuation">(</span><span class="token car">def</span> twitter <span class="token punctuation">(</span><span class="token car">resolve</span> <span class="token string">&quot;ITwitterUpdates&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; view its concrete Type Name</span>
<span class="token punctuation">(</span><span class="token car">typeName</span> twitter<span class="token punctuation">)</span>

<span class="token comment">; view its method names </span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">methods</span> twitter<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; view its method signatures </span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">methodTypes</span> twitter<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; use it to send tweet from its @webstacks account</span>
<span class="token punctuation">(</span>.Tweet twitter <span class="token string">&quot;Who&#39;s using #Script Lisp? https://sharpscript.net/lisp&quot;</span><span class="token punctuation">)</span>

<span class="token comment">; view all available scripts in #Script Lisp Library Index gist.github.com/3624b0373904cfb2fc7bb3c2cb9dc1a3</span>
<span class="token punctuation">(</span><span class="token car">gistindex</span><span class="token punctuation">)</span>

<span class="token comment">; view the source code of the \`parse-rss\` library</span>
<span class="token punctuation">(</span><span class="token car">load-src</span> <span class="token string">&quot;index:parse-rss&quot;</span><span class="token punctuation">)</span>

<span class="token comment">; assign the XML contents of HN&#39;s RSS feed to \`xml\`</span>
<span class="token punctuation">(</span><span class="token car">def</span> xml <span class="token punctuation">(</span><span class="token car">urlContents</span> <span class="token string">&quot;https://news.ycombinator.com/rss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; preview its first 1000 chars</span>
<span class="token punctuation">(</span><span class="token car">subString</span> xml <span class="token number">0</span> <span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token comment">; use \`parse-rss\` to parse the RSS feed into a .NET Collection and assign it to \`rss\`</span>
<span class="token punctuation">(</span><span class="token car">def</span> rss <span class="token punctuation">(</span><span class="token car">parse-rss</span> xml<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; view the \`title\`, \`description\` and the first \`item\` in the RSS feed:</span>
<span class="token punctuation">(</span><span class="token lisp-property property">:title</span> rss<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token lisp-property property">:description</span> rss<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token lisp-property property">:0</span> <span class="token punctuation">(</span><span class="token lisp-property property">:items</span> rss<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; view the links of all RSS feed items</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">map</span> <span class="token lisp-property property">:link</span> <span class="token punctuation">(</span><span class="token lisp-property property">:items</span> rss<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; view the links and titles of the top 5 news items</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">map</span> <span class="token lisp-property property">:link</span> <span class="token punctuation">(</span><span class="token car">take</span> <span class="token number">5</span> <span class="token punctuation">(</span><span class="token lisp-property property">:items</span> rss<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">map</span> <span class="token lisp-property property">:title</span> <span class="token punctuation">(</span><span class="token car">take</span> <span class="token number">5</span> <span class="token punctuation">(</span><span class="token lisp-property property">:items</span> rss<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; construct a plain-text numbered list of the top 5 HN Links and assign it to \`body\`</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">map-index</span> #<span class="token punctuation">(</span><span class="token car">str</span> %2 <span class="token punctuation">(</span><span class="token lisp-property property">:title</span> %1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">take</span> <span class="token number">5</span> <span class="token punctuation">(</span><span class="token lisp-property property">:items</span> rss<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">map-index</span> #<span class="token punctuation">(</span><span class="token car">str</span> <span class="token punctuation">(</span><span class="token car">padLeft</span> <span class="token punctuation">(</span><span class="token car">1+</span> %2<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span> <span class="token punctuation">(</span><span class="token lisp-property property">:title</span> %1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">take</span> <span class="token number">5</span> <span class="token punctuation">(</span><span class="token lisp-property property">:items</span> rss<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">def</span> body <span class="token punctuation">(</span><span class="token car">joinln</span> 
    <span class="token punctuation">(</span><span class="token car">map-index</span> #<span class="token punctuation">(</span><span class="token car">str</span> <span class="token punctuation">(</span><span class="token car">padLeft</span> <span class="token punctuation">(</span><span class="token car">1+</span> %2<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;. &quot;</span> <span class="token punctuation">(</span><span class="token lisp-property property">:title</span> %1<span class="token punctuation">)</span> <span class="token string">&quot;\\n&quot;</span> <span class="token punctuation">(</span><span class="token lisp-property property">:link</span> %1<span class="token punctuation">)</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">take</span> <span class="token number">5</span> <span class="token punctuation">(</span><span class="token lisp-property property">:items</span> rss<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; view all TechStacks PostgreSQL AWS RDS tables</span>
<span class="token punctuation">(</span><span class="token car">dbTableNames</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> dbTableNames<span class="token punctuation">)</span>

<span class="token comment">; view the column names and definitions of the \`technology\` table</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">dbColumnNames</span> <span class="token string">&quot;technology&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token car">joinln</span> <span class="token punctuation">(</span><span class="token car">dbColumns</span> <span class="token string">&quot;technology&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; search for all \`user\` tables</span>
<span class="token punctuation">(</span><span class="token car">globln</span> <span class="token string">&quot;*user*&quot;</span> <span class="token punctuation">(</span><span class="token car">dbTableNames</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; view how many Admin Users with Emails there are</span>
<span class="token punctuation">(</span><span class="token car">dbScalar</span> <span class="token string">&quot;select count(email) from custom_user_auth where roles like &#39;%Admin%&#39;&quot;</span><span class="token punctuation">)</span>

<span class="token comment">; assign the Admin Users email to the \`emails\` list</span>
<span class="token punctuation">(</span><span class="token car">def</span> emails <span class="token punctuation">(</span><span class="token car">map</span> <span class="token lisp-property property">:email</span> <span class="token punctuation">(</span><span class="token car">dbSelect</span> <span class="token string">&quot;select email from custom_user_auth where roles like &#39;%Admin%&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; search for all \`operation\` script methods</span>
<span class="token punctuation">(</span><span class="token car">globln</span> <span class="token string">&quot;*operation*&quot;</span> scriptMethods<span class="token punctuation">)</span>

<span class="token comment">; search for all \`email\` Request DTOs</span>
<span class="token punctuation">(</span><span class="token car">globln</span> <span class="token string">&quot;*email*&quot;</span> metaAllOperationNames<span class="token punctuation">)</span>

<span class="token comment">; view the properties available on the \`SendEmail\` Request DTO</span>
<span class="token punctuation">(</span><span class="token car">props</span> <span class="token punctuation">(</span><span class="token car">SendEmail</span>.<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">; search for all \`publish\` script methods that can publish messages</span>
<span class="token punctuation">(</span><span class="token car">globln</span> <span class="token string">&quot;publish*&quot;</span> scriptMethods<span class="token punctuation">)</span>

<span class="token comment">; create and publish 5x \`SendEmail\` Request DTOs for processing by TechStacks configured MQ Server</span>
<span class="token punctuation">(</span><span class="token car">doseq</span> <span class="token punctuation">(</span><span class="token car">to</span> emails<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">publishMessage</span> <span class="token string">&quot;SendEmail&quot;</span> { <span class="token lisp-property property">:To</span> to <span class="token lisp-property property">:Subject</span> <span class="token string">&quot;Top 5 <span class="token argument">HN</span> Links&quot;</span> <span class="token lisp-property property">:Body</span> body }<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,24),o=[p];function c(i,l,r,u,k,d){return a(),s("div",null,o)}var g=n(e,[["render",c]]);export{m as __pageData,g as default};
