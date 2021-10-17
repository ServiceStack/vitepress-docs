import{_ as n,c as s,o as a,a as t}from"./app.14440598.js";const f='{"title":"gRPC protoc Node.js Client","description":"","frontmatter":{"slug":"grpc-nodejs","title":"gRPC protoc Node.js Client"},"headers":[{"level":2,"title":"Node.js protoc generated GrpcServicesStub Client TodoWorld Example","slug":"node-js-protoc-generated-grpcservicesstub-client-todoworld-example"},{"level":3,"title":"Node.js protoc gRPC insecure Example","slug":"node-js-protoc-grpc-insecure-example"},{"level":3,"title":"Node.js protoc gRPC SSL Example","slug":"node-js-protoc-grpc-ssl-example"},{"level":3,"title":"Node.js Local Development gRPC SSL CRUD Example","slug":"node-js-local-development-grpc-ssl-crud-example"}],"relativePath":"grpc-nodejs.md","lastUpdated":1634495307618}',p={},o=t(`__VP_STATIC_START__<p><a href="https://youtu.be/QL56lOHiXVM" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/grpc/nodejs.png" alt=""></a></p><div class="info custom-block"><p class="custom-block-title">YouTube</p><p><a href="https://youtu.be/QL56lOHiXVM" target="_blank" rel="noopener noreferrer">youtu.be/QL56lOHiXVM</a></p></div><h2 id="node-js-protoc-generated-grpcservicesstub-client-todoworld-example" tabindex="-1">Node.js protoc generated GrpcServicesStub Client TodoWorld Example <a class="header-anchor" href="#node-js-protoc-generated-grpcservicesstub-client-todoworld-example" aria-hidden="true">#</a></h2><p>Install <a href="https://docs.servicestack.net/dotnet-tool" target="_blank" rel="noopener noreferrer">x dotnet tool</a>:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> --global x 
</code></pre></div><p>Create npm <strong>package.json</strong>:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> init
</code></pre></div><p>Add dependencies:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;todoworld-grpc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gRPC node.js Todo World Example&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@grpc/proto-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;google-protobuf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.6.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;grpc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.11.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.16.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Install dependencies:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><p>Add protoc generated TodoWorld DTOs and gRPC Service Client:</p><div class="language-bash"><pre><code>$ x proto-js-node https://todoworld.servicestack.net
</code></pre></div><h3 id="node-js-protoc-grpc-insecure-example" tabindex="-1">Node.js protoc gRPC insecure Example <a class="header-anchor" href="#node-js-protoc-grpc-insecure-example" aria-hidden="true">#</a></h3><p>Use protoc generated DTOs and <code>GrpcServicesClient</code> to call TodoWorld gRPC Service in <code>index.js</code>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Hello <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./services_pb.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> GrpcServicesClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./services_grpc_pb.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> grpc <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;grpc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> promisify <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GrpcServicesClient</span><span class="token punctuation">(</span><span class="token string">&#39;todoworld.servicestack.net:5054&#39;</span><span class="token punctuation">,</span> 
        grpc<span class="token punctuation">.</span>credentials<span class="token punctuation">.</span><span class="token function">createInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Convert gRPC&#39;s callback APIs to await friendly promises</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> getHello <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">promisifyAll</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;gRPC Node.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getHello</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">promisifyAll</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> to <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> client<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        to<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>client<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> to<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Create <code>index.js</code> with the above Node.js Example:</p><div class="language-bash"><pre><code>$ x mix todoworld-node
</code></pre></div><p>Run example:</p><div class="language-bash"><pre><code>$ node --no-deprecation index.js
</code></pre></div><h3 id="node-js-protoc-grpc-ssl-example" tabindex="-1">Node.js protoc gRPC SSL Example <a class="header-anchor" href="#node-js-protoc-grpc-ssl-example" aria-hidden="true">#</a></h3><p>Download TodoWorld SSL Certificate used for its gRPC HTTP/2 Services:</p><div class="language-bash"><pre><code>$ x get https://todoworld.servicestack.net/grpc.crt 
</code></pre></div><p>Use certificate when initializing <code>GrpcServicesClient</code>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Hello <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./services_pb.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> GrpcServicesClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./services_grpc_pb.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> grpc <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;grpc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> promisify <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GrpcServicesClient</span><span class="token punctuation">(</span><span class="token string">&#39;todoworld.servicestack.net:50051&#39;</span><span class="token punctuation">,</span> 
        grpc<span class="token punctuation">.</span>credentials<span class="token punctuation">.</span><span class="token function">createSsl</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;grpc.crt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Convert gRPC&#39;s callback APIs to await friendly promises</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> getHello <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">promisifyAll</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;gRPC Node.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getHello</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">promisifyAll</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> to <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> client<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        to<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>client<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> to<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Override <code>index.js</code> with the above Node.js Example:</p><div class="language-bash"><pre><code>$ x mix todoworld-node-ssl
</code></pre></div><p>Run example:</p><div class="language-bash"><pre><code>$ node --no-deprecation index.js
</code></pre></div><h3 id="node-js-local-development-grpc-ssl-crud-example" tabindex="-1">Node.js Local Development gRPC SSL CRUD Example <a class="header-anchor" href="#node-js-local-development-grpc-ssl-crud-example" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> 
    ResetTodos<span class="token punctuation">,</span>
    CreateTodo<span class="token punctuation">,</span>
    GetTodo<span class="token punctuation">,</span>
    GetTodos<span class="token punctuation">,</span>
    UpdateTodo<span class="token punctuation">,</span>
    DeleteTodo<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./services_pb.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> GrpcServicesClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./services_grpc_pb.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> grpc <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;grpc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> promisify <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;util&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GrpcServicesClient</span><span class="token punctuation">(</span><span class="token string">&#39;localhost:5001&#39;</span><span class="token punctuation">,</span> 
        grpc<span class="token punctuation">.</span>credentials<span class="token punctuation">.</span><span class="token function">createSsl</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;../certs/dev.crt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Convert gRPC&#39;s callback APIs to await friendly promises</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> 
        postResetTodos<span class="token punctuation">,</span>
        postCreateTodo<span class="token punctuation">,</span>
        callGetTodos<span class="token punctuation">,</span>
        callGetTodo<span class="token punctuation">,</span>
        putUpdateTodo<span class="token punctuation">,</span>
        callDeleteTodo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">promisifyAll</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TODO EXAMPLE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">postResetTodos</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ResetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//POST /todos</span>
    request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;ServiceStack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> todo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">postCreateTodo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">new todo Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, Title: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//GET /todos</span>
    <span class="token keyword">var</span> all <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">callGetTodos</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">todos: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>all<span class="token punctuation">.</span><span class="token function">getResultsList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//GET /todos/1</span>
    request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    todo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">callGetTodo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">get todo Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, Title: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//PUT /todos/1</span>
    request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UpdateTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;gRPC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">putUpdateTodo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//GET /todos/1</span>
    request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    todo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">callGetTodo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">get todo Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, Title: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//DELETE /todos/1</span>
    request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">callDeleteTodo</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//GET /todos</span>
    all <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">callGetTodos</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GetTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">todos: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>all<span class="token punctuation">.</span><span class="token function">getResultsList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Necessary until gRPC provides a native async friendly solution https://github.com/grpc/grpc-node/issues/54</span>
<span class="token keyword">function</span> <span class="token function">promisifyAll</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> to <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> client<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        to<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>client<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> to<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Refer to <a href="https://github.com/NetCoreApps/todo-world/tree/master/src/clients/js-node" target="_blank" rel="noopener noreferrer">/src/clients/js-node</a> for a complete example project.</p>__VP_STATIC_END__`,32),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};