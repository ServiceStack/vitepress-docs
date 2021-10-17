import{_ as n,c as s,o as t,b as e,e as a,a as o}from"./app.14440598.js";const f='{"title":"Azure Resources","description":"","frontmatter":{"slug":"azure","title":"Azure Resources"},"headers":[{"level":2,"title":"ServiceStack.Azure","slug":"servicestack-azure"},{"level":3,"title":"ServiceBusMqServer","slug":"servicebusmqserver"},{"level":2,"title":"Virtual FileSystem backed by Azure Blob Storage","slug":"virtual-filesystem-backed-by-azure-blob-storage"},{"level":2,"title":"Caching support with Azure Table Storage","slug":"caching-support-with-azure-table-storage"},{"level":3,"title":"Deploying to Azure","slug":"deploying-to-azure"}],"relativePath":"azure.md","lastUpdated":1634495307614}',r={},c=e("h2",{id:"servicestack-azure",tabindex:"-1"},[a("ServiceStack.Azure "),e("a",{class:"header-anchor",href:"#servicestack-azure","aria-hidden":"true"},"#")],-1),p=e("p",null,"ServiceStack.Azure package provides support to Azure ServiceBus and Azure Blob Storage. All features are incapsulated in single ServiceStack.Azure package. To install package run from NuGet",-1),i=e("div",{class:"package-reference-box"},[e("div",{class:"flex"},[e("div",{class:"flex-grow pre-container",style:{background:"#002440"}},[e("pre",{class:"sh copy m-0 p-0 pl-2 py-1 align-middle",style:{background:"#002440"}},[e("p",null,[e("code",null,'<PackageReference Include="ServiceStack.Azure" Version="5.*" />')]),a(`
`)])]),e("div",{class:"flex-shrink"},[e("i",{class:"svg-copy inline-block w-8 h-full",title:"copy",onclick:"copy(this)"}),e("b")])]),e("div",{class:"copy-text w-full text-right h-6"})],-1),l=o(`__VP_STATIC_START__<p>ServiceStack.Azure includes implementation of the following ServiceStack providers:</p><ul><li><a href="#ServiceBusMqServer">ServiceBusMqServer</a> - <a href="https://docs.servicestack.net/messaging" target="_blank" rel="noopener noreferrer">MQ Server</a> for invoking ServiceStack Services via Azure ServiceBus</li><li><a href="#virtual-filesystem-backed-by-azure-blob-storage">AzureBlobVirtualFiles</a> - Virtual file system based on Azure Blob Storage</li><li><a href="#caching-support-with-azure-table-storage">AzureTableCacheClient</a> - Cache client over Azure Table Storage</li></ul><h3 id="servicebusmqserver" tabindex="-1">ServiceBusMqServer <a class="header-anchor" href="#servicebusmqserver" aria-hidden="true">#</a></h3><p>The code to configure and start an ServiceBus MQ Server is similar to other MQ Servers:</p><div class="language-csharp"><pre><code>container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ServiceBusMqServer</span><span class="token punctuation">(</span>ConnectionString<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> mqServer <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IMessageService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqServer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterHandler</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ServiceDto<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ExecuteMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

AfterInitCallbacks<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>appHost <span class="token operator">=&gt;</span> mqServer<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Where ConnectionString is connection string to Service Bus, how to obtain it from Azure Portal you can find in <a href="https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dotnet-get-started-with-queues" target="_blank" rel="noopener noreferrer">Get Started with Service Bus queues</a> article</p><p>When an MQ Server is registered, ServiceStack automatically publishes Requests accepted on the &quot;One Way&quot; pre-defined route to the registered MQ broker. The message is later picked up and executed by a Message Handler on a background Thread.</p><h2 id="virtual-filesystem-backed-by-azure-blob-storage" tabindex="-1">Virtual FileSystem backed by Azure Blob Storage <a class="header-anchor" href="#virtual-filesystem-backed-by-azure-blob-storage" aria-hidden="true">#</a></h2><p>You can use an Azure Blob Storage Container to serve website content with the <strong>AzureBlobVirtualFiles</strong>.</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppHost</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AppHostBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//All Razor Views, Markdown Content, imgs, js, css, etc are served from an Azure Blob Storage container</span>

        <span class="token comment">//Use connection string to Azure Storage Emulator. For real application you should use connection string</span>
        <span class="token comment">//to your Azure Storage account</span>
        <span class="token class-name"><span class="token keyword">var</span></span> azureBlobConnectionString <span class="token operator">=</span> <span class="token string">&quot;UseDevelopmentStorage=true&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//Azure container which hold your files. If it does not exist it will be automatically created.</span>
        <span class="token class-name"><span class="token keyword">var</span></span> containerName <span class="token operator">=</span> <span class="token string">&quot;myazurecontainer&quot;</span><span class="token punctuation">;</span>

        VirtualFiles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AzureBlobVirtualFiles</span><span class="token punctuation">(</span>connectionString<span class="token punctuation">,</span> containerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        AddVirtualFileSources<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>VirtualFiles<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="caching-support-with-azure-table-storage" tabindex="-1">Caching support with Azure Table Storage <a class="header-anchor" href="#caching-support-with-azure-table-storage" aria-hidden="true">#</a></h2><p>The AzureTableCacheClient implements <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Caching/ICacheClientExtended.cs" target="_blank" rel="noopener noreferrer">ICacheClientExteded</a> and <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Caching/IRemoveByPattern.cs" target="_blank" rel="noopener noreferrer">IRemoveByPattern</a> using Azure Table Storage.</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppHost</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">AppHostBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">string</span></span> cacheConnStr <span class="token operator">=</span> <span class="token string">&quot;UseDevelopmentStorage=true;&quot;</span><span class="token punctuation">;</span>
        container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICacheClient<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">AzureTableCacheClient</span><span class="token punctuation">(</span>cacheConnStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="deploying-to-azure" tabindex="-1">Deploying to Azure <a class="header-anchor" href="#deploying-to-azure" aria-hidden="true">#</a></h3><p>See <a href="https://github.com/sharp-apps/rockwind-azure" target="_blank" rel="noopener noreferrer">Rockwind.Azure</a> for a working configuration and step-by-step guide to deploy .NET Core Web Apps to Azure using Docker.</p><h1 id="community-resources" tabindex="-1">Community Resources <a class="header-anchor" href="#community-resources" aria-hidden="true">#</a></h1><ul><li><a href="http://blog.emmanuelnelson.com/post/33303196083/using-the-azure-cache-with-service-stack" target="_blank" rel="noopener noreferrer">Using the Azure Cache With ServiceStack</a> by <a href="http://emmanuelnelson.com/about-me" target="_blank" rel="noopener noreferrer">@emmanuelnelson</a></li><li><a href="http://dhickey-ie-archive.azurewebsites.net/post/2012/12/12/Securing-ServiceStack-using-Azure-Authentication-Library.aspx" target="_blank" rel="noopener noreferrer">Securing ServiceStack using Azure Authentication Library and WPF Client</a> by <a href="http://twitter.com/randompunter" target="_blank" rel="noopener noreferrer">@randompunter</a></li><li><a href="https://github.com/ServiceStack/ServiceStack.Azure" target="_blank" rel="noopener noreferrer">ServiceStack.Azure</a>, supporting VirtualPathProvider backed by Azure Blob Storage, and ICacheProvider backed by Azure Table Storage</li></ul>__VP_STATIC_END__`,17),u=[c,p,i,l];function k(d,h,g,v,b,S){return t(),s("div",null,u)}var y=n(r,[["render",k]]);export{f as __pageData,y as default};
