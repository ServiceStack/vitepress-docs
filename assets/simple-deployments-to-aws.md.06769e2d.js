import{_ as e,c as t,o as s,a}from"./app.14440598.js";const m='{"title":"Deploy multiple ASP.NET Websites to AWS with WebDeploy","description":"","frontmatter":{"title":"Deploy multiple ASP.NET Websites to AWS with WebDeploy"},"headers":[{"level":2,"title":"Setting up the instance","slug":"setting-up-the-instance"},{"level":2,"title":"Deploy using Publish from Visual Studio","slug":"deploy-using-publish-from-visual-studio"},{"level":2,"title":"Deploy using Gulp","slug":"deploy-using-gulp"},{"level":3,"title":"Bundling","slug":"bundling"}],"relativePath":"simple-deployments-to-aws.md","lastUpdated":1634495308446}',o={},n=a(`<p>We&#39;ve <a href="/deploy-multiple-sites-to-aws.html#why-deploy-multiple-sites-to-a-single-aws-instance">previously discussed</a> the cost and automation benefits of <strong>deploying multiple websites to a single AWS instance</strong> using <a href="/deploy-multiple-sites-to-aws.html">TeamCity and Octopus Deploy</a> which is a great combination for managing production website deployments, taking advantage of the automation capabilities of TeamCity and the release management features of Octopus Deploy.</p><p>There&#39;s an even simpler option for deploying multiple <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Websites to a single AWS instance which can be initiated directly from within <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> (i.e. without needing any external TeamCity and OctopusDeploy services) by using <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s built-in <strong>Web Deploy</strong> tool. In this tutorial we&#39;ll walkthrough 2 different approaches for deploying websites using either <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s <strong>Publish Web Deploy wizard</strong> or alternatively using a <strong>Gulp Task</strong> which is better suited for deploying Single Page Apps requiring any necessary pre and post processing packaging and deployment steps.</p><h2 id="setting-up-the-instance" tabindex="-1">Setting up the instance <a class="header-anchor" href="#setting-up-the-instance" aria-hidden="true">#</a></h2><p>For a concrete example, we&#39;re going to be using an <a href="http://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer">AWS EC2 instance</a> running Windows Server 2012 with IIS installed. To enable Web Deploy, a package needs to be installed on the server so you will need a few things to get started.</p><ul><li>Remote access to the instance</li><li><a href="http://www.microsoft.com/web/downloads/platform.aspx" target="_blank" rel="noopener noreferrer">Web platform installer</a></li><li>An IIS application to deploy too</li></ul><p>By default, you should have remote access to your EC2 instance, however, if you don\u2019t, you will need to add an inbound network rule to the security group that your instance is running under:</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/open-aws-ports-1.png" alt="RDP port"></p><p>This can be done by locating your instance in AWS, and clicking on the currently assigned security group:</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/aws-security-group.png" alt="View security group"></p><p>While here, you will also need to add a new security rule for Web Deploy to work. It uses port <strong>8172</strong> by default.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/open-aws-ports-2.png" alt="WebDeploy and HTTP/S ports"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>It is good practice to restrict inbound ports to RDP and other ports related to administrative tasks to a subnet or even specific IP address to improve security. See AWS&#39;s &quot;<a href="http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_NACLs.html" target="_blank" rel="noopener noreferrer">Recommended Network ACL Rules for Your VPC</a>&quot;</p></div><p>If you are missing HTTP and HTTPS, ensure these have been added as well.</p><p>Now we can remote into your instance via RDP. <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/connecting_to_windows_instance.html" target="_blank" rel="noopener noreferrer">Amazon has some detailed documentation</a> about how to go about this, but basically you will need the address of the server, username and password.</p><p>Once connected, you\u2019ll want to copy across the Web Platform Installer to enable the Web Deploy feature to work on IIS. Run the web platform installer and search up the top right for <strong>Web Deploy</strong> and one of the results should be <strong>Web Deploy 3.5 for Hosting Servers</strong>.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/install-webdeploy-hosting.png" alt="Install web deploy hosting"></p><p>Click <strong>Add</strong> and then <strong>Install</strong> at the bottom right.</p><p>Once installed, we now have to create an IIS web site as our deployment target.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/create-iis-application.png" alt="Create IIS application"></p><p>Open the IIS Manager, right click on <strong>Sites</strong>, select <strong>Add Website...</strong> and provide the appropriate information for your web site such as the domain name. Record the name of your website as we will need this later.</p><h2 id="deploy-using-publish-from-visual-studio" tabindex="-1">Deploy using Publish from Visual Studio <a class="header-anchor" href="#deploy-using-publish-from-visual-studio" aria-hidden="true">#</a></h2><p>With the remote server setup to accept Web Deployed applications, we can create an application to deploy. For this example, we are going to use the <strong>ServiceStack <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> with Bootstrap</strong> template from <a href="/create-your-first-webservice.html">ServiceStackVS</a>. This will create a simple HelloWorld application that we can use to test our deployment.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/bootstrap-app-template-select.png" alt="Bootstrap template selection"></p><p>Once created, we can use the Visual Studio publish wizard by right-clicking on the main project at the top and selecting <code>Publish...</code>:</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/publish-wizard-1.png" alt="Create publish profile"></p><p>At the first screen, select a <strong>Custom</strong> publish target and give your profile a name like <strong>AWS</strong>:</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/publish-name-profile.png" alt="Name publish profile"></p><p>The next screen will require your EC2 <strong>Public DNS</strong> name that can be obtained via the AWS management portal for your instance. Also, the site name we created earlier needs to match. You will also be required to provide a username and password of an account that has sufficient permissions to publish your application.</p><blockquote><p>An administration account has sufficient permissions, alternatively, there is an article on <strong><a href="http://www.iis.net/learn/install/installing-publishing-technologies/installing-and-configuring-web-deploy-on-iis-80-or-later" target="_blank" rel="noopener noreferrer">Installing and Configuring Web Deploy on IIS 8</a></strong> that explains this in the section titled <strong>Configuring a Site for Delegated Non-Administrator Deployment</strong>.</p></blockquote><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/publish-wizard-2.png" alt="Web deploy profile settings"></p><blockquote><p>You may get the following warning about certificate presented by the server, if you haven\u2019t setup the server with the appropriate certificates you can still continue. <img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/publish-cert-warning.png" alt="Certificate warning"></p></blockquote><p>Once <strong>Publish</strong> has started, this will build your application and push the files using Web Deploy. The first deployment might take some time due to having to copy all files required by the application to run, but subsequent copies only update the files that are different, making this a very quick way to update and present the progress of an application on a development server.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/wikis/web-deploy/webdeploy_bootstrap.gif" alt="Publish wizard demo"></p><h2 id="deploy-using-gulp" tabindex="-1">Deploy using Gulp <a class="header-anchor" href="#deploy-using-gulp" aria-hidden="true">#</a></h2><p>Although the Publish wizard is a great tool, by default, it doesn&#39;t work well with single page applications like AngularJS where the client side of the application that requires pre/post processing of client side scripts and assets. Another way to publish still using Web Deploy (msdeploy) is by using a Gulp task. The Gulp task simply wraps msdeploy using the <a href="https://github.com/ServiceStack/gulp-msdeploy" target="_blank" rel="noopener noreferrer">gulp-msdeploy Gulp package</a> (<a href="https://www.npmjs.org/~mrjackdavis" target="_blank" rel="noopener noreferrer">base on grunt-msdeploy written by Jack Davis</a>). If we create a new project using the <strong>AngularJS App</strong> template from ServiceStackVS, we can modify what is already there very quickly to get our application to deploy to our AWS instance.</p><p>Once the project is created, we will fill out the same details given to the Publish wizard, but in a configuration file located at <code>/wwwroot_build/publish/config.json</code>. By default, it has placeholder values shown below:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;iisApp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ExampleAngularJSApp1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;serverAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deploy-server.example.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{WebDeployUserName}&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;{WebDeployPassword}&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Where the <code>iisApp</code> value is the name of your project. Below is the filled in example details as shown in the publish wizard:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;iisApp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ExampleApplication&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;serverAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ec2-XXX-XXX-XXX-XXX.ap-southeast-2.compute.amazonaws.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Administrator&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;password&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;MyPassword123&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Once filled in, we can run the provided tasks 2 and 3 to package our application and task 4 to deploy it. If you are running Visual Studio 2015 (or 2013 with extension), these Gulp tasks can be very simply from Task Runner Explorer UI.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Even though by using GitHub&#39;s default Visual Studio .gitignore the config will not turn up in source control, the password is still <strong>stored in plain text</strong>. This should be taken into account when deciding if this method of deployment is suitable for your development/deployment environment</p></div><h3 id="bundling" tabindex="-1">Bundling <a class="header-anchor" href="#bundling" aria-hidden="true">#</a></h3><p>This template is also taking care of optimizations like CSS and JS minification in the packaging steps. Package of the server files and client files separately enable us to update and deploy an optimized client side version of our application quickly as only our client side resources will have to be updated.</p>`,43),i=[n];function r(p,l,c,u,d,h){return s(),t("div",null,i)}var b=e(o,[["render",r]]);export{m as __pageData,b as default};
