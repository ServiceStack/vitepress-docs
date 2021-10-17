import{_ as e,c as n,o as s,a}from"./app.14440598.js";const m='{"title":"Deploying .NET Core Apps to Amazon Linux 2 AMI","description":"","frontmatter":{"slug":"deploy-netcore-to-amazon-linux-2-ami","title":"Deploying .NET Core Apps to Amazon Linux 2 AMI"},"headers":[{"level":2,"title":"Amazon Linux 2","slug":"amazon-linux-2"},{"level":3,"title":"Install .NET 5.0","slug":"install-net-5-0"},{"level":3,"title":"Setup the deploy User Account","slug":"setup-the-deploy-user-account"},{"level":3,"title":"Setup supervisor","slug":"setup-supervisor"},{"level":3,"title":"Setup nginx","slug":"setup-nginx"},{"level":3,"title":"Start nginx","slug":"start-nginx"},{"level":3,"title":"Create Virtual Host Configuration","slug":"create-virtual-host-configuration"},{"level":3,"title":"/etc/nginx/conf.d/my-app.org.conf","slug":"etc-nginx-conf-d-my-app-org-conf"},{"level":3,"title":"Setting up SSH keys","slug":"setting-up-ssh-keys"},{"level":3,"title":"Create the deployment script","slug":"create-the-deployment-script"},{"level":3,"title":"Setup Lets Encrypt","slug":"setup-lets-encrypt"}],"relativePath":"deploy-netcore-to-amazon-linux-2-ami.md","lastUpdated":1634495307618}',o={},t=a(`<p>A common way for reliably hosting .NET Core Apps on Linux is to use <a href="http://supervisord.org/index.html" target="_blank" rel="noopener noreferrer">supervisor</a> to monitor the <code>dotnet</code> self-hosting processes behind an nginx reverse proxy which handles external HTTP requests to your website and proxies them to the dotnet process running your Web App on a local port. You&#39;ll need access to a Unix environment on your client Desktop, either using Linux, OSX or <a href="https://github.com/ServiceStack/redis-windows#option-1-install-redis-on-ubuntu-on-windows" target="_blank" rel="noopener noreferrer">Installing Windows Subsystem for Linux (WSL)</a>.</p><h2 id="amazon-linux-2" tabindex="-1">Amazon Linux 2 <a class="header-anchor" href="#amazon-linux-2" aria-hidden="true">#</a></h2><p><a href="https://aws.amazon.com/amazon-linux-2/" target="_blank" rel="noopener noreferrer">Amazon Linux 2</a> is the next-generation Amazon Linux operating system that provides modern application environment with the latest enhancements from the Linux community and offers long-term support.</p><p>It is optimized for use in Amazon EC2 with a latest and tuned Linux kernel version. As a result, many customer workloads perform better on Amazon Linux 2.</p><p>We&#39;ll start by SSH&#39;ing into your Amazon Linux server, e.g:</p><div class="language-bash"><pre><code>$ <span class="token function">ssh</span> -i ~/pem/<span class="token operator">&lt;</span>my<span class="token operator">&gt;</span>.pem ec2-user@ec2-<span class="token operator">&lt;</span>ip-address<span class="token operator">&gt;</span>.compute-1.amazonaws.com
</code></pre></div><h3 id="install-net-5-0" tabindex="-1">Install .NET 5.0 <a class="header-anchor" href="#install-net-5-0" aria-hidden="true">#</a></h3><p>Being based on RHEL you can use yum and the <a href="https://docs.microsoft.com/en-us/dotnet/core/install/linux-centos#centos-7-" target="_blank" rel="noopener noreferrer">Cent OS 7 Install Instructions</a> to install .NET Core on Amazon Linux 2:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">rpm</span> -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
</code></pre></div><p>If you just want a minimal <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core runtime to run Web Apps you can just install:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> aspnetcore-runtime-5.0
</code></pre></div><p>But if you&#39;d also like to use dotnet tools like the <a href="/dotnet-tool.html">x super utility</a> you&#39;ll need to install the SDK:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> dotnet-sdk-5.0
</code></pre></div><p>Then install dotnet tools you want which will install under the <code>ec2-user</code> home directory at <code>~/.dotnet/tools</code>:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> --global x
</code></pre></div><p>You&#39;ll either need to exit &amp; re login to configure the dotnet tool path or you can import it manually with:</p><div class="language-bash"><pre><code>$ <span class="token builtin class-name">.</span> /etc/profile.d/dotnet-cli-tools-bin-path.sh
</code></pre></div><p>Where you should now be able be able to run dotnet tools, e.g:</p><div class="language-bash"><pre><code>$ x
</code></pre></div><h3 id="setup-the-deploy-user-account" tabindex="-1">Setup the deploy User Account <a class="header-anchor" href="#setup-the-deploy-user-account" aria-hidden="true">#</a></h3><p>We&#39;ll then create a dedicated user account for hosting and running your .NET Core Apps to mitigate potential abuse. Create the <code>deploy</code> user account with a <code>/home/deploy</code> home directory and add them to the <code>sudo</code> group:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">useradd</span> -m deploy
</code></pre></div><p>Create a password (optional):</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">passwd</span> deploy
</code></pre></div><p>For seamless deployments use <code>visudo</code>:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> visudo
</code></pre></div><p>To allow <code>deploy</code> to run <code>supervisorctl</code> without prompting for a password:</p><div class="language-ini"><pre><code><span class="token comment">## Same thing without a password</span>
<span class="token comment"># %wheel        ALL=(ALL)       NOPASSWD: ALL</span>
<span class="token key attr-name">%deploy ALL</span><span class="token punctuation">=</span><span class="token value attr-value">(ALL:ALL) NOPASSWD: /usr/bin/supervisorctl</span>
</code></pre></div><p>To give <code>sudo</code> commands access to installed dotnet tools add it to <code>secure_path</code>:</p><div class="language-ini"><pre><code><span class="token key attr-name">Defaults    secure_path</span> <span class="token punctuation">=</span> <span class="token value attr-value">/sbin:/bin:/usr/sbin:/usr/bin:/home/ec2-user/.dotnet/tools</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">Tip</p><p>In vi type <code>i</code> to start editing a file and <code>ESC</code> to quit edit mode and <code>:wq</code> to save your changes before exiting</p></div><p>Now we&#39;ll create an <code>~/apps</code> folder as the <code>deploy</code> user where your .NET Core Apps should be deployed to, e.g:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">su</span> - deploy
$ <span class="token function">mkdir</span> ~/apps
$ <span class="token builtin class-name">exit</span>
</code></pre></div><h3 id="setup-supervisor" tabindex="-1">Setup supervisor <a class="header-anchor" href="#setup-supervisor" aria-hidden="true">#</a></h3><p>Install <strong>supervisor</strong> on Amazon Linux 2 by first <a href="https://aws.amazon.com/premiumsupport/knowledge-center/ec2-enable-epel/" target="_blank" rel="noopener noreferrer">enabling the EPEL repository</a>:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> amazon-linux-extras <span class="token function">install</span> epel
</code></pre></div><p>Then use <code>yum</code> to install <code>supervisor</code></p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> supervisor
</code></pre></div><p>You&#39;ll also need to create a <code>supervisord.service</code> systemd script which you can install with:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> x mix supervisord.service
</code></pre></div><p>Which will write this <a href="https://gist.github.com/gistlyn/18dbaa471ea09f744493d5866ede599e" target="_blank" rel="noopener noreferrer">supervisord.service</a> gist to <code>/usr/lib/systemd/system</code>.</p><p>We&#39;ll also want to configure supervisor to look for our <code>*.conf</code> scripts in the conventional location:</p><div class="language-bash"><pre><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;files = /etc/supervisor/conf.d/*.conf&#39;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/supervisord.conf
</code></pre></div><p>We can then enable &amp; start the systemd supervisord.service with:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> supervisord.service
$ <span class="token function">sudo</span> systemctl start supervisord
</code></pre></div><p>You&#39;ll then need to create a separate config file for each app in <code>/etc/supervisor/conf.d/</code>.</p><p>We can use the same template below by replacing <code>my-app</code> with the name of your App:</p><h4 id="etc-supervisor-conf-d-app-my-app-conf" tabindex="-1">/etc/supervisor/conf.d/app.my-app.conf <a class="header-anchor" href="#etc-supervisor-conf-d-app-my-app-conf" aria-hidden="true">#</a></h4><div class="language-ini"><pre><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">program:app-my-app</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">command</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/dotnet /home/deploy/apps/my-app/MyApp.dll</span>
<span class="token key attr-name">directory</span><span class="token punctuation">=</span><span class="token value attr-value">/home/deploy/apps/my-app</span>
<span class="token key attr-name">autostart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">stderr_logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/app-my-app.err.log</span>
<span class="token key attr-name">stdout_logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/app-my-app.out.log</span>
<span class="token key attr-name">environment</span><span class="token punctuation">=</span><span class="token value attr-value">ASPNETCORE_ENVIRONMENT=Production,ASPNETCORE_URLS=&quot;http://*:5000/&quot;</span>
<span class="token key attr-name">user</span><span class="token punctuation">=</span><span class="token value attr-value">deploy</span>
<span class="token key attr-name">stopsignal</span><span class="token punctuation">=</span><span class="token value attr-value">INT</span>
</code></pre></div><p>We can use <a href="/mix-tool.html">x mix</a> to simplify this by downloading &amp; renaming the <code>supervisor</code> configuration template above:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> x mix supervisor -name acme
</code></pre></div><p>You can further customize the template by adding any number of <code>-replace term=with</code> switches, e.g. you can replace the <code>port</code> with:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> x mix supervisor -name acme -replace <span class="token assign-left variable">5000</span><span class="token operator">=</span><span class="token number">5002</span>
</code></pre></div><p>Then tell supervisor to register our App configuration:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> supervisorctl update
</code></pre></div><h3 id="setup-nginx" tabindex="-1">Setup nginx <a class="header-anchor" href="#setup-nginx" aria-hidden="true">#</a></h3><p>Use <code>yum</code> to install nginx:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> nginx
</code></pre></div><h3 id="start-nginx" tabindex="-1">Start nginx <a class="header-anchor" href="#start-nginx" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> systemctl start nginx.service
</code></pre></div><h3 id="create-virtual-host-configuration" tabindex="-1">Create Virtual Host Configuration <a class="header-anchor" href="#create-virtual-host-configuration" aria-hidden="true">#</a></h3><p>You&#39;ll also need to create a separate config for each website on nginx in <code>/etc/nginx/conf.d/</code>. You can use the same template for each website but you&#39;ll need to change the server_name with the domain name you want to use for the App and use a different port number for each App:</p><h3 id="etc-nginx-conf-d-my-app-org-conf" tabindex="-1">/etc/nginx/conf.d/my-app.org.conf <a class="header-anchor" href="#etc-nginx-conf-d-my-app-org-conf" aria-hidden="true">#</a></h3><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> my-app.org</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection keep-alive</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_cache_bypass</span> <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_buffering</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_ignore_client_abort</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">500m</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Or use <a href="/mix-tool.html">x mix</a> to write the above template using your preferred <strong>port</strong> and <strong>TLD</strong> with:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> x mix nginx-yum -name acme -replace <span class="token assign-left variable">5000</span><span class="token operator">=</span><span class="token number">5002</span> -replace <span class="token assign-left variable">org</span><span class="token operator">=</span>io
</code></pre></div><p>After this we can tell nginx to reload its configuration, as there&#39;s nothing listening to <code>http://localhost:5002</code> yet nginx will return a 502 Bad Gateway response but will start working as soon as our deployed .NET Core Apps are up and running.</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> nginx -s reload
</code></pre></div><h3 id="setting-up-ssh-keys" tabindex="-1">Setting up SSH keys <a class="header-anchor" href="#setting-up-ssh-keys" aria-hidden="true">#</a></h3><p>We can now exit our remote Linux server and return to our local machine and prepare our deployment script. Before doing this we recommend <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2" target="_blank" rel="noopener noreferrer">setting up SSH and copying your SSH public key to your remote server</a> which is both more secure and more convenient than using a password. You&#39;ll want to configure the <code>~/.ssh/authorized_keys</code> for your <code>deploy</code> user account as well as <code>ec2-user</code> account for convenience.</p><p>A manual &#39;tool-free&#39; solution if you&#39;re using WSL is to copy your SSH public key to the clipboard, e.g:</p><div class="language-bash"><pre><code>$ <span class="token function">cat</span> ~/.ssh/id_rsa.pub <span class="token operator">|</span> clip.exe
</code></pre></div><p>Then as the <code>deploy</code> user paste the contents of <code>id_rsa.pub</code> to <code>/home/deploy/.ssh/authorized_keys</code> and ensure it has the correct restrictive permissions:</p><div class="language-bash"><pre><code>$ <span class="token function">mkdir</span> ~/.ssh
$ <span class="token function">vi</span> ~/.ssh/authorized_keys
<span class="token comment"># i + paste clipboard + &lt;esc&gt;:wq</span>
$ <span class="token function">chmod</span> <span class="token number">700</span> ~/.ssh
$ <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys
</code></pre></div><h3 id="create-the-deployment-script" tabindex="-1">Create the deployment script <a class="header-anchor" href="#create-the-deployment-script" aria-hidden="true">#</a></h3><p><a href="https://rsync.samba.org/" target="_blank" rel="noopener noreferrer">rsync</a> is a beautiful utility that provides a fast, secure file transfer over SSH which you can use to sync the contents of folders to a remote site. There&#39;s only 2 commands you need to run to deploy a local .NET Core App remotely, <code>rsync</code> to sync the published .NET Core App files and <code>supervisorctl</code> to restart the <code>supervisord</code> process that runs and monitor the .NET Core App which you can add to a <a href="https://github.com/NetCoreApps/TechStacks/blob/master/src/TechStacks/deploy.sh" target="_blank" rel="noopener noreferrer">deploy.sh</a> that you can run with WSL bash:</p><div class="language-shell"><pre><code><span class="token function">rsync</span> -avz -e <span class="token string">&#39;ssh&#39;</span> bin/Release/net5/publish/ deploy@ec2-<span class="token operator">&lt;</span>ip-address<span class="token operator">&gt;</span>.compute-1.amazonaws.com:/home/deploy/apps/acme
<span class="token function">ssh</span> deploy@ec2-<span class="token operator">&lt;</span>ip-address<span class="token operator">&gt;</span>.compute-1.amazonaws.com <span class="token string">&quot;sudo supervisorctl restart app-acme&quot;</span>
</code></pre></div><p>To automate the entire deployment down to a single command you can add an npm script to your project&#39;s <code>package.json</code> that creates a production client and server build of your App before running WSL&#39;s <code>bash</code> to run the deploy script. All <a href="/templates-single-page-apps.html">Webpack Single Page App Templates</a> already have a <strong>publish</strong> npm script, so you would just need to add a <strong>deploy</strong> script to run publish before running the above <code>deploy.sh</code></p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;publish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotnet publish -c Release&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run publish &amp;&amp; bash deploy.sh&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Now to deploy your App you can just run:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> run deploy
</code></pre></div><p>Which deploys your published App to your remote Linux server instance using <code>rsync</code> to only copy the incremental parts of the App that&#39;s changed (typically completing in &lt;1s) and <code>ssh</code> to run a remote command to restart the <code>suprvisord</code> process, starting the .NET Core App with the latest deployed version.</p><p>After you deploy your and restart your <code>supervisor</code> Service your .NET Core App should now be publicly available at your chosen domain, if you have issues you can view your App&#39;s error log for info, e.g:</p><div class="language-bash"><pre><code>$ <span class="token function">tail</span> -n <span class="token number">50</span> /var/log/app-<span class="token operator">&lt;</span>my-app<span class="token operator">&gt;</span>.err.log
</code></pre></div><h3 id="setup-lets-encrypt" tabindex="-1">Setup Lets Encrypt <a class="header-anchor" href="#setup-lets-encrypt" aria-hidden="true">#</a></h3><p>If you&#39;re configuring an Internet Website you&#39;ll also likely want to configure it to use SSL, the easiest &amp; free way is to use <a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer">letsencrypt.org</a> which you can install with:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> yum <span class="token function">install</span> certbot python2-certbot-nginx 
</code></pre></div><p>Then use <code>certbot</code> to automatically configure the domains you want to configure to use SSL, e.g:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> certbot -d acme.io -d www.acme.io
</code></pre></div><p>Now you&#39;re .NET Core creation should be accessible via <code>https://</code> &amp; the shiny new secure badge in the users Browsers URL.</p>`,90),p=[t];function r(c,l,i,d,u,h){return s(),n("div",null,p)}var k=e(o,[["render",r]]);export{m as __pageData,k as default};
