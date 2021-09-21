<template>
  <link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-d9b0ae634c1abe51fe671d575be5a7d2.css">
  <div id="gist94730097" class="gist">
    <div class="gist-file" translate="no">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-_layout-html" class="file my-2">

            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-html  ">


              <table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip="">
                <tbody><tr>
                  <td id="file-_layout-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-_layout-html-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">src</span>="<span class="pl-s">/lib/@servicestack/client/index.js</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/e0df6c7a1be11064f2051bb5b0da8ffa/raw/28015828667193f3a891ef4f5f29287059b0fa30/_layout.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/e0df6c7a1be11064f2051bb5b0da8ffa#file-_layout-html">_layout.html</a>
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
                  <td id="file-login-html-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">type</span>="<span class="pl-s">hidden</span>" <span class="pl-c1">name</span>="<span class="pl-s">continue</span>" <span class="pl-c1">value</span>="<span class="pl-s">&#x7b;&#x7b;qs.continue ?? '/server-ts/'&#x7d;&#x7d;</span>" /&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-html-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">type</span>="<span class="pl-s">hidden</span>" <span class="pl-c1">name</span>="<span class="pl-s">errorView</span>" <span class="pl-c1">value</span>="<span class="pl-s">/server-ts/login</span>"<span class="pl-kos">&gt;</span></td>
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
                  <td id="file-login-html-LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">&lt;</span><span class="pl-ent">a</span> <span class="pl-c1">class</span>="<span class="pl-s">lnk</span>" <span class="pl-c1">href</span>="<span class="pl-s">/server-ts/register</span>"<span class="pl-kos">&gt;</span>Register New User<span class="pl-kos">&lt;/</span><span class="pl-ent">a</span><span class="pl-kos">&gt;</span></td>
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
                  <td id="file-login-html-LC39" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;#raw appendTo scripts&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-login-html-LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">src</span>="<span class="pl-s">/server-ts/login.js</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-login-html-LC41" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;/raw&#x7d;&#x7d;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/e0df6c7a1be11064f2051bb5b0da8ffa/raw/28015828667193f3a891ef4f5f29287059b0fa30/login.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/e0df6c7a1be11064f2051bb5b0da8ffa#file-login-html">login.html</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
    <div class="gist-file" translate="no">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-login-ts" class="file my-2">

            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-typescript  ">


              <table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip="">
                <tbody><tr>
                  <td id="file-login-ts-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-login-ts-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-s1">bindHandlers</span><span class="pl-kos">,</span> <span class="pl-s1">bootstrap</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">"@servicestack/client"</span><span class="pl-kos">;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-login-ts-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-login-ts-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-en">bootstrap</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">//converts data-invalid attributes into Bootstrap v4 error messages.</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-ts-LC4" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-ts-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-en">bindHandlers</span><span class="pl-kos">(</span><span class="pl-kos">{</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-ts-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">switchUser</span>: <span class="pl-kos">(</span><span class="pl-s1">u</span>: <span class="pl-smi">string</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-ts-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">(</span><span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">"[name=userName]"</span><span class="pl-kos">)</span> <span class="pl-k">as</span> <span class="pl-smi">HTMLInputElement</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">value</span> <span class="pl-c1">=</span> <span class="pl-s1">u</span><span class="pl-kos">;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-ts-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">(</span><span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">"[name=password]"</span><span class="pl-kos">)</span> <span class="pl-k">as</span> <span class="pl-smi">HTMLInputElement</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">value</span> <span class="pl-c1">=</span> <span class="pl-s">'p@55wOrd'</span><span class="pl-kos">;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-ts-LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-ts-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/e0df6c7a1be11064f2051bb5b0da8ffa/raw/28015828667193f3a891ef4f5f29287059b0fa30/login.ts" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/e0df6c7a1be11064f2051bb5b0da8ffa#file-login-ts">login.ts</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import VueEmbedGist from "vue-embed-gist";

export default {
  name: "tab1",
  components: {
    VueEmbedGist
  }
}
</script>

<style scoped>

</style>