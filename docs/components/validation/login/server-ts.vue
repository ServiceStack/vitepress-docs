<template>
  ::: v-pre
  <div id="gist94730097" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-_layout-html" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-html ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-_layout-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-_layout-html-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>/lib/@servicestack/client/index.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
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
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-login-html" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-html ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-login-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-login-html-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">h3</span>&gt;Sign In using credentials&lt;/<span class="pl-ent">h3</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-login-html-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-html-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-login-html-LC3" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">form</span> <span class="pl-e">action</span>=<span class="pl-s"><span class="pl-pds">"</span>/auth/credentials<span class="pl-pds">"</span></span> <span class="pl-e">method</span>=<span class="pl-s"><span class="pl-pds">"</span>post<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-html-LC4" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-row<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-html-LC5" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-html-LC6" class="blob-code blob-code-inner js-file-line">        {{ '&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>alert alert-danger<span class="pl-pds">"</span></span>&gt;{0}&lt;/<span class="pl-ent">div</span>&gt;' | htmlFormat(errorResponseExcept(['userName','password'])) }}</td>
                </tr>
                <tr>
                  <td id="file-login-html-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-html-LC7" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>hidden<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>continue<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>{{qs.continue ?? '/server-ts/'}}<span class="pl-pds">"</span></span> /&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-html-LC8" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>hidden<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>errorView<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>/server-ts/login<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-html-LC9" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-html-LC10" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-login-html-LC11" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-row<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-login-html-LC12" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-login-html-LC13" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-control form-control-lg<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>userName<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">placeholder</span>=<span class="pl-s"><span class="pl-pds">"</span>UserName<span class="pl-pds">"</span></span> </td>
                </tr>
                <tr>
                  <td id="file-login-html-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-login-html-LC14" class="blob-code blob-code-inner js-file-line">               <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>{{ 'userName' | formValue }}<span class="pl-pds">"</span></span> <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>{{ 'userName' | errorResponse }}<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-login-html-LC15" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-login-html-LC16" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-login-html-LC17" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-row<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-login-html-LC18" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-login-html-LC19" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-control form-control-lg<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>password<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>password<span class="pl-pds">"</span></span> <span class="pl-e">placeholder</span>=<span class="pl-s"><span class="pl-pds">"</span>Password<span class="pl-pds">"</span></span> </td>
                </tr>
                <tr>
                  <td id="file-login-html-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-login-html-LC20" class="blob-code blob-code-inner js-file-line">               <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span> <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>{{ 'password' | errorResponse }}<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-login-html-LC21" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-login-html-LC22" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group col-md-4<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-login-html-LC23" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">button</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>submit<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>btn btn-lg btn-primary<span class="pl-pds">"</span></span>&gt;Login&lt;/<span class="pl-ent">button</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-login-html-LC24" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-login-html-LC25" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-login-html-LC26" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-row<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-login-html-LC27" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-login-html-LC28" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>checkbox<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>rememberMe<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>rememberMe<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>true<span class="pl-pds">"</span></span> <span class="pl-e">{{</span> <span class="pl-e">{checked:formCheckValue(</span><span class="pl-s"><span class="pl-pds">'</span>rememberMe<span class="pl-pds">'</span></span><span class="pl-e">)}</span> <span class="pl-e">|</span> <span class="pl-e">htmlAttrs</span> <span class="pl-e">}}</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-login-html-LC29" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">label</span> <span class="pl-e">for</span>=<span class="pl-s"><span class="pl-pds">"</span>rememberMe<span class="pl-pds">"</span></span>&gt;Remember Me&lt;/<span class="pl-ent">label</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-login-html-LC30" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-login-html-LC31" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-login-html-LC32" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-row<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-login-html-LC33" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group col-md-4<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-login-html-LC34" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">a</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>lnk<span class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>/server-ts/register<span class="pl-pds">"</span></span>&gt;Register New User&lt;/<span class="pl-ent">a</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-login-html-LC35" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-login-html-LC36" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-login-html-LC37" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">form</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-login-html-LC38" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-html-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-login-html-LC39" class="blob-code blob-code-inner js-file-line">{{#raw appendTo scripts}}</td>
                </tr>
                <tr>
                  <td id="file-login-html-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-login-html-LC40" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>/server-ts/login.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-login-html-LC41" class="blob-code blob-code-inner js-file-line">{{/raw}}</td>
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
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-login-ts" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-typescript ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-login-ts-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-login-ts-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> {<span class="pl-smi">bindHandlers</span>, <span class="pl-smi">bootstrap</span>} <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>@servicestack/client<span class="pl-pds">"</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-login-ts-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-login-ts-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-en">bootstrap</span>(); <span class="pl-c"><span class="pl-c">//</span>converts data-invalid attributes into Bootstrap v4 error messages.</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-ts-LC4" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-ts-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-en">bindHandlers</span>({</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-ts-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">switchUser</span>: (<span class="pl-v">u</span><span class="pl-k">:</span> <span class="pl-c1">string</span>) <span class="pl-k">=&gt;</span> {</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-ts-LC7" class="blob-code blob-code-inner js-file-line">        (<span class="pl-c1">document</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">"</span>[name=userName]<span class="pl-pds">"</span></span>) <span class="pl-k">as</span> <span class="pl-en">HTMLInputElement</span>).<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-smi">u</span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-ts-LC8" class="blob-code blob-code-inner js-file-line">        (<span class="pl-c1">document</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">"</span>[name=password]<span class="pl-pds">"</span></span>) <span class="pl-k">as</span> <span class="pl-en">HTMLInputElement</span>).<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>p@55wOrd<span class="pl-pds">'</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-ts-LC9" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-ts-LC10" class="blob-code blob-code-inner js-file-line">});</td>
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
  :::
</template>

<script>
export default {
  name: "server-ts"
}
</script>

<style scoped>

</style>