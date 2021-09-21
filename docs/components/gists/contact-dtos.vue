<template>
  <div id="gist94765060" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-contact-models-cs" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-c ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-contact-models-cs-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-contact-models-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">namespace</span> <span class="pl-en">Data</span> <span class="pl-c"><span class="pl-c">//</span> DB Models</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-contact-models-cs-LC2" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-contact-models-cs-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">using</span> <span class="pl-en">ServiceModel</span>.<span class="pl-en">Types</span>;</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-contact-models-cs-LC4" class="blob-code blob-code-inner js-file-line">    </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-contact-models-cs-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">Contact</span> <span class="pl-c"><span class="pl-c">//</span> Data Model</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-contact-models-cs-LC6" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-contact-models-cs-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Id</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-contact-models-cs-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">UserAuthId</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-contact-models-cs-LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">Title</span> <span class="pl-smi">Title</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-contact-models-cs-LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Name</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-contact-models-cs-LC11" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Color</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-contact-models-cs-LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">FilmGenres</span>[] <span class="pl-smi">FilmGenres</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-contact-models-cs-LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Age</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-contact-models-cs-LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">DateTime</span> <span class="pl-smi">CreatedDate</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-contact-models-cs-LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">DateTime</span> <span class="pl-smi">ModifiedDate</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-contact-models-cs-LC16" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-contact-models-cs-LC17" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-contact-models-cs-LC18" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-contact-models-cs-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">namespace</span> <span class="pl-en">ServiceModel</span> <span class="pl-c"><span class="pl-c">//</span> Request/Response DTOs</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-contact-models-cs-LC20" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-contact-models-cs-LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">using</span> <span class="pl-en">Types</span>;</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-contact-models-cs-LC22" class="blob-code blob-code-inner js-file-line">    </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-contact-models-cs-LC23" class="blob-code blob-code-inner js-file-line">    [<span class="pl-en">Route</span>(<span class="pl-s"><span class="pl-pds">"</span>/contacts<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>GET<span class="pl-pds">"</span></span>)]</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-contact-models-cs-LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">GetContacts</span> : <span class="pl-en">IReturn</span>&lt;<span class="pl-en">GetContactsResponse</span>&gt; {}</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-contact-models-cs-LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">GetContactsResponse</span> </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-contact-models-cs-LC26" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-contact-models-cs-LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">List</span>&lt;<span class="pl-en">Contact</span>&gt; <span class="pl-smi">Results</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-contact-models-cs-LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">ResponseStatus</span> <span class="pl-smi">ResponseStatus</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-contact-models-cs-LC29" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-contact-models-cs-LC30" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-contact-models-cs-LC31" class="blob-code blob-code-inner js-file-line">    [<span class="pl-en">Route</span>(<span class="pl-s"><span class="pl-pds">"</span>/contacts/{Id}<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>GET<span class="pl-pds">"</span></span>)]</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-contact-models-cs-LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">GetContact</span> : <span class="pl-en">IReturn</span>&lt;<span class="pl-en">GetContactResponse</span> &gt;</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-contact-models-cs-LC33" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-contact-models-cs-LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Id</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-contact-models-cs-LC35" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-contact-models-cs-LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">GetContactResponse</span> </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-contact-models-cs-LC37" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-contact-models-cs-LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">Contact</span> <span class="pl-smi">Result</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-contact-models-cs-LC39" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">ResponseStatus</span> <span class="pl-smi">ResponseStatus</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-contact-models-cs-LC40" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-contact-models-cs-LC41" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-contact-models-cs-LC42" class="blob-code blob-code-inner js-file-line">    [<span class="pl-en">Route</span>(<span class="pl-s"><span class="pl-pds">"</span>/contacts<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>POST<span class="pl-pds">"</span></span>)]</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L43" class="blob-num js-line-number" data-line-number="43"></td>
                  <td id="file-contact-models-cs-LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">CreateContact</span> : <span class="pl-en">IReturn</span>&lt;<span class="pl-en">CreateContactResponse</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L44" class="blob-num js-line-number" data-line-number="44"></td>
                  <td id="file-contact-models-cs-LC44" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L45" class="blob-num js-line-number" data-line-number="45"></td>
                  <td id="file-contact-models-cs-LC45" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">Title</span> <span class="pl-smi">Title</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L46" class="blob-num js-line-number" data-line-number="46"></td>
                  <td id="file-contact-models-cs-LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Name</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L47" class="blob-num js-line-number" data-line-number="47"></td>
                  <td id="file-contact-models-cs-LC47" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Color</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L48" class="blob-num js-line-number" data-line-number="48"></td>
                  <td id="file-contact-models-cs-LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">FilmGenres</span>[] <span class="pl-smi">FilmGenres</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L49" class="blob-num js-line-number" data-line-number="49"></td>
                  <td id="file-contact-models-cs-LC49" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Age</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L50" class="blob-num js-line-number" data-line-number="50"></td>
                  <td id="file-contact-models-cs-LC50" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">bool</span> <span class="pl-smi">Agree</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L51" class="blob-num js-line-number" data-line-number="51"></td>
                  <td id="file-contact-models-cs-LC51" class="blob-code blob-code-inner js-file-line">        </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L52" class="blob-num js-line-number" data-line-number="52"></td>
                  <td id="file-contact-models-cs-LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Continue</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L53" class="blob-num js-line-number" data-line-number="53"></td>
                  <td id="file-contact-models-cs-LC53" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">ErrorView</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L54" class="blob-num js-line-number" data-line-number="54"></td>
                  <td id="file-contact-models-cs-LC54" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L55" class="blob-num js-line-number" data-line-number="55"></td>
                  <td id="file-contact-models-cs-LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">CreateContactResponse</span> </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L56" class="blob-num js-line-number" data-line-number="56"></td>
                  <td id="file-contact-models-cs-LC56" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L57" class="blob-num js-line-number" data-line-number="57"></td>
                  <td id="file-contact-models-cs-LC57" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">Contact</span> <span class="pl-smi">Result</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L58" class="blob-num js-line-number" data-line-number="58"></td>
                  <td id="file-contact-models-cs-LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">ResponseStatus</span> <span class="pl-smi">ResponseStatus</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L59" class="blob-num js-line-number" data-line-number="59"></td>
                  <td id="file-contact-models-cs-LC59" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L60" class="blob-num js-line-number" data-line-number="60"></td>
                  <td id="file-contact-models-cs-LC60" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L61" class="blob-num js-line-number" data-line-number="61"></td>
                  <td id="file-contact-models-cs-LC61" class="blob-code blob-code-inner js-file-line">    [<span class="pl-en">Route</span>(<span class="pl-s"><span class="pl-pds">"</span>/contacts/{Id}<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>POST PUT<span class="pl-pds">"</span></span>)]</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L62" class="blob-num js-line-number" data-line-number="62"></td>
                  <td id="file-contact-models-cs-LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">UpdateContact</span> : <span class="pl-en">IReturn</span>&lt;<span class="pl-en">UpdateContactResponse</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L63" class="blob-num js-line-number" data-line-number="63"></td>
                  <td id="file-contact-models-cs-LC63" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L64" class="blob-num js-line-number" data-line-number="64"></td>
                  <td id="file-contact-models-cs-LC64" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Id</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L65" class="blob-num js-line-number" data-line-number="65"></td>
                  <td id="file-contact-models-cs-LC65" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">Title</span> <span class="pl-smi">Title</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L66" class="blob-num js-line-number" data-line-number="66"></td>
                  <td id="file-contact-models-cs-LC66" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Name</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L67" class="blob-num js-line-number" data-line-number="67"></td>
                  <td id="file-contact-models-cs-LC67" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Color</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L68" class="blob-num js-line-number" data-line-number="68"></td>
                  <td id="file-contact-models-cs-LC68" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">FilmGenres</span>[] <span class="pl-smi">FilmGenres</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L69" class="blob-num js-line-number" data-line-number="69"></td>
                  <td id="file-contact-models-cs-LC69" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Age</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L70" class="blob-num js-line-number" data-line-number="70"></td>
                  <td id="file-contact-models-cs-LC70" class="blob-code blob-code-inner js-file-line">        </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L71" class="blob-num js-line-number" data-line-number="71"></td>
                  <td id="file-contact-models-cs-LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Continue</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L72" class="blob-num js-line-number" data-line-number="72"></td>
                  <td id="file-contact-models-cs-LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">ErrorView</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L73" class="blob-num js-line-number" data-line-number="73"></td>
                  <td id="file-contact-models-cs-LC73" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L74" class="blob-num js-line-number" data-line-number="74"></td>
                  <td id="file-contact-models-cs-LC74" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">UpdateContactResponse</span> </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L75" class="blob-num js-line-number" data-line-number="75"></td>
                  <td id="file-contact-models-cs-LC75" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L76" class="blob-num js-line-number" data-line-number="76"></td>
                  <td id="file-contact-models-cs-LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-en">ResponseStatus</span> <span class="pl-smi">ResponseStatus</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L77" class="blob-num js-line-number" data-line-number="77"></td>
                  <td id="file-contact-models-cs-LC77" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L78" class="blob-num js-line-number" data-line-number="78"></td>
                  <td id="file-contact-models-cs-LC78" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L79" class="blob-num js-line-number" data-line-number="79"></td>
                  <td id="file-contact-models-cs-LC79" class="blob-code blob-code-inner js-file-line">    [<span class="pl-en">Route</span>(<span class="pl-s"><span class="pl-pds">"</span>/contacts/{Id}<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>DELETE<span class="pl-pds">"</span></span>)]</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L80" class="blob-num js-line-number" data-line-number="80"></td>
                  <td id="file-contact-models-cs-LC80" class="blob-code blob-code-inner js-file-line">    [<span class="pl-en">Route</span>(<span class="pl-s"><span class="pl-pds">"</span>/contacts/{Id}/delete<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>POST<span class="pl-pds">"</span></span>)] <span class="pl-c"><span class="pl-c">//</span> more accessible from HTML</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L81" class="blob-num js-line-number" data-line-number="81"></td>
                  <td id="file-contact-models-cs-LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">DeleteContact</span> : <span class="pl-en">IReturnVoid</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L82" class="blob-num js-line-number" data-line-number="82"></td>
                  <td id="file-contact-models-cs-LC82" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L83" class="blob-num js-line-number" data-line-number="83"></td>
                  <td id="file-contact-models-cs-LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Id</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L84" class="blob-num js-line-number" data-line-number="84"></td>
                  <td id="file-contact-models-cs-LC84" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Continue</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L85" class="blob-num js-line-number" data-line-number="85"></td>
                  <td id="file-contact-models-cs-LC85" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L86" class="blob-num js-line-number" data-line-number="86"></td>
                  <td id="file-contact-models-cs-LC86" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L87" class="blob-num js-line-number" data-line-number="87"></td>
                  <td id="file-contact-models-cs-LC87" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">namespace</span> <span class="pl-en">Types</span> <span class="pl-c"><span class="pl-c">//</span> DTO Types</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L88" class="blob-num js-line-number" data-line-number="88"></td>
                  <td id="file-contact-models-cs-LC88" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L89" class="blob-num js-line-number" data-line-number="89"></td>
                  <td id="file-contact-models-cs-LC89" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">Contact</span> </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L90" class="blob-num js-line-number" data-line-number="90"></td>
                  <td id="file-contact-models-cs-LC90" class="blob-code blob-code-inner js-file-line">        {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L91" class="blob-num js-line-number" data-line-number="91"></td>
                  <td id="file-contact-models-cs-LC91" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Id</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L92" class="blob-num js-line-number" data-line-number="92"></td>
                  <td id="file-contact-models-cs-LC92" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">UserAuthId</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L93" class="blob-num js-line-number" data-line-number="93"></td>
                  <td id="file-contact-models-cs-LC93" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">public</span> <span class="pl-en">Title</span> <span class="pl-smi">Title</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L94" class="blob-num js-line-number" data-line-number="94"></td>
                  <td id="file-contact-models-cs-LC94" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Name</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L95" class="blob-num js-line-number" data-line-number="95"></td>
                  <td id="file-contact-models-cs-LC95" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Color</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L96" class="blob-num js-line-number" data-line-number="96"></td>
                  <td id="file-contact-models-cs-LC96" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">public</span> <span class="pl-en">FilmGenres</span>[] <span class="pl-smi">FilmGenres</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L97" class="blob-num js-line-number" data-line-number="97"></td>
                  <td id="file-contact-models-cs-LC97" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Age</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L98" class="blob-num js-line-number" data-line-number="98"></td>
                  <td id="file-contact-models-cs-LC98" class="blob-code blob-code-inner js-file-line">        }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L99" class="blob-num js-line-number" data-line-number="99"></td>
                  <td id="file-contact-models-cs-LC99" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L100" class="blob-num js-line-number" data-line-number="100"></td>
                  <td id="file-contact-models-cs-LC100" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">enum</span> <span class="pl-en">Title</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L101" class="blob-num js-line-number" data-line-number="101"></td>
                  <td id="file-contact-models-cs-LC101" class="blob-code blob-code-inner js-file-line">        {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L102" class="blob-num js-line-number" data-line-number="102"></td>
                  <td id="file-contact-models-cs-LC102" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">Unspecified</span><span class="pl-k">=</span><span class="pl-c1">0</span>,</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L103" class="blob-num js-line-number" data-line-number="103"></td>
                  <td id="file-contact-models-cs-LC103" class="blob-code blob-code-inner js-file-line">            [<span class="pl-en">Description</span>(<span class="pl-s"><span class="pl-pds">"</span>Mr.<span class="pl-pds">"</span></span>)] <span class="pl-en">Mr</span>,</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L104" class="blob-num js-line-number" data-line-number="104"></td>
                  <td id="file-contact-models-cs-LC104" class="blob-code blob-code-inner js-file-line">            [<span class="pl-en">Description</span>(<span class="pl-s"><span class="pl-pds">"</span>Mrs.<span class="pl-pds">"</span></span>)] <span class="pl-en">Mrs</span>,</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L105" class="blob-num js-line-number" data-line-number="105"></td>
                  <td id="file-contact-models-cs-LC105" class="blob-code blob-code-inner js-file-line">            [<span class="pl-en">Description</span>(<span class="pl-s"><span class="pl-pds">"</span>Miss.<span class="pl-pds">"</span></span>)] <span class="pl-en">Miss</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L106" class="blob-num js-line-number" data-line-number="106"></td>
                  <td id="file-contact-models-cs-LC106" class="blob-code blob-code-inner js-file-line">        }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L107" class="blob-num js-line-number" data-line-number="107"></td>
                  <td id="file-contact-models-cs-LC107" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L108" class="blob-num js-line-number" data-line-number="108"></td>
                  <td id="file-contact-models-cs-LC108" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">public</span> <span class="pl-k">enum</span> <span class="pl-en">FilmGenres</span></td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L109" class="blob-num js-line-number" data-line-number="109"></td>
                  <td id="file-contact-models-cs-LC109" class="blob-code blob-code-inner js-file-line">        {</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L110" class="blob-num js-line-number" data-line-number="110"></td>
                  <td id="file-contact-models-cs-LC110" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">Action</span>,</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L111" class="blob-num js-line-number" data-line-number="111"></td>
                  <td id="file-contact-models-cs-LC111" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">Adventure</span>,</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L112" class="blob-num js-line-number" data-line-number="112"></td>
                  <td id="file-contact-models-cs-LC112" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">Comedy</span>,</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L113" class="blob-num js-line-number" data-line-number="113"></td>
                  <td id="file-contact-models-cs-LC113" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">Drama</span>,</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L114" class="blob-num js-line-number" data-line-number="114"></td>
                  <td id="file-contact-models-cs-LC114" class="blob-code blob-code-inner js-file-line">        }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L115" class="blob-num js-line-number" data-line-number="115"></td>
                  <td id="file-contact-models-cs-LC115" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contact-models-cs-L116" class="blob-num js-line-number" data-line-number="116"></td>
                  <td id="file-contact-models-cs-LC116" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/9a95fd0e2280f961a0a67243d2c799b0/raw/cab9ac7f5c44264dd3e4582489d87884b5364ea7/Contact.Models.cs" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/9a95fd0e2280f961a0a67243d2c799b0#file-contact-models-cs">Contact.Models.cs</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-dtos"
}
</script>

<style scoped>

</style>