import{_ as o,a as n,b as s}from"./apps-jupyter-command-line.2d591cc2.js";import{_ as a,a as r,b as i,c as l}from"./jupyter-colab-FindTechnologies.9fa52c65.js";import{_ as c}from"./jupyterlab-mybinder-techstacks.702af6a5.js";import{_ as p,c as u,o as h,b as e,e as t}from"./app.14440598.js";const he='{"title":"Python Jupyter Notebooks","description":"","frontmatter":{"slug":"jupyter-notebooks-python","title":"Python Jupyter Notebooks"},"headers":[{"level":2,"title":"Instant Client Apps","slug":"instant-client-apps"},{"level":3,"title":"apps.servicestack.net","slug":"apps-servicestack-net"},{"level":3,"title":"Google Colab","slug":"google-colab"},{"level":3,"title":"GitHub Auto Preview","slug":"github-auto-preview"},{"level":3,"title":"Instant Client Apps command-line generator","slug":"instant-client-apps-command-line-generator"},{"level":2,"title":"Generate Notebook using command-line","slug":"generate-notebook-using-command-line"},{"level":3,"title":"Generate Python Jupyter Notebooks","slug":"generate-python-jupyter-notebooks"}],"relativePath":"jupyter-notebooks-python.md","lastUpdated":1634495308422}',d={},g=e("p",null,[e("img",{src:o,alt:""})],-1),b=e("p",null,[t("Whilst the "),e("a",{href:"https://jupyter.org",target:"_blank",rel:"noopener noreferrer"},"Jupyter project"),t(" has designed its Notebooks to be language agnostic with current support for over 40+ programming languages, the best experience and broadest ecosystem and community support is still centered around Python Jupyter Notebooks.")],-1),y=e("p",null,[t("Thanks to "),e("a",{href:"/python-add-servicestack-reference.html"},"Python Add ServiceStack Reference"),t(" support for generating typed Python data classes for your ServiceStack Service DTOs, your API consumers are able to tap into the beautiful "),e("a",{href:"/jupyter-notebooks.html"},"interactive world of Jupyter Notebooks"),t(" who can leverage end-to-end typed APIs with your Services Python DTOs and the generic "),e("a",{href:"https://pypi.org/project/servicestack/",target:"_blank",rel:"noopener noreferrer"},"servicestack"),t(" Python package containing both the generic "),e("code",null,"JsonServiceClient"),t(" for making typed API requests as well as useful utilities for easily previewing API Responses in human-readable HTML or markdown table formats.")],-1),m=e("iframe",{width:"896",height:"525",src:"https://www.youtube.com/embed/h6UwDuXt8MA",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),_=e("h2",{id:"instant-client-apps",tabindex:"-1"},[t("Instant Client Apps "),e("a",{class:"header-anchor",href:"#instant-client-apps","aria-hidden":"true"},"#")],-1),k=e("p",null,"Easiest way to generate a Python Notebook for a publicly available ServiceStack instance is to use Instant Client Apps UI at:",-1),f=e("h3",{id:"apps-servicestack-net",tabindex:"-1"},[e("a",{href:"https://apps.servicestack.net",target:"_blank",rel:"noopener noreferrer"},"apps.servicestack.net"),t(),e("a",{class:"header-anchor",href:"#apps-servicestack-net","aria-hidden":"true"},"#")],-1),v=e("p",null,"Where API Consumers will be able to select an API for a remote ServiceStack Instance and generate a native UI to generate an API Request that can be downloaded in a stand-alone client App in any of the 9 supported programming languages:",-1),w=e("p",null,[e("a",{href:"https://apps.servicestack.net",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:a,alt:""})])],-1),P=e("p",null,"Within seconds after being guided by Instant Client Apps UI, users will be able to select their preferred API and use the Auto form to pre-populate their API Request, e.g:",-1),N=e("p",null,[e("a",{href:"https://apps.servicestack.net/#techstacks.io/python/AutoQuery/FindTechnologies(Ids:%5B1,2,4,6%5D,VendorName:Google,Take:10,Fields:%22Id,%20Name,%20VendorName,%20Slug,%20Tier,%20FavCount,%20ViewCount%22)",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:r,alt:""})])],-1),A=e("p",null,[t("Which can be run online to display results in a HTML table and a human-friendly markdown table for "),e("a",{href:"/autoquery-rdbms.html"},"AutoQuery Requests"),t(" or API Responses containing a "),e("code",null,"Results"),t(" resultset. Clicking on "),e("strong",null,"Python Notebook"),t(" will download a custom "),e("a",{href:"https://github.com/ServiceStack/jupyter-notebooks/blob/main/techstacks.io-FindTechnologies.ipynb",target:"_blank",rel:"noopener noreferrer"},"techstacks.io-FindTechnologies.ipynb"),t(" Jupyter Notebook that when executed in either a Binder or self-hosted "),e("strong",null,"notebook"),t(" web app will render API responses that looks like:")],-1),I=e("p",null,[e("a",{href:"https://github.com/ServiceStack/jupyter-notebooks/blob/main/techstacks.io-FindTechnologies.ipynb",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:c,alt:""})])],-1),j=e("p",null,"All populated API Requests are also deep-linkable so they can be easily documented, shared and customized with other team members:",-1),S=e("p",null,[e("strong",null,[e("a",{href:"https://apps.servicestack.net/#techstacks.io/python/AutoQuery/FindTechnologies(Ids:%5B1,2,4,6%5D,VendorName:Google,Take:10,Fields:%22Id,%20Name,%20VendorName,%20Slug,%20Tier,%20FavCount,%20ViewCount%22)",target:"_blank",rel:"noopener noreferrer"},"apps.servicestack.net/#techstacks.io/python/AutoQuery/FindTechnologies(Ids:[1,2,4,6],VendorName:Google,Take:10)")])],-1),T=e("h3",{id:"google-colab",tabindex:"-1"},[t("Google Colab "),e("a",{class:"header-anchor",href:"#google-colab","aria-hidden":"true"},"#")],-1),x=e("p",null,[e("a",{href:"https://research.google.com/colaboratory/",target:"_blank",rel:"noopener noreferrer"},"Google Colab"),t(" is a "),e("strong",null,"FREE"),t(" hosted Jupyter notebook service from Google that can open Notebooks stored in Google Drive that can be shared just as you would with Google Docs or Sheets, which requires no install to use, while providing free access to computing resources including GPUs where it's executed in a virtual machine private to your account.")],-1),C=e("p",null,[t("Whilst you can upload your Python Jupyter Notebooks manually, the quickest way to open your ServiceStack API in Colab is to Save it directly in GDrive with the "),e("strong",null,"Save"),t(" button:")],-1),G=e("p",null,[e("img",{src:i,alt:""})],-1),F=e("p",null,[t("Then click on the saved "),e("code",null,".ipynb"),t(" Notebook to open it in Colab where like other Notebook services will let you see the last pre-executed rendered output. Running a cell with the "),e("strong",null,"Play"),t(" icon or "),e("code",null,"CTRL+Enter"),t(" will execute the Notebook in a private virtual machine to update the captured outputs with live results:")],-1),J=e("p",null,[e("img",{src:l,alt:""})],-1),q=e("h3",{id:"github-auto-preview",tabindex:"-1"},[t("GitHub Auto Preview "),e("a",{class:"header-anchor",href:"#github-auto-preview","aria-hidden":"true"},"#")],-1),R=e("p",null,[t("Thanks to executed Notebooks retaining their executed outputs and GitHub's "),e("a",{href:"https://docs.github.com/en/github/managing-files-in-a-repository/working-with-non-code-files/working-with-jupyter-notebook-files-on-github",target:"_blank",rel:"noopener noreferrer"},"built-in support of rendering Jupyter Notebooks"),t(", we can also view pre-rendered Notebooks directly in GitHub, e.g. you can view the pre-rendered output of the above Python Notebook directly on GitHub at: "),e("a",{href:"https://github.com/ServiceStack/jupyter-notebooks/blob/main/techstacks.io-FindTechnologies.ipynb",target:"_blank",rel:"noopener noreferrer"},"techstacks.io-FindTechnologies.ipynb"),t(".")],-1),D=e("p",null,[e("a",{href:"https://github.com/ServiceStack/jupyter-notebooks/blob/main/techstacks.io-FindTechnologies.ipynb",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:n,alt:""})])],-1),V=e("h3",{id:"instant-client-apps-command-line-generator",tabindex:"-1"},[t("Instant Client Apps command-line generator "),e("a",{class:"header-anchor",href:"#instant-client-apps-command-line-generator","aria-hidden":"true"},"#")],-1),U=e("p",null,"For increased flexibility and scriptability Instant Client Apps will also generate a command-line argument of your pre-populated API Request you can use to generate a Python Jupyter Notebook locally, e.g:",-1),H=e("p",null,[e("img",{src:s,alt:""})],-1),$=e("h2",{id:"generate-notebook-using-command-line",tabindex:"-1"},[t("Generate Notebook using command-line "),e("a",{class:"header-anchor",href:"#generate-notebook-using-command-line","aria-hidden":"true"},"#")],-1),B=e("p",null,"Jupyter Commands lets you generate Python Jupyter Notebooks for calling ServiceStack APIs in a single command.",-1),O=e("p",null,[t("All command line utils used are available in the latest "),e("a",{href:"/dotnet-tool.html"},"dotnet tool"),t(" which can be installed from:")],-1),E=e("div",{class:"language-bash"},[e("pre",null,[e("code",null,[t("$ dotnet tool "),e("span",{class:"token function"},"install"),t(` --global x 
`)])])],-1),W=e("p",null,"Or if you had a previous version installed, update with:",-1),Q=e("div",{class:"language-bash"},[e("pre",null,[e("code",null,`$ dotnet tool update -g x
`)])],-1),L=e("h3",{id:"generate-python-jupyter-notebooks",tabindex:"-1"},[t("Generate Python Jupyter Notebooks "),e("a",{class:"header-anchor",href:"#generate-python-jupyter-notebooks","aria-hidden":"true"},"#")],-1),M=e("p",null,[t("Use "),e("code",null,"x jupyter-python"),t(" to display different usage examples for generating Python Jupyter Notebooks:")],-1),z=e("div",{class:"language-"},[e("pre",null,[e("code",null,`Usage: x jupyter-python <base-url>
       x jupyter-python <base-url> <request>
       x jupyter-python <base-url> <request> {js-object}
       x jupyter-python <base-url> <request> < body.json

Options:
 -out <file>            Save notebook to file
 -include <pattern>     Include Types DTOs pattern
`)])],-1),X=e("p",null,[t("The same syntax for invoking APIs with the "),e("a",{href:"/post-command.html"},"Post Command HTTP Utils"),t(" can also be used to generate Python Jupyter Notebooks, e.g:")],-1),K=e("div",{class:"language-bash"},[e("pre",null,[e("code",null,[t("$ x jupyter-python https://techstacks.io FindTechStacks "),e("span",{class:"token string"},`"{Ids:[1,2,3],VendorName:'Google',Take:5}"`),t(`
`)])])],-1),Y=e("p",null,"Output:",-1),Z=e("div",{class:"language-"},[e("pre",null,[e("code",null,`Saved to: techstacks.io-FindTechStacks.ipynb
`)])],-1),ee=[g,b,y,m,_,k,f,v,w,P,N,A,I,j,S,T,x,C,G,F,J,q,R,D,V,U,H,$,B,O,E,W,Q,L,M,z,X,K,Y,Z];function te(oe,ne,se,ae,re,ie){return h(),u("div",null,ee)}var de=p(d,[["render",te]]);export{he as __pageData,de as default};
