<template>
  <div class="float-right">
    <a href="https://github.com/NetCoreApps/Validation/blob/master/world/wwwroot/server-jquery/login.html">/server-jquery/login.html</a>
  </div>
  <h3>Source Code and References</h3>
  <div id="gist94730189" class="gist">
    <div class="gist-file" translate="no">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-_layout-html" class="file my-2">

            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-html  ">


              <table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip="">
                <tbody><tr>
                  <td id="file-_layout-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-_layout-html-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">src</span>="<span class="pl-s">/assets/js/jquery.min.js</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-_layout-html-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-_layout-html-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">src</span>="<span class="pl-s">/js/ss-utils.js</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/b5d036eaf7f3bb5583bf6ce150b546c4/raw/3d8d32a6cce3dca8242981b0ea963e0fb2e272ca/_layout.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/b5d036eaf7f3bb5583bf6ce150b546c4#file-_layout-html">_layout.html</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
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
                  <td id="file-login-html-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">form</span> <span class="pl-c1">action</span>="<span class="pl-s">/auth/credentials</span>" <span class="pl-c1">method</span>="<span class="pl-s">post</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-html-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-row</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-html-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-html-LC6" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; '<span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">alert alert-danger</span>"<span class="pl-kos">&gt;</span>{0}<span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span>' | htmlFormat(errorResponseExcept(['userName','password'])) &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-html-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">type</span>="<span class="pl-s">hidden</span>" <span class="pl-c1">name</span>="<span class="pl-s">continue</span>" <span class="pl-c1">value</span>="<span class="pl-s">&#x7b;&#x7b;qs.continue ?? '/server-jquery/'&#x7d;&#x7d;</span>" /&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-html-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">type</span>="<span class="pl-s">hidden</span>" <span class="pl-c1">name</span>="<span class="pl-s">errorView</span>" <span class="pl-c1">value</span>="<span class="pl-s">/server-jquery/login</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-html-LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-html-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-login-html-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-row</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-login-html-LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-login-html-LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">class</span>="<span class="pl-s">form-control form-control-lg</span>" <span class="pl-c1">name</span>="<span class="pl-s">userName</span>" <span class="pl-c1">type</span>="<span class="pl-s">text</span>" <span class="pl-c1">placeholder</span>="<span class="pl-s">UserName</span>" </td>
                </tr>
                <tr>
                  <td id="file-login-html-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-login-html-LC14" class="blob-code blob-code-inner js-file-line">               <span class="pl-c1">value</span>="<span class="pl-s">&#x7b;&#x7b; 'userName' | formValue &#x7d;&#x7d;</span>" <span class="pl-c1">data-invalid</span>="<span class="pl-s">&#x7b;&#x7b; 'userName' | errorResponse &#x7d;&#x7d;</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-login-html-LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-login-html-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-login-html-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-row</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-login-html-LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-login-html-LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">class</span>="<span class="pl-s">form-control form-control-lg</span>" <span class="pl-c1">name</span>="<span class="pl-s">password</span>" <span class="pl-c1">type</span>="<span class="pl-s">password</span>" <span class="pl-c1">placeholder</span>="<span class="pl-s">Password</span>" </td>
                </tr>
                <tr>
                  <td id="file-login-html-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-login-html-LC20" class="blob-code blob-code-inner js-file-line">               <span class="pl-c1">value</span>="" <span class="pl-c1">data-invalid</span>="<span class="pl-s">&#x7b;&#x7b; 'password' | errorResponse &#x7d;&#x7d;</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-login-html-LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-login-html-LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group col-md-4</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-login-html-LC23" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">button</span> <span class="pl-c1">type</span>="<span class="pl-s">submit</span>" <span class="pl-c1">class</span>="<span class="pl-s">btn btn-lg btn-primary</span>"<span class="pl-kos">&gt;</span>Login<span class="pl-kos">&lt;/</span><span class="pl-ent">button</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-login-html-LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-login-html-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-login-html-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-row</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-login-html-LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-login-html-LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">type</span>="<span class="pl-s">checkbox</span>" <span class="pl-c1">id</span>="<span class="pl-s">rememberMe</span>" <span class="pl-c1">name</span>="<span class="pl-s">rememberMe</span>" <span class="pl-c1">value</span>="<span class="pl-s">true</span>" <span class="pl-c1">&#x7b;&#x7b;</span> <span class="pl-c1">{checked:formCheckValue(</span>'rememberMe')} | htmlAttrs &#x7d;&#x7d;<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-login-html-LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">label</span> <span class="pl-c1">for</span>="<span class="pl-s">rememberMe</span>"<span class="pl-kos">&gt;</span>Remember Me<span class="pl-kos">&lt;/</span><span class="pl-ent">label</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-login-html-LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-login-html-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-login-html-LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-row</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-login-html-LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">form-group col-md-4</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-login-html-LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">a</span> <span class="pl-c1">class</span>="<span class="pl-s">lnk</span>" <span class="pl-c1">href</span>="<span class="pl-s">/server-jquery/register</span>"<span class="pl-kos">&gt;</span>Register New User<span class="pl-kos">&lt;/</span><span class="pl-ent">a</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-login-html-LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-login-html-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-login-html-LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">form</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-login-html-LC38" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-html-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-login-html-LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-login-html-LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">b</span><span class="pl-kos">&gt;</span>Quick Login:<span class="pl-kos">&lt;/</span><span class="pl-ent">b</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-login-html-LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">quicklist</span>"<span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-login-html-LC42" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">span</span> <span class="pl-c1">data-click</span>="<span class="pl-s">switchUser:admin@email.com</span>"<span class="pl-kos">&gt;</span>admin@email.com<span class="pl-kos">&lt;/</span><span class="pl-ent">span</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L43" class="blob-num js-line-number" data-line-number="43"></td>
                  <td id="file-login-html-LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">span</span> <span class="pl-c1">data-click</span>="<span class="pl-s">switchUser:new@user.com</span>"<span class="pl-kos">&gt;</span>new@user.com<span class="pl-kos">&lt;/</span><span class="pl-ent">span</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L44" class="blob-num js-line-number" data-line-number="44"></td>
                  <td id="file-login-html-LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L45" class="blob-num js-line-number" data-line-number="45"></td>
                  <td id="file-login-html-LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L46" class="blob-num js-line-number" data-line-number="46"></td>
                  <td id="file-login-html-LC46" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-html-L47" class="blob-num js-line-number" data-line-number="47"></td>
                  <td id="file-login-html-LC47" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;#raw appendTo scripts&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L48" class="blob-num js-line-number" data-line-number="48"></td>
                  <td id="file-login-html-LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L49" class="blob-num js-line-number" data-line-number="49"></td>
                  <td id="file-login-html-LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span><span class="pl-kos">(</span><span class="pl-smi">document</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">bootstrap</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">bindHandlers</span><span class="pl-kos">(</span><span class="pl-kos">{</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L50" class="blob-num js-line-number" data-line-number="50"></td>
                  <td id="file-login-html-LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">switchUser</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">u</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L51" class="blob-num js-line-number" data-line-number="51"></td>
                  <td id="file-login-html-LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span><span class="pl-kos">(</span><span class="pl-s">"[name=userName]"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">val</span><span class="pl-kos">(</span><span class="pl-s1">u</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L52" class="blob-num js-line-number" data-line-number="52"></td>
                  <td id="file-login-html-LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span><span class="pl-kos">(</span><span class="pl-s">"[name=password]"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">val</span><span class="pl-kos">(</span><span class="pl-s">'p@55wOrd'</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L53" class="blob-num js-line-number" data-line-number="53"></td>
                  <td id="file-login-html-LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L54" class="blob-num js-line-number" data-line-number="54"></td>
                  <td id="file-login-html-LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L55" class="blob-num js-line-number" data-line-number="55"></td>
                  <td id="file-login-html-LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L56" class="blob-num js-line-number" data-line-number="56"></td>
                  <td id="file-login-html-LC56" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;/raw&#x7d;&#x7d;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/b5d036eaf7f3bb5583bf6ce150b546c4/raw/3d8d32a6cce3dca8242981b0ea963e0fb2e272ca/login.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/b5d036eaf7f3bb5583bf6ce150b546c4#file-login-html">login.html</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "server-jquery-snippet"
}
</script>

<style scoped>

</style>