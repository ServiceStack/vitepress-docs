<template>
  <div id="gist94731709" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-_requiresauthserver-cshtml" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-html-razor ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-_requiresauthserver-cshtml-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-_requiresauthserver-cshtml-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">@{</span> <span class="pl-en">RedirectIfNotAuthenticated</span>(<span class="pl-s"><span class="pl-pds">$"</span>/server-razor/login?continue={<span class="pl-smi">Request</span>.<span class="pl-smi">PathInfo</span>}<span class="pl-pds">"</span></span>); <span class="pl-k">}</span></td>
                </tr>
                <tr>
                  <td id="file-_requiresauthserver-cshtml-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-_requiresauthserver-cshtml-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-_requiresauthserver-cshtml-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-_requiresauthserver-cshtml-LC3" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">style</span>=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-s1"><span class="pl-c1"><span class="pl-c1">text-align</span></span>:<span class="pl-c1">right</span></span><span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requiresauthserver-cshtml-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-_requiresauthserver-cshtml-LC4" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">small</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>text-muted<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requiresauthserver-cshtml-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-_requiresauthserver-cshtml-LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@UserSession.DisplayName</span></td>
                </tr>
                <tr>
                  <td id="file-_requiresauthserver-cshtml-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-_requiresauthserver-cshtml-LC6" class="blob-code blob-code-inner js-file-line">        | &lt;<span class="pl-ent">a</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>/auth/logout?continue=/server-razor/<span class="pl-pds">"</span></span>&gt;Sign Out&lt;/<span class="pl-ent">a</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requiresauthserver-cshtml-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-_requiresauthserver-cshtml-LC7" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">small</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requiresauthserver-cshtml-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-_requiresauthserver-cshtml-LC8" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/bfee34e18fc46a8e49967cf41d77e4d0/raw/529173ed54702041ecc86323d4481808179f7607/_RequiresAuthServer.cshtml" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/bfee34e18fc46a8e49967cf41d77e4d0#file-_requiresauthserver-cshtml">_RequiresAuthServer.cshtml</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-default-cshtml" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-html-razor ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-default-cshtml-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-default-cshtml-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">@await</span> Html.PartialAsync("_RequiresAuthServer")</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-default-cshtml-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-default-cshtml-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">@{</span> <span class="pl-k">var</span> <span class="pl-smi">Continue</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/server-razor/contacts/<span class="pl-pds">"</span></span>; <span class="pl-k">}</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-default-cshtml-LC4" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-default-cshtml-LC5" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">h3</span>&gt;Add new Contact&lt;/<span class="pl-ent">h3</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-default-cshtml-LC6" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-default-cshtml-LC7" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">form</span> <span class="pl-e">action</span>=<span class="pl-s"><span class="pl-pds">"</span>/contacts<span class="pl-pds">"</span></span> <span class="pl-e">method</span>=<span class="pl-s"><span class="pl-pds">"</span>post<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-lg-4<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-default-cshtml-LC8" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-default-cshtml-LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.ValidationSummary(new</span>[]<span class="pl-k">{</span> <span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>age<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>filmGenres<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>agree<span class="pl-pds">"</span></span> <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-default-cshtml-LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.HiddenInputs(new</span> <span class="pl-k">{</span> <span class="pl-k">@continue</span> <span class="pl-k">=</span> <span class="pl-smi">Continue</span>, <span class="pl-smi">errorView</span> <span class="pl-k">=</span> <span class="pl-smi">Continue</span> <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-default-cshtml-LC11" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-default-cshtml-LC12" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-default-cshtml-LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-default-cshtml-LC14" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-default-cshtml-LC15" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>radio<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-default-cshtml-LC16" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>, new InputOptions <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-default-cshtml-LC17" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Values</span> <span class="pl-k">=</span> <span class="pl-smi">Html</span>.<span class="pl-en">ContactTitles</span>(),</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-default-cshtml-LC18" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Inline</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-default-cshtml-LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-default-cshtml-LC20" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-default-cshtml-LC21" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-default-cshtml-LC22" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-default-cshtml-LC23" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-default-cshtml-LC24" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">placeholder</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-default-cshtml-LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>, new InputOptions <span class="pl-k">{</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-default-cshtml-LC26" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Label</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Full Name<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-default-cshtml-LC27" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Help</span>  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Your first and last name<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-default-cshtml-LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-default-cshtml-LC29" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-default-cshtml-LC30" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-default-cshtml-LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormSelect(new</span> <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-default-cshtml-LC32" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-default-cshtml-LC33" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">@class</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>col-4<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-default-cshtml-LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>, new InputOptions <span class="pl-k">{</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-default-cshtml-LC35" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Label</span>  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Favorite color<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-default-cshtml-LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Values</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">StringDictionary</span> <span class="pl-k">{</span> <span class="pl-k">{</span><span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span><span class="pl-k">}</span> <span class="pl-k">}</span>.<span class="pl-en">Merge</span>(<span class="pl-smi">Html</span>.<span class="pl-en">ContactColors</span>()),</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-default-cshtml-LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-default-cshtml-LC38" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-default-cshtml-LC39" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-default-cshtml-LC40" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-default-cshtml-LC41" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>filmGenres<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-default-cshtml-LC42" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>checkbox<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L43" class="blob-num js-line-number" data-line-number="43"></td>
                  <td id="file-default-cshtml-LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>, new InputOptions <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L44" class="blob-num js-line-number" data-line-number="44"></td>
                  <td id="file-default-cshtml-LC44" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Label</span>  <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Favorite Film Genres<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L45" class="blob-num js-line-number" data-line-number="45"></td>
                  <td id="file-default-cshtml-LC45" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Help</span>   <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>choose one or more<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L46" class="blob-num js-line-number" data-line-number="46"></td>
                  <td id="file-default-cshtml-LC46" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Values</span> <span class="pl-k">=</span> <span class="pl-smi">Html</span>.<span class="pl-en">ContactGenres</span>()</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L47" class="blob-num js-line-number" data-line-number="47"></td>
                  <td id="file-default-cshtml-LC47" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L48" class="blob-num js-line-number" data-line-number="48"></td>
                  <td id="file-default-cshtml-LC48" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L49" class="blob-num js-line-number" data-line-number="49"></td>
                  <td id="file-default-cshtml-LC49" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L50" class="blob-num js-line-number" data-line-number="50"></td>
                  <td id="file-default-cshtml-LC50" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span> </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L51" class="blob-num js-line-number" data-line-number="51"></td>
                  <td id="file-default-cshtml-LC51" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">id</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>age<span class="pl-pds">"</span></span>, </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L52" class="blob-num js-line-number" data-line-number="52"></td>
                  <td id="file-default-cshtml-LC52" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L53" class="blob-num js-line-number" data-line-number="53"></td>
                  <td id="file-default-cshtml-LC53" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">min</span> <span class="pl-k">=</span> <span class="pl-c1">13</span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L54" class="blob-num js-line-number" data-line-number="54"></td>
                  <td id="file-default-cshtml-LC54" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">placeholder</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Age<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L55" class="blob-num js-line-number" data-line-number="55"></td>
                  <td id="file-default-cshtml-LC55" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">@class</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>col-3<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L56" class="blob-num js-line-number" data-line-number="56"></td>
                  <td id="file-default-cshtml-LC56" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L57" class="blob-num js-line-number" data-line-number="57"></td>
                  <td id="file-default-cshtml-LC57" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L58" class="blob-num js-line-number" data-line-number="58"></td>
                  <td id="file-default-cshtml-LC58" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L59" class="blob-num js-line-number" data-line-number="59"></td>
                  <td id="file-default-cshtml-LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">@Html.FormInput(new</span> <span class="pl-k">{</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L60" class="blob-num js-line-number" data-line-number="60"></td>
                  <td id="file-default-cshtml-LC60" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">id</span>   <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>agree<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L61" class="blob-num js-line-number" data-line-number="61"></td>
                  <td id="file-default-cshtml-LC61" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>checkbox<span class="pl-pds">"</span></span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L62" class="blob-num js-line-number" data-line-number="62"></td>
                  <td id="file-default-cshtml-LC62" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">}</span>,</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L63" class="blob-num js-line-number" data-line-number="63"></td>
                  <td id="file-default-cshtml-LC63" class="blob-code blob-code-inner js-file-line">        new InputOptions <span class="pl-k">{</span> <span class="pl-smi">Label</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Agree to terms and conditions<span class="pl-pds">"</span></span> <span class="pl-k">}</span>)</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L64" class="blob-num js-line-number" data-line-number="64"></td>
                  <td id="file-default-cshtml-LC64" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L65" class="blob-num js-line-number" data-line-number="65"></td>
                  <td id="file-default-cshtml-LC65" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L66" class="blob-num js-line-number" data-line-number="66"></td>
                  <td id="file-default-cshtml-LC66" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">button</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>btn btn-primary<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>submit<span class="pl-pds">"</span></span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L67" class="blob-num js-line-number" data-line-number="67"></td>
                  <td id="file-default-cshtml-LC67" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">a</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>/server-razor/contacts/<span class="pl-pds">"</span></span>&gt;reset&lt;/<span class="pl-ent">a</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L68" class="blob-num js-line-number" data-line-number="68"></td>
                  <td id="file-default-cshtml-LC68" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L69" class="blob-num js-line-number" data-line-number="69"></td>
                  <td id="file-default-cshtml-LC69" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">form</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L70" class="blob-num js-line-number" data-line-number="70"></td>
                  <td id="file-default-cshtml-LC70" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L71" class="blob-num js-line-number" data-line-number="71"></td>
                  <td id="file-default-cshtml-LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-k">@{</span> <span class="pl-k">var</span> <span class="pl-smi">response</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">Gateway</span>.<span class="pl-en">SendAsync</span>(<span class="pl-k">new</span> <span class="pl-en">GetContacts</span>()); <span class="pl-k">}</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L72" class="blob-num js-line-number" data-line-number="72"></td>
                  <td id="file-default-cshtml-LC72" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L73" class="blob-num js-line-number" data-line-number="73"></td>
                  <td id="file-default-cshtml-LC73" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">table</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>results<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L74" class="blob-num js-line-number" data-line-number="74"></td>
                  <td id="file-default-cshtml-LC74" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">tbody</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L75" class="blob-num js-line-number" data-line-number="75"></td>
                  <td id="file-default-cshtml-LC75" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">@foreach (</span><span class="pl-smi">var</span> <span class="pl-smi">c</span> <span class="pl-smi">in</span> <span class="pl-smi">response</span>.<span class="pl-smi">Results</span><span class="pl-k">)</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L76" class="blob-num js-line-number" data-line-number="76"></td>
                  <td id="file-default-cshtml-LC76" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">{</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L77" class="blob-num js-line-number" data-line-number="77"></td>
                  <td id="file-default-cshtml-LC77" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">tr</span> <span class="pl-e">style</span>=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-s1"><span class="pl-c1"><span class="pl-c1">background</span></span>:@c.<span class="pl-c1">Color</span></span><span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L78" class="blob-num js-line-number" data-line-number="78"></td>
                  <td id="file-default-cshtml-LC78" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">td</span>&gt;<span class="pl-k">@c.Title</span> <span class="pl-k">@c.Name</span> (<span class="pl-smi">@c</span>.<span class="pl-smi">Age</span>)&lt;/<span class="pl-ent">td</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L79" class="blob-num js-line-number" data-line-number="79"></td>
                  <td id="file-default-cshtml-LC79" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">td</span>&gt;&lt;<span class="pl-ent">a</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>/server-razor/contacts/@c.Id/edit<span class="pl-pds">"</span></span>&gt;<span class="pl-smi">edit</span>&lt;/<span class="pl-ent">a</span>&gt;&lt;/<span class="pl-ent">td</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L80" class="blob-num js-line-number" data-line-number="80"></td>
                  <td id="file-default-cshtml-LC80" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">td</span>&gt;&lt;<span class="pl-ent">form</span> <span class="pl-e">method</span>=<span class="pl-s"><span class="pl-pds">"</span>post<span class="pl-pds">"</span></span> <span class="pl-e">action</span>=<span class="pl-s"><span class="pl-pds">"</span>/contacts/@c.Id/delete<span class="pl-pds">"</span></span> <span class="pl-e">onsubmit</span>=<span class="pl-s"><span class="pl-pds">"</span>return confirm('Are you sure?')<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L81" class="blob-num js-line-number" data-line-number="81"></td>
                  <td id="file-default-cshtml-LC81" class="blob-code blob-code-inner js-file-line">                &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>hidden<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>continue<span class="pl-pds">"</span></span>  <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>@Continue<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L82" class="blob-num js-line-number" data-line-number="82"></td>
                  <td id="file-default-cshtml-LC82" class="blob-code blob-code-inner js-file-line">                &lt;<span class="pl-ent">button</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>btn btn-sm btn-primary<span class="pl-pds">"</span></span>&gt;<span class="pl-smi">delete</span>&lt;/<span class="pl-ent">button</span>&gt;&lt;/<span class="pl-ent">form</span>&gt;&lt;/<span class="pl-ent">td</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L83" class="blob-num js-line-number" data-line-number="83"></td>
                  <td id="file-default-cshtml-LC83" class="blob-code blob-code-inner js-file-line">        &lt;/<span class="pl-ent">tr</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L84" class="blob-num js-line-number" data-line-number="84"></td>
                  <td id="file-default-cshtml-LC84" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">}</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L85" class="blob-num js-line-number" data-line-number="85"></td>
                  <td id="file-default-cshtml-LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">@if</span> (<span class="pl-smi">response</span>.<span class="pl-smi">Results</span>.<span class="pl-en">IsEmpty</span>()) </td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L86" class="blob-num js-line-number" data-line-number="86"></td>
                  <td id="file-default-cshtml-LC86" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">{</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L87" class="blob-num js-line-number" data-line-number="87"></td>
                  <td id="file-default-cshtml-LC87" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">tr</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L88" class="blob-num js-line-number" data-line-number="88"></td>
                  <td id="file-default-cshtml-LC88" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">td</span>&gt;<span class="pl-smi">There</span> <span class="pl-smi">are</span> <span class="pl-smi">no</span> <span class="pl-smi">contacts</span>.&lt;/<span class="pl-ent">td</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L89" class="blob-num js-line-number" data-line-number="89"></td>
                  <td id="file-default-cshtml-LC89" class="blob-code blob-code-inner js-file-line">        &lt;/<span class="pl-ent">tr</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L90" class="blob-num js-line-number" data-line-number="90"></td>
                  <td id="file-default-cshtml-LC90" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">}</span></td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L91" class="blob-num js-line-number" data-line-number="91"></td>
                  <td id="file-default-cshtml-LC91" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">tbody</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-default-cshtml-L92" class="blob-num js-line-number" data-line-number="92"></td>
                  <td id="file-default-cshtml-LC92" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">table</span>&gt;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/bfee34e18fc46a8e49967cf41d77e4d0/raw/529173ed54702041ecc86323d4481808179f7607/default.cshtml" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/bfee34e18fc46a8e49967cf41d77e4d0#file-default-cshtml">default.cshtml</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "server-razor"
}
</script>

<style scoped>

</style>