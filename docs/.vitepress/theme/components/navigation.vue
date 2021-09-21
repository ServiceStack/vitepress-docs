<template>
  <div class="navbar bs-docs-nav navbar-fixed-top text-center floating-navigation">
    <div>
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#account-navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/"><img src="/images/logo-text.svg" alt=""></a>
      </div>

      <div class="navbar-collapse collapse" id="account-navigation">
        <ul class="nav navbar-nav main-navigation pt-1">
          <li class="active"><a class="nav-link" href="/whatsnew">What's New</a></li>
          <li><a class="nav-link" href="https://docs.servicestack.net">Docs</a></li>
          <li><a class="nav-link" href="https://forums.servicestack.net">Forums</a></li>
          <li><a class="nav-link" href="{{site.dynamic_url}}/trial">Trial</a></li>
          <li><a class="nav-link" href="{{site.dynamic_url}}/pricing">Pricing</a></li>
          <li><a class="nav-link" href="{{site.account_url}}/account/subscription">Sign In</a></li>
        </ul>

        <div class="nav social-buttons hidden md:inline-block align-top pt-5 pr-2">
          <a class="nav-link text-gray-500 hover:text-blue-400" href="https://twitter.com/ServiceStack" aria-label="Twitter"><i class="fab fa-twitter fa-lg"></i></a>
          <a class="nav-link text-gray-500 hover:text-red-600" href="https://www.youtube.com/channel/UC0kXKGVU4NHcwNdDdRiAJSA" aria-label="YouTube"><i class="fab fa-youtube fa-lg"></i></a>
          <a class="nav-link text-gray-500 hover:text-gray-700" href="https://github.com/ServiceStack" aria-label="Github"><i class="fab fa-github fa-lg"></i></a>
        </div>

        <div class="nav hidden md:inline-block align-top pt-4 pr-2">
          <a href="/start"
             class="bg-blue-500 hover:bg-blue-600 text-white hover:text-white px-3 py-2 inline-block text-blue-100 text-base font-normal" style="margin-top: -.5rem">
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "navigation"
}
</script>

<style scoped>

</style>