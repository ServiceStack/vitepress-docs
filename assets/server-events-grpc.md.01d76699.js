import{_ as n,c as s,o as a,a as t}from"./app.14440598.js";const m='{"title":"gRPC Server Events","description":"","frontmatter":{"title":"gRPC Server Events","slug":"server-events-grpc"},"headers":[{"level":3,"title":"Server Stream gRPC Services","slug":"server-stream-grpc-services"}],"relativePath":"server-events-grpc.md","lastUpdated":1634495308446}',e={},p=t(`<h3 id="server-stream-grpc-services" tabindex="-1">Server Stream gRPC Services <a class="header-anchor" href="#server-stream-grpc-services" aria-hidden="true">#</a></h3><p>In addition to standard Services which gRPC Refers to as <strong>Unary RPC</strong>, i.e. where clients sends a single request to the server and gets a single response back. Another very useful communication style supported by gRPC is <strong>Server streaming</strong>:</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>the client sends a request to the server and gets a stream to read a sequence of messages back. The client reads from the returned stream until there are no more messages. gRPC guarantees message ordering within an individual RPC call</p></div><h4 id="streamserverevents" tabindex="-1">StreamServerEvents <a class="header-anchor" href="#streamserverevents" aria-hidden="true">#</a></h4><p>This communication channel is especially useful in <a href="/server-events.html">Server Events</a> which operates in a similar style with clients connecting to a long-lived HTTP connection that streams back &quot;real-time Events&quot; over the light and efficient <a href="https://www.html5rocks.com/en/tutorials/eventsource/basics/" target="_blank" rel="noopener noreferrer">SSE</a> standard natively supported in modern browsers.</p><p>Although as HTTP Requests are not normally used for maintaining long-lived connections they&#39;re susceptible to issues like buffering from App Servers, middleware and proxies and require implementing a bespoke health-check and auto-reconnect solution in order to maintain interrupted service.</p><p>As a first class supported communication channel clients can instead leverage gRPC&#39;s library infrastructure which is perfectly suited for streaming real-time Server Events over an efficient persistent HTTP/2 channel that&#39;s available from the <code>StreamServerEvents</code> gRPC Service:</p><div class="language-proto"><pre><code>rpc ServerStreamServerEvents(StreamServerEvents) returns (stream StreamServerEventsResponse) {}
</code></pre></div><p>Which gives all <code>protoc</code> supported languages a Typed Client for consuming your <a href="/server-events.html">Server Events</a>.</p><h4 id="grpcserviceclient-streams" tabindex="-1">GrpcServiceClient Streams <a class="header-anchor" href="#grpcserviceclient-streams" aria-hidden="true">#</a></h4><p>When using the generic <code>GrpcServiceClient</code> you&#39;re able to take advantage of C#&#39;s 8 new <code>await foreach</code> syntax sugar for consuming gRPC Server Streams.</p><p>Its usage is analogous to all Server Events clients where your initial connection contains the channels you want to subscribe to receive notifications from, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> stream <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">StreamAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">StreamServerEvents</span> <span class="token punctuation">{</span>
    Channels <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;todos&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Then you can use <code>await foreach</code> to consume an endless stream of Server Events. Use <code>Selector</code> to identify the type of Server Event whilst the complex-type body of each event message can be parsed from its JSON body, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">await</span> <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> msg <span class="token keyword">in</span> stream<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>msg<span class="token punctuation">.</span>Selector<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span><span class="token string">&quot;todos.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//custom todos.* events</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> obj <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>Json<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//body of message in JSON</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">is</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//todos.create + todos.update properties</span>
            <span class="token class-name"><span class="token keyword">var</span></span> id <span class="token operator">=</span> map<span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> title <span class="token operator">=</span> map<span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token interpolation-string"><span class="token string">$&quot;EVENT </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>Selector</span><span class="token punctuation">}</span></span><span class="token string"> [</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>Channel</span><span class="token punctuation">}</span></span><span class="token string">]: #</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">id</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">title</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//todos.delete id</span>
            <span class="token interpolation-string"><span class="token string">$&quot;EVENT </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>Selector</span><span class="token punctuation">}</span></span><span class="token string"> [</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>Channel</span><span class="token punctuation">}</span></span><span class="token string">]: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">obj</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// general server events, e.g cmd.onConnect, cmd.onJoin, cmd.onLeave</span>
        <span class="token interpolation-string"><span class="token string">$&quot;EVENT </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>Selector</span><span class="token punctuation">}</span></span><span class="token string"> [</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>Channel</span><span class="token punctuation">}</span></span><span class="token string">]: #</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>UserId</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">msg<span class="token punctuation">.</span>DisplayName</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If connected whilst running the <a href="https://todoworld.servicestack.net/#user-content-c-local-development-grpc-ssl-crud-example" target="_blank" rel="noopener noreferrer">TodoWorld CRUD Example</a> this stream will output something similar to:</p><div class="language-"><pre><code>EVENT cmd.onConnect []: #-1 user1
EVENT cmd.onJoin [todos]: #-1 user1
EVENT todos.create [todos]: #1 ServiceStack
EVENT todos.update [todos]: #1 gRPC
EVENT todos.delete [todos]: 1
</code></pre></div><h4 id="protoc-dart-streams" tabindex="-1">protoc Dart Streams <a class="header-anchor" href="#protoc-dart-streams" aria-hidden="true">#</a></h4><p>Other <code>protoc</code> languages will require using their own language constructs for consuming gRPC Streams, here&#39;s the <a href="https://todoworld.servicestack.net/#dart" target="_blank" rel="noopener noreferrer">example for Dart</a> that also has a pleasant API for consuming Server Streams:</p><div class="language-dart"><pre><code><span class="token keyword">var</span> stream <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">serverStreamServerEvents</span><span class="token punctuation">(</span><span class="token class-name">StreamServerEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span>channels<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> r <span class="token keyword">in</span> stream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">jsonDecode</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>r<span class="token punctuation">.</span>selector<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">is</span> <span class="token class-name">Map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;EVENT \${r.selector} [\${r.channel}]: #\${obj[&#39;</span>id<span class="token string">&#39;]} \${obj[&#39;</span>title<span class="token string">&#39;]}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;EVENT \${r.selector} [\${r.channel}]: \${obj}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;EVENT \${r.selector} \${r.channels}: #\${obj[&#39;</span>userId<span class="token string">&#39;]} \${obj[&#39;</span>displayName<span class="token string">&#39;]}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,20),o=[p];function c(r,l,i,u,k,d){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{m as __pageData,h as default};
