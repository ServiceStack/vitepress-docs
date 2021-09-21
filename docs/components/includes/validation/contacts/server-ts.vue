<template>
  <div id="gist94731579" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-_requires-auth-partial-html" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-html ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-_requires-auth-partial-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-_requires-auth-partial-html-LC1" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b; `/server-ts/login?continue=${PathInfo}`</td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-_requires-auth-partial-html-LC2" class="blob-code blob-code-inner js-file-line">   | redirectIfNotAuthenticated &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-_requires-auth-partial-html-LC3" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-_requires-auth-partial-html-LC4" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span> <span class="pl-e">style</span>=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-s1"><span class="pl-c1"><span class="pl-c1">text-align</span></span>:<span class="pl-c1">right</span></span><span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-_requires-auth-partial-html-LC5" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">small</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>text-muted<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-_requires-auth-partial-html-LC6" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; userSession.DisplayName &#x7d;&#x7d; </td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-_requires-auth-partial-html-LC7" class="blob-code blob-code-inner js-file-line">        | &lt;<span class="pl-ent">a</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>/auth/logout?continue=/server/<span class="pl-pds">"</span></span>&gt;Sign Out&lt;/<span class="pl-ent">a</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-_requires-auth-partial-html-LC8" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">small</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-_requires-auth-partial-html-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-_requires-auth-partial-html-LC9" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0/raw/16ff73ae5a8c4b37f6ab932ddb156385cdf02f9b/_requires-auth-partial.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0#file-_requires-auth-partial-html">_requires-auth-partial.html</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-dtos-ts" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-typescript ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-dtos-ts-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-dtos-ts-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> generated with https://docs.servicestack.net/typescript-add-servicestack-reference</span></td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-dtos-ts-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-dtos-ts-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">class</span> <span class="pl-en">Contact</span></td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-dtos-ts-LC4" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-dtos-ts-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">constructor</span>(<span class="pl-v">init</span><span class="pl-k">?</span><span class="pl-k">:</span><span class="pl-en">Partial</span>&lt;<span class="pl-en">Contact</span>&gt;) { (&lt;<span class="pl-c1">any</span>&gt;<span class="pl-c1">Object</span>).<span class="pl-en">assign</span>(<span class="pl-c1">this</span>, <span class="pl-smi">init</span>); }</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-dtos-ts-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> id<span class="pl-k">:</span> <span class="pl-c1">number</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-dtos-ts-LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> userAuthId<span class="pl-k">:</span> <span class="pl-c1">number</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-dtos-ts-LC8" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> title<span class="pl-k">:</span> <span class="pl-en">Title</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-dtos-ts-LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> name<span class="pl-k">:</span> <span class="pl-c1">string</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-dtos-ts-LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> color<span class="pl-k">:</span> <span class="pl-c1">string</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-dtos-ts-LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> filmGenres<span class="pl-k">:</span> <span class="pl-en">FilmGenres</span>[];</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-dtos-ts-LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> age<span class="pl-k">:</span> <span class="pl-c1">number</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-dtos-ts-LC13" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-dtos-ts-LC14" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-dtos-ts-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @Route("/contacts/{Id}", "DELETE")</span></td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-dtos-ts-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @Route("/contacts/{Id}/delete", "POST")</span></td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-dtos-ts-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">class</span> <span class="pl-en">DeleteContact</span> <span class="pl-k">implements</span> <span class="pl-e">IReturnVoid</span></td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-dtos-ts-LC18" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-dtos-ts-LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">constructor</span>(<span class="pl-v">init</span><span class="pl-k">?</span><span class="pl-k">:</span><span class="pl-en">Partial</span>&lt;<span class="pl-en">DeleteContact</span>&gt;) { (&lt;<span class="pl-c1">any</span>&gt;<span class="pl-c1">Object</span>).<span class="pl-en">assign</span>(<span class="pl-c1">this</span>, <span class="pl-smi">init</span>); }</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-dtos-ts-LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> id<span class="pl-k">:</span> <span class="pl-c1">number</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-dtos-ts-LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> continue<span class="pl-k">:</span> <span class="pl-c1">string</span>;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-dtos-ts-LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> createResponse() {}</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-dtos-ts-LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> getTypeName() { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">'</span>DeleteContact<span class="pl-pds">'</span></span>; }</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-dtos-ts-LC24" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-dtos-ts-LC25" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-dtos-ts-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @Route("/contacts", "GET")</span></td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-dtos-ts-LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-k">export</span> <span class="pl-k">class</span> <span class="pl-en">GetContacts</span> <span class="pl-k">implements</span> <span class="pl-e">IReturn</span>&lt;<span class="pl-en">GetContactsResponse</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-dtos-ts-LC28" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-dtos-ts-LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">constructor</span>(<span class="pl-v">init</span><span class="pl-k">?</span><span class="pl-k">:</span><span class="pl-en">Partial</span>&lt;<span class="pl-en">GetContacts</span>&gt;) { (&lt;<span class="pl-c1">any</span>&gt;<span class="pl-c1">Object</span>).<span class="pl-en">assign</span>(<span class="pl-c1">this</span>, <span class="pl-smi">init</span>); }</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-dtos-ts-LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> createResponse() { <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">GetContactsResponse</span>(); }</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-dtos-ts-LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> getTypeName() { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">'</span>GetContacts<span class="pl-pds">'</span></span>; }</td>
                </tr>
                <tr>
                  <td id="file-dtos-ts-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-dtos-ts-LC32" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0/raw/16ff73ae5a8c4b37f6ab932ddb156385cdf02f9b/dtos.ts" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0#file-dtos-ts">dtos.ts</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-index-html" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-html ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-index-html-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-index-html-LC1" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b; 'requires-auth' | partial &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-index-html-LC2" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-index-html-LC3" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b; '/server-ts/contacts/' | assignTo: continue &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-index-html-LC4" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-index-html-LC5" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">h3</span>&gt;Add new Contact&lt;/<span class="pl-ent">h3</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-index-html-LC6" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-index-html-LC7" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">form</span> <span class="pl-e">action</span>=<span class="pl-s"><span class="pl-pds">"</span>/contacts<span class="pl-pds">"</span></span> <span class="pl-e">method</span>=<span class="pl-s"><span class="pl-pds">"</span>post<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-lg-4<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-index-html-LC8" class="blob-code blob-code-inner js-file-line">    </td>
                </tr>
                <tr>
                  <td id="file-index-html-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-index-html-LC9" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-index-html-LC10" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; '&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>alert alert-danger<span class="pl-pds">"</span></span>&gt;{0}&lt;/<span class="pl-ent">div</span>&gt;' | htmlFormat(errorResponseExcept('title,name,color,filmGenres,age,agree')) &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-index-html-LC11" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>hidden<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>Continue<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; continue &#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-index-html-LC12" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>hidden<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>ErrorView<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; continue &#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-index-html-LC13" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-index-html-LC14" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-index-html-LC15" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-index-html-LC16" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-check<span class="pl-pds">"</span></span> <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; 'title' | errorResponse &#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-index-html-LC17" class="blob-code blob-code-inner js-file-line">            &#x7b;&#x7b;#each contactTitles&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-index-html-LC18" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>custom-control custom-radio custom-control-inline<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-index-html-LC19" class="blob-code blob-code-inner js-file-line">                &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>radio<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>title-&#x7b;&#x7b;Key&#x7d;&#x7d;<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>title<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b;Key&#x7d;&#x7d;<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>custom-control-input<span class="pl-pds">"</span></span></td>
                </tr>
                <tr>
                  <td id="file-index-html-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-index-html-LC20" class="blob-code blob-code-inner js-file-line">                       <span class="pl-e">&#x7b;&#x7b;</span> <span class="pl-e">{checked:formValue(</span><span class="pl-s"><span class="pl-pds">'</span>title<span class="pl-pds">'</span></span><span class="pl-e">)</span>==<span class="pl-e">Key}</span> <span class="pl-e">|</span> <span class="pl-e">htmlAttrs</span> <span class="pl-e">&#x7d;&#x7d;</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-index-html-LC21" class="blob-code blob-code-inner js-file-line">                &lt;<span class="pl-ent">label</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>custom-control-label<span class="pl-pds">"</span></span> <span class="pl-e">for</span>=<span class="pl-s"><span class="pl-pds">"</span>title-&#x7b;&#x7b;Key&#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;&#x7b;&#x7b;Value&#x7d;&#x7d;&lt;/<span class="pl-ent">label</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-index-html-LC22" class="blob-code blob-code-inner js-file-line">            &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-index-html-LC23" class="blob-code blob-code-inner js-file-line">            &#x7b;&#x7b;/each&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-index-html-LC24" class="blob-code blob-code-inner js-file-line">        &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-index-html-LC25" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-index-html-LC26" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-index-html-LC27" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">label</span> <span class="pl-e">for</span>=<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>&gt;Full Name&lt;/<span class="pl-ent">label</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-index-html-LC28" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-control<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text<span class="pl-pds">"</span></span> <span class="pl-e">placeholder</span>=<span class="pl-s"><span class="pl-pds">"</span>Name<span class="pl-pds">"</span></span></td>
                </tr>
                <tr>
                  <td id="file-index-html-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-index-html-LC29" class="blob-code blob-code-inner js-file-line">               <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; 'name' | formValue &#x7d;&#x7d;<span class="pl-pds">"</span></span> <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b;errorResponse('name')&#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-index-html-LC30" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">small</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>name-help<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>text-muted<span class="pl-pds">"</span></span>&gt;Your first and last name&lt;/<span class="pl-ent">small</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-index-html-LC31" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-index-html-LC32" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-index-html-LC33" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">label</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-label<span class="pl-pds">"</span></span> <span class="pl-e">for</span>=<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>&gt;Favorite color&lt;/<span class="pl-ent">label</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-index-html-LC34" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">select</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>col-4 form-control<span class="pl-pds">"</span></span> <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; 'color' | errorResponse &#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-index-html-LC35" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">option</span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">option</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-index-html-LC36" class="blob-code blob-code-inner js-file-line">            &#x7b;&#x7b;#each contactColors&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-index-html-LC37" class="blob-code blob-code-inner js-file-line">                &lt;<span class="pl-ent">option</span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b;Key&#x7d;&#x7d;<span class="pl-pds">"</span></span> <span class="pl-e">&#x7b;&#x7b;</span> <span class="pl-e">{selected:formValue(</span><span class="pl-s"><span class="pl-pds">'</span>color<span class="pl-pds">'</span></span><span class="pl-e">)</span>==<span class="pl-e">Key}</span> <span class="pl-e">|</span> <span class="pl-e">htmlAttrs</span> <span class="pl-e">&#x7d;&#x7d;</span>&gt;&#x7b;&#x7b;Value&#x7d;&#x7d;&lt;/<span class="pl-ent">option</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-index-html-LC38" class="blob-code blob-code-inner js-file-line">            &#x7b;&#x7b;/each&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-index-html-LC39" class="blob-code blob-code-inner js-file-line">        &lt;/<span class="pl-ent">select</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-index-html-LC40" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-index-html-LC41" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-index-html-LC42" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">label</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-check-label<span class="pl-pds">"</span></span>&gt;Favorite Film Genres&lt;/<span class="pl-ent">label</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L43" class="blob-num js-line-number" data-line-number="43"></td>
                  <td id="file-index-html-LC43" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-check<span class="pl-pds">"</span></span> <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; 'filmGenres' | errorResponse &#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L44" class="blob-num js-line-number" data-line-number="44"></td>
                  <td id="file-index-html-LC44" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b; 'filmGenres' | formValues | assignTo: selectedGenres &#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L45" class="blob-num js-line-number" data-line-number="45"></td>
                  <td id="file-index-html-LC45" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b;#each contactGenres&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L46" class="blob-num js-line-number" data-line-number="46"></td>
                  <td id="file-index-html-LC46" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>custom-control custom-checkbox<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L47" class="blob-num js-line-number" data-line-number="47"></td>
                  <td id="file-index-html-LC47" class="blob-code blob-code-inner js-file-line">                &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>checkbox<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>filmGenres-&#x7b;&#x7b;it&#x7d;&#x7d;<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>filmGenres<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b;it&#x7d;&#x7d;<span class="pl-pds">"</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-check-input<span class="pl-pds">"</span></span></td>
                </tr>
                <tr>
                  <td id="file-index-html-L48" class="blob-num js-line-number" data-line-number="48"></td>
                  <td id="file-index-html-LC48" class="blob-code blob-code-inner js-file-line">                       <span class="pl-e">&#x7b;&#x7b;</span> <span class="pl-e">{checked:contains(selectedGenres,</span> <span class="pl-e">it)}</span> <span class="pl-e">|</span> <span class="pl-e">htmlAttrs</span> <span class="pl-e">&#x7d;&#x7d;</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L49" class="blob-num js-line-number" data-line-number="49"></td>
                  <td id="file-index-html-LC49" class="blob-code blob-code-inner js-file-line">                &lt;<span class="pl-ent">label</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-check-label<span class="pl-pds">"</span></span> <span class="pl-e">for</span>=<span class="pl-s"><span class="pl-pds">"</span>filmGenres-&#x7b;&#x7b;it&#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;&#x7b;&#x7b;it&#x7d;&#x7d;&lt;/<span class="pl-ent">label</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L50" class="blob-num js-line-number" data-line-number="50"></td>
                  <td id="file-index-html-LC50" class="blob-code blob-code-inner js-file-line">            &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L51" class="blob-num js-line-number" data-line-number="51"></td>
                  <td id="file-index-html-LC51" class="blob-code blob-code-inner js-file-line">        &#x7b;&#x7b;/each&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L52" class="blob-num js-line-number" data-line-number="52"></td>
                  <td id="file-index-html-LC52" class="blob-code blob-code-inner js-file-line">        &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L53" class="blob-num js-line-number" data-line-number="53"></td>
                  <td id="file-index-html-LC53" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L54" class="blob-num js-line-number" data-line-number="54"></td>
                  <td id="file-index-html-LC54" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L55" class="blob-num js-line-number" data-line-number="55"></td>
                  <td id="file-index-html-LC55" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">input</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-control col-3<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>age<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>number<span class="pl-pds">"</span></span> <span class="pl-e">min</span>=<span class="pl-s"><span class="pl-pds">"</span>13<span class="pl-pds">"</span></span> <span class="pl-e">placeholder</span>=<span class="pl-s"><span class="pl-pds">"</span>Age<span class="pl-pds">"</span></span></td>
                </tr>
                <tr>
                  <td id="file-index-html-L56" class="blob-num js-line-number" data-line-number="56"></td>
                  <td id="file-index-html-LC56" class="blob-code blob-code-inner js-file-line">               <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; 'age' | formValue &#x7d;&#x7d;<span class="pl-pds">"</span></span> <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b;errorResponse('age')&#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L57" class="blob-num js-line-number" data-line-number="57"></td>
                  <td id="file-index-html-LC57" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L58" class="blob-num js-line-number" data-line-number="58"></td>
                  <td id="file-index-html-LC58" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L59" class="blob-num js-line-number" data-line-number="59"></td>
                  <td id="file-index-html-LC59" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-check<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L60" class="blob-num js-line-number" data-line-number="60"></td>
                  <td id="file-index-html-LC60" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">input</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span> form-check-input<span class="pl-pds">"</span></span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>agree<span class="pl-pds">"</span></span> <span class="pl-e">name</span>=<span class="pl-s"><span class="pl-pds">"</span>agree<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>checkbox<span class="pl-pds">"</span></span> <span class="pl-e">value</span>=<span class="pl-s"><span class="pl-pds">"</span>true<span class="pl-pds">"</span></span></td>
                </tr>
                <tr>
                  <td id="file-index-html-L61" class="blob-num js-line-number" data-line-number="61"></td>
                  <td id="file-index-html-LC61" class="blob-code blob-code-inner js-file-line">                   <span class="pl-e">data-invalid</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; 'agree' | errorResponse &#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L62" class="blob-num js-line-number" data-line-number="62"></td>
                  <td id="file-index-html-LC62" class="blob-code blob-code-inner js-file-line">            &lt;<span class="pl-ent">label</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-check-label<span class="pl-pds">"</span></span> <span class="pl-e">for</span>=<span class="pl-s"><span class="pl-pds">"</span>agree<span class="pl-pds">"</span></span>&gt;Agree to terms and conditions&lt;/<span class="pl-ent">label</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L63" class="blob-num js-line-number" data-line-number="63"></td>
                  <td id="file-index-html-LC63" class="blob-code blob-code-inner js-file-line">        &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L64" class="blob-num js-line-number" data-line-number="64"></td>
                  <td id="file-index-html-LC64" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L65" class="blob-num js-line-number" data-line-number="65"></td>
                  <td id="file-index-html-LC65" class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>form-group<span class="pl-pds">"</span></span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L66" class="blob-num js-line-number" data-line-number="66"></td>
                  <td id="file-index-html-LC66" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">button</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>btn btn-primary<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>submit<span class="pl-pds">"</span></span>&gt;Add Contact&lt;/<span class="pl-ent">button</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L67" class="blob-num js-line-number" data-line-number="67"></td>
                  <td id="file-index-html-LC67" class="blob-code blob-code-inner js-file-line">        &lt;<span class="pl-ent">a</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>&#x7b;&#x7b; continue &#x7d;&#x7d;<span class="pl-pds">"</span></span>&gt;reset&lt;/<span class="pl-ent">a</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L68" class="blob-num js-line-number" data-line-number="68"></td>
                  <td id="file-index-html-LC68" class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">div</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L69" class="blob-num js-line-number" data-line-number="69"></td>
                  <td id="file-index-html-LC69" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">form</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L70" class="blob-num js-line-number" data-line-number="70"></td>
                  <td id="file-index-html-LC70" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L71" class="blob-num js-line-number" data-line-number="71"></td>
                  <td id="file-index-html-LC71" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">table</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>results<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">table</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L72" class="blob-num js-line-number" data-line-number="72"></td>
                  <td id="file-index-html-LC72" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L73" class="blob-num js-line-number" data-line-number="73"></td>
                  <td id="file-index-html-LC73" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;#capture appendTo scripts&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L74" class="blob-num js-line-number" data-line-number="74"></td>
                  <td id="file-index-html-LC74" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"><span class="pl-k">var</span> <span class="pl-c1">CONTACTS</span> <span class="pl-k">=</span> &#x7b;&#x7b; <span class="pl-en">sendToGateway</span>(<span class="pl-s"><span class="pl-pds">'</span>GetContacts<span class="pl-pds">'</span></span>) <span class="pl-k">|</span> <span class="pl-smi">map</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">it</span>.<span class="pl-smi">Results</span> <span class="pl-k">|</span> json &#x7d;&#x7d;;</span>&lt;/<span class="pl-ent">script</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L75" class="blob-num js-line-number" data-line-number="75"></td>
                  <td id="file-index-html-LC75" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;/capture&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L76" class="blob-num js-line-number" data-line-number="76"></td>
                  <td id="file-index-html-LC76" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L77" class="blob-num js-line-number" data-line-number="77"></td>
                  <td id="file-index-html-LC77" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;#raw appendTo scripts&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L78" class="blob-num js-line-number" data-line-number="78"></td>
                  <td id="file-index-html-LC78" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>/server-ts/contacts/index.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L79" class="blob-num js-line-number" data-line-number="79"></td>
                  <td id="file-index-html-LC79" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b;/raw&#x7d;&#x7d;</td>
                </tr>
                <tr>
                  <td id="file-index-html-L80" class="blob-num js-line-number" data-line-number="80"></td>
                  <td id="file-index-html-LC80" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-html-L81" class="blob-num js-line-number" data-line-number="81"></td>
                  <td id="file-index-html-LC81" class="blob-code blob-code-inner js-file-line">&#x7b;&#x7b; htmlError &#x7d;&#x7d;</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0/raw/16ff73ae5a8c4b37f6ab932ddb156385cdf02f9b/index.html" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0#file-index-html">index.html</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-index-ts" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-typescript ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-index-ts-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-index-ts-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> {<span class="pl-smi">bindHandlers</span>, <span class="pl-smi">bootstrap</span>, <span class="pl-smi">JsonServiceClient</span>} <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>@servicestack/client<span class="pl-pds">"</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-index-ts-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">import</span> {<span class="pl-smi">Contact</span>, <span class="pl-smi">DeleteContact</span>, <span class="pl-smi">GetContacts</span>} <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">"</span>../../../dtos<span class="pl-pds">"</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-index-ts-LC3" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-index-ts-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">declare</span> <span class="pl-k">var</span> CONTACTS<span class="pl-k">:</span><span class="pl-en">Contact</span>[];</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-index-ts-LC5" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-index-ts-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k"><span class="pl-k">const</span></span> client <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">JsonServiceClient</span>();</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-index-ts-LC7" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-index-ts-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-en">bootstrap</span>(); <span class="pl-c"><span class="pl-c">//</span>converts data-invalid attributes into Bootstrap v4 error messages.</span></td>
                </tr>
                <tr>
                  <td id="file-index-ts-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-index-ts-LC9" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-index-ts-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-en">bindHandlers</span>({</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-index-ts-LC11" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">deleteContact</span>: <span class="pl-k">async</span> <span class="pl-k">function</span>(<span class="pl-v">id</span><span class="pl-k">:</span><span class="pl-c1">number</span>) {</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-index-ts-LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">confirm</span>(<span class="pl-s"><span class="pl-pds">'</span>Are you sure?<span class="pl-pds">'</span></span>))</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-index-ts-LC13" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-index-ts-LC14" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-index-ts-LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">await</span> <span class="pl-smi">client</span>.<span class="pl-c1">delete</span>(<span class="pl-k">new</span> <span class="pl-en">DeleteContact</span>({ <span class="pl-smi">id</span> }));</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-index-ts-LC16" class="blob-code blob-code-inner js-file-line">        <span class="pl-k"><span class="pl-k">const</span></span> response <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">client</span>.<span class="pl-c1">get</span>(<span class="pl-k">new</span> <span class="pl-en">GetContacts</span>());</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-index-ts-LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">CONTACTS</span> <span class="pl-k">=</span> <span class="pl-smi">response</span>.<span class="pl-smi">results</span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-index-ts-LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">render</span>();</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-index-ts-LC19" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-index-ts-LC20" class="blob-code blob-code-inner js-file-line">});</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-index-ts-LC21" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-index-ts-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k"><span class="pl-k">const</span></span> contactRow <span class="pl-k">=</span> (<span class="pl-v">contact</span><span class="pl-k">:</span><span class="pl-en">Contact</span>) <span class="pl-k">=&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-index-ts-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-index-ts-LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">`</span>&lt;tr style="background:${<span class="pl-smi">contact</span>.<span class="pl-c1">color</span>}"&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-index-ts-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-index-ts-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;td&gt;${<span class="pl-smi">contact</span>.<span class="pl-c1">title</span>} ${<span class="pl-smi">contact</span>.<span class="pl-c1">name</span>} (${<span class="pl-smi">contact</span>.<span class="pl-smi">age</span>})&lt;/td&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-index-ts-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-index-ts-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;td&gt;&lt;a href="/server-ts/contacts/${<span class="pl-smi">contact</span>.<span class="pl-c1">id</span>}/edit"&gt;edit&lt;/a&gt;&lt;/td&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-index-ts-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-index-ts-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-s">        &lt;td&gt;&lt;button class="btn btn-sm btn-primary" data-click="deleteContact:${<span class="pl-smi">contact</span>.<span class="pl-c1">id</span>}"&gt;delete&lt;/button&gt;&lt;/td&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-index-ts-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-index-ts-LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-s">    &lt;/tr&gt;<span class="pl-pds">`</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-index-ts-LC28" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-index-ts-LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> render() {</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-index-ts-LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">let</span> sb <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-index-ts-LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">CONTACTS</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-index-ts-LC32" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">let</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; <span class="pl-smi">i</span><span class="pl-k">&lt;</span><span class="pl-c1">CONTACTS</span>.<span class="pl-c1">length</span>; <span class="pl-smi">i</span><span class="pl-k">++</span>) {</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-index-ts-LC33" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">sb</span> <span class="pl-k">+=</span> <span class="pl-en">contactRow</span>(<span class="pl-c1">CONTACTS</span>[<span class="pl-smi">i</span>])</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-index-ts-LC34" class="blob-code blob-code-inner js-file-line">        }</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-index-ts-LC35" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-index-ts-LC36" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sb</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;tr&gt;&lt;td&gt;There are no contacts.&lt;/td&gt;&lt;/tr&gt;<span class="pl-pds">"</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-index-ts-LC37" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-index-ts-LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">document</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">"</span>#results<span class="pl-pds">"</span></span>)<span class="pl-k">!</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">`</span>&lt;tbody&gt;${<span class="pl-smi">sb</span>}&lt;/tbody&gt;<span class="pl-pds">`</span></span>;</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-index-ts-LC39" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-index-ts-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-index-ts-LC40" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-index-ts-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-index-ts-LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-en">render</span>();</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0/raw/16ff73ae5a8c4b37f6ab932ddb156385cdf02f9b/index.ts" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/2447bb06d5dabca83661453c22e855a0#file-index-ts">index.ts</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "server-ts"
}
</script>

<style scoped>

</style>