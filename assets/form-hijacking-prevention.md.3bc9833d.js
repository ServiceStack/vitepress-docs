import{_ as n,c as a,o as s,a as t}from"./app.14440598.js";const g='{"title":"Form Hijacking Prevention","description":"","frontmatter":{"title":"Form Hijacking Prevention"},"relativePath":"form-hijacking-prevention.md","lastUpdated":1634495307618}',e={},o=t(`<p>The <code>SuppressFormsAuthenticationRedirectModule</code> module prevents the <a href="http://asp.net" target="_blank" rel="noopener noreferrer">asp.net</a> built in <code>FormsAuthenticationModule</code> from hijacking 401 requests and redirecting to a login page. Normally, this is the desired behavior if you are using a web browser and access an unauthorized page, but in the case of an API, we do not want that.</p><p>This module uses a hack to get this done. It temporarily replaces the 401 error with a 402 to trick the <code>FormsAuthenticationModule</code> and then puts the 401 back before the request is finished. It only does this on the path for your API, the rest of the website will behave as normal. Note, that there is a non-hack way to do this now, built into .net 4.5 and I have commented the code as to what that is. When appropriate a .net 4.5 package could be released containing this updated code.</p><p>To use this, first register the <code>httpModule</code>:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpModules</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FormsAuthenticationDisposition<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.SuppressFormsAuthenticationRedirectModule, ServiceStack<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpModules</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Required for IIS 7.0 (and above?) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validation</span> <span class="token attr-name">validateIntegratedModeConfiguration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpModules</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FormsAuthenticationDisposition<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.SuppressFormsAuthenticationRedirectModule, ServiceStack<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpModules</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>next, configure the module with where your API lives - defaults to <code>/api</code>, so in your AppHost Configure:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Funq<span class="token punctuation">.</span>Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
        HandlerFactoryPath <span class="token operator">=</span> <span class="token string">&quot;/yourapipath&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//this is the configuration for Hijacking prevention</span>
    SuppressFormsAuthenticationRedirectModule<span class="token punctuation">.</span>PathToSupress <span class="token operator">=</span> Config<span class="token punctuation">.</span>HandlerFactoryPath<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),p=[o];function c(u,i,l,r,k,d){return s(),a("div",null,p)}var m=n(e,[["render",c]]);export{g as __pageData,m as default};
