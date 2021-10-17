import{_ as n,c as s,o as e,a}from"./app.14440598.js";const h='{"title":"gRPC SSL Configuration","description":"","frontmatter":{"slug":"grpc-ssl","title":"gRPC SSL Configuration"},"headers":[{"level":2,"title":"Exporting your Development Certificate","slug":"exporting-your-development-certificate"},{"level":3,"title":"Generating a new Development Certificate","slug":"generating-a-new-development-certificate"},{"level":3,"title":"Trust Certificate on Windows","slug":"trust-certificate-on-windows"},{"level":3,"title":"Trust Certificate on Linux or macOS","slug":"trust-certificate-on-linux-or-macos"},{"level":2,"title":"Generating a new Production Certificate","slug":"generating-a-new-production-certificate"},{"level":3,"title":".NET Core Configuration","slug":"net-core-configuration"},{"level":3,"title":"Nginx","slug":"nginx"},{"level":3,"title":"SSL terminated gRPC endpoint","slug":"ssl-terminated-grpc-endpoint"},{"level":3,"title":"Proxying Internal SSL gRPC Requests","slug":"proxying-internal-ssl-grpc-requests"},{"level":3,"title":"Integration tests of different gRPC endpoints","slug":"integration-tests-of-different-grpc-endpoints"},{"level":3,"title":"Troubleshooting","slug":"troubleshooting"},{"level":3,"title":"Lets Encrypt","slug":"lets-encrypt"}],"relativePath":"grpc-ssl.md","lastUpdated":1634495307618}',t={},o=a(`<p>By default gRPC projects uses <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Core&#39;s trusted Development certificate (typically created on install), or can be configured with:</p><div class="language-bash"><pre><code>$ dotnet dev-certs https --trust
</code></pre></div><p>Many other languages requires this development certificate in order to establish a secure SSL connection, which can be exported with:</p><h2 id="exporting-your-development-certificate" tabindex="-1">Exporting your Development Certificate <a class="header-anchor" href="#exporting-your-development-certificate" aria-hidden="true">#</a></h2><p>Export your localhost self-signed .NET Core development certificate with:</p><div class="language-bash"><pre><code>$ dotnet dev-certs https --export-path <span class="token builtin class-name">.</span>
</code></pre></div><p>If that fails see if you can diagnose and resolve the issue from the verbose output:</p><div class="language-bash"><pre><code>$ dotnet dev-certs https --export-path <span class="token builtin class-name">.</span> --verbose
</code></pre></div><p>If you can&#39;t keep copy of the certificates <strong>thumbprint</strong>, then export it via Windows Certificate Manager:</p><div class="language-bash"><pre><code>$ certmgr
</code></pre></div><ol><li>Go to <code>Personal &gt; Certificates</code></li><li>Select certificate <strong>Issued To</strong> <code>localhost</code><ul><li>If you have multiple certificates it&#39;s likely the one that expires the latest (double-check with thumbprint above to make sure)</li></ul></li><li>Click on <code>Action &gt; All Tasks &gt; Export</code></li><li>In the Export Wizard select <strong>No, do not export the private key</strong></li><li>Select 2nd option <strong>Base-64 encoded X.509 (.CER)</strong></li><li>Save to <code>localhost.cer</code></li></ol><h3 id="generating-a-new-development-certificate" tabindex="-1">Generating a new Development Certificate <a class="header-anchor" href="#generating-a-new-development-certificate" aria-hidden="true">#</a></h3><p>Should you prefer, you can create and use your own self-signed certificate using this OpenSSL script.</p><p>A quick way to download them is using the <a href="/mix-tool.html">mix tool</a>:</p><div class="language-bash"><pre><code>$ x mix -name ProjectName gen.https.sh
</code></pre></div><p>Otherwise you can create local text files and manually copy them with the contents below:</p><h4 id="gen-dev-https-sh" tabindex="-1"><a href="https://github.com/NetCoreTemplates/grpc/blob/master/scripts/gen-dev.https.sh" target="_blank" rel="noopener noreferrer">gen-dev.https.sh</a> <a class="header-anchor" href="#gen-dev-https-sh" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span>grpc
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -ge <span class="token number">1</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">fi</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOT<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span>dev.config</span>
[ req ]
default_bits       = 2048
default_md         = sha256
default_keyfile    = dev.key
prompt             = no
encrypt_key        = no

distinguished_name = dn
req_extensions     = v3_req
x509_extensions    = x509_req
string_mask        = utf8only

[ dn ]
commonName             = localhost dev cert
emailAddress           = test@localtest.me
countryName            = US
stateOrProvinceName    = DE
localityName           = Wilmington
organizationName       = Todo World

[ x509_req ]
subjectKeyIdentifier   = hash
authorityKeyIdentifier = keyid,issuer
basicConstraints       = critical, CA:false
keyUsage               = critical, keyEncipherment
subjectAltName         = @alt_names
# extendedKeyUsage  = serverAuth, clientAuth
nsComment              = &quot;OpenSSL Generated Certificate&quot;

[ v3_req ]
subjectKeyIdentifier   = hash
basicConstraints       = critical, CA:false
subjectAltName         = @alt_names
# extendedKeyUsage  = serverAuth, clientAuth
nsComment              = &quot;OpenSSL Generated Certificate&quot;

[ alt_names ]
DNS.1                  = localhost
EOT</span>

openssl req -config dev.config -new -out dev.csr.pem
openssl x509 -req -days <span class="token number">365</span> -extfile dev.config -extensions v3_req -in dev.csr.pem -signkey dev.key -out dev.crt
openssl pkcs12 -export -out dev.pfx -inkey dev.key -in dev.crt -password pass:<span class="token variable">$PASSWORD</span>
<span class="token function">rm</span> dev.config dev.csr.pem
<span class="token comment"># cp dev.pfx ../MyApp</span>
</code></pre></div><p>Linux or WSL Bash:</p><div class="language-bash"><pre><code>$ ./gen-dev.https.sh
</code></pre></div><p>Windows:</p><div class="language-bash"><pre><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span> <span class="token function">bash</span> gen-dev.https.sh
</code></pre></div><p>Options:</p><div class="language-bash"><pre><code>$ gen-dev.https.sh <span class="token operator">&lt;</span>PASSWORD<span class="token operator">&gt;</span>
</code></pre></div><h3 id="trust-certificate-on-windows" tabindex="-1">Trust Certificate on Windows <a class="header-anchor" href="#trust-certificate-on-windows" aria-hidden="true">#</a></h3><p>Import the pfx certificate:</p><div class="language-bash"><pre><code>$ powershell Import-PfxCertificate -FilePath dev.pfx Cert:<span class="token punctuation">\\</span>LocalMachine<span class="token punctuation">\\</span>My -Password <span class="token punctuation">(</span>ConvertTo-SecureString grpc -asplaintext -force<span class="token punctuation">)</span> -Exportable
</code></pre></div><p>Trust the certificate by importing the pfx certificate into your trusted root:</p><div class="language-bash"><pre><code>$ powershell Import-Certificate -FilePath dev.crt -CertStoreLocation Cert:<span class="token punctuation">\\</span>CurrentUser<span class="token punctuation">\\</span>Root
</code></pre></div><h3 id="trust-certificate-on-linux-or-macos" tabindex="-1">Trust Certificate on Linux or macOS <a class="header-anchor" href="#trust-certificate-on-linux-or-macos" aria-hidden="true">#</a></h3><p>See <a href="https://devblogs.microsoft.com/aspnet/configuring-https-in-asp-net-core-across-different-platforms/" target="_blank" rel="noopener noreferrer">Configuring HTTPS in ASP.NET Core across different platforms</a> for examples of trusting SSL Certificates on different platforms.</p><p>Although recommended it&#39;s not necessary to trust self-signed certificates to enable secure gRPC SSL endpoints as servers and clients can be configured to use these OpenSSL generated self-signed certificates without out-of-band certificate registration.</p><h2 id="generating-a-new-production-certificate" tabindex="-1">Generating a new Production Certificate <a class="header-anchor" href="#generating-a-new-production-certificate" aria-hidden="true">#</a></h2><h4 id="gen-prod-https-sh" tabindex="-1"><a href="https://github.com/NetCoreTemplates/grpc/blob/master/scripts/gen-prod.https.sh" target="_blank" rel="noopener noreferrer">gen-prod.https.sh</a> <a class="header-anchor" href="#gen-prod-https-sh" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token assign-left variable">DOMAIN</span><span class="token operator">=</span>todoworld.servicestack.net
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -ge <span class="token number">1</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token assign-left variable">DOMAIN</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span>grpc
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> -ge <span class="token number">2</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token assign-left variable">PASSWORD</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token keyword">fi</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOT<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span>prod.config</span>
[ req ]
default_bits       = 2048
default_md         = sha256
default_keyfile    = prod.key
prompt             = no
encrypt_key        = no
distinguished_name = dn
req_extensions     = v3_req
x509_extensions    = x509_req
string_mask        = utf8only
[ dn ]
commonName             = TodoWorld prod cert
emailAddress           = todoworld@servicestack.net
countryName            = US
stateOrProvinceName    = DE
localityName           = Wilmington
organizationName       = Todo World
[ x509_req ]
subjectKeyIdentifier   = hash
authorityKeyIdentifier = keyid,issuer
basicConstraints       = critical, CA:false
keyUsage               = critical, keyEncipherment
subjectAltName         = @alt_names
# extendedKeyUsage     = serverAuth, clientAuth
nsComment              = &quot;OpenSSL Generated Certificate&quot;
[ v3_req ]
subjectKeyIdentifier   = hash
basicConstraints       = critical, CA:false
subjectAltName         = @alt_names
# extendedKeyUsage     = serverAuth, clientAuth
nsComment              = &quot;OpenSSL Generated Certificate&quot;
[ alt_names ]
DNS.1                  = <span class="token variable">$DOMAIN</span>
EOT</span>

openssl req -config prod.config -new -out prod.csr.pem
openssl x509 -req -days <span class="token number">365</span> -extfile prod.config -extensions v3_req -in prod.csr.pem -signkey prod.key -out prod.crt
openssl pkcs12 -export -out prod.pfx -inkey prod.key -in prod.crt -password pass:<span class="token variable">$PASSWORD</span>
<span class="token function">rm</span> prod.config prod.csr.pem
<span class="token comment"># cp prod.pfx ../MyApp</span>
<span class="token comment"># cp prod.crt ../MyApp/wwwroot/grpc.crt</span>
</code></pre></div><p>Either replace <code>DOMAIN=...</code> and <code>PASSWORD=...</code> with your domain and password or specify them as arguments, e.g:</p><p>Linux or WSL Bash:</p><div class="language-bash"><pre><code>$ ./gen-prod.https.sh <span class="token operator">&lt;</span>DOMAIN<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>PASSWORD<span class="token operator">&gt;</span>
</code></pre></div><p>Windows:</p><div class="language-bash"><pre><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span> <span class="token function">bash</span> gen-prod.https.sh <span class="token operator">&lt;</span>DOMAIN<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>PASSWORD<span class="token operator">&gt;</span>
</code></pre></div><h3 id="net-core-configuration" tabindex="-1">.NET Core Configuration <a class="header-anchor" href="#net-core-configuration" aria-hidden="true">#</a></h3><p>When configuring a custom SSL Certificate directly in a .NET Core App you&#39;ll need to configure the <strong>GrpcSecure</strong> endpoint with the combined <a href="https://en.wikipedia.org/wiki/PKCS_12" target="_blank" rel="noopener noreferrer">PKCS #12</a> <strong>.pfx</strong> certificate, e.g:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Kestrel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Endpoints&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;GrpcSecure&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://*:5051&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Protocols&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Http2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Certificate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;Path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev.pfx&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;Password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grpc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h3><p>When hosting public gRPC endpoints its HTTP/2 endpoints are generally incompatible with existing HTTP/1.1 gateways and proxies that should effectively be treated as different channels and hosted on different ports.</p><p>Nginx added <a href="https://www.nginx.com/blog/nginx-1-13-10-grpc/" target="_blank" rel="noopener noreferrer">native support for gRPC in v1.13.10</a> which works as well you&#39;d expect where you can proxy gRPC requests to downstream .NET Core gRPC SSL and plain-text endpoints, but it doesn&#39;t support proxying HTTP/2 requests on the same port as proxying standard HTTP/1.1 requests so you&#39;ll need to use a different port if you have other standard HTTP websites you&#39;re proxying on the same server.</p><p>Below is the nginx configuration used in <a href="https://todoworld.servicestack.net" target="_blank" rel="noopener noreferrer">https://todoworld.servicestack.net</a> which covers the most popular gRPC hosting scenarios:</p><h4 id="plain-text-grpc" tabindex="-1">Plain text gRPC <a class="header-anchor" href="#plain-text-grpc" aria-hidden="true">#</a></h4><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">50054</span> http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> todoworld.servicestack.net</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">grpc_pass</span> grpc://127.0.0.1:5054</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ssl-terminated-grpc-endpoint" tabindex="-1">SSL terminated gRPC endpoint <a class="header-anchor" href="#ssl-terminated-grpc-endpoint" aria-hidden="true">#</a></h3><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">50051</span> http2 ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> todoworld.servicestack.net</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">grpc_pass</span> grpc://127.0.0.1:5054</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">ssl_certificate</span> /home/deploy/apps/certs/todoworld/prod.crt</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /home/deploy/apps/certs/todoworld/prod.key</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="proxying-internal-ssl-grpc-requests" tabindex="-1">Proxying Internal SSL gRPC Requests <a class="header-anchor" href="#proxying-internal-ssl-grpc-requests" aria-hidden="true">#</a></h3><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">50052</span> http2 ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> todoworld.servicestack.net</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">grpc_pass</span> grpcs://127.0.0.1:5051</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">ssl_certificate</span> /home/deploy/apps/certs/todoworld/prod.crt</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /home/deploy/apps/certs/todoworld/prod.key</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="integration-tests-of-different-grpc-endpoints" tabindex="-1">Integration tests of different gRPC endpoints <a class="header-anchor" href="#integration-tests-of-different-grpc-endpoints" aria-hidden="true">#</a></h3><p>You can quickly test each of these gRPC Endpoints by downloading the <a href="/csharp-add-servicestack-reference.html">C# Add ServiceStack Reference</a> DTOs with:</p><div class="language-bash"><pre><code>$ x csharp https://todoworld.servicestack.net
</code></pre></div><p>Which can be used to test gRPC Services on each of the different gRPC endpoints below:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">GrpcServiceClient</span> <span class="token function">SecureProdClient</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> port<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GrpcServiceClient</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;https://todoworld.servicestack.net:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">port</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">X509Certificate2</span><span class="token punctuation">(</span><span class="token string">&quot;https://todoworld.servicestack.net/grpc.crt&quot;</span><span class="token punctuation">.</span><span class="token function">GetBytesFromUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        GrpcUtils<span class="token punctuation">.</span><span class="token function">AllowSelfSignedCertificatesFrom</span><span class="token punctuation">(</span><span class="token string">&quot;todoworld.servicestack.net&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">GrpcServiceClient</span> <span class="token function">InsecureProdClient</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> port<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    GrpcClientFactory<span class="token punctuation">.</span>AllowUnencryptedHttp2 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GrpcServiceClient</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;http://todoworld.servicestack.net:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">port</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// SSL Nginx -&gt; plain-text .NET Core</span>
<span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token function">SecureProdClient</span><span class="token punctuation">(</span><span class="token number">50051</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// SSL Nginx -&gt; SSL .NET Core</span>
<span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token function">SecureProdClient</span><span class="token punctuation">(</span><span class="token number">50052</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Text Nginx -&gt; Text .NET Core</span>
<span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token function">InsecureProdClient</span><span class="token punctuation">(</span><span class="token number">50054</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>You can also test directly against the gRPC endpoints on the .NET Core server:</p><div class="language-csharp"><pre><code><span class="token comment">// SSL .NET Core</span>
<span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token function">SecureProdClient</span><span class="token punctuation">(</span><span class="token number">5051</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Text .NET Core</span>
<span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token function">InsecureProdClient</span><span class="token punctuation">(</span><span class="token number">5054</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h3><p>If you&#39;re experiencing network connection issues trying to connect with your own gRPC hosted service, make sure you&#39;ve opened access to each of the non-standard ports used. Example using Ubuntu&#39;s UFW firewall:</p><div class="language-bash"><pre><code>$ ufw allow <span class="token number">50051</span>
</code></pre></div><h3 id="lets-encrypt" tabindex="-1">Lets Encrypt <a class="header-anchor" href="#lets-encrypt" aria-hidden="true">#</a></h3><p><a href="https://letsencrypt.org" target="_blank" rel="noopener noreferrer">Let&#39;s Encrypt</a> has the nice property that it provides free, automated certificates from an open CA that&#39;s trusted in most operating systems and browsers and whilst it&#39;s possible to use Lets Encrypt for public gRPC endpoints although it&#39;s generally discouraged and not recommended for usage in internal applications, from <a href="https://twitter.com/j4cob" target="_blank" rel="noopener noreferrer">Jacob Hoffman-Andrews</a> of Let&#39;s Encrypt:</p><blockquote><p>In general, I recommend that people don\u2019t use Let\u2019s Encrypt certificates for gRPC or other internal RPC services. In my opinion, it\u2019s both easier and safer to generate a single-purpose internal CA using something like minica and generate both server and client certificates with it. That way you don\u2019t have to open up your RPC servers to the outside internet, plus you limit the scope of trust to just what\u2019s needed for your internal RPCs, plus you can have a much longer certificate lifetime, plus you can get revocation that works.</p></blockquote><p>Whilst it&#39;s not recommended to use Let&#39;s Encrypts short-lived certificates for securing gRPC endpoints, the easiest way to use them is to have them SSL terminated at your reverse proxy fronting your .NET Core App and have it proxy gRPC Requests to an internal plain-text gRPC endpoint, nginx example:</p><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">50051</span> http2 ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> <span class="token variable">$DOMAIN</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">grpc_pass</span> grpc://127.0.0.1:5054</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/letsencrypt/live/<span class="token variable">$DOMAIN</span>/fullchain.pem</span><span class="token punctuation">;</span>   <span class="token comment"># managed by Certbot</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/letsencrypt/live/<span class="token variable">$DOMAIN</span>/privkey.pem</span><span class="token punctuation">;</span> <span class="token comment"># managed by Certbot</span>
<span class="token punctuation">}</span>
</code></pre></div><p>They could also be used to secure the gRPC endpoint on your .NET Core App as well but that would require coordinating the re-creation of a <strong>.pfx</strong> certificate after Lets Encrypt certificates are renewed.</p>`,69),p=[o];function r(c,i,l,d,u,k){return e(),s("div",null,p)}var f=n(t,[["render",r]]);export{h as __pageData,f as default};
