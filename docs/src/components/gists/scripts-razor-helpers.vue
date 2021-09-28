<template>
  <div id="gist94751797" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-contact-ui-cs" class="file">


            <div itemprop="text" class="Box-body px-0 blob-wrapper data type-c ">

              <table class="highlight tab-size js-file-line-container" data-tab-size="8">
                <tbody><tr>
                  <td id="file-contact-ui-cs-L1" class="blob-num js-line-number" data-line-number="1"></td>
                  <td id="file-contact-ui-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Custom filters for App data sources and re-usable UI snippets in ServiceStack Sharp Pages</span></td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L2" class="blob-num js-line-number" data-line-number="2"></td>
                  <td id="file-contact-ui-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">ContactScripts</span> : <span class="pl-en">ScriptMethods</span></td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L3" class="blob-num js-line-number" data-line-number="3"></td>
                  <td id="file-contact-ui-cs-LC3" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L4" class="blob-num js-line-number" data-line-number="4"></td>
                  <td id="file-contact-ui-cs-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">internal</span> <span class="pl-k">readonly</span> <span class="pl-en">List</span>&lt;<span class="pl-en">KeyValuePair</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt;&gt; <span class="pl-smi">MenuItems</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">List</span>&lt;<span class="pl-en">KeyValuePair</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt;&gt; {</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L5" class="blob-num js-line-number" data-line-number="5"></td>
                  <td id="file-contact-ui-cs-LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">KeyValuePair</span>.<span class="pl-en">Create</span>(<span class="pl-s"><span class="pl-pds">"</span>/<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Home<span class="pl-pds">"</span></span>),</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L6" class="blob-num js-line-number" data-line-number="6"></td>
                  <td id="file-contact-ui-cs-LC6" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">KeyValuePair</span>.<span class="pl-en">Create</span>(<span class="pl-s"><span class="pl-pds">"</span>/login-links<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Login Links<span class="pl-pds">"</span></span>),</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L7" class="blob-num js-line-number" data-line-number="7"></td>
                  <td id="file-contact-ui-cs-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">KeyValuePair</span>.<span class="pl-en">Create</span>(<span class="pl-s"><span class="pl-pds">"</span>/register-links<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Register Links<span class="pl-pds">"</span></span>),</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L8" class="blob-num js-line-number" data-line-number="8"></td>
                  <td id="file-contact-ui-cs-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">KeyValuePair</span>.<span class="pl-en">Create</span>(<span class="pl-s"><span class="pl-pds">"</span>/contact-links<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Contacts Links<span class="pl-pds">"</span></span>),</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L9" class="blob-num js-line-number" data-line-number="9"></td>
                  <td id="file-contact-ui-cs-LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">KeyValuePair</span>.<span class="pl-en">Create</span>(<span class="pl-s"><span class="pl-pds">"</span>/contact-edit-links<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Edit Contact Links<span class="pl-pds">"</span></span>),</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L10" class="blob-num js-line-number" data-line-number="10"></td>
                  <td id="file-contact-ui-cs-LC10" class="blob-code blob-code-inner js-file-line">    };</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L11" class="blob-num js-line-number" data-line-number="11"></td>
                  <td id="file-contact-ui-cs-LC11" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L12" class="blob-num js-line-number" data-line-number="12"></td>
                  <td id="file-contact-ui-cs-LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">List</span>&lt;<span class="pl-en">KeyValuePair</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt;&gt; <span class="pl-en">menuItems</span>() <span class="pl-k">=&gt;</span> <span class="pl-smi">MenuItems</span>;</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L13" class="blob-num js-line-number" data-line-number="13"></td>
                  <td id="file-contact-ui-cs-LC13" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L14" class="blob-num js-line-number" data-line-number="14"></td>
                  <td id="file-contact-ui-cs-LC14" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">static</span> <span class="pl-en">Dictionary</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt; <span class="pl-smi">Colors</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Dictionary</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt; {</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L15" class="blob-num js-line-number" data-line-number="15"></td>
                  <td id="file-contact-ui-cs-LC15" class="blob-code blob-code-inner js-file-line">        {<span class="pl-s"><span class="pl-pds">"</span>#ffa4a2<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Red<span class="pl-pds">"</span></span>},</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L16" class="blob-num js-line-number" data-line-number="16"></td>
                  <td id="file-contact-ui-cs-LC16" class="blob-code blob-code-inner js-file-line">        {<span class="pl-s"><span class="pl-pds">"</span>#b2fab4<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Green<span class="pl-pds">"</span></span>},</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L17" class="blob-num js-line-number" data-line-number="17"></td>
                  <td id="file-contact-ui-cs-LC17" class="blob-code blob-code-inner js-file-line">        {<span class="pl-s"><span class="pl-pds">"</span>#9be7ff<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Blue<span class="pl-pds">"</span></span>}</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L18" class="blob-num js-line-number" data-line-number="18"></td>
                  <td id="file-contact-ui-cs-LC18" class="blob-code blob-code-inner js-file-line">    };</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L19" class="blob-num js-line-number" data-line-number="19"></td>
                  <td id="file-contact-ui-cs-LC19" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L20" class="blob-num js-line-number" data-line-number="20"></td>
                  <td id="file-contact-ui-cs-LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">Dictionary</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt; <span class="pl-en">contactColors</span>() <span class="pl-k">=&gt;</span> <span class="pl-smi">Colors</span>;</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L21" class="blob-num js-line-number" data-line-number="21"></td>
                  <td id="file-contact-ui-cs-LC21" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L22" class="blob-num js-line-number" data-line-number="22"></td>
                  <td id="file-contact-ui-cs-LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">static</span> <span class="pl-en">List</span>&lt;<span class="pl-en">KeyValuePair</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt;&gt; <span class="pl-smi">Titles</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">EnumUtils</span>.<span class="pl-en">GetValues</span>&lt;<span class="pl-en">Title</span>&gt;()</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L23" class="blob-num js-line-number" data-line-number="23"></td>
                  <td id="file-contact-ui-cs-LC23" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">Where</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span> <span class="pl-k">!=</span> <span class="pl-smi">Title</span>.<span class="pl-smi">Unspecified</span>)</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L24" class="blob-num js-line-number" data-line-number="24"></td>
                  <td id="file-contact-ui-cs-LC24" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">ToKeyValuePairs</span>();</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L25" class="blob-num js-line-number" data-line-number="25"></td>
                  <td id="file-contact-ui-cs-LC25" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L26" class="blob-num js-line-number" data-line-number="26"></td>
                  <td id="file-contact-ui-cs-LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">List</span>&lt;<span class="pl-en">KeyValuePair</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt;&gt; <span class="pl-en">contactTitles</span>() <span class="pl-k">=&gt;</span> <span class="pl-smi">Titles</span>;</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L27" class="blob-num js-line-number" data-line-number="27"></td>
                  <td id="file-contact-ui-cs-LC27" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L28" class="blob-num js-line-number" data-line-number="28"></td>
                  <td id="file-contact-ui-cs-LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">private</span> <span class="pl-k">static</span> <span class="pl-en">List</span>&lt;<span class="pl-k">string</span>&gt; <span class="pl-smi">FilmGenres</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">EnumUtils</span>.<span class="pl-en">GetValues</span>&lt;<span class="pl-en">FilmGenres</span>&gt;().<span class="pl-en">Map</span>(<span class="pl-smi">x</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">x</span>.<span class="pl-en">ToDescription</span>());</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L29" class="blob-num js-line-number" data-line-number="29"></td>
                  <td id="file-contact-ui-cs-LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-en">List</span>&lt;<span class="pl-k">string</span>&gt; <span class="pl-en">contactGenres</span>() <span class="pl-k">=&gt;</span> <span class="pl-smi">FilmGenres</span>;</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L30" class="blob-num js-line-number" data-line-number="30"></td>
                  <td id="file-contact-ui-cs-LC30" class="blob-code blob-code-inner js-file-line">}</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L31" class="blob-num js-line-number" data-line-number="31"></td>
                  <td id="file-contact-ui-cs-LC31" class="blob-code blob-code-inner js-file-line">
                  </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L32" class="blob-num js-line-number" data-line-number="32"></td>
                  <td id="file-contact-ui-cs-LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Razor Helpers for App data sources and re-usable UI snippets in Razor pages</span></td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L33" class="blob-num js-line-number" data-line-number="33"></td>
                  <td id="file-contact-ui-cs-LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-k">class</span> <span class="pl-en">RazorHelpers</span></td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L34" class="blob-num js-line-number" data-line-number="34"></td>
                  <td id="file-contact-ui-cs-LC34" class="blob-code blob-code-inner js-file-line">{</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L35" class="blob-num js-line-number" data-line-number="35"></td>
                  <td id="file-contact-ui-cs-LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">internal</span> <span class="pl-k">static</span> <span class="pl-k">readonly</span> <span class="pl-en">ContactScripts</span> <span class="pl-smi">Instance</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">ContactScripts</span>();</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L36" class="blob-num js-line-number" data-line-number="36"></td>
                  <td id="file-contact-ui-cs-LC36" class="blob-code blob-code-inner js-file-line">        </td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L37" class="blob-num js-line-number" data-line-number="37"></td>
                  <td id="file-contact-ui-cs-LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-en">Dictionary</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt; <span class="pl-en">ContactColors</span>(<span class="pl-k">this</span> <span class="pl-en">IHtmlHelper</span> <span class="pl-smi">html</span>) <span class="pl-k">=&gt;</span> <span class="pl-smi">Instance</span>.<span class="pl-en">contactColors</span>();</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L38" class="blob-num js-line-number" data-line-number="38"></td>
                  <td id="file-contact-ui-cs-LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-en">List</span>&lt;<span class="pl-en">KeyValuePair</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt;&gt; <span class="pl-en">ContactTitles</span>(<span class="pl-k">this</span> <span class="pl-en">IHtmlHelper</span> <span class="pl-smi">html</span>) <span class="pl-k">=&gt;</span> <span class="pl-smi">Instance</span>.<span class="pl-en">contactTitles</span>();</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L39" class="blob-num js-line-number" data-line-number="39"></td>
                  <td id="file-contact-ui-cs-LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-en">List</span>&lt;<span class="pl-k">string</span>&gt; <span class="pl-en">ContactGenres</span>(<span class="pl-k">this</span> <span class="pl-en">IHtmlHelper</span> <span class="pl-smi">html</span>) <span class="pl-k">=&gt;</span> <span class="pl-smi">Instance</span>.<span class="pl-en">contactGenres</span>();</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L40" class="blob-num js-line-number" data-line-number="40"></td>
                  <td id="file-contact-ui-cs-LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">public</span> <span class="pl-k">static</span> <span class="pl-en">List</span>&lt;<span class="pl-en">KeyValuePair</span>&lt;<span class="pl-k">string</span>, <span class="pl-k">string</span>&gt;&gt; <span class="pl-en">MenuItems</span>(<span class="pl-k">this</span> <span class="pl-en">IHtmlHelper</span> <span class="pl-smi">html</span>) <span class="pl-k">=&gt;</span> <span class="pl-smi">Instance</span>.<span class="pl-smi">MenuItems</span>;</td>
                </tr>
                <tr>
                  <td id="file-contact-ui-cs-L41" class="blob-num js-line-number" data-line-number="41"></td>
                  <td id="file-contact-ui-cs-LC41" class="blob-code blob-code-inner js-file-line">}    </td>
                </tr>
                </tbody></table>


            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gistlyn/92a3c2cf97b5c6ce6d5b67c0a87b7d22/raw/8ab3dd4e7983d5ae4a7b30f1c28d9b0000681753/Contact.UI.cs" style="float:right">view raw</a>
        <a href="https://gist.github.com/gistlyn/92a3c2cf97b5c6ce6d5b67c0a87b7d22#file-contact-ui-cs">Contact.UI.cs</a>
        hosted with ❤ by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scripts-razor-helpers"
}
</script>

<style>

</style>