import{_ as e,c as n,o as s,a}from"./app.14440598.js";const y='{"title":"Deploying .NET Core Apps to Ubuntu with rsync","description":"","frontmatter":{"slug":"netcore-deploy-rsync","title":"Deploying .NET Core Apps to Ubuntu with rsync"},"headers":[{"level":3,"title":"Setup the deploy User Account","slug":"setup-the-deploy-user-account"},{"level":3,"title":"Setup supervisor","slug":"setup-supervisor"},{"level":3,"title":"/etc/supervisor/conf.d/web.myapp.conf","slug":"etc-supervisor-conf-d-web-myapp-conf"},{"level":3,"title":"Setup nginx","slug":"setup-nginx"},{"level":3,"title":"/etc/nginx/sites-available/myapp.example.org","slug":"etc-nginx-sites-available-myapp-example-org"},{"level":3,"title":"Setting up SSH keys","slug":"setting-up-ssh-keys"},{"level":3,"title":"Create the deployment script","slug":"create-the-deployment-script"}],"relativePath":"netcore-deploy-rsync.md","lastUpdated":1634495308426}',t={},o=a(`__VP_STATIC_START__<p>A common way for reliably hosting .NET Core Apps on Ubuntu is to use <a href="http://supervisord.org/index.html" target="_blank" rel="noopener noreferrer">supervisor</a> to monitor the <code>dotnet</code> self-hosting processes behind an nginx reverse proxy which handles external HTTP requests to your website and proxies them to the dotnet process running your Web App on a local port. You&#39;ll need access to a Unix environment on your client Desktop, either using Linux, OSX or <a href="https://github.com/ServiceStack/redis-windows#option-1-install-redis-on-ubuntu-on-windows" target="_blank" rel="noopener noreferrer">Installing Windows Subsystem for Linux (WSL)</a>.</p><h3 id="setup-the-deploy-user-account" tabindex="-1">Setup the deploy User Account <a class="header-anchor" href="#setup-the-deploy-user-account" aria-hidden="true">#</a></h3><p>We&#39;ll start by creating a dedicated user account for hosting and running your .NET Core Apps to mitigate potential abuse. SSH into your Ubuntu server and create the <code>deploy</code> user account with a <code>/home/deploy</code> home directory and add them to the <code>sudo</code> group:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">useradd</span> -m deploy
$ <span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">sudo</span> deploy
</code></pre></div><p>For seamless deployments use <code>visudo</code>:</p><div class="language-bash"><pre><code>$ visudo
</code></pre></div><p>To allow <code>deploy</code> to run <code>supervisorctl</code> without prompting for a password:</p><div class="language-ini"><pre><code><span class="token comment"># Allow members of group sudo to execute any command</span>
<span class="token key attr-name">%sudo   ALL</span><span class="token punctuation">=</span><span class="token value attr-value">(ALL:ALL) ALL</span>
<span class="token key attr-name">%deploy ALL</span><span class="token punctuation">=</span><span class="token value attr-value">(ALL:ALL) NOPASSWD: /usr/bin/supervisorctl</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">Tip</p><p>In vi type <code>i</code> to start editing a file and <code>ESC</code> to quit edit mode and <code>:wq</code> to save your changes before exiting</p></div><h3 id="setup-supervisor" tabindex="-1">Setup supervisor <a class="header-anchor" href="#setup-supervisor" aria-hidden="true">#</a></h3><p>Install supervisor using apt-get:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> supervisor
</code></pre></div><p>You&#39;ll need to create a separate config file for each app in <code>/etc/supervisor/conf.d/</code>. We can use the same template below by replacing <code>myapp</code> with the name of your App:</p><h3 id="etc-supervisor-conf-d-web-myapp-conf" tabindex="-1">/etc/supervisor/conf.d/web.myapp.conf <a class="header-anchor" href="#etc-supervisor-conf-d-web-myapp-conf" aria-hidden="true">#</a></h3><div class="language-ini"><pre><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">program:web-myapp</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">command</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/dotnet /home/deploy/apps/myapp/MyApp.dll</span>
<span class="token key attr-name">directory</span><span class="token punctuation">=</span><span class="token value attr-value">/home/deploy/apps/myapp</span>
<span class="token key attr-name">autostart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">stderr_logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/web-myapp.err.log</span>
<span class="token key attr-name">stdout_logfile</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/web-myapp.out.log</span>
<span class="token key attr-name">environment</span><span class="token punctuation">=</span><span class="token value attr-value">ASPNETCORE_ENVIRONMENT=Production</span>
<span class="token key attr-name">user</span><span class="token punctuation">=</span><span class="token value attr-value">deploy</span>
<span class="token key attr-name">stopsignal</span><span class="token punctuation">=</span><span class="token value attr-value">INT</span>
</code></pre></div><h3 id="setup-nginx" tabindex="-1">Setup nginx <a class="header-anchor" href="#setup-nginx" aria-hidden="true">#</a></h3><p>You&#39;ll also need to create a separate config for each website on nginx in /etc/nginx/sites-available/. You can use the same template for each website but you&#39;ll need to change the server_name with the domain name you want to use for the App and use a different port number for each App:</p><h3 id="etc-nginx-sites-available-myapp-example-org" tabindex="-1">/etc/nginx/sites-available/myapp.example.org <a class="header-anchor" href="#etc-nginx-sites-available-myapp-example-org" aria-hidden="true">#</a></h3><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> myapp.example.org</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5001</span><span class="token punctuation">;</span>
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
</code></pre></div><p>You&#39;ll then need to create symlink for each website to tell nginx you want each website to be enabled:</p><div class="language-bash"><pre><code>$ <span class="token function">ln</span> -s /etc/nginx/sites-available/myapp.example.org /etc/nginx/sites-enabled/myapp.example.org
</code></pre></div><p>After this we can tell nginx to reload its configuration, as there&#39;s nothing listening to <code>http://localhost:5001</code> yet nginx will return a 502 Bad Gateway response but will start working as soon as our deployed .NET Core Apps are up and running.</p><div class="language-bash"><pre><code>$ /etc/init.d/nginx reload
</code></pre></div><h3 id="setting-up-ssh-keys" tabindex="-1">Setting up SSH keys <a class="header-anchor" href="#setting-up-ssh-keys" aria-hidden="true">#</a></h3><p>We can now exit our remote Linux server and return to our local machine and prepare our deployment script. Before doing this we recommend <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2" target="_blank" rel="noopener noreferrer">setting up SSH and copying your SSH public key to your remote server</a> which is both more secure and more convenient than using a password.</p><h3 id="create-the-deployment-script" tabindex="-1">Create the deployment script <a class="header-anchor" href="#create-the-deployment-script" aria-hidden="true">#</a></h3><p><a href="https://rsync.samba.org/" target="_blank" rel="noopener noreferrer">rsync</a> is a beautiful utility that provides a fast, secure file transfer over SSH which you can use to sync the contents of folders to a remote site. There&#39;s only 2 commands you need to run to deploy a local .NET Core App remotely, <code>rsync</code> to sync the published .NET Core App files and <code>supervisorctl</code> to restart the <code>supervisord</code> process that runs and monitor the .NET Core App which you can add to a <a href="https://github.com/NetCoreApps/TechStacks/blob/master/src/TechStacks/deploy.sh" target="_blank" rel="noopener noreferrer">deploy.sh</a> that you can run with WSL bash:</p><div class="language-shell"><pre><code><span class="token function">rsync</span> -avz -e <span class="token string">&#39;ssh&#39;</span> bin/Release/netcoreapp3.1/publish/ ubuntu@myapp.example.org:/home/deploy/apps/myapp
<span class="token function">ssh</span> ubuntu@myapp.example.org <span class="token string">&quot;sudo supervisorctl restart web-myapp&quot;</span>
</code></pre></div><p>To automate the entire deployment down to a single command you can add an npm script to your project&#39;s <code>package.json</code> that creates a production client and server build of your App before running WSL&#39;s <code>bash</code> to run the deploy script. All <a href="/templates-single-page-apps.html">Webpack Single Page App Templates</a> already have a <strong>publish</strong> npm script, so you would just need to add a <strong>deploy</strong> script to run publish before running the above <code>deploy.sh</code></p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;publish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nuxt build &amp;&amp; dotnet publish -c Release&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run publish &amp;&amp; bash deploy.sh&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Now to deploy your App you can just run:</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> run deploy
</code></pre></div><p>Which deploys your published App to your remote Ubuntu server instance using <code>rsync</code> to only copy the incremental parts of the App that&#39;s changed (typically completing in &lt;1s) and <code>ssh</code> to run a remote command to restart the <code>suprvisord</code> process, starting the .NET Core App with the latest deployed version.</p>__VP_STATIC_END__`,33),p=[o];function r(c,l,i,u,d,h){return s(),n("div",null,p)}var m=e(t,[["render",r]]);export{y as __pageData,m as default};
