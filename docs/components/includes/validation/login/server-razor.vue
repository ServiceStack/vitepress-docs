<template>
  <div class="float-right">
    <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-razor/login.cshtml">/server-razor/login.cshtml</a>
  </div>
  <h3>Source Code and References</h3>
  <div id="gist94730361" class="gist">
    <div class="gist-file" translate="no">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-login-cshtml" class="file my-2">

            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-html-razor  ">


              <table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip="">
                <tbody><tr>
                  <td id="file-login-cshtml-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-login-cshtml-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">h3</span>&gt;Sign In using credentials&lt;/<span class="pl-ent">h3</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-login-cshtml-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-login-cshtml-LC3" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">form</span> <span class="pl-e">action</span>=<span class="pl-s"><span class="pl-pds">"</span>/auth/credentials<span class="pl-pds">"</span></span> <span class="pl-e">method</span>=<span class="pl-s"><span class="pl-pds">"</span>post<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-lg-4<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-cshtml-LC4" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-cshtml-LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.ValidationSummary(new</span>[]<span class="pl-k">{</span> <span class="pl-s"><span class="pl-pds">"</span>userName<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>password<span class="pl-pds">"</span></span> <span class="pl-k">}</span>, </td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-cshtml-LC6" class="blob-code blob-code-inner js-file-line">            new <span class="pl-k">{</span> <span class="pl-k">@class</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>alert alert-warning<span class="pl-pds">"</span></span> <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-cshtml-LC7" class="blob-code blob-code-inner js-file-line">        </td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-cshtml-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.HiddenInputs(new</span> <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-cshtml-LC9" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">@continue</span> <span class="pl-k">=</span> <span class="pl-smi">Html</span>.<span class="pl-en">Query</span>(<span class="pl-s"><span class="pl-pds">"</span>continue<span class="pl-pds">"</span></span>) <span class="pl-k">??</span> <span class="pl-s"><span class="pl-pds">"</span>/server-razor/<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-cshtml-LC10" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">errorView</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/server-razor/login<span class="pl-pds">"</span></span></td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-login-cshtml-LC11" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-login-cshtml-LC12" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-login-cshtml-LC13" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-login-cshtml-LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span> <span class="pl-smi">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>userName<span class="pl-pds">"</span></span> <span class="pl-k">}</span>, new InputOptions <span class="pl-k">{</span></td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-login-cshtml-LC15" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Label</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-login-cshtml-LC16" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Help</span>  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email you signed up with<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-login-cshtml-LC17" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Size</span>  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>lg<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-login-cshtml-LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-login-cshtml-LC19" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-login-cshtml-LC20" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-login-cshtml-LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span> <span class="pl-smi">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>password<span class="pl-pds">"</span></span>, <span class="pl-smi">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>password<span class="pl-pds">"</span></span> <span class="pl-k">}</span>, new InputOptions <span class="pl-k">{</span></td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-login-cshtml-LC22" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Label</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Password<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-login-cshtml-LC23" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Help</span>  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>6 characters or more<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-login-cshtml-LC24" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Size</span>  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>lg<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-login-cshtml-LC25" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">PreserveValue</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-login-cshtml-LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-login-cshtml-LC27" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-login-cshtml-LC28" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-login-cshtml-LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-login-cshtml-LC30" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">id</span>   <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>rememberMe<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-login-cshtml-LC31" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>checkbox<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-login-cshtml-LC32" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">@checked</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-login-cshtml-LC33" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>,</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-login-cshtml-LC34" class="blob-code blob-code-inner js-file-line">        new InputOptions <span class="pl-k">{</span> <span class="pl-smi">Label</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Remember Me<span class="pl-pds">"</span></span> <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-login-cshtml-LC35" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-login-cshtml-LC36" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-login-cshtml-LC37" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">button</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>submit<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>btn btn-lg btn-primary<span class="pl-pds">"</span></span>&gt;Login&lt;/<span class="pl-ent">button</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-login-cshtml-LC38" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-login-cshtml-LC39" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-login-cshtml-LC40" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">a</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>lnk<span class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>/server-razor/register<span class="pl-pds">"</span></span>&gt;Register New User&lt;/<span class="pl-ent">a</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-login-cshtml-LC41" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-cshtml-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-login-cshtml-LC42" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">form</span>&gt;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/32cafd0820645c604b5abb06941fc301/raw/4381ab0a455397367858cec337d617362319446b/login.cshtml" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/32cafd0820645c604b5abb06941fc301#file-login-cshtml">login.cshtml</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "server-razor-snippet"
}
</script>

<style scoped>

</style>