import{_ as t,c as a,o,a as e,b as s}from"./app.14440598.js";const f='{"title":"ServiceStack Studio","description":"","frontmatter":{"slug":"studio","title":"ServiceStack Studio"},"headers":[{"level":2,"title":"Studio Preview","slug":"studio-preview"},{"level":3,"title":"Requires v5.9+","slug":"requires-v5-9"},{"level":3,"title":"Starting ServiceStack Studio","slug":"starting-servicestack-studio"},{"level":2,"title":"Home Page","slug":"home-page"},{"level":2,"title":"User Management","slug":"user-management"},{"level":2,"title":"AutoQuery UI","slug":"autoquery-ui"},{"level":3,"title":"AutoQuery + Studio Demo","slug":"autoquery-studio-demo"},{"level":2,"title":"Validation Rules UI","slug":"validation-rules-ui"},{"level":3,"title":"Studio Desktop App vs ServiceStack.Admin","slug":"studio-desktop-app-vs-servicestack-admin"},{"level":3,"title":"Frequent out-of-band release cadence","slug":"frequent-out-of-band-release-cadence"},{"level":3,"title":"Light Footprint + Always use latest version","slug":"light-footprint-always-use-latest-version"}],"relativePath":"studio.md","lastUpdated":1634495308450}',r={},i=e(`__VP_STATIC_START__<p><strong>ServiceStack Studio</strong> is a capability-based UI to manage multiple remote ServiceStack instances from either a Chromium Desktop App or cross-platform .NET Core Web App.</p><p>The richer metadata in ServiceStack Services allows Studio to logically group Services around Data Models, enabling its high-level semantic features like its native data-grid like UX over all AutoQuery Services to quickly discover, search, create, update and delete entities based on the available AutoQuery APIs and whether Authenticated Users have access to them.</p><p>Install the <a href="/netcore-windows-desktop.html">app dotnet tool</a>:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> -g app
</code></pre></div><p>Then launch with:</p><h3 id="app-studio" class="my-4" tabindex="-1"><a href="app://studio">app://studio</a><a class="header-anchor" href="#app-studio" aria-hidden="true">#</a></h3><p>Or from a terminal with:</p><div class="language-bash"><pre><code>$ app <span class="token function">open</span> studio
</code></pre></div><h2 id="studio-preview" tabindex="-1">Studio Preview <a class="header-anchor" href="#studio-preview" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,9),n=s("iframe",{width:"896",height:"525",src:"https://www.youtube.com/embed/kN7371bqUII",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),l=e(`__VP_STATIC_START__<p><strong>Studio</strong> replaces the <a href="https://github.com/ServiceStack/Admin" target="_blank" rel="noopener noreferrer">ServiceStack Admin UI</a> where it provides a UX-friendly UI for accessing AutoQuery &amp; Crud Services but will also gain UI features for taking advantage of various ServiceStack Plugins &amp; Features, e.g. in this initial release it includes UI&#39;s for <strong>Managing DB Validation Rules</strong> &amp; for viewing the <strong>Executable Audit History of Tables</strong> updated through AutoCrud Services.</p><h3 id="requires-v5-9" tabindex="-1">Requires v5.9+ <a class="header-anchor" href="#requires-v5-9" aria-hidden="true">#</a></h3><p><strong>Studio</strong> capability-based Admin UI is enabled via the <code>/metadata/app</code> endpoint which returns metadata information about which plugins are enabled, what features they&#39;re configured with and what User Roles they&#39;re protected behind (if any). As such it&#39;s only able to manage <strong>v5.9+</strong> ServiceStack instances.</p><p>You&#39;ll need the latest <a href="/netcore-windows-desktop.html">app dotnet tool</a> which is bundled with the latest Chromium which provides the Desktop UI:</p><div class="language-bash"><pre><code>$ dotnet tool update -g app
</code></pre></div><p>Which you&#39;ll need to run once to register the <code>app://</code> url scheme, e.g:</p><div class="language-bash"><pre><code>$ app -version
</code></pre></div><h3 id="starting-servicestack-studio" tabindex="-1">Starting ServiceStack Studio <a class="header-anchor" href="#starting-servicestack-studio" aria-hidden="true">#</a></h3><p>This initial release of ServiceStack Studio primarily provides a UI around AutoQuery Services and the latest features in this release like <strong>Executable Audit History</strong> and declarative <strong>RDBMS validators</strong>.</p><p>If you don&#39;t have a project using the <strong>v5.9+</strong> features on hand you can launch a copy of <a href="https://github.com/NetCoreApps/NorthwindCrud" target="_blank" rel="noopener noreferrer">NetCoreApps/NorthwindCrud</a> which uses the new AutoCrud features to generate AutoQuery Services around all its RDBMS tables, that can be run locally with:</p><div class="language-bash"><pre><code>$ x download NetCoreApps/NorthwindCrud
$ <span class="token builtin class-name">cd</span> NorthwindCrud
$ dotnet run
</code></pre></div><p>Where you can use <code>app</code> URL scheme support to launch <strong>Studio</strong> &amp; automatically register the <strong>NorthwindCrud</strong> instance with:</p><p><a href="app://studio?connect=https://localhost:5001">app://studio?connect=https://localhost:5001</a></p><p>This URL scheme gets translated &amp; is equivalent to running <strong>Studio</strong> on the command-line with:</p><div class="language-bash"><pre><code>$ app <span class="token function">open</span> studio -connect https://localhost:5001
</code></pre></div><p>Which downloads the <a href="https://gist.github.com/gistlyn/d8e7a56027ed6ec3060d9a9896931909" target="_blank" rel="noopener noreferrer">Studio Gist Desktop App</a>, loads it as a <a href="/virtual-file-system.html#gistvirtualfiles">Gist VFS</a> whose static assets are then served by the .NET Core Server and loaded in the CEF Chromium browser.</p><p>The <code>connect</code> param is used by <strong>Studio</strong> to auto register the remote <strong>NorthwindCrud</strong> instance where it auto downloads its App Metadata containing its enabled plugins &amp; features &amp; within a few seconds you should see it appear on the home page:</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-home.png" alt=""></p><h4 id="desktop-less-x-plat-app" tabindex="-1">Desktop-less x-plat app <a class="header-anchor" href="#desktop-less-x-plat-app" aria-hidden="true">#</a></h4><p>Whilst not optimized for it, <strong>Studio</strong> can also be launched headless in your default Browser using the <code>x</code> x-plat tool:</p><h3 class="my-4"><a href="xapp://studio?connect=https://localhost:5001">xapp://studio?connect=https://localhost:5001</a></h3><div class="language-bash"><pre><code>$ x <span class="token function">open</span> studio -connect https://localhost:5001
</code></pre></div><p>Where you&#39;ll then be able to view it by going to <code>https://localhost:5002</code>. Note if not launched in a browser <strong>Studio</strong> will have limited capacity and features, but will eventually be a supported mode for accessing <strong>Studio</strong> from macOS or Linux.</p><h2 id="home-page" tabindex="-1">Home Page <a class="header-anchor" href="#home-page" aria-hidden="true">#</a></h2><p>From the home page you&#39;ll see all the top-level Admin Sections available that&#39;s enabled on the remote instance, in the initial release there&#39;s a UI for <a href="/studio-users.html">Managing Users</a>, accessing <a href="/studio-autoquery.html">AutoQuery Services</a> and a UI for maintaining <a href="/studio-validation-rules.html">DB Validation Rules</a> which automatically appear against each remote ServiceStack instance depending on whether they have each feature enabled or not.</p><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/studio/studio-home.png" alt=""></p><h2 id="user-management" tabindex="-1"><a href="/studio-users.html">User Management</a> <a class="header-anchor" href="#user-management" aria-hidden="true">#</a></h2><p>For ServiceStack instances with the <code>AdminUsersFeature</code> plugin, <strong>Admin</strong> users will be able to manage system users, change their passwords, Assign Roles &amp; Permissions, temporarily Lock or permanently delete users. The plugin is highly flexible with graceful support for all Auth Providers, custom UserAuth data models and configurable editable &amp; queryable fields.</p><blockquote><p>YouTube demo - Create Users <a href="https://youtu.be/XpHAaCTV7jE?t=321" target="_blank" rel="noopener noreferrer">youtu.be/XpHAaCTV7jE?t=321</a></p></blockquote><p><a href="https://youtu.be/XpHAaCTV7jE?t=321" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/studio/bookings-crud-screenshot.png" alt=""></a></p><p><a href="/studio-users.html">Admin Users docs</a></p><h2 id="autoquery-ui" tabindex="-1"><a href="/studio-autoquery.html">AutoQuery UI</a> <a class="header-anchor" href="#autoquery-ui" aria-hidden="true">#</a></h2><p>Studio&#39;s AutoQuery UI provides an instant intuitive UI around your ServiceStack AutoQuery Services allowing users to immediately hit the ground running and input system data as per their fine-grained authorization rules and configured validation rules.</p><blockquote><p>YouTube demo: <a href="https://youtu.be/2FFRLxs7orU?t=16" target="_blank" rel="noopener noreferrer">Querying Northwind</a></p></blockquote><p><a href="https://youtu.be/2FFRLxs7orU?t=16" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/autoquery-noauth.png" alt=""></a></p><p><a href="/studio-autoquery.html">AutoQuery UI docs</a></p><h3 id="autoquery-studio-demo" tabindex="-1">AutoQuery + Studio Demo <a class="header-anchor" href="#autoquery-studio-demo" aria-hidden="true">#</a></h3><p>To see how productive the power combo of AutoQuery + ServiceStack Studio is together checkout the <a href="/autoquery-crud-bookings.html">AutoQuery CRUD Bookings Demo</a> showing how to create a multi-user Bookings System from scratch within minutes.</p><h2 id="validation-rules-ui" tabindex="-1"><a href="/studio-validation-rules.html">Validation Rules UI</a> <a class="header-anchor" href="#validation-rules-ui" aria-hidden="true">#</a></h2><p>For ServiceStack instances that have a Validation Source registered, <strong>Admin</strong> users will be able to specify additional Validation Rules &amp; have them immediately applied at runtime, where they&#39;ll be instantly verified in all existing <a href="/world-validation.html">ServiceStack Apps with Validation enabled</a> without any changes.</p><blockquote><p>YouTube demo: <a href="https://youtu.be/2FFRLxs7orU?t=75" target="_blank" rel="noopener noreferrer">Northwind Validation</a></p></blockquote><p><a href="https://youtu.be/2FFRLxs7orU?t=75" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/release-notes/v5.9/studio-validator-property.png" alt=""></a></p><p><a href="/studio-validation-rules.html">Validation Rules docs</a></p><h3 id="studio-desktop-app-vs-servicestack-admin" tabindex="-1">Studio Desktop App vs ServiceStack.Admin <a class="header-anchor" href="#studio-desktop-app-vs-servicestack-admin" aria-hidden="true">#</a></h3><p>The primary limitations with <a href="https://github.com/ServiceStack/Admin" target="_blank" rel="noopener noreferrer">ServiceStack Admin</a> was its deployment model where it had to be explicitly registered as a plugin in each ServiceStack instance, this means it could only be used on ServiceStack instances that explicitly had it registered, also it maintained the long release cadence of ServiceStack major releases which means the UI couldn&#39;t be updated frequently resulting in a stale long feedback loop.</p><h3 id="frequent-out-of-band-release-cadence" tabindex="-1">Frequent out-of-band release cadence <a class="header-anchor" href="#frequent-out-of-band-release-cadence" aria-hidden="true">#</a></h3><p>To overcome this ServiceStack Studio is delivered as a <a href="https://sharpscript.net/docs/gist-desktop-apps" target="_blank" rel="noopener noreferrer">Gist Desktop App</a> which, like a website will be running the latest version each time it&#39;s run. To reduce its download footprint the <code>app</code> and <code>x</code> dotnet tools now include the new <a href="https://github.com/ServiceStack/ServiceStack/tree/master/src/ServiceStack.Desktop" target="_blank" rel="noopener noreferrer">ServiceStack.Desktop</a> project which includes the common framework libraries that most Vue &amp; React Apps use which saves it from needing to be included in each Download. It also includes Google Material Design Icons SVGs &amp; a copy of <a href="https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself" target="_blank" rel="noopener noreferrer">fontawesome free icons</a> that all Desktop Apps will be able to use without the bandwidth cost for using them.</p><h3 id="light-footprint-always-use-latest-version" tabindex="-1">Light Footprint + Always use latest version <a class="header-anchor" href="#light-footprint-always-use-latest-version" aria-hidden="true">#</a></h3><p><a href="https://github.com/ServiceStack/Studio" target="_blank" rel="noopener noreferrer">ServiceStack/Studio</a> is a <a href="https://github.com/NetCoreTemplates/vue-lite" target="_blank" rel="noopener noreferrer">vue-lite</a> App that only uses SVG icons as they&#39;re small, high-quality at every scale, are customizable &amp; have built-in css classes making them easy to use declaratively where it takes advantage of <a href="/svg.html">ServiceStack&#39;s built-in SVG</a> support which allows optimal css bundles containing only the SVGs your App&#39;s use. All SVG icons used in Studio are defined in its <a href="https://github.com/ServiceStack/Studio/blob/master/wwwroot/_init.ss" target="_blank" rel="noopener noreferrer">_init.ss</a> startup script which defines which Material Design SVG to make available under which css bundle. It also registers its own custom SVG icons not contained in ServiceStack.Desktop&#39;s embedded resources and includes them as part of its <code>/css/app.css</code> bundle.</p><p>As a result of its architecture Studio gets bundled down to a <strong>55kb .zip</strong> which includes its 46kb (Uncompressed) <code>Studio.dll</code> plugin containing all its C# back-end logic (thanks to all ServiceStack .dll&#39;s being deployed with the dotnet tools as well). As it&#39;s <a href="https://gist.github.com/gistlyn/d8e7a56027ed6ec3060d9a9896931909" target="_blank" rel="noopener noreferrer">published as a Gist</a> it adds a bit more overhead (and Gist APIs aren&#39;t particularly fast) so there&#39;s a slight delay in loading from a Gist but still is able to load its home page in around <strong>2-3s</strong>, which includes the start time of the ServiceStack .NET Core App and the Chromium CEF Browser. The number of restarts should be minimal thanks to Studio being designed as a single UI to manage all your ServiceStack instances so you can reuse the same running Desktop App to manage multiple remote ServiceStack instances.</p>__VP_STATIC_END__`,50),d=[i,n,l];function c(u,h,p,g,m,v){return o(),a("div",null,d)}var S=t(r,[["render",c]]);export{f as __pageData,S as default};
