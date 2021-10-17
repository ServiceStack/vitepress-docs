import{_ as e,c as t,o,a as r}from"./app.14440598.js";const m='{"title":"Ask a support question","description":"","frontmatter":{"slug":"contributing"},"headers":[{"level":2,"title":"Ask a support question","slug":"ask-a-support-question"},{"level":2,"title":"Proposing a Feature","slug":"proposing-a-feature"},{"level":2,"title":"Contributing code","slug":"contributing-code"},{"level":2,"title":"Contribution License Agreement (CLA)","slug":"contribution-license-agreement-cla"},{"level":2,"title":"Step-by-step guide","slug":"step-by-step-guide"},{"level":3,"title":"Create bug fixes and features","slug":"create-bug-fixes-and-features"},{"level":2,"title":"Code Reviews","slug":"code-reviews"},{"level":2,"title":"Thank you","slug":"thank-you"}],"relativePath":"contributing.md","lastUpdated":1634495307614}',a={},i=r(`__VP_STATIC_START__<h2 id="ask-a-support-question" tabindex="-1">Ask a support question <a class="header-anchor" href="#ask-a-support-question" aria-hidden="true">#</a></h2><p>The easiest way to ask support questions is on <a href="http://stackoverflow.com/search?q=servicestack" target="_blank" rel="noopener noreferrer">Stack Overflow</a> using the #ServiceStack hash tag. ServiceStack Customers also have access to the customer support channels <a href="http://servicestack.net/account/support" target="_blank" rel="noopener noreferrer">listed on their support page</a>.</p><h2 id="proposing-a-feature" tabindex="-1">Proposing a Feature <a class="header-anchor" href="#proposing-a-feature" aria-hidden="true">#</a></h2><p>Feature requests can be proposed on <a href="http://servicestack.uservoice.com/forums/176786-feature-requests" target="_blank" rel="noopener noreferrer">ServiceStack&#39;s User Voice</a>. Proposals can also be made via code samples in GitHub pull-requests.</p><h2 id="contributing-code" tabindex="-1">Contributing code <a class="header-anchor" href="#contributing-code" aria-hidden="true">#</a></h2><p>Our source is developed &amp; published on <a href="http://GitHub.com" target="_blank" rel="noopener noreferrer">GitHub.com</a> (<a href="https://help.github.com/" target="_blank" rel="noopener noreferrer">learn more</a>). If you are new to <a href="http://git-scm.com" target="_blank" rel="noopener noreferrer">Git</a>, check out the <a href="http://git-scm.com/book" target="_blank" rel="noopener noreferrer">Pro Git Book</a> online or at your bookseller of choice.</p><p>From any of the ServiceStack code repositories on GitHub, you can <strong>Fork</strong> the code to your own GitHub account.</p><p>To get the source on your local development machine, simply clone your local forked repo using Git:</p><div class="language-bash"><pre><code>$ <span class="token function">git</span> clone https://github.com/USERNAME/PROJECT.git
</code></pre></div><p>Each repository has a README that should be helpful to learn more about the specifics of the language, project and its development environment.</p><p>Please ensure any code contributions include tests that should verify the behavior of new features, verify the issue that a fix fixes and to prevent future regressions or even a reproducible failing tests if you want to report an issue.</p><h2 id="contribution-license-agreement-cla" tabindex="-1">Contribution License Agreement (CLA) <a class="header-anchor" href="#contribution-license-agreement-cla" aria-hidden="true">#</a></h2><p>In order to become a contributor to the ServiceStack projects on GitHub you must follow some legal requirements and <a href="https://docs.google.com/forms/d/16Op0fmKaqYtxGL4sg7w_g-cXXyCoWjzppgkuqzOeKyk/viewform" target="_blank" rel="noopener noreferrer">approve the ServiceStack Contributor License Agreement</a>.</p><p>Until you meet the legal requirements your pull requests / source contributions will not be considered or reviewed.</p><p>Please configure your Git client with a name and email address to use for your commits. This will also help the team validate your CLA status:</p><div class="language-bash"><pre><code><span class="token function">git</span> config user.name Your Name
<span class="token function">git</span> config user.email YourAlias@YourEmailDomain
</code></pre></div><h2 id="step-by-step-guide" tabindex="-1">Step-by-step guide <a class="header-anchor" href="#step-by-step-guide" aria-hidden="true">#</a></h2><p>Checkout the latest code</p><p>In order to obtain the source code you need to become familiar with Git (see <a href="http://progit.org/book/" target="_blank" rel="noopener noreferrer">progit.org/book/</a>) and Github (see <a href="http://help.github.com/" target="_blank" rel="noopener noreferrer">help.github.com/</a>) and you need to have Git installed on your local machine. You can obtain the source code from Github by following the these steps on your local machine:</p><ol><li>Go to <a href="https://github.com/ServiceStack/%5BPROJECT%5D" target="_blank" rel="noopener noreferrer">https://github.com/ServiceStack/[PROJECT]</a></li><li>In GitHub Click on the <strong>Fork</strong> button</li><li>Clone the repository on your local machine with the following Git command <code>git clone git@github.com:[USERNAME]/[PROJECT]</code></li></ol><h3 id="create-bug-fixes-and-features" tabindex="-1">Create bug fixes and features <a class="header-anchor" href="#create-bug-fixes-and-features" aria-hidden="true">#</a></h3><p>You can then start to make modifications to the code in your local Git repository. For commits to ServiceStack v3, this should be done in the <code>v3</code> branch. Note: all contributions must come with tests verifying the desired behavior.</p><p>You can commit your work with following commands:</p><ol><li>Switch to the master branch (or v3 branch) for ServiceStack v3.x <code>git checkout master</code></li><li>Add and commit your local changes <code>git commit -a -m &#39;commit message describing changes&#39;</code></li><li>Push your changes from your local repository to your github fork <code>git push origin v3</code></li></ol><p>Once your code is in your github fork, you can then submit a pull request for the team&#39;s review. You can do so with the following commands:</p><ol><li>In GitHub click on the <strong>Pull Request</strong> button</li><li>In the pull request select your fork as source and <code>ServiceStack/[PROJECT]</code> as destination for the request</li><li>Write detailed message describing the changes in the pull request</li><li>Submit the pull requst for consideration by the Core Team</li></ol><p>If there are conflicts between your fork and the main project one, github will warn you that the pull request cannot be merged. If that&#39;s the case, you can do the following:</p><ol><li>Add remote to your local repository using the following Git commands <code>git remote add upstream -f git@github.com:ServiceStack/[PROJECT]</code></li><li>Update your local repository with the changes from the remote repository by using the following Git commands (make sure you&#39;re in the branch you&#39;re submitting the code from) <code>git merge upstream/master</code></li><li>Resolve any conflicts locally and finally do another push with the command <code>git push origin master</code></li></ol><p>Please keep in mind that not all requests will be approved. Requests are reviewed by the Core Team on a regular basis and will be updated with the status at each review. If your request is accepted you will receive information about the next steps and when the request will be integrated in the main branch. If your request is rejected you will receive information about the reasons why it was rejected.</p><h2 id="code-reviews" tabindex="-1">Code Reviews <a class="header-anchor" href="#code-reviews" aria-hidden="true">#</a></h2><p>Feature requests should be proposed on <a href="http://servicestack.uservoice.com/forums/176786-feature-requests" target="_blank" rel="noopener noreferrer">ServiceStack&#39;s User Voice</a>, whilst the ServiceStack community has a <a href="https://plus.google.com/u/0/communities/112445368900682590445" target="_blank" rel="noopener noreferrer">discussion group</a> used for submitting code reviews and discussing design changes, best practices, and other important topics. Any disruptive changes to any project should be discussed here before any code is contributed.</p><p>Expect a good amount of feedback as part of any pull request: not only which branch to merge to and from, but also consistency guidelines, matching existing code, and making targeted, smart changes when fixing bugs.</p><h2 id="thank-you" tabindex="-1">Thank you <a class="header-anchor" href="#thank-you" aria-hidden="true">#</a></h2><p>Huge thanks go to the contributors from the community who have been actively working with the ServiceStack community.</p><p>You can find a <a href="https://github.com/ServiceStack/ServiceStack#contributors" target="_blank" rel="noopener noreferrer">list of contributors here</a>.</p>__VP_STATIC_END__`,35),n=[i];function s(c,l,u,h,d,p){return o(),t("div",null,n)}var f=e(a,[["render",s]]);export{m as __pageData,f as default};
