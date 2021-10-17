import{_ as a,c as t,o as e,b as n,e as s,a as p}from"./app.14440598.js";const S='{"title":"Amazon SQS MQ","description":"","frontmatter":{"slug":"amazon-sqs-mq","title":"Amazon SQS MQ"},"headers":[{"level":3,"title":"SQS MQ Server Example","slug":"sqs-mq-server-example"},{"level":3,"title":"Intercepting Filters","slug":"intercepting-filters"},{"level":3,"title":"Polling Duration","slug":"polling-duration"}],"relativePath":"amazon-sqs-mq.md","lastUpdated":1634495307610}',o={},c=n("p",null,[s("Support for registering Amazon Simple Queue Service (SQS) as an "),n("a",{href:"/messaging.html"},"MQ Server"),s(" in ServiceStack is available in "),n("a",{href:"https://www.nuget.org/packages/ServiceStack.Aws",target:"_blank",rel:"noopener noreferrer"},"ServiceStack.Aws"),s(" NuGet package:")],-1),l=n("div",{class:"package-reference-box"},[n("div",{class:"flex"},[n("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[n("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[n("p",null,[n("code",null,'<PackageReference Include="ServiceStack.Aws" Version="5.*" />')]),s(`
`)])]),n("div",{class:"flex-shrink"},[n("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),n("b")])]),n("div",{class:"copy-text w-full text-right h-6"})],-1),u=p(`<p>Once installed SQS can be configured the same way as any other <a href="/messaging.html">MQ Servers</a>, by first registering the ServiceBus <code>IMessageService</code> provider followed by registering all ServiceStack Services you want to be able to invoke via MQ\u2019s:</p><div class="language-csharp"><pre><code>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqsMqServer</span><span class="token punctuation">(</span>
    AwsConfig<span class="token punctuation">.</span>AwsAccessKey<span class="token punctuation">,</span> AwsConfig<span class="token punctuation">.</span>AwsSecretKey<span class="token punctuation">,</span> RegionEndpoint<span class="token punctuation">.</span>USEast1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    DisableBuffering <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Trade-off latency vs efficiency</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> mqServer <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyRequest<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ExecuteMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

AfterInitCallbacks<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>appHost <span class="token operator">=&gt;</span> mqServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>When an MQ Server is registered, ServiceStack automatically publishes Requests accepted on the &quot;One Way&quot; <a href="https://github.com/ServiceStack/ServiceStack/wiki/Routing#pre-defined-routes" target="_blank" rel="noopener noreferrer">pre-defined route</a> to the registered MQ broker. The message is later picked up and executed by a Message Handler on a background Thread.</p><h3 id="sqs-mq-server-example" tabindex="-1">SQS MQ Server Example <a class="header-anchor" href="#sqs-mq-server-example" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/ServiceStackApps/AwsApps/tree/master/src/AwsApps/emailcontacts" target="_blank" rel="noopener noreferrer">AWS Email Contacts</a> example shows the same long-running <a href="https://github.com/ServiceStackApps/AwsApps/blob/4817f5c6ad69defd74d528403bfdb03e5958b0b3/src/AwsApps/emailcontacts/EmailContactServices.cs#L81" target="_blank" rel="noopener noreferrer">EmailContact Service</a> being executed from both HTTP and MQ Server by just <a href="https://github.com/ServiceStackApps/AwsApps/blob/4817f5c6ad69defd74d528403bfdb03e5958b0b3/src/AwsApps/emailcontacts/default.cshtml#L203" target="_blank" rel="noopener noreferrer">changing which url the HTML Form is posted to</a>:</p><div class="language-html"><pre><code>//html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form-emailcontact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@(new EmailContact().ToPostUrl())<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">data-action-alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@(new EmailContact().ToOneWayUrl())<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chkAction<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleAction<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chkAction<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Email via MQ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    ...   
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>The urls are populated from a typed Request DTO using the <a href="/routing.html#reverse-routing">Reverse Routing Extension methods</a></p></blockquote><p>Checking the <strong>Email via MQ</strong> checkbox fires the JavaScript handler below that&#39;s registered as <a href="/ss-utils-js.html#declarative-events">declarative event in ss-utils.js</a>:</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindHandlers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">toggleAction</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> $form <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">closest</span><span class="token punctuation">(</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> action <span class="token operator">=</span> $form<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;action&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        $form<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;action&quot;</span><span class="token punctuation">,</span> $form<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&quot;action-alt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token string">&quot;action-alt&quot;</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The code to configure and start an SQS MQ Server is similar to <a href="/messaging.html">other MQ Servers</a>:</p><div class="language-csharp"><pre><code>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqsMqServer</span><span class="token punctuation">(</span>
    AwsConfig<span class="token punctuation">.</span>AwsAccessKey<span class="token punctuation">,</span> AwsConfig<span class="token punctuation">.</span>AwsSecretKey<span class="token punctuation">,</span> RegionEndpoint<span class="token punctuation">.</span>USEast1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    DisableBuffering <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Trade-off latency vs efficiency</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> mqServer <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>EmailContacts<span class="token punctuation">.</span>EmailContact<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ExecuteMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

AfterInitCallbacks<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>appHost <span class="token operator">=&gt;</span> mqServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="intercepting-filters" tabindex="-1">Intercepting Filters <a class="header-anchor" href="#intercepting-filters" aria-hidden="true">#</a></h3><p>A number of new filters are available on <code>SqsMqServer</code> and <code>SqsMqClient</code> which will let you intercept and apply custom logic before SQS messages are sent and received:</p><div class="language-csharp"><pre><code>Action<span class="token operator">&lt;</span>SendMessageRequest<span class="token punctuation">,</span>IMessage<span class="token operator">&gt;</span> SendMessageRequestFilter
Action<span class="token operator">&lt;</span>ReceiveMessageRequest<span class="token operator">&gt;</span> ReceiveMessageRequestFilter
Action<span class="token operator">&lt;</span>Amazon<span class="token punctuation">.</span>SQS<span class="token punctuation">.</span>Model<span class="token punctuation">.</span>Message<span class="token punctuation">,</span> IMessage<span class="token operator">&gt;</span> ReceiveMessageResponseFilter
Action<span class="token operator">&lt;</span>DeleteMessageRequest<span class="token operator">&gt;</span> DeleteMessageRequestFilter
Action<span class="token operator">&lt;</span>ChangeMessageVisibilityRequest<span class="token operator">&gt;</span> ChangeMessageVisibilityRequestFilter
</code></pre></div><h3 id="polling-duration" tabindex="-1">Polling Duration <a class="header-anchor" href="#polling-duration" aria-hidden="true">#</a></h3><p>The polling duration used to poll SQS queues can be configured with:</p><div class="language-csharp"><pre><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqsMqServer</span> <span class="token punctuation">{</span>
    PollingDuration <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromMilliseconds</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">//default</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17),i=[c,l,u];function r(k,g,d,m,h,f){return e(),t("div",null,i)}var q=a(o,[["render",r]]);export{S as __pageData,q as default};
