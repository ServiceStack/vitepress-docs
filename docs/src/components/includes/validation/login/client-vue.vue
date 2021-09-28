<template>
  <div id="gist96045181" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-login-html" class="file">


            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-html ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-login-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-login-html-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>page<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-login-html-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-html-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-login-html-LC3" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;#raw appendTo scripts&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-html-LC4" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>login.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-html-LC5" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-html-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">new</span> <span class="pl-en">SignIn</span>({</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-html-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  el<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>#page<span class="pl-pds">'</span></span></span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-html-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">})</span></td>
                </tr>
                <tr>
                  <td id="file-login-html-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-html-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-login-html-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-html-LC10" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;/raw&#x7d;&#x7d;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/5d907238a308fc383cc879227c243fd3/raw/73577bc442aa8ddc4eb128e0f9a454ddec5ac8db/login.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/5d907238a308fc383cc879227c243fd3#file-login-html">login.html</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-login-ts" class="file">


            <div itemprop="text" class="Box-body p-0 blob-wrapper data type-typescript ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-login-ts-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-login-ts-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> { <span class="pl-smi">Vue</span>, <span class="pl-smi">Component</span>, <span class="pl-smi">Watch</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>vue-property-decorator<span class="pl-pds">'</span></span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-login-ts-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> { <span class="pl-smi">bus</span>, <span class="pl-smi">client</span>, <span class="pl-smi">Authenticate</span>, <span class="pl-smi">redirect</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./shared<span class="pl-pds">'</span></span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-login-ts-LC3" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-login-ts-LC4" class="blob-code blob-code-inner js-file-line">@<span class="pl-en">Component</span>({ template: </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-login-ts-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">`</span>&lt;div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-login-ts-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;h3&gt;Sign In&lt;/h3&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-login-ts-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        </span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-login-ts-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;form ref="form" @submit.prevent="submit" :class="{ error:responseStatus, loading }" &gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-login-ts-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;div class="form-group"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-login-ts-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;ErrorSummary except="userName,password" :responseStatus="responseStatus" /&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-login-ts-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;/div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-login-ts-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;div class="form-group"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-login-ts-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;Input name="userName" v-model="userName" placeholder="Username" :responseStatus="responseStatus" /&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-login-ts-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;/div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-login-ts-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;div class="form-group"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-login-ts-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;Input type="password" name="password" v-model="password" placeholder="Password" :responseStatus="responseStatus" /&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-login-ts-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;/div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-login-ts-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;div class="form-group"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-login-ts-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;CheckBox name="rememberMe" v-model="rememberMe" :responseStatus="responseStatus"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-login-ts-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                    Remember Me</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-login-ts-LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;/CheckBox&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-login-ts-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;/div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-login-ts-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;div class="form-group"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-login-ts-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;button type="submit" class="btn btn-lg btn-primary"&gt;Login&lt;/button&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-login-ts-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;/div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-login-ts-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;div class="form-group"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-login-ts-LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;a class="btn btn-outline-primary" href="/client-vue/register"&gt;Register New User&lt;/a&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-login-ts-LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;/div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-login-ts-LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;/form&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-login-ts-LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        </span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-login-ts-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;div class="pt-3"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-login-ts-LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;b&gt;Quick Login:&lt;/b&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-login-ts-LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;p class="pt-1"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-login-ts-LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;a class="btn btn-outline-info btn-sm" href="javascript:void(0)" @click.prevent="switchUser('admin@email.com')"&gt;admin@email.com&lt;/a&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-login-ts-LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                &lt;a class="btn btn-outline-info btn-sm" href="javascript:void(0)" @click.prevent="switchUser('new@user.com')"&gt;new@user.com&lt;/a&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-login-ts-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-s">            &lt;/p&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-login-ts-LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;/div&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-login-ts-LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-s">    &lt;/div&gt;<span class="pl-pds">`</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-login-ts-LC39" class="blob-code blob-code-inner js-file-line">    props: { </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-login-ts-LC40" class="blob-code blob-code-inner js-file-line">        redirect: <span class="pl-c1">String</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-login-ts-LC41" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-login-ts-LC42" class="blob-code blob-code-inner js-file-line">})</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L43" class="blob-num js-line-number" data-line-number="43"></td>
                  <td id="file-login-ts-LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">class</span> <span class="pl-en">SignIn</span> <span class="pl-k">extends</span> <span class="pl-e">Vue</span> {</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L44" class="blob-num js-line-number" data-line-number="44"></td>
                  <td id="file-login-ts-LC44" class="blob-code blob-code-inner js-file-line">    </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L45" class="blob-num js-line-number" data-line-number="45"></td>
                  <td id="file-login-ts-LC45" class="blob-code blob-code-inner js-file-line">    userName <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L46" class="blob-num js-line-number" data-line-number="46"></td>
                  <td id="file-login-ts-LC46" class="blob-code blob-code-inner js-file-line">    password <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L47" class="blob-num js-line-number" data-line-number="47"></td>
                  <td id="file-login-ts-LC47" class="blob-code blob-code-inner js-file-line">    rememberMe <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L48" class="blob-num js-line-number" data-line-number="48"></td>
                  <td id="file-login-ts-LC48" class="blob-code blob-code-inner js-file-line">    loading <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L49" class="blob-num js-line-number" data-line-number="49"></td>
                  <td id="file-login-ts-LC49" class="blob-code blob-code-inner js-file-line">    responseStatus <span class="pl-k">=</span> <span class="pl-c1">null</span></td>
                </tr>
                <tr>
                  <td id="file-login-ts-L50" class="blob-num js-line-number" data-line-number="50"></td>
                  <td id="file-login-ts-LC50" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L51" class="blob-num js-line-number" data-line-number="51"></td>
                  <td id="file-login-ts-LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">async</span> submit() {        </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L52" class="blob-num js-line-number" data-line-number="52"></td>
                  <td id="file-login-ts-LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L53" class="blob-num js-line-number" data-line-number="53"></td>
                  <td id="file-login-ts-LC53" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">loading</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L54" class="blob-num js-line-number" data-line-number="54"></td>
                  <td id="file-login-ts-LC54" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">responseStatus</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L55" class="blob-num js-line-number" data-line-number="55"></td>
                  <td id="file-login-ts-LC55" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L56" class="blob-num js-line-number" data-line-number="56"></td>
                  <td id="file-login-ts-LC56" class="blob-code blob-code-inner js-file-line">            <span class="pl-k"><span class="pl-k">const</span></span> response <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">client</span>.<span class="pl-en">post</span>(<span class="pl-k">new</span> <span class="pl-en">Authenticate</span>({</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L57" class="blob-num js-line-number" data-line-number="57"></td>
                  <td id="file-login-ts-LC57" class="blob-code blob-code-inner js-file-line">                provider: <span class="pl-s"><span class="pl-pds">'</span>credentials<span class="pl-pds">'</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L58" class="blob-num js-line-number" data-line-number="58"></td>
                  <td id="file-login-ts-LC58" class="blob-code blob-code-inner js-file-line">                userName: <span class="pl-c1">this</span>.<span class="pl-smi">userName</span>,</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L59" class="blob-num js-line-number" data-line-number="59"></td>
                  <td id="file-login-ts-LC59" class="blob-code blob-code-inner js-file-line">                password: <span class="pl-c1">this</span>.<span class="pl-smi">password</span>,</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L60" class="blob-num js-line-number" data-line-number="60"></td>
                  <td id="file-login-ts-LC60" class="blob-code blob-code-inner js-file-line">                rememberMe: <span class="pl-c1">this</span>.<span class="pl-smi">rememberMe</span>,</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L61" class="blob-num js-line-number" data-line-number="61"></td>
                  <td id="file-login-ts-LC61" class="blob-code blob-code-inner js-file-line">            }));</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L62" class="blob-num js-line-number" data-line-number="62"></td>
                  <td id="file-login-ts-LC62" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">bus</span>.<span class="pl-en">$emit</span>(<span class="pl-s"><span class="pl-pds">'</span>signin<span class="pl-pds">'</span></span>, <span class="pl-smi">response</span>);</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L63" class="blob-num js-line-number" data-line-number="63"></td>
                  <td id="file-login-ts-LC63" class="blob-code blob-code-inner js-file-line">            </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L64" class="blob-num js-line-number" data-line-number="64"></td>
                  <td id="file-login-ts-LC64" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">redirect</span>(<span class="pl-c1">this</span>.<span class="pl-smi">$props</span>.<span class="pl-smi">redirect</span>);</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L65" class="blob-num js-line-number" data-line-number="65"></td>
                  <td id="file-login-ts-LC65" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L66" class="blob-num js-line-number" data-line-number="66"></td>
                  <td id="file-login-ts-LC66" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span> (<span class="pl-smi">e</span>) {</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L67" class="blob-num js-line-number" data-line-number="67"></td>
                  <td id="file-login-ts-LC67" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">responseStatus</span> <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">responseStatus</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L68" class="blob-num js-line-number" data-line-number="68"></td>
                  <td id="file-login-ts-LC68" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">finally</span> {</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L69" class="blob-num js-line-number" data-line-number="69"></td>
                  <td id="file-login-ts-LC69" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">loading</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L70" class="blob-num js-line-number" data-line-number="70"></td>
                  <td id="file-login-ts-LC70" class="blob-code blob-code-inner js-file-line">        }</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L71" class="blob-num js-line-number" data-line-number="71"></td>
                  <td id="file-login-ts-LC71" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L72" class="blob-num js-line-number" data-line-number="72"></td>
                  <td id="file-login-ts-LC72" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-login-ts-L73" class="blob-num js-line-number" data-line-number="73"></td>
                  <td id="file-login-ts-LC73" class="blob-code blob-code-inner js-file-line">    switchUser(<span class="pl-v">email</span><span class="pl-k">:</span><span class="pl-c1">string</span>) {</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L74" class="blob-num js-line-number" data-line-number="74"></td>
                  <td id="file-login-ts-LC74" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">userName</span> <span class="pl-k">=</span> <span class="pl-smi">email</span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L75" class="blob-num js-line-number" data-line-number="75"></td>
                  <td id="file-login-ts-LC75" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">password</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>p@55wOrd<span class="pl-pds">'</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L76" class="blob-num js-line-number" data-line-number="76"></td>
                  <td id="file-login-ts-LC76" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-login-ts-L77" class="blob-num js-line-number" data-line-number="77"></td>
                  <td id="file-login-ts-LC77" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/5d907238a308fc383cc879227c243fd3/raw/73577bc442aa8ddc4eb128e0f9a454ddec5ac8db/login.ts" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/5d907238a308fc383cc879227c243fd3#file-login-ts">login.ts</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "client-vue"
}
</script>

<style scoped>

</style>