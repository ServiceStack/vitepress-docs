<template>
  <link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">

  <div id="gist94750992" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-configure-auth-cs" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-c ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-configure-auth-cs-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-configure-auth-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Run before AppHost.Configure()</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-configure-auth-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">ConfigureAuth</span> : <span class="pl-en">IConfigureAppHost</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-configure-auth-cs-LC3" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-configure-auth-cs-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">Configure</span>(<span class="pl-en">IAppHost</span> <span class="pl-smi">appHost</span>)</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-configure-auth-cs-LC5" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-configure-auth-cs-LC6" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">AppSettings</span> <span class="pl-k">=</span> <span class="pl-smi">appHost</span>.<span class="pl-smi">AppSettings</span>;</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-configure-auth-cs-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">appHost</span>.<span class="pl-smi">Plugins</span>.<span class="pl-en">Add</span>(<span class="pl-k">new</span> <span class="pl-en">AuthFeature</span>(() <span class="pl-k">=&gt;</span> <span class="pl-k">new</span> <span class="pl-en">CustomUserSession</span>(),</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-configure-auth-cs-LC8" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">new</span> <span class="pl-en">IAuthProvider</span>[] {</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-configure-auth-cs-LC9" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">new</span> <span class="pl-en">CredentialsAuthProvider</span>(), <span class="pl-c"><span class="pl-c">//</span>Enable UserName/Password Credentials Auth</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-configure-auth-cs-LC10" class="blob-code blob-code-inner js-file-line">            }));</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-configure-auth-cs-LC11" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-configure-auth-cs-LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">appHost</span>.<span class="pl-smi">Plugins</span>.<span class="pl-en">Add</span>(<span class="pl-k">new</span> <span class="pl-en">RegistrationFeature</span>()); <span class="pl-c"><span class="pl-c">//</span>Enable /register Service</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-configure-auth-cs-LC13" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-configure-auth-cs-LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>override the default registration validation with your own custom implementation</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-configure-auth-cs-LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">appHost</span>.<span class="pl-en">RegisterAs</span>&lt;<span class="pl-en">CustomRegistrationValidator</span>, <span class="pl-en">IValidator</span>&lt;<span class="pl-en">Register</span>&gt;&gt;();</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-configure-auth-cs-LC16" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-configure-auth-cs-LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">container</span>.<span class="pl-en">Register</span>&lt;<span class="pl-en">ICacheClient</span>&gt;(<span class="pl-k">new</span> <span class="pl-en">MemoryCacheClient</span>()); <span class="pl-c"><span class="pl-c">//</span>Store User Sessions in Memory</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-configure-auth-cs-LC18" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-configure-auth-cs-LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">appHost</span>.<span class="pl-en">Register</span>&lt;<span class="pl-en">IAuthRepository</span>&gt;(<span class="pl-k">new</span> <span class="pl-en">InMemoryAuthRepository</span>()); <span class="pl-c"><span class="pl-c">//</span>Store Authenticated Users in Memory</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-configure-auth-cs-LC20" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-configure-auth-cs-LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">CreateUser</span>(<span class="pl-smi">appHost</span>, <span class="pl-s"><span class="pl-pds">"</span>admin@email.com<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Admin User<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>p@55wOrd<span class="pl-pds">"</span></span>, <span class="pl-smi">roles</span>:<span class="pl-k">new</span>[]{ <span class="pl-smi">RoleNames</span>.<span class="pl-smi">Admin</span> });</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-configure-auth-cs-LC22" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-configure-auth-cs-LC23" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-configure-auth-cs-LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Add initial Users to the configured Auth Repository</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-configure-auth-cs-LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">CreateUser</span>(<span class="pl-en">IAppHost</span> <span class="pl-smi">appHost</span>, <span class="pl-k">string</span> <span class="pl-smi">email</span>, <span class="pl-k">string</span> <span class="pl-smi">name</span>, <span class="pl-k">string</span> <span class="pl-smi">password</span>, <span class="pl-k">string</span>[] <span class="pl-smi">roles</span>)</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-configure-auth-cs-LC26" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-configure-auth-cs-LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">authRepo</span> <span class="pl-k">=</span> <span class="pl-smi">appHost</span>.<span class="pl-en">TryResolve</span>&lt;<span class="pl-en">IAuthRepository</span>&gt;();</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-configure-auth-cs-LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">newAdmin</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">UserAuth</span> { <span class="pl-smi">Email</span> <span class="pl-k">=</span> <span class="pl-smi">email</span>, <span class="pl-smi">DisplayName</span> <span class="pl-k">=</span> <span class="pl-smi">name</span> };</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-configure-auth-cs-LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">user</span> <span class="pl-k">=</span> <span class="pl-smi">authRepo</span>.<span class="pl-en">CreateUserAuth</span>(<span class="pl-smi">newAdmin</span>, <span class="pl-smi">password</span>);</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-configure-auth-cs-LC30" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">authRepo</span>.<span class="pl-en">AssignRoles</span>(<span class="pl-smi">user</span>, <span class="pl-smi">roles</span>);</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-configure-auth-cs-LC31" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-configure-auth-cs-LC32" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-configure-auth-cs-LC33" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-configure-auth-cs-LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Type class to store additional metadata in Users Session</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-configure-auth-cs-LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">CustomUserSession</span> : <span class="pl-en">AuthUserSession</span> {}</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-configure-auth-cs-LC36" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-configure-auth-cs-LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Custom Validator to add custom validators to built-in /register Service requiring DisplayName and ConfirmPassword</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-configure-auth-cs-LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">CustomRegistrationValidator</span> : <span class="pl-en">RegistrationValidator</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-configure-auth-cs-LC39" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-configure-auth-cs-LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">CustomRegistrationValidator</span>()</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-configure-auth-cs-LC41" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-configure-auth-cs-LC42" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleSet</span>(<span class="pl-smi">ApplyTo</span>.<span class="pl-smi">Post</span>, () <span class="pl-k">=&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L43" class="blob-num js-line-number" data-line-number="43"></td>
                  <td id="file-configure-auth-cs-LC43" class="blob-code blob-code-inner js-file-line">        {</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L44" class="blob-num js-line-number" data-line-number="44"></td>
                  <td id="file-configure-auth-cs-LC44" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">RuleFor</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-smi">DisplayName</span>).<span class="pl-en">NotEmpty</span>();</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L45" class="blob-num js-line-number" data-line-number="45"></td>
                  <td id="file-configure-auth-cs-LC45" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">RuleFor</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-smi">ConfirmPassword</span>).<span class="pl-en">NotEmpty</span>();</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L46" class="blob-num js-line-number" data-line-number="46"></td>
                  <td id="file-configure-auth-cs-LC46" class="blob-code blob-code-inner js-file-line">        });</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L47" class="blob-num js-line-number" data-line-number="47"></td>
                  <td id="file-configure-auth-cs-LC47" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-configure-auth-cs-L48" class="blob-num js-line-number" data-line-number="48"></td>
                  <td id="file-configure-auth-cs-LC48" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/a965b4bbed8142c9f8215fd25f40317b/raw/3606a6b9a1ee3ca7a8d5d5b415524c16dd991058/Configure.Auth.cs" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/a965b4bbed8142c9f8215fd25f40317b#file-configure-auth-cs">Configure.Auth.cs</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "apphost-auth-validation"
}
</script>

<style>
.gist{font-size:16px;color:#333;text-align:left;}
</style>