import{_ as e,c as t,o as a,a as s}from"./app.14440598.js";const k='{"title":"Studio - AutoQuery UI","description":"","frontmatter":{"slug":"studio-autoquery","title":"Studio - AutoQuery UI"},"headers":[{"level":3,"title":"Integrated Auth Component","slug":"integrated-auth-component"},{"level":3,"title":"Desktop User State & Preferences","slug":"desktop-user-state-preferences"},{"level":3,"title":"AutoCrud Querying","slug":"autocrud-querying"},{"level":3,"title":"Export to Excel","slug":"export-to-excel"},{"level":3,"title":"AutoCrud Partial Updates","slug":"autocrud-partial-updates"},{"level":3,"title":"AutoCrud Create","slug":"autocrud-create"},{"level":3,"title":"AutoCrud Update and Delete","slug":"autocrud-update-and-delete"},{"level":3,"title":"API Log Viewer","slug":"api-log-viewer"},{"level":3,"title":"Executable Audit History","slug":"executable-audit-history"}],"relativePath":"studio-autoquery.md","lastUpdated":1634495308450}',n={},o=s(`__VP_STATIC_START__<p>Studio uses the rich declarative metadata of AutoQuery &amp; Crud Services to infer the <strong>data model</strong> that each AutoQuery Service operates on and the <strong>Operation Type</strong> they provide. As a result it can logically group each Service around the Data Model they operate on to provide a more intuitive &amp; natural UI for each of the different AutoQuery/CRUD operation types.</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/autoquery-noauth.png" alt=""></p><p>What UI features &amp; tables are visible is reflected by whether the AutoQuery Service for that type exists and whether the currently authenticated User has access to them (i.e. Have the role required by each Service). So an unauthenticated user will see Northwind Crud&#39;s read-only <strong>Region</strong> table with no ability to update it &amp; the <strong>Territory</strong> table, which as it isn&#39;t protected by a role will be visible to everyone, but as all CRUD Write operations require authentication, all edit controls require authentication - as shown in the screenshot above where they&#39;re replaced with auth <strong>Sign In</strong> buttons.</p><p>Here are the relevant <a href="https://github.com/NetCoreApps/NorthwindCrud/blob/master/Startup.cs" target="_blank" rel="noopener noreferrer">NorthwindCrud auto-generation rules</a> which defines this behavior:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> readOnlyTables <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;Region&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
GenerateCrudServices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GenerateCrudServices</span> <span class="token punctuation">{</span>
    ServiceFilter <span class="token operator">=</span> <span class="token punctuation">(</span>op<span class="token punctuation">,</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// Require all Write Access to Tables to be limited to Authenticated Users</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>op<span class="token punctuation">.</span><span class="token function">IsCrudWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            op<span class="token punctuation">.</span>Request<span class="token punctuation">.</span><span class="token function">AddAttributeIfNotExists</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ValidateRequestAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;IsAuthenticated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
                x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>Validator <span class="token operator">==</span> <span class="token string">&quot;IsAuthenticated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//Don&#39;t generate the Services or Types for Ignored Tables</span>
    IncludeService <span class="token operator">=</span> op <span class="token operator">=&gt;</span> <span class="token operator">!</span>ignoreTables<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span>table <span class="token operator">=&gt;</span> op<span class="token punctuation">.</span><span class="token function">ReferencesAny</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span><span class="token punctuation">(</span>op<span class="token punctuation">.</span><span class="token function">IsCrudWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> readOnlyTables<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span>table <span class="token operator">=&gt;</span> op<span class="token punctuation">.</span><span class="token function">ReferencesAny</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Clicking on any of the <strong>Auth</strong> icons or the <strong>Sign In</strong> button on the top right will open up the Sign In dialog.</p><h3 id="integrated-auth-component" tabindex="-1">Integrated Auth Component <a class="header-anchor" href="#integrated-auth-component" aria-hidden="true">#</a></h3><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/auth.png" alt=""></p><p>The <strong>Sign In</strong> dialog supports most of ServiceStack&#39;s built-in Auth Providers with a different Auth Dialog tab depending which Auth Providers are enabled. It looks at &quot;auth family type&quot; to determine how to Authenticate with each Auth Provider so it should still support your Custom Auth Providers if they inherit from existing Auth Providers, otherwise they can explicitly specify which Type of Auth they use by overriding the <code>Type</code> property getter with one of the following:</p><ul><li><strong>Bearer</strong> - Authenticate with HTTP Authentication Bearer Token (e.g. JWT or API Key)</li><li><strong>credentials</strong> - Authenticate with Username/Password at <code>/auth/credentials</code></li><li><strong>oauth</strong> - Authenticate with OAuth</li><li><strong>session</strong> - Alternative <a href="/authentication-and-authorization.html#session-authentication-overview">session-based Auth Provider</a></li></ul><p>The <strong>session</strong> tab is also displayed if a <code>credentials</code> or <code>auth</code> provider is enabled. It should serve as a fallback Auth option if your Custom Auth Provider doesn&#39;t fit into the existing family types as it opens the <code>/auth</code> page of the remote ServiceStack instance:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/auth-session.png" alt=""></p><p>Where you can login to the remote site via the new fallback <code>/login</code> page or uses your custom Login Page if exists. If your remote instance is configured to allow Studio CORS access, i.e:</p><div class="language-csharp"><pre><code>appHost<span class="token punctuation">.</span>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CorsFeature</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">allowOriginWhitelist</span><span class="token punctuation">:</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token string">&quot;https://localhost:5002&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Clicking on the <strong>copy</strong> button will then be able to post the session Id back to Studio &amp; close the auth popup otherwise you&#39;d need to manually close the popup and paste the session in.</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/auth-session-copy.png" alt=""></p><p>The <strong>OAuth</strong> tab is a little different since it requires an OAuth redirect and since most 3rd Party OAuth providers disallow embedding in iframes, it needs to popup an external url in your default browser which still provides a nice auth UX as you&#39;d typically already be Signed In with your Default browser, where it will redirect you back to your <code>/auth</code> page where you can copy either the <strong>Session Id</strong> or the OAuth <strong>Access Token</strong> if you enable including OAuth Access Tokens in your <code>AuthenticateResponse</code> DTO with:</p><div class="language-csharp"><pre><code>appHost<span class="token punctuation">.</span>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">AuthFeature</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    IncludeOAuthTokensInAuthenticateResponse <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Include OAuth Keys in authenticated /auth page</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>This allows you to <a href="/authentication-and-authorization.html#authentication-via-oauth-accesstokens">Authenticate via OAuth Access Token</a> where you can test the same Authentication that Mobile and Desktop using pre-existing Sign In Widgets who also authenticate via OAuth Access Tokens obtained by their native UI widget:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/auth-page.png" alt=""></p><p><strong>Studio</strong> is able to provide a seamless UX where it&#39;s able to monitor the Windows clipboard for changes &amp; when detected close the window, return focus back to Studio who uses it to automatically Sign In with the copied token.</p><h3 id="desktop-user-state-preferences" tabindex="-1">Desktop User State &amp; Preferences <a class="header-anchor" href="#desktop-user-state-preferences" aria-hidden="true">#</a></h3><p>As is expected from a normal Desktop App, the User State of the App is preserved across restarts, which Studio maintains in its <code>$HOME/.servicestack/studio/site.settings</code> JSON file which preserves amongst other things what remote ServiceStack instances you&#39;ve connected to &amp; last queries made on each table, etc. When not running in a Desktop App it will save it to your browsers <code>localStorage</code>. You can force a save with <code>Ctrl+S</code> or by clicking on the <strong>save icon</strong> on the top right.</p><h3 id="autocrud-querying" tabindex="-1">AutoCrud Querying <a class="header-anchor" href="#autocrud-querying" aria-hidden="true">#</a></h3><p>The same querying behavior, supported filters, custom fields, paging, order by&#39;s, etc. demonstrated in <strong>SharpData</strong> above are also available in <strong>Studio</strong>, but implemented differently, where instead of calling the SharpData API directly, the filters are translated into the equivalent AutoQuery request and the remote AutoQuery Services are called instead, but as they both result in the same UX and end result, users knowledge is transferable:</p><h4 id="search-filters" tabindex="-1">Search Filters <a class="header-anchor" href="#search-filters" aria-hidden="true">#</a></h4><ul><li>Use <code>=null</code> or <code>!=null</code> to search <code>NULL</code> columns</li><li>Use <code>&lt;=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;&gt;</code>, <code>!=</code> prefix to search with that operator</li><li>Use <code>,</code> trailing comma to perform an <code>IN (values)</code> search (integer columns only)</li><li>Use <code>%</code> suffix or prefix to perform a <code>LIKE</code> search</li></ul><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-query-filters.png" alt=""></p><h3 id="export-to-excel" tabindex="-1">Export to Excel <a class="header-anchor" href="#export-to-excel" aria-hidden="true">#</a></h3><p>Likewise the fast, direct export into Excel is also available, one difference is that the total results returned in a query is controlled by the remote ServiceStack AutoQuery plugin whereas <strong>SharpData</strong> allows for unlimited sized queries:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-excel.png" alt=""></p><h3 id="autocrud-partial-updates" tabindex="-1">AutoCrud Partial Updates <a class="header-anchor" href="#autocrud-partial-updates" aria-hidden="true">#</a></h3><p>The UI is designed to look similar to a generic RDBMS Admin UI Table Editor where you can edit records in a table grid. If a <code>IPatchDb&lt;Table&gt;</code> AutoQuery Service exists for the Data Model &amp; the Authenticated User has access to it.</p><p>If enabled all fields (excl PK) on that Request DTO will be editable in the UI, otherwise they&#39;ll appear Read-only like the <strong>Id</strong> column:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-crud-partial.png" alt=""></p><h3 id="autocrud-create" tabindex="-1">AutoCrud Create <a class="header-anchor" href="#autocrud-create" aria-hidden="true">#</a></h3><p>If the user has access to the <code>ICreateDb&lt;Table&gt;</code> Service they&#39;ll be able to add records by clicking the <em>+</em> icon on the top-right of the resultset which brings up the Create Entity modal:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-crud-create.png" alt=""></p><h3 id="autocrud-update-and-delete" tabindex="-1">AutoCrud Update and Delete <a class="header-anchor" href="#autocrud-update-and-delete" aria-hidden="true">#</a></h3><p>If the user has access to the <code>IUpdateDb&lt;Table&gt;</code> Service they&#39;ll be able to update records by clicking on the <strong>edit</strong> icon which will bring up the Edit Entity dialog. If they have access to the <code>IDeleteDb&lt;Table&gt;</code> Service they&#39;ll also be able to delete the entity from the same screen:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-crud-update.png" alt=""></p><h3 id="api-log-viewer" tabindex="-1">API Log Viewer <a class="header-anchor" href="#api-log-viewer" aria-hidden="true">#</a></h3><p>All API Requests the UI makes to remote ServiceStack instances are made via a generic .NET Core back-end Service Proxy which attaches the Signed In Authentication Info to each Request. Each API Request Studio makes is recorded in the log viewer at the bottom, showing the Verb and Parameters each API was called with:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-request-log.png" alt=""></p><blockquote><p>You can copy the URL from <strong>GET</strong> API Requests or open them up in a new browser to view it in isolation.</p></blockquote><h3 id="executable-audit-history" tabindex="-1">Executable Audit History <a class="header-anchor" href="#executable-audit-history" aria-hidden="true">#</a></h3><p>If you Sign In as the <strong>Admin</strong> User (i.e. using <code>AuthSecret=zsecret</code>) you&#39;ll get super user access to access the other protected features like being able to view an <strong>Audit History</strong> of updates made to each record via AutoQuery that&#39;s enabled in <strong>NorthwindCrud</strong> with:</p><div class="language-csharp"><pre><code><span class="token comment">// Add support for auto capturing executable audit history for AutoCrud Services</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICrudEvents<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OrmLiteCrudEvents</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICrudEvents<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InitSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Where users in the <code>AutoQueryFeature.AccessRole</code> (default: Admin) role will be able to view the Audit history of each row:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-audit.png" alt=""></p><blockquote><p>If creating &amp; deleting an entity with the same Id, the Audit History of the previous entity will be retained &amp; visible</p></blockquote>__VP_STATIC_END__`,51),c=[o];function i(r,p,u,l,d,h){return a(),t("div",null,c)}var m=e(n,[["render",i]]);export{k as __pageData,m as default};
