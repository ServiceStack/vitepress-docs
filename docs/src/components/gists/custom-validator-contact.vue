<template>

  <div id="gist94751658" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-contactservices-cs" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-c ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-contactservices-cs-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-contactservices-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">CreateContactValidator</span> : <span class="pl-en">AbstractValidator</span>&lt;<span class="pl-en">CreateContact</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-contactservices-cs-LC2" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-contactservices-cs-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">CreateContactValidator</span>()</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-contactservices-cs-LC4" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-contactservices-cs-LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Title</span>).<span class="pl-en">NotEqual</span>(<span class="pl-smi">Title</span>.<span class="pl-smi">Unspecified</span>).<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Please choose a title<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-contactservices-cs-LC6" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Name</span>).<span class="pl-en">NotEmpty</span>();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-contactservices-cs-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Color</span>).<span class="pl-en">Must</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-en">IsValidColor</span>()).<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Must be a valid color<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-contactservices-cs-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">FilmGenres</span>).<span class="pl-en">NotEmpty</span>().<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Please select at least 1 genre<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-contactservices-cs-LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Age</span>).<span class="pl-en">GreaterThan</span>(<span class="pl-c1">13</span>).<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Contacts must be older than 13<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-contactservices-cs-LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-smi">Agree</span>).<span class="pl-en">Equal</span>(<span class="pl-c1">true</span>).<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>You must agree before submitting<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-contactservices-cs-LC11" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-contactservices-cs-LC12" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-contactservices-cs-LC13" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-contactservices-cs-LC14" class="blob-code blob-code-inner js-file-line">[<span class="pl-en">Authenticate</span>] <span class="pl-c"><span class="pl-c">//</span> Limit to Authenticated Users</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-contactservices-cs-LC15" class="blob-code blob-code-inner js-file-line">[<span class="pl-en">ErrorView</span>(<span class="pl-k">nameof</span>(<span class="pl-smi">CreateContact</span>.<span class="pl-smi">ErrorView</span>))] <span class="pl-c"><span class="pl-c">//</span> Display ErrorView for HTML requests resulting in an Exception</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-contactservices-cs-LC16" class="blob-code blob-code-inner js-file-line">[<span class="pl-en">DefaultView</span>(<span class="pl-s"><span class="pl-pds">"</span>/server/contacts<span class="pl-pds">"</span></span>)] <span class="pl-c"><span class="pl-c">//</span> Render custom HTML View for HTML Requests</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-contactservices-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">ContactServices</span> : <span class="pl-en">Service</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-contactservices-cs-LC18" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-contactservices-cs-LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">static</span> <span class="pl-k">int</span> <span class="pl-smi">Counter</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-contactservices-cs-LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">internal</span> <span class="pl-k">static</span> <span class="pl-en">ConcurrentDictionary</span>&lt;<span class="pl-k">int</span>, <span class="pl-k">Data</span>.<span class="pl-en">Contact</span>&gt; <span class="pl-smi">Contacts</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ConcurrentDictionary</span>&lt;<span class="pl-k">int</span>, <span class="pl-k">Data</span>.<span class="pl-en">Contact</span>&gt;();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-contactservices-cs-LC21" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-contactservices-cs-LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">object</span> <span class="pl-en">Any</span>(<span class="pl-en">GetContacts</span> <span class="pl-smi">request</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-contactservices-cs-LC23" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-contactservices-cs-LC24" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">userId</span> <span class="pl-k">=</span> <span class="pl-k">this</span>.<span class="pl-en">GetUserId</span>();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-contactservices-cs-LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">GetContactsResponse</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-contactservices-cs-LC26" class="blob-code blob-code-inner js-file-line">        {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-contactservices-cs-LC27" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Results</span> <span class="pl-k">=</span> <span class="pl-smi">Contacts</span>.<span class="pl-smi">Values</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-contactservices-cs-LC28" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">Where</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-smi">UserAuthId</span> <span class="pl-k">==</span> <span class="pl-smi">userId</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-contactservices-cs-LC29" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">OrderByDescending</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-smi">Id</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-contactservices-cs-LC30" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">Map</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-en">ConvertTo</span>&lt;<span class="pl-en">Contact</span>&gt;())</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-contactservices-cs-LC31" class="blob-code blob-code-inner js-file-line">        };</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-contactservices-cs-LC32" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-contactservices-cs-LC33" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-contactservices-cs-LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">object</span> <span class="pl-en">Any</span>(<span class="pl-en">GetContact</span> <span class="pl-smi">request</span>) <span class="pl-k">=&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-contactservices-cs-LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Contacts</span>.<span class="pl-en">TryGetValue</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Id</span>, <span class="pl-k">out</span> <span class="pl-k">var</span> <span class="pl-smi">contact</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">contact</span>.<span class="pl-smi">UserAuthId</span> <span class="pl-k">==</span> <span class="pl-k">this</span>.<span class="pl-en">GetUserId</span>()</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-contactservices-cs-LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">?</span> (<span class="pl-k">object</span>)<span class="pl-k">new</span> <span class="pl-en">GetContactResponse</span> { <span class="pl-smi">Result</span> <span class="pl-k">=</span> <span class="pl-smi">contact</span>.<span class="pl-en">ConvertTo</span>&lt;<span class="pl-en">Contact</span>&gt;() }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-contactservices-cs-LC37" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">:</span> <span class="pl-smi">HttpError</span>.<span class="pl-en">NotFound</span>(<span class="pl-s"><span class="pl-pds">$"</span>Contact was not found<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-contactservices-cs-LC38" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-contactservices-cs-LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">object</span> <span class="pl-en">Any</span>(<span class="pl-en">CreateContact</span> <span class="pl-smi">request</span>) </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-contactservices-cs-LC40" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-contactservices-cs-LC41" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">newContact</span> <span class="pl-k">=</span> <span class="pl-smi">request</span>.<span class="pl-en">ConvertTo</span>&lt;<span class="pl-k">Data</span>.<span class="pl-en">Contact</span>&gt;();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L42" class="blob-num js-line-number" data-line-number="42"></td>
                  <td id="file-contactservices-cs-LC42" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">newContact</span>.<span class="pl-smi">Id</span> <span class="pl-k">=</span> <span class="pl-smi">Interlocked</span>.<span class="pl-en">Increment</span>(<span class="pl-k">ref</span> <span class="pl-smi">Counter</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L43" class="blob-num js-line-number" data-line-number="43"></td>
                  <td id="file-contactservices-cs-LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">newContact</span>.<span class="pl-smi">UserAuthId</span> <span class="pl-k">=</span> <span class="pl-k">this</span>.<span class="pl-en">GetUserId</span>();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L44" class="blob-num js-line-number" data-line-number="44"></td>
                  <td id="file-contactservices-cs-LC44" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">newContact</span>.<span class="pl-smi">CreatedDate</span> <span class="pl-k">=</span> <span class="pl-smi">newContact</span>.<span class="pl-smi">ModifiedDate</span> <span class="pl-k">=</span> <span class="pl-smi">DateTime</span>.<span class="pl-smi">UtcNow</span>;</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L45" class="blob-num js-line-number" data-line-number="45"></td>
                  <td id="file-contactservices-cs-LC45" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L46" class="blob-num js-line-number" data-line-number="46"></td>
                  <td id="file-contactservices-cs-LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">contacts</span> <span class="pl-k">=</span> <span class="pl-smi">Contacts</span>.<span class="pl-smi">Values</span>.<span class="pl-en">ToList</span>();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L47" class="blob-num js-line-number" data-line-number="47"></td>
                  <td id="file-contactservices-cs-LC47" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-smi">alreadyExists</span> <span class="pl-k">=</span> <span class="pl-smi">contacts</span>.<span class="pl-en">Any</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-smi">UserAuthId</span> <span class="pl-k">==</span> <span class="pl-smi">newContact</span>.<span class="pl-smi">UserAuthId</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">x</span>.<span class="pl-smi">Name</span> <span class="pl-k">==</span> <span class="pl-smi">request</span>.<span class="pl-smi">Name</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L48" class="blob-num js-line-number" data-line-number="48"></td>
                  <td id="file-contactservices-cs-LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">alreadyExists</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L49" class="blob-num js-line-number" data-line-number="49"></td>
                  <td id="file-contactservices-cs-LC49" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">ArgumentException</span>(<span class="pl-s"><span class="pl-pds">$"</span>You already have a contact named '{<span class="pl-smi">request</span>.<span class="pl-smi">Name</span>}'<span class="pl-pds">"</span></span>, <span class="pl-k">nameof</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Name</span>));</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L50" class="blob-num js-line-number" data-line-number="50"></td>
                  <td id="file-contactservices-cs-LC50" class="blob-code blob-code-inner js-file-line">        </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L51" class="blob-num js-line-number" data-line-number="51"></td>
                  <td id="file-contactservices-cs-LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Contacts</span>[<span class="pl-smi">newContact</span>.<span class="pl-smi">Id</span>] <span class="pl-k">=</span> <span class="pl-smi">newContact</span>;</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L52" class="blob-num js-line-number" data-line-number="52"></td>
                  <td id="file-contactservices-cs-LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">CreateContactResponse</span> { <span class="pl-smi">Result</span> <span class="pl-k">=</span> <span class="pl-smi">newContact</span>.<span class="pl-en">ConvertTo</span>&lt;<span class="pl-en">Contact</span>&gt;() };</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L53" class="blob-num js-line-number" data-line-number="53"></td>
                  <td id="file-contactservices-cs-LC53" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L54" class="blob-num js-line-number" data-line-number="54"></td>
                  <td id="file-contactservices-cs-LC54" class="blob-code blob-code-inner js-file-line">    </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L55" class="blob-num js-line-number" data-line-number="55"></td>
                  <td id="file-contactservices-cs-LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">object</span> <span class="pl-en">AnyHtml</span>(<span class="pl-en">CreateContact</span> <span class="pl-smi">request</span>) <span class="pl-c"><span class="pl-c">//</span> Called for CreateContact API HTML Requests on any HTTP Method</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L56" class="blob-num js-line-number" data-line-number="56"></td>
                  <td id="file-contactservices-cs-LC56" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L57" class="blob-num js-line-number" data-line-number="57"></td>
                  <td id="file-contactservices-cs-LC57" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">Any</span>(<span class="pl-smi">request</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L58" class="blob-num js-line-number" data-line-number="58"></td>
                  <td id="file-contactservices-cs-LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">HttpResult</span>.<span class="pl-en">Redirect</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Continue</span> <span class="pl-k">??</span> <span class="pl-smi">Request</span>.<span class="pl-en">GetView</span>());</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L59" class="blob-num js-line-number" data-line-number="59"></td>
                  <td id="file-contactservices-cs-LC59" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L60" class="blob-num js-line-number" data-line-number="60"></td>
                  <td id="file-contactservices-cs-LC60" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L61" class="blob-num js-line-number" data-line-number="61"></td>
                  <td id="file-contactservices-cs-LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">Any</span>(<span class="pl-en">DeleteContact</span> <span class="pl-smi">request</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L62" class="blob-num js-line-number" data-line-number="62"></td>
                  <td id="file-contactservices-cs-LC62" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L63" class="blob-num js-line-number" data-line-number="63"></td>
                  <td id="file-contactservices-cs-LC63" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">Contacts</span>.<span class="pl-en">TryGetValue</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Id</span>, <span class="pl-k">out</span> <span class="pl-k">var</span> <span class="pl-smi">contact</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">contact</span>.<span class="pl-smi">UserAuthId</span> <span class="pl-k">==</span> <span class="pl-k">this</span>.<span class="pl-en">GetUserId</span>())</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L64" class="blob-num js-line-number" data-line-number="64"></td>
                  <td id="file-contactservices-cs-LC64" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Contacts</span>.<span class="pl-en">TryRemove</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Id</span>, <span class="pl-k">out</span> <span class="pl-c1">_</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L65" class="blob-num js-line-number" data-line-number="65"></td>
                  <td id="file-contactservices-cs-LC65" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L66" class="blob-num js-line-number" data-line-number="66"></td>
                  <td id="file-contactservices-cs-LC66" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L67" class="blob-num js-line-number" data-line-number="67"></td>
                  <td id="file-contactservices-cs-LC67" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">object</span> <span class="pl-en">PostHtml</span>(<span class="pl-en">DeleteContact</span> <span class="pl-smi">request</span>) <span class="pl-c"><span class="pl-c">//</span> Only called by DeleteContact HTML POST requests </span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L68" class="blob-num js-line-number" data-line-number="68"></td>
                  <td id="file-contactservices-cs-LC68" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L69" class="blob-num js-line-number" data-line-number="69"></td>
                  <td id="file-contactservices-cs-LC69" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">Any</span>(<span class="pl-smi">request</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L70" class="blob-num js-line-number" data-line-number="70"></td>
                  <td id="file-contactservices-cs-LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">HttpResult</span>.<span class="pl-en">Redirect</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Continue</span> <span class="pl-k">??</span> <span class="pl-smi">Request</span>.<span class="pl-en">GetView</span>()); <span class="pl-c"><span class="pl-c">//</span>added by [DefaultView]</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L71" class="blob-num js-line-number" data-line-number="71"></td>
                  <td id="file-contactservices-cs-LC71" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L72" class="blob-num js-line-number" data-line-number="72"></td>
                  <td id="file-contactservices-cs-LC72" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L73" class="blob-num js-line-number" data-line-number="73"></td>
                  <td id="file-contactservices-cs-LC73" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L74" class="blob-num js-line-number" data-line-number="74"></td>
                  <td id="file-contactservices-cs-LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">UpdateContactValidator</span> : <span class="pl-en">AbstractValidator</span>&lt;<span class="pl-en">UpdateContact</span>&gt;</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L75" class="blob-num js-line-number" data-line-number="75"></td>
                  <td id="file-contactservices-cs-LC75" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L76" class="blob-num js-line-number" data-line-number="76"></td>
                  <td id="file-contactservices-cs-LC76" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">UpdateContactValidator</span>()</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L77" class="blob-num js-line-number" data-line-number="77"></td>
                  <td id="file-contactservices-cs-LC77" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L78" class="blob-num js-line-number" data-line-number="78"></td>
                  <td id="file-contactservices-cs-LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Id</span>).<span class="pl-en">GreaterThan</span>(<span class="pl-c1">0</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L79" class="blob-num js-line-number" data-line-number="79"></td>
                  <td id="file-contactservices-cs-LC79" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Title</span>).<span class="pl-en">NotEqual</span>(<span class="pl-smi">Title</span>.<span class="pl-smi">Unspecified</span>).<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Please choose a title<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L80" class="blob-num js-line-number" data-line-number="80"></td>
                  <td id="file-contactservices-cs-LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Name</span>).<span class="pl-en">NotEmpty</span>();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L81" class="blob-num js-line-number" data-line-number="81"></td>
                  <td id="file-contactservices-cs-LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Color</span>).<span class="pl-en">Must</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-en">IsValidColor</span>()).<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Must be a valid color<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L82" class="blob-num js-line-number" data-line-number="82"></td>
                  <td id="file-contactservices-cs-LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">FilmGenres</span>).<span class="pl-en">NotEmpty</span>().<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Please select at least 1 genre<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L83" class="blob-num js-line-number" data-line-number="83"></td>
                  <td id="file-contactservices-cs-LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">RuleFor</span>(<span class="pl-smi">r</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">r</span>.<span class="pl-smi">Age</span>).<span class="pl-en">GreaterThan</span>(<span class="pl-c1">13</span>).<span class="pl-en">WithMessage</span>(<span class="pl-s"><span class="pl-pds">"</span>Contacts must be older than 13<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L84" class="blob-num js-line-number" data-line-number="84"></td>
                  <td id="file-contactservices-cs-LC84" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L85" class="blob-num js-line-number" data-line-number="85"></td>
                  <td id="file-contactservices-cs-LC85" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L86" class="blob-num js-line-number" data-line-number="86"></td>
                  <td id="file-contactservices-cs-LC86" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L87" class="blob-num js-line-number" data-line-number="87"></td>
                  <td id="file-contactservices-cs-LC87" class="blob-code blob-code-inner js-file-line">[<span class="pl-en">ErrorView</span>(<span class="pl-k">nameof</span>(<span class="pl-smi">UpdateContact</span>.<span class="pl-smi">ErrorView</span>))] <span class="pl-c"><span class="pl-c">//</span> Display ErrorView for HTML requests resulting in an Exception</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L88" class="blob-num js-line-number" data-line-number="88"></td>
                  <td id="file-contactservices-cs-LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">UpdateContactServices</span> : <span class="pl-en">Service</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L89" class="blob-num js-line-number" data-line-number="89"></td>
                  <td id="file-contactservices-cs-LC89" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L90" class="blob-num js-line-number" data-line-number="90"></td>
                  <td id="file-contactservices-cs-LC90" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">object</span> <span class="pl-en">Any</span>(<span class="pl-en">UpdateContact</span> <span class="pl-smi">request</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L91" class="blob-num js-line-number" data-line-number="91"></td>
                  <td id="file-contactservices-cs-LC91" class="blob-code blob-code-inner js-file-line">    {</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L92" class="blob-num js-line-number" data-line-number="92"></td>
                  <td id="file-contactservices-cs-LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">ContactServices</span>.<span class="pl-smi">Contacts</span>.<span class="pl-en">TryGetValue</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Id</span>, <span class="pl-k">out</span> <span class="pl-k">var</span> <span class="pl-smi">contact</span>) <span class="pl-k">||</span> <span class="pl-smi">contact</span>.<span class="pl-smi">UserAuthId</span> <span class="pl-k">!=</span> <span class="pl-k">this</span>.<span class="pl-en">GetUserId</span>())</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L93" class="blob-num js-line-number" data-line-number="93"></td>
                  <td id="file-contactservices-cs-LC93" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">throw</span> <span class="pl-smi">HttpError</span>.<span class="pl-en">NotFound</span>(<span class="pl-s"><span class="pl-pds">"</span>Contact was not found<span class="pl-pds">"</span></span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L94" class="blob-num js-line-number" data-line-number="94"></td>
                  <td id="file-contactservices-cs-LC94" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L95" class="blob-num js-line-number" data-line-number="95"></td>
                  <td id="file-contactservices-cs-LC95" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">contact</span>.<span class="pl-en">PopulateWith</span>(<span class="pl-smi">request</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L96" class="blob-num js-line-number" data-line-number="96"></td>
                  <td id="file-contactservices-cs-LC96" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">contact</span>.<span class="pl-smi">ModifiedDate</span> <span class="pl-k">=</span> <span class="pl-smi">DateTime</span>.<span class="pl-smi">UtcNow</span>;</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L97" class="blob-num js-line-number" data-line-number="97"></td>
                  <td id="file-contactservices-cs-LC97" class="blob-code blob-code-inner js-file-line">        </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L98" class="blob-num js-line-number" data-line-number="98"></td>
                  <td id="file-contactservices-cs-LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">request</span>.<span class="pl-smi">Continue</span> <span class="pl-k">!=</span> <span class="pl-c1">null</span> </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L99" class="blob-num js-line-number" data-line-number="99"></td>
                  <td id="file-contactservices-cs-LC99" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">?</span> (<span class="pl-k">object</span>) <span class="pl-smi">HttpResult</span>.<span class="pl-en">Redirect</span>(<span class="pl-smi">request</span>.<span class="pl-smi">Continue</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L100" class="blob-num js-line-number" data-line-number="100"></td>
                  <td id="file-contactservices-cs-LC100" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">UpdateContactResponse</span>();</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L101" class="blob-num js-line-number" data-line-number="101"></td>
                  <td id="file-contactservices-cs-LC101" class="blob-code blob-code-inner js-file-line">    }</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L102" class="blob-num js-line-number" data-line-number="102"></td>
                  <td id="file-contactservices-cs-LC102" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L103" class="blob-num js-line-number" data-line-number="103"></td>
                  <td id="file-contactservices-cs-LC103" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L104" class="blob-num js-line-number" data-line-number="104"></td>
                  <td id="file-contactservices-cs-LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-k">class</span> <span class="pl-en">ContactServiceExtensions</span> <span class="pl-c"><span class="pl-c">//</span> DRY reusable logic used in Services and Validators</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L105" class="blob-num js-line-number" data-line-number="105"></td>
                  <td id="file-contactservices-cs-LC105" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L106" class="blob-num js-line-number" data-line-number="106"></td>
                  <td id="file-contactservices-cs-LC106" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-k">int</span> <span class="pl-en">GetUserId</span>(<span class="pl-k">this</span> <span class="pl-en">Service</span> <span class="pl-smi">service</span>) <span class="pl-k">=&gt;</span> <span class="pl-smi">int</span>.<span class="pl-en">Parse</span>(<span class="pl-smi">service</span>.<span class="pl-en">GetSession</span>().<span class="pl-smi">UserAuthId</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L107" class="blob-num js-line-number" data-line-number="107"></td>
                  <td id="file-contactservices-cs-LC107" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L108" class="blob-num js-line-number" data-line-number="108"></td>
                  <td id="file-contactservices-cs-LC108" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-k">bool</span> <span class="pl-en">IsValidColor</span>(<span class="pl-k">this</span> <span class="pl-k">string</span> <span class="pl-smi">color</span>) <span class="pl-k">=&gt;</span> <span class="pl-k">!</span><span class="pl-smi">string</span>.<span class="pl-en">IsNullOrEmpty</span>(<span class="pl-smi">color</span>) <span class="pl-k">&amp;&amp;</span> </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L109" class="blob-num js-line-number" data-line-number="109"></td>
                  <td id="file-contactservices-cs-LC109" class="blob-code blob-code-inner js-file-line">        (<span class="pl-smi">color</span>.<span class="pl-en">FirstCharEquals</span>(<span class="pl-s">'#'</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L110" class="blob-num js-line-number" data-line-number="110"></td>
                  <td id="file-contactservices-cs-LC110" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">?</span> <span class="pl-smi">int</span>.<span class="pl-en">TryParse</span>(<span class="pl-smi">color</span>.<span class="pl-en">Substring</span>(<span class="pl-c1">1</span>), <span class="pl-smi">NumberStyles</span>.<span class="pl-smi">HexNumber</span>, <span class="pl-smi">CultureInfo</span>.<span class="pl-smi">InvariantCulture</span>, <span class="pl-k">out</span> <span class="pl-c1">_</span>)</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L111" class="blob-num js-line-number" data-line-number="111"></td>
                  <td id="file-contactservices-cs-LC111" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">:</span> <span class="pl-smi">Color</span>.<span class="pl-en">FromName</span>(<span class="pl-smi">color</span>).<span class="pl-smi">IsKnownColor</span>);</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L112" class="blob-num js-line-number" data-line-number="112"></td>
                  <td id="file-contactservices-cs-LC112" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L113" class="blob-num js-line-number" data-line-number="113"></td>
                  <td id="file-contactservices-cs-LC113" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L114" class="blob-num js-line-number" data-line-number="114"></td>
                  <td id="file-contactservices-cs-LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Register Custom Auto Mapping for converting Contact Data Model to Contact DTO</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L115" class="blob-num js-line-number" data-line-number="115"></td>
                  <td id="file-contactservices-cs-LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">ContactsHostConfig</span> : <span class="pl-en">IConfigureAppHost</span> </td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L116" class="blob-num js-line-number" data-line-number="116"></td>
                  <td id="file-contactservices-cs-LC116" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L117" class="blob-num js-line-number" data-line-number="117"></td>
                  <td id="file-contactservices-cs-LC117" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">void</span> <span class="pl-en">Configure</span>(<span class="pl-en">IAppHost</span> <span class="pl-smi">appHost</span>) <span class="pl-k">=&gt;</span></td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L118" class="blob-num js-line-number" data-line-number="118"></td>
                  <td id="file-contactservices-cs-LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">AutoMapping</span>.<span class="pl-en">RegisterConverter</span>((Data.<span class="pl-en">Contact</span> <span class="pl-smi">from</span>) <span class="pl-k">=&gt;</span> <span class="pl-smi">from</span>.<span class="pl-en">ConvertTo</span>&lt;<span class="pl-en">Contact</span>&gt;(<span class="pl-smi">skipConverters</span>:<span class="pl-c1">true</span>));</td>
                </tr>
                <tr>
                  <td id="file-contactservices-cs-L119" class="blob-num js-line-number" data-line-number="119"></td>
                  <td id="file-contactservices-cs-LC119" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/955b35004a72a293334e812978f42503/raw/690788df36a8f6d104ef8ef6670c149d27b29d6f/ContactServices.cs" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/955b35004a72a293334e812978f42503#file-contactservices-cs">ContactServices.cs</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-validator-contact"
}
</script>

<style scoped>

</style>