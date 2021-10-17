import{_ as e,c as a,o as s,a as n}from"./app.14440598.js";const g='{"title":"F# Add ServiceStack Reference","description":"","frontmatter":{"slug":"fsharp-add-servicestack-reference","title":"F# Add ServiceStack Reference"},"headers":[{"level":2,"title":"Add ServiceStack Reference","slug":"add-servicestack-reference"},{"level":3,"title":"Update ServiceStack Reference","slug":"update-servicestack-reference"},{"level":3,"title":"Console Demo","slug":"console-demo"},{"level":3,"title":"F# Client Example","slug":"f-client-example"},{"level":3,"title":"Change Default Server Configuration","slug":"change-default-server-configuration"},{"level":2,"title":"Constraints","slug":"constraints"},{"level":3,"title":"FSharp Configuration","slug":"fsharp-configuration"},{"level":3,"title":"MakeDataContractsExtensible","slug":"makedatacontractsextensible"},{"level":3,"title":"AddReturnMarker","slug":"addreturnmarker"},{"level":3,"title":"AddDescriptionAsComments","slug":"adddescriptionascomments"},{"level":3,"title":"AddDataContractAttributes","slug":"adddatacontractattributes"},{"level":3,"title":"AddIndexesToDataMembers","slug":"addindexestodatamembers"},{"level":3,"title":"AddGeneratedCodeAttributes","slug":"addgeneratedcodeattributes"},{"level":3,"title":"AddResponseStatus","slug":"addresponsestatus"},{"level":3,"title":"AddImplicitVersion","slug":"addimplicitversion"},{"level":3,"title":"IncludeTypes","slug":"includetypes"},{"level":3,"title":"ExcludeTypes","slug":"excludetypes"},{"level":3,"title":"InitializeCollections","slug":"initializecollections"},{"level":3,"title":"AddNamespaces","slug":"addnamespaces"}],"relativePath":"fsharp-add-servicestack-reference.md","lastUpdated":1634495307618}',t={},o=n(`__VP_STATIC_START__<p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/fsharp-header.png" alt="F# Header"></p><p>ServiceStack&#39;s <strong>Add ServiceStack Reference</strong> feature allows clients to generate Native Types from directly within <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> using <a href="/create-your-first-webservice.html">ServiceStackVS VS.NET Extension</a> - providing a simpler, cleaner and more versatile alternative to WCF&#39;s Add Service Reference feature that&#39;s built into <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>.</p><p>The article outlines ServiceStack&#39;s support generating F# DTO&#39;s - providing a flexible alternative than sharing your compiled DTO .NET assembly with clients. Now F# clients can easily add a reference to a remote ServiceStack instance and update typed DTO&#39;s directly from within <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> - reducing the burden and effort required to consume ServiceStack Services whilst benefiting from clients native language strong-typing feedback.</p><h2 id="add-servicestack-reference" tabindex="-1"><a href="/add-servicestack-reference.html">Add ServiceStack Reference</a> <a class="header-anchor" href="#add-servicestack-reference" aria-hidden="true">#</a></h2><p>The easiest way to Add a ServiceStack reference to your project is to right-click on your project to bring up <a href="/create-your-first-webservice.html">ServiceStackVS&#39;s</a> <code>Add ServiceStack Reference</code> context-menu item. This opens a dialog where you can add the url of the ServiceStack instance you want to typed DTO&#39;s for, as well as the name of the DTO source file that&#39;s added to your project.</p><p><a href="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/add-service-ref-flow.png" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/add-service-ref-flow.png" alt="Add ServiceStack Reference"></a></p><p>After clicking OK, the servers DTO&#39;s and <a href="https://www.nuget.org/packages/ServiceStack.Client" target="_blank" rel="noopener noreferrer">ServiceStack.Client</a> NuGet package are added to the project, providing an instant typed API:</p><p><a href="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/fsharp-add-servicestack-reference.png" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/fsharp-add-servicestack-reference.png" alt="Calling ServiceStack Service with FSharp"></a></p><h3 id="update-servicestack-reference" tabindex="-1">Update ServiceStack Reference <a class="header-anchor" href="#update-servicestack-reference" aria-hidden="true">#</a></h3><p>Updating a ServiceStack reference works intuitively where you just have to click on the DTO&#39;s you want to update and click <strong>Update ServiceStack Reference</strong> on the context menu:</p><p><a href="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/fsharp-update-servicestack-reference.png" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/fsharp-update-servicestack-reference.png" alt="Calling ServiceStack Service with FSharp"></a></p><p>As there&#39;s no configuration stored about the ServiceStack Reference you might be wondering how this works? The <strong>Update ServiceStack Reference</strong> context menu only appears on F# source files ending with <code>.dto.fs</code> or <code>.dtos.fs</code>. It then uses the <code>BaseUrl</code> in the metadata comments for where to fetch and update to the latest F# server DTO&#39;s.</p><h3 id="console-demo" tabindex="-1">Console Demo <a class="header-anchor" href="#console-demo" aria-hidden="true">#</a></h3><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/servicestackvs/servicestack%20reference/fsharp-demo.gif" alt="FSharp Console Demo"></p><h3 id="f-client-example" tabindex="-1">F# Client Example <a class="header-anchor" href="#f-client-example" aria-hidden="true">#</a></h3><p>Just like with C#, F# Native Types can be used in ServiceStack&#39;s <a href="/csharp-client.html">Generic Service Clients</a> providing and end-to-end Typed API whose PCL support also allows F# to be used in <a href="https://github.com/ServiceStackApps/HelloMobile" target="_blank" rel="noopener noreferrer">mobile clients apps</a> without having to share compiled DTOs:</p><div class="language-fsharp"><pre><code><span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JsonServiceClient</span><span class="token punctuation">(</span><span class="token string">&quot;http://stackapis.netcore.io&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SearchQuestions</span><span class="token punctuation">(</span>
    Tags <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&quot;redis&quot;</span><span class="token punctuation">;</span> <span class="token string">&quot;ormlite&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>        

Inspect<span class="token punctuation">.</span><span class="token function">printDump</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
</code></pre></div><h3 id="change-default-server-configuration" tabindex="-1">Change Default Server Configuration <a class="header-anchor" href="#change-default-server-configuration" aria-hidden="true">#</a></h3><p>The above defaults are also overridable on the ServiceStack Server by modifying the default config on the <code>NativeTypesFeature</code> Plugin, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> typesConfig <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>NativeTypesFeature<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MetadataTypesConfig<span class="token punctuation">;</span>
typesConfig<span class="token punctuation">.</span>AddDataContractAttributes <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token range operator">..</span><span class="token punctuation">.</span>
</code></pre></div><h2 id="constraints" tabindex="-1">Constraints <a class="header-anchor" href="#constraints" aria-hidden="true">#</a></h2><p>As the ordering constraint in F# conflicted with the ordering of types by C# namespaces, the cleanest approach was to add all DTO&#39;s under a single namespace. By default the namespace used will be the base <strong>ServiceModel</strong> namespace which is overridable with the <code>GlobalNamespace</code> Config:</p><div class="language-csharp"><pre><code>typesConfig<span class="token punctuation">.</span>GlobalNamespace <span class="token operator">=</span> <span class="token string">&quot;Client.Namespace&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>This does mean that each type name needs to be unique which is a best-practice that&#39;s now a requirement in order to make use of F# native types. Another semantic difference is that any C# nested classes become top-level classes when translated to F#.</p><h3 id="fsharp-configuration" tabindex="-1">FSharp Configuration <a class="header-anchor" href="#fsharp-configuration" aria-hidden="true">#</a></h3><p>The header comments in the generated DTO&#39;s allows for further customization of how they&#39;re generated where ServiceStackVS automatically watches for any file changes and updates the generated DTO&#39;s with any custom Options provided. Options that are preceded by a F# single line comment <code>//</code> are defaults from the server that can be overridden, e.g:</p><div class="language-fsharp"><pre><code><span class="token comment">(* Options:
Date: 2014-10-21 00:45:38
Version: 1
BaseUrl: http://stackapis.netcore.io

//MakeDataContractsExtensible: False
//AddReturnMarker: True
//AddDescriptionAsComments: True
//AddDataContractAttributes: False
//AddIndexesToDataMembers: False
//AddGeneratedCodeAttributes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//IncludeTypes: 
//ExcludeTypes: 
//InitializeCollections: True
//AddNamespaces: 
*)</span>
</code></pre></div><p>To override a value, remove the <code>//</code> and specify the value to the right of the <code>:</code>. Any value uncommented will be sent to the server to override any server defaults.</p><p>We&#39;ll go through and cover each of the above options to see how they affect the generated DTO&#39;s:</p><h3 id="makedatacontractsextensible" tabindex="-1">MakeDataContractsExtensible <a class="header-anchor" href="#makedatacontractsextensible" aria-hidden="true">#</a></h3><p>Add .NET&#39;s DataContract&#39;s <a href="http://msdn.microsoft.com/en-us/library/system.runtime.serialization.extensiondataobject(v=vs.110).aspx" target="_blank" rel="noopener noreferrer">ExtensionDataObject</a> to all DTO&#39;s:</p><div class="language-fsharp"><pre><code><span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">AllowNullLiteral</span><span class="token punctuation">&gt;]</span></span>
<span class="token keyword">type</span> <span class="token class-name">GetAnswersResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
    <span class="token keyword">interface</span> <span class="token class-name">IExtensibleDataObject</span> <span class="token keyword">with</span>
        <span class="token keyword">member</span> <span class="token keyword">val</span> ExtensionData<span class="token punctuation">:</span><span class="token class-name">ExtensionDataObject</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span> set
    <span class="token keyword">end</span>
    <span class="token keyword">member</span> <span class="token keyword">val</span> Ansnwer<span class="token punctuation">:</span><span class="token class-name">Answer</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span>set
    <span class="token keyword">member</span> <span class="token keyword">val</span> ExtensionData<span class="token punctuation">:</span><span class="token class-name">ExtensionDataObject</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span>set
</code></pre></div><h3 id="addreturnmarker" tabindex="-1">AddReturnMarker <a class="header-anchor" href="#addreturnmarker" aria-hidden="true">#</a></h3><p>AddReturnMarker annotates Request DTO&#39;s with an <code>IReturn&lt;TResponse&gt;</code> marker referencing the Response type ServiceStack infers your Service to return:</p><div class="language-fsharp"><pre><code><span class="token keyword">type</span> <span class="token class-name">GetAnswers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
    <span class="token keyword">interface</span> <span class="token class-name">IReturn</span><span class="token operator">&lt;</span>GetAnswersResponse<span class="token operator">&gt;</span>
    <span class="token keyword">member</span> <span class="token keyword">val</span> QuestionId<span class="token punctuation">:</span><span class="token class-name">Int32</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Int32</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span>set
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Original DTO doesn&#39;t require a return marker as response type can be inferred from Services return type or when using the <code>%Response</code> DTO Naming convention</p></div><h3 id="adddescriptionascomments" tabindex="-1">AddDescriptionAsComments <a class="header-anchor" href="#adddescriptionascomments" aria-hidden="true">#</a></h3><p>Converts any textual Description in <code>[Description]</code> attributes as F# Doc comments which allows your API to add intellisense in client projects:</p><div class="language-fsharp"><pre><code><span class="token comment">///&lt;summary&gt;</span>
<span class="token comment">///Get a list of Answers for a Question</span>
<span class="token comment">///&lt;/summary&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">GetAnswers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
<span class="token operator">..</span><span class="token punctuation">.</span>
</code></pre></div><h3 id="adddatacontractattributes" tabindex="-1">AddDataContractAttributes <a class="header-anchor" href="#adddatacontractattributes" aria-hidden="true">#</a></h3><p>Decorates all DTO types with <code>[DataContract]</code> and properties with <code>[DataMember]</code>:</p><div class="language-fsharp"><pre><code><span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">DataContract</span><span class="token punctuation">&gt;]</span></span>
<span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">AllowNullLiteral</span><span class="token punctuation">&gt;]</span></span>
<span class="token keyword">type</span> <span class="token class-name">GetAnswers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
    <span class="token keyword">interface</span> <span class="token class-name">IReturn</span><span class="token operator">&lt;</span>GetAnswersResponse<span class="token operator">&gt;</span>
    <span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">DataMember</span><span class="token punctuation">&gt;]</span></span>
    <span class="token keyword">member</span> <span class="token keyword">val</span> QuestionId<span class="token punctuation">:</span><span class="token class-name">Int32</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Int32</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span>set
</code></pre></div><h3 id="addindexestodatamembers" tabindex="-1">AddIndexesToDataMembers <a class="header-anchor" href="#addindexestodatamembers" aria-hidden="true">#</a></h3><p>Populates a DataMember Order index for all properties:</p><div class="language-fsharp"><pre><code><span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">DataContract</span><span class="token punctuation">&gt;]</span></span>
<span class="token keyword">type</span> <span class="token class-name">GetAnswers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
    <span class="token keyword">interface</span> <span class="token class-name">IReturn</span><span class="token operator">&lt;</span>GetAnswersResponse<span class="token operator">&gt;</span>
    <span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">DataMember</span><span class="token annotation-content"><span class="token punctuation">(</span>Order<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span></span><span class="token punctuation">&gt;]</span></span>
    <span class="token keyword">member</span> <span class="token keyword">val</span> QuestionId<span class="token punctuation">:</span><span class="token class-name">Int32</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Int32</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span>set
</code></pre></div><blockquote><p>Requires AddDataContractAttributes=true</p></blockquote><h3 id="addgeneratedcodeattributes" tabindex="-1">AddGeneratedCodeAttributes <a class="header-anchor" href="#addgeneratedcodeattributes" aria-hidden="true">#</a></h3><p>Emit <code>[&lt;GeneratedCode&gt;]</code> attribute on all generated Types:</p><div class="language-fsharp"><pre><code><span class="token annotation"><span class="token punctuation">[&lt;</span><span class="token class-name">GeneratedCode</span><span class="token punctuation">&gt;]</span></span>
<span class="token keyword">type</span> <span class="token class-name">GetAnswers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token operator">..</span><span class="token punctuation">.</span>
</code></pre></div><h3 id="addresponsestatus" tabindex="-1">AddResponseStatus <a class="header-anchor" href="#addresponsestatus" aria-hidden="true">#</a></h3><p>Automatically add a <code>ResponseStatus</code> property on all Response DTO&#39;s, regardless if it wasn&#39;t already defined:</p><div class="language-fsharp"><pre><code><span class="token keyword">type</span> <span class="token class-name">GetAnswersResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
    <span class="token operator">..</span><span class="token punctuation">.</span>
    <span class="token keyword">member</span> <span class="token keyword">val</span> ResponseStatus<span class="token punctuation">:</span><span class="token class-name">ResponseStatus</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span>set
</code></pre></div><h3 id="addimplicitversion" tabindex="-1">AddImplicitVersion <a class="header-anchor" href="#addimplicitversion" aria-hidden="true">#</a></h3><p>Lets you specify the Version number to be automatically populated in all Request DTO&#39;s sent from the client:</p><div class="language-csharp"><pre><code><span class="token return-type class-name">type</span> <span class="token function">GetAnswers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
    <span class="token keyword">interface</span> <span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GetAnswersResponse<span class="token punctuation">&gt;</span></span>
    member <span class="token class-name">val</span> Version<span class="token punctuation">:</span><span class="token keyword">int</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token class-name">with</span> <span class="token keyword">get</span><span class="token punctuation">,</span> <span class="token keyword">set</span>
    <span class="token range operator">..</span><span class="token punctuation">.</span>
</code></pre></div><p>This lets you know what Version of the Service Contract that existing clients are using making it easy to implement ServiceStack&#39;s <a href="http://stackoverflow.com/a/12413091/85785" target="_blank" rel="noopener noreferrer">recommended versioning strategy</a>.</p><h3 id="includetypes" tabindex="-1">IncludeTypes <a class="header-anchor" href="#includetypes" aria-hidden="true">#</a></h3><p>Is used as a Whitelist that can be used to specify only the types you would like to have code-generated:</p><div class="language-"><pre><code>/* Options:
IncludeTypes: GetTechnology,GetTechnologyResponse
</code></pre></div><p>Will only generate <code>GetTechnology</code> and <code>GetTechnologyResponse</code> DTO&#39;s, e.g:</p><div class="language-fsharp"><pre><code><span class="token keyword">type</span> <span class="token class-name">GetTechnology</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token keyword">type</span> <span class="token class-name">GetTechnologyResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token operator">..</span><span class="token punctuation">.</span>
</code></pre></div><h4 id="include-request-dto-and-its-dependent-types" tabindex="-1">Include Request DTO and its dependent types <a class="header-anchor" href="#include-request-dto-and-its-dependent-types" aria-hidden="true">#</a></h4><p>You can include a Request DTO and all its dependent types with a <code>.*</code> suffix on the Request DTO, e.g:</p><div class="language-"><pre><code>/* Options:
IncludeTypes: GetTechnology.*
</code></pre></div><p>Which will include the <code>GetTechnology</code> Request DTO, the <code>GetTechnologyResponse</code> Response DTO and all Types that they both reference.</p><h4 id="include-all-types-within-a-c-namespace" tabindex="-1">Include All Types within a C# namespace <a class="header-anchor" href="#include-all-types-within-a-c-namespace" aria-hidden="true">#</a></h4><p>If your DTOs are grouped into different namespaces they can be all included using the <code>/*</code> suffix, e.g:</p><div class="language-"><pre><code>/* Options:
IncludeTypes: MyApp.ServiceModel.Admin/*
</code></pre></div><p>This will include all DTOs within the <code>MyApp.ServiceModel.Admin</code> C# namespace.</p><h3 id="excludetypes" tabindex="-1">ExcludeTypes <a class="header-anchor" href="#excludetypes" aria-hidden="true">#</a></h3><p>Is used as a Blacklist where you can specify which types you would like to exclude from being generated:</p><div class="language-"><pre><code>/* Options:
ExcludeTypes: GetTechnology,GetTechnologyResponse
</code></pre></div><p>Will exclude <code>GetTechnology</code> and <code>GetTechnologyResponse</code> DTO&#39;s from being generated.</p><h3 id="initializecollections" tabindex="-1">InitializeCollections <a class="header-anchor" href="#initializecollections" aria-hidden="true">#</a></h3><p>Lets you automatically initialize collections in Request DTO&#39;s:</p><div class="language-fsharp"><pre><code><span class="token keyword">type</span> <span class="token class-name">SearchQuestions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> 
    <span class="token keyword">interface</span> <span class="token class-name">IReturn</span><span class="token operator">&lt;</span>SearchQuestionsResponse<span class="token operator">&gt;</span>
    <span class="token keyword">member</span> <span class="token keyword">val</span> Tags<span class="token punctuation">:</span><span class="token class-name">List</span><span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">with</span> get<span class="token punctuation">,</span>set
</code></pre></div><h3 id="addnamespaces" tabindex="-1">AddNamespaces <a class="header-anchor" href="#addnamespaces" aria-hidden="true">#</a></h3><p>Include additional F# namespaces, e.g:</p><div class="language-"><pre><code>/* Options:
AddNamespaces: System.Drawing,MyApp
</code></pre></div><p>Where it will generate the specified namespaces in the generated Types:</p><div class="language-csharp"><pre><code>open System<span class="token punctuation">.</span>Drawing
open MyApp
</code></pre></div>__VP_STATIC_END__`,81),p=[o];function c(r,l,i,d,u,k){return s(),a("div",null,p)}var m=e(t,[["render",c]]);export{g as __pageData,m as default};
