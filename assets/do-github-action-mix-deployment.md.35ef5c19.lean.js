import{_ as e,c as t,o as n,a}from"./app.14440598.js";const k='{"title":"Deploying to Digital Ocean Droplet directly via GitHub Actions and SSH","description":"","frontmatter":{"title":"Deploying to Digital Ocean Droplet directly via GitHub Actions and SSH","slug":"do-github-action-mix-deployment"},"headers":[{"level":2,"title":"Digital Ocean Droplets Host","slug":"digital-ocean-droplets-host"},{"level":3,"title":"Droplet Setup","slug":"droplet-setup"},{"level":3,"title":"Create your new droplet","slug":"create-your-new-droplet"},{"level":3,"title":"Create your new SSH key","slug":"create-your-new-ssh-key"},{"level":3,"title":"Enable floating IP","slug":"enable-floating-ip"},{"level":2,"title":"Docker setup","slug":"docker-setup"},{"level":3,"title":"Install docker and docker-compose","slug":"install-docker-and-docker-compose"},{"level":3,"title":"Docker-compose install","slug":"docker-compose-install"},{"level":3,"title":"Get nginx reverse proxy and letsencrypt companion running","slug":"get-nginx-reverse-proxy-and-letsencrypt-companion-running"},{"level":2,"title":"Domain setup","slug":"domain-setup"},{"level":2,"title":"GitHub Repository Setup","slug":"github-repository-setup"},{"level":3,"title":"Make sure GitHub Enable improved container support is turned on","slug":"make-sure-github-enable-improved-container-support-is-turned-on"},{"level":3,"title":"Create secrets","slug":"create-secrets"},{"level":3,"title":"Tag release","slug":"tag-release"},{"level":3,"title":"GitHub Container Registry Pricing","slug":"github-container-registry-pricing"},{"level":3,"title":"Wrapping up","slug":"wrapping-up"}],"relativePath":"do-github-action-mix-deployment.md","lastUpdated":1634495307618}',o={},s=a(`__VP_STATIC_START__<p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/github-action-do-tutorial-header.png" alt=""></p><p>GitHub Actions are a great tool for automating builds, tests and deployments in a composable and flexible way. The ServiceStack <code>x</code> tool provides mix templates to incorporate into your existing applications and repositories that can speed up different types of workflows.</p><p>We&#39;ve created a mix template for building and deploying your ServiceStack app with GitHub Actions, GitHub Container Repository and Docker Compose all via SSH for a minimalist server hosting setup.</p><p>Specifically, we&#39;ll be using <code>x mix build release-ghr-vanilla</code> which has GitHub actions configured ready to deploy your ServiceStack application when a new GitHub release is created. This can be run at the root of your local repository folder, for example if you wanted to create an empty web application you would run:</p><div class="language-"><pre><code>git clone git@github.com:&lt;your user or org&gt;/DropletApp.git
cd DropletApp
x new web
x mix build release-ghr-vanilla
# &#39;y&#39; to process with writing files from x mix.
git add -A
git commit -m &quot;New ServiceStack project&quot;
git push
</code></pre></div><p>Pushing your new application to GitHub, the <code>build.yml</code> will run a <code>dotnet build</code> and <code>dotnet test</code> within the CI environment. For deployments, we want to get a server setup for hosting the new application.</p><blockquote><p><code>x mix release-*</code> are designed to be used with ServiceStack applications that were created with most <code>x new</code> project templates that follow the ServiceStack recommended project structure. They are designed to be a starting point that you can edit once created to suit your needs.</p></blockquote><h2 id="digital-ocean-droplets-host" tabindex="-1">Digital Ocean Droplets Host <a class="header-anchor" href="#digital-ocean-droplets-host" aria-hidden="true">#</a></h2><p>In this tutorial, we&#39;ll be using a Digital Ocean Droplet as the target server and walk through the steps required to setup this automated deployment process for your ServiceStack application.</p><h3 id="droplet-setup" tabindex="-1">Droplet Setup <a class="header-anchor" href="#droplet-setup" aria-hidden="true">#</a></h3><p>Since we are deploying a simple ServiceStack application, we are going to use the cheapest <code>Basic Droplet</code> at $5USD/month. This is plenty to host even multiple low traffic ServiceStack applications but your use case might have different hardware requirements.</p><h3 id="create-your-new-droplet" tabindex="-1">Create your new droplet <a class="header-anchor" href="#create-your-new-droplet" aria-hidden="true">#</a></h3><p>The basic droplet we are going to create will have the following configuration.</p><ul><li>Distribution - Ubuntu 20.04 LTS</li><li>Plan - Basic</li><li>$5/month</li><li>Datacenter region - Which ever suits your use case</li><li>VPC - default</li><li>Authentication - SSH keys, create a new one just for this server, follow the instructions on the right hand panel.</li></ul><p>The rest of the options, leave as default.</p><h3 id="create-your-new-ssh-key" tabindex="-1">Create your new SSH key <a class="header-anchor" href="#create-your-new-ssh-key" aria-hidden="true">#</a></h3><p>If you ended up using an existing SSH key, now would be the time to create one specifically for deploying applications to this server, and <strong>only that function</strong>.</p><p>The reason this is important is because we will be using the private key within our GitHub Actions, which means the private key generated will be leaving your local computer and stored within GitHub Secrets. In the event that this key is compromised, we want to limit its use.</p><p>Digital Ocean has some excellent documentation for <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04" target="_blank" rel="noopener noreferrer">this process here</a>.</p><h3 id="enable-floating-ip" tabindex="-1">Enable floating IP <a class="header-anchor" href="#enable-floating-ip" aria-hidden="true">#</a></h3><p>Once your Droplet has started, you&#39;ll want to <code>Enable Floating IP</code> so that we have a static public IP address to route to for a domain/subdomain.</p><p>This can be done via</p><ul><li><code>Manage</code></li><li><code>Droplets</code></li><li><code>Select your droplet</code></li><li>click <code>Enable Floating IP</code> at the top right.</li></ul><p><img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/digital-ocean-enable-floating-ip.png" alt="Enable Floating IP option"></p><h2 id="docker-setup" tabindex="-1">Docker setup <a class="header-anchor" href="#docker-setup" aria-hidden="true">#</a></h2><p>Now that our Droplet is running and has a public IP address, we&#39;ll want to install Docker and docker-compose.</p><p>SSH into your Droplet using the appropriate SSH key and your preferred SSH client (straight <code>ssh</code>, Putty for Windows, etc).</p><p>Eg, with a Linux <code>ssh</code> client, the command would be <code>ssh root@&lt;your_IP_or_domain&gt;</code> as <code>root</code> is the default user setup when creating an Ubuntu droplet.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>the user may change depending on how your server is setup. See <code>man ssh</code> for more details/options.</p></div><h3 id="install-docker-and-docker-compose" tabindex="-1">Install docker and docker-compose <a class="header-anchor" href="#install-docker-and-docker-compose" aria-hidden="true">#</a></h3><p>Installing Docker for Ubuntu 20.04 can be done via the repository with some setup or via Docker provided convenience scripts. For a more detailed walk through, <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04" target="_blank" rel="noopener noreferrer">DigitalOcean have a good write up here</a>. Scripted included below for ease of use.</p><h4 id="docker-via-convenience-script" tabindex="-1">Docker via convenience script <a class="header-anchor" href="#docker-via-convenience-script" aria-hidden="true">#</a></h4><div class="language-bash"><pre><code><span class="token function">curl</span> -fsSL https://get.docker.com -o get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh
</code></pre></div><blockquote><p>These scripts required sudo privileges, see <a href="https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script" target="_blank" rel="noopener noreferrer">Docker notes regarding security</a>. Full repository based <a href="https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository" target="_blank" rel="noopener noreferrer">script available here</a>. Docker is installed remoting under root in this example for simplification. Information of Docker security can be found in the <a href="https://docs.docker.com/engine/security/#docker-daemon-attack-surface" target="_blank" rel="noopener noreferrer">Docker docs</a></p></blockquote><h3 id="docker-compose-install" tabindex="-1">Docker-compose install <a class="header-anchor" href="#docker-compose-install" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">curl</span> -L <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.27.4/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span>&quot;</span> -o /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre></div><p>Run <code>docker-compose --version</code> to confirm.</p><blockquote><p>See <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04#step-1-%E2%80%94-installing-docker-compose" target="_blank" rel="noopener noreferrer">DigitalOcean article</a> for details on ensuring you have the latest version installed.</p></blockquote><h3 id="get-nginx-reverse-proxy-and-letsencrypt-companion-running" tabindex="-1">Get nginx reverse proxy and letsencrypt companion running <a class="header-anchor" href="#get-nginx-reverse-proxy-and-letsencrypt-companion-running" aria-hidden="true">#</a></h3><p>Now we have Docker and docker-compose installed on our new Droplet, we want to setup an nginx reverse proxy running in Docker. This will handle mapping requests to specific domain/subdomain requests to specific docker applications that have matching configuration as well as TLS registration via LetEncrypt. When a new docker container starts up and joins the bridge network, the nginx and letsencrypt companion detect the new application and look to see if routing and TLS certificate is needed.</p><p>In the <code>x mix release-ghr-vanilla</code> template, we include <code>deploy/nginx-proxy-compose.yml</code> file which can be copied to the droplet and run.</p><p>Here is the nginx docker-compose file in full.</p><div class="language-yml"><pre><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nginx-proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jwilder/nginx<span class="token punctuation">-</span>proxy
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>proxy
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> conf<span class="token punctuation">:</span>/etc/nginx/conf.d
      <span class="token punctuation">-</span> vhost<span class="token punctuation">:</span>/etc/nginx/vhost.d
      <span class="token punctuation">-</span> html<span class="token punctuation">:</span>/usr/share/nginx/html
      <span class="token punctuation">-</span> dhparam<span class="token punctuation">:</span>/etc/nginx/dhparam
      <span class="token punctuation">-</span> certs<span class="token punctuation">:</span>/etc/nginx/certs<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/tmp/docker.sock<span class="token punctuation">:</span>ro
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge

  <span class="token key atrule">letsencrypt</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jrcs/letsencrypt<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>companion<span class="token punctuation">:</span><span class="token number">2.0</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>le
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DEFAULT_EMAIL=you@example.com
    <span class="token key atrule">volumes_from</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx<span class="token punctuation">-</span>proxy
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> certs<span class="token punctuation">:</span>/etc/nginx/certs<span class="token punctuation">:</span>rw
      <span class="token punctuation">-</span> acme<span class="token punctuation">:</span>/etc/acme.sh
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>ro
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">conf</span><span class="token punctuation">:</span>
  <span class="token key atrule">vhost</span><span class="token punctuation">:</span>
  <span class="token key atrule">html</span><span class="token punctuation">:</span>
  <span class="token key atrule">dhparam</span><span class="token punctuation">:</span>
  <span class="token key atrule">certs</span><span class="token punctuation">:</span>
  <span class="token key atrule">acme</span><span class="token punctuation">:</span>
</code></pre></div><p>You can use <code>scp</code> or shared clipboard to copy the short YML file over. For this example, we are going to copy it straight to the <code>~/</code> (home) directory.</p><div class="language-"><pre><code>scp -i &lt;path to private ssh key&gt; ./nginx-proxy-compose.yml root@&lt;server_floating_ip&gt;:~/nginx-proxy-compose.yml
</code></pre></div><p>Once copied, we can use <code>docker-compose</code> to bring up the nginx reverse proxy.</p><div class="language-bash"><pre><code>docker-compose -f ~/nginx-proxy-compose.yml up -d
</code></pre></div><p>To confirm these are running, you can run <code>docker ps</code> so have a look at what containers are running on your server.</p><h2 id="domain-setup" tabindex="-1">Domain setup <a class="header-anchor" href="#domain-setup" aria-hidden="true">#</a></h2><p>Now our droplet server is all setup to host our docker applications, we want to make referring to our server easier by setting up a DNS record.</p><p>Specifically, we want to create an <code>A</code> record pointing to our Floating IP of our Droplet server.</p><blockquote><p>You will need to use your DNS provider service to manage the DNS records of your domains.</p></blockquote><h2 id="github-repository-setup" tabindex="-1">GitHub Repository Setup <a class="header-anchor" href="#github-repository-setup" aria-hidden="true">#</a></h2><p>With the Droplet server all setup, first we&#39;ll need an application to deploy!</p><p>Create a new repository on GitHub. This setup will work with public or private repositories, select your options and clone it to your local machine.</p><div class="language-bash"><pre><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>GitHub URL<span class="token operator">&gt;</span>
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project name<span class="token operator">&gt;</span>
</code></pre></div><p>We are going to use <code>x new web</code> as a command to create a blank ServiceStack application. Run this in your newly cloned repository folder, the project name will be derived from the repository directory name.</p><blockquote><p>If you create the project in a new directory before hand and want to name it, use <code>x new web &lt;project name&gt;</code>.</p></blockquote><p>The <code>x new</code> command gives us a working ServiceStack project from a template, <code>x mix</code> allows us to add additional templated files that work with templated ServiceStack projects.</p><p>Now our project is created, you can mix in our GitHub Action templates in the local repository folder by running:</p><div class="language-"><pre><code>x mix build release-ghr-vanilla
</code></pre></div><p>The <code>build</code> mix template provides a GitHub Action that builds and tests our dotnet project. The <code>release-ghr-vanilla</code> provides a GitHub Action that uses Docker to package the application, pushes the Docker image to GitHub Container Registry (<a href="http://ghcr.io" target="_blank" rel="noopener noreferrer">ghcr.io</a>) and deploys the application via SSH + <code>docker-compose</code> to our new Droplet.</p><p>Just like other <code>x mix</code> templates ServiceStack provides, these are a <em>starting</em> point to help get things running quickly with known patterns. Unlike external dependencies, they just copy the templated code that is editable and not tied to any code generation service that will update these files.</p><p>Files provided by the <code>release-ghr-vanilla</code> are:</p><ul><li><strong>.github/workflows/release.yml</strong> - Release GitHub Action Workflow</li><li><strong>deploy/docker-compose-template.yml</strong> - Templated docker-compose file used by the application</li><li><strong>deploy/nginx-proxy-compose.yml</strong> - File provided to get nginx reserve proxy setup as used by steps above.</li><li><strong>Dockerfile</strong> - Self contained Docker that builds, publishes and hosts your application.</li></ul><h3 id="make-sure-github-enable-improved-container-support-is-turned-on" tabindex="-1">Make sure GitHub <code>Enable improved container support</code> is turned on <a class="header-anchor" href="#make-sure-github-enable-improved-container-support-is-turned-on" aria-hidden="true">#</a></h3><p>The account or organization of your repository at the time of writing needs to &quot;Enable improved container support&quot;.</p><blockquote><p>This step may no longer be required once Improved Container Support is generally available.</p></blockquote><p>Goto:</p><ul><li><code>Account</code></li><li><code>Settings</code></li><li><code>Packages</code></li><li><code>Improved container support</code></li><li>select <code>Enable improved container support</code></li><li>Save.</li></ul><blockquote><p>See <a href="https://docs.github.com/en/packages/guides/enabling-improved-container-support" target="_blank" rel="noopener noreferrer">GitHub Docs</a> for details.</p></blockquote><p>Once these steps are done, our GitHub Actions will be able to push Docker images to GitHub Container Registry.</p><h4 id="full-steps" tabindex="-1">Full Steps <a class="header-anchor" href="#full-steps" aria-hidden="true">#</a></h4><p><strong>Create new repository in GitHub first.</strong></p><div class="language-bash"><pre><code><span class="token function">git</span> clone git@github.com:<span class="token operator">&lt;</span>your user or org<span class="token operator">&gt;</span>/WebApp.git <span class="token comment"># Where &quot;WebApp&quot; is the name of your repository</span>
<span class="token builtin class-name">cd</span> WebApp
x new web
x mix build release-ghr-vanilla
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&quot;Add new ServiceStack project with GitHub Action files&quot;</span>
<span class="token function">git</span> push
</code></pre></div><h5 id="steps-overview" tabindex="-1">Steps overview <a class="header-anchor" href="#steps-overview" aria-hidden="true">#</a></h5><ul><li>Create a new GitHub repository</li><li>Clone new repository locally</li><li>Change directory to new repository</li><li>Locally create ServiceStack project using <code>x new</code>.</li><li>Mix in GitHub Actions using <code>x mix</code></li><li>Commit and push changes to GitHub</li></ul><h3 id="create-secrets" tabindex="-1">Create secrets <a class="header-anchor" href="#create-secrets" aria-hidden="true">#</a></h3><p>The <code>x mix</code> templates needs <strong>6 pieces of information</strong> to perform the deployment, this information is added to the GitHub repository as the following <em>secrets</em>.</p><ul><li>CR_PAT - GitHub Personal Token with read/write access to packages.</li><li>DEPLOY_HOST - hostname used to SSH to, this should be a domain or subdomain with A record pointing to the server&#39;s IP adddress.</li><li>DEPLOY_PORT - SSH port, usually 22</li><li>DEPLOY_USERNAME - the username being logged into via SSH. Eg, <code>ubuntu</code>, <code>ec2-user</code>, <code>root</code> etc.</li><li>DEPLOY_KEY - SSH private key used to remotely access deploy server/app host.</li><li>LETSENCRYPT_EMAIL - Email address for your TLS certificate generation</li></ul><p>These secrets can use the <a href="https://cli.github.com/manual/gh_secret_set" target="_blank" rel="noopener noreferrer">GitHub CLI</a> for ease of creation. Eg, using the GitHub CLI the following can be set.</p><div class="language-bash"><pre><code>gh secret <span class="token builtin class-name">set</span> CR_PAT -b<span class="token string">&quot;&lt;CR_PAT, Container Registry Personal Access Token&gt;&quot;</span>
gh secret <span class="token builtin class-name">set</span> DEPLOY_HOST -b<span class="token string">&quot;&lt;DEPLOY_HOST, domain or subdomain for your application and server host.&gt;&quot;</span>
gh secret <span class="token builtin class-name">set</span> DEPLOY_PORT -b<span class="token string">&quot;&lt;DEPLOY_PORT, eg SSH port, usually 22&gt;&quot;</span>
gh secret <span class="token builtin class-name">set</span> DEPLOY_USERNAME -b<span class="token string">&quot;&lt;DEPLOY_USERNAME, the username being logged into via SSH. Eg, <span class="token variable"><span class="token variable">\`</span>ubuntu<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>ec2-user<span class="token variable">\`</span></span>, <span class="token variable"><span class="token variable">\`</span>root<span class="token variable">\`</span></span> etc.&gt;&quot;</span>
gh secret <span class="token builtin class-name">set</span> DEPLOY_KEY <span class="token operator">&lt;</span> <span class="token punctuation">[</span>path to <span class="token function">ssh</span> key<span class="token punctuation">]</span>
gh secret <span class="token builtin class-name">set</span> LETSENCRYPT_EMAIL -b<span class="token string">&quot;&lt;LETSENCRYPT_EMAIL, Email address for your TLS certificate generation, eg me@example.com&gt;&quot;</span>
</code></pre></div><p>The <code>CR_PAT</code> can be created via your <a href="https://github.com/settings/tokens/" target="_blank" rel="noopener noreferrer">GitHub Settings-&gt;Developer Settings-&gt;Personal access tokens page</a>, and selecting the <code>write:packages</code> permission. Copy the token somewhere secure, so we can use it when creating the secrets.</p><blockquote><p>Both the creation of the token and use in secrets are <em>only available on creation</em>, so if you want/need to reuse this, note it down somewhere secure like your password manager for reuse. The <code>CR_PAT</code> (Container Registry Personal Access Token) is required during the beta of GitHub Container Registry, however once released the standard <code>secrets.GITHUB_TOKEN</code> built into GitHub Actions should be able to be used and is recommended to avoid higher data transfer charges.</p></blockquote><p>Repository secrets can be created under Settings-&gt;Secrets.</p><h3 id="tag-release" tabindex="-1">Tag release <a class="header-anchor" href="#tag-release" aria-hidden="true">#</a></h3><p>To kick off any new deployment, we use GitHub Releases.</p><p>Provide a version number and name, the version will be used to tag the Docker image in <a href="http://GHCR.io" target="_blank" rel="noopener noreferrer">GHCR.io</a>. If you are using the GitHub CLI, you can also do this via the command line. For example,</p><div class="language-bash"><pre><code>gh release create v1 -t <span class="token string">&quot;v1&quot;</span> --notes <span class="token string">&quot;&quot;</span>
</code></pre></div><p>Go to the Actions tab in your repository to see the progress of your deployment.</p><blockquote><p>The initial deployment might take upto a minute for LetsEncrypt to generate and use the certificate with your domain. Make sure your DNS is all setup <strong>before publishing the Release</strong>, otherwise further delays related to DNS TTL will likely occur. If you are having problems with your app hosting, be sure to configure the logs in the nginx and your app docker containers for any startup issues. You can also run in attached mode to watch the output of these containers via <code>docker-compose -f ~/nginx-proxy-compose.yml up</code>.</p></blockquote><h3 id="github-container-registry-pricing" tabindex="-1">GitHub Container Registry Pricing <a class="header-anchor" href="#github-container-registry-pricing" aria-hidden="true">#</a></h3><p>If you&#39;re already have a Pro or Team plan, you get free allowances to using the GitHub Container Registry. It has the <a href="https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages#about-billing-for-github-packages" target="_blank" rel="noopener noreferrer">same pricing as the GitHub Packages</a> product which is summarized as the following for Pro or Team.</p><ul><li>2GB storage free</li><li>10GB data transfer free</li><li>Additional storage $0.25 per GB</li><li>Additional transfer out $0.50 per GB (GitHub Actions are free)</li></ul><p>With Docker images though, they can get large pretty quickly. While GitHub Container Registry is still in beta, it is free to use but additional storage and transfer costs are something to keep in mind. Hopefully use of retention policies and other features can help manage to keep these prices down.</p><blockquote><p>Once GitHub Container Registry is released the standard <code>secrets.GITHUB_TOKEN</code> built into GitHub Actions should be able to be used and is recommended to <a href="https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages#about-billing-for-github-packages" target="_blank" rel="noopener noreferrer">avoid higher data transfer charges</a>.</p></blockquote><h3 id="wrapping-up" tabindex="-1">Wrapping up <a class="header-anchor" href="#wrapping-up" aria-hidden="true">#</a></h3><p>Having a CI process from the very start of a project/prototype is something that pays off quickly, even as a solo developer. The <code>release-ghr-vanilla</code> template is designed to help get that process started by providing a &quot;no fuss&quot; pattern for prototyping ideas and keeping costs down while giving a dockerized path forward as your hosting requirements change. GitHub Actions provide a great way to build and maintain your CI process right where your code lives, and even though GitHub Container Repository is in the early stage, we think it provides a simplified workflow that works well for the indie/solo developer as well as teams. We intend to put together more of these templates and patterns for different use cases, feel free to give us feedback and let us know what you&#39;d like to see!</p>__VP_STATIC_END__`,98),i=[s];function r(c,p,l,u,d,h){return n(),t("div",null,i)}var m=e(o,[["render",r]]);export{k as __pageData,m as default};