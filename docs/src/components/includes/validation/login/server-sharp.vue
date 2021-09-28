<template>
  <div class="float-right">
    <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server/login.html">/server/login.html</a>
  </div>
  <h3>Source Code and References</h3>
  <div id="gist94729979" class="gist">
    <div class="gist-file" translate="no">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-login-html" class="file my-2">

            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-html  ">


              <table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip="">
                <tbody><tr>
                  <td id="file-login-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-login-html-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">h3</span><span class="pl-kos">&gt;</span>Sign In using credentials<span class="pl-kos">&lt;/</span><span class="pl-ent">h3</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-login-html-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-html-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-login-html-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">form</span> <span class="pl-c1">action</span>="<span class="pl-s">/auth/credentials</span>" <span class="pl-c1">method</span>="<span class="pl-s">post</span>" <span class="pl-c1">class</span>="<span class="pl-s">col-lg-4</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-html-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-html-LC5" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; ['userName','password'] | validationSummary({class:'alert alert-warning'}) &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-html-LC6" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; { continue: qs.continue ?? '/server/', errorView:'/server/login' } | htmlHiddenInputs &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-html-LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-html-LC8" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-html-LC9" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; {id:'userName'} </td>
                </tr>
                <tr>
                  <td id="file-login-html-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-html-LC10" class="blob-code blob-code-inner js-file-line">           | formInput({label:'Email',help:'Email you signed up with',size:'lg'}) &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-login-html-LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-login-html-LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-login-html-LC13" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; {id:'password',type:'password'} </td>
                </tr>
                <tr>
                  <td id="file-login-html-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-login-html-LC14" class="blob-code blob-code-inner js-file-line">           | formInput({label:'Password',help:'6 characters or more',size:'lg',preserveValue:false}) &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-login-html-LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-login-html-LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-login-html-LC17" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; {id:'rememberMe',type:'checkbox',checked:true} | formInput({label:'Remember Me'}) &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-login-html-LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-login-html-LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-login-html-LC20" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">button</span> <span class="pl-c1">type</span>="<span class="pl-s">submit</span>" <span class="pl-c1">class</span>="<span class="pl-s">btn btn-lg btn-primary</span>"<span class="pl-kos">&gt;</span>Login<span class="pl-kos">&lt;/</span><span class="pl-ent">button</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-login-html-LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-login-html-LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-login-html-LC23" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">a</span> <span class="pl-c1">class</span>="<span class="pl-s">lnk</span>" <span class="pl-c1">href</span>="<span class="pl-s">/server/register</span>"<span class="pl-kos">&gt;</span>Register New User<span class="pl-kos">&lt;/</span><span class="pl-ent">a</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-login-html-LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-login-html-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">form</span><span class="pl-kos">&gt;</span></td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/f85cca5d4be096f95d7331f50ed22e19/raw/32d060e7ca60af992bd628c4a830915f57a861ac/login.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/f85cca5d4be096f95d7331f50ed22e19#file-login-html">login.html</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab2"
}
</script>

<style scoped>

</style>