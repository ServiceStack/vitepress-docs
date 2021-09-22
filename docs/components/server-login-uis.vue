<template>
  <link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-d9b0ae634c1abe51fe671d575be5a7d2.css">
  <ul class="nav nav-pills mb-3" id="login-server" role="tablist">
    <li class="nav-item">
      <a @click="currentTabComponent = 'tab1'" class="nav-link active" id="login-server-sharp-tab" data-toggle="pill" href="#login-server-sharp" role="tab" aria-controls="login-server-sharp" aria-selected="true">
        Sharp Pages
      </a>
    </li>
    <li class="nav-item">
      <a @click="currentTabComponent = 'tab2'" class="nav-link" id="login-server-ts-tab" data-toggle="pill" href="#login-server-ts" role="tab" aria-controls="login-server-ts" aria-selected="false">
        Server TypeScript
      </a>
    </li>
    <li class="nav-item">
      <a @click="currentTabComponent = 'tab3'" class="nav-link" id="login-server-jquery-tab" data-toggle="pill" href="#login-server-jquery" role="tab" aria-controls="login-server-jquery" aria-selected="false">
        Server jQuery
      </a>
    </li>
    <li class="nav-item">
      <a @click="currentTabComponent = 'tab4'" class="nav-link" id="login-server-razor-tab" data-toggle="pill" href="#login-server-razor" role="tab" aria-controls="login-server-razor" aria-selected="true">
        Server Razor
      </a>
    </li>
  </ul>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</template>

<script>
import tab1 from "./includes/validation/login/server-sharp.vue";
import tab2 from "./includes/validation/login/server-ts.vue";
import tab3 from "./includes/validation/login/server-jquery.vue";
import tab4 from "./includes/validation/login/server-razor.vue";
export default {
  name: "server-login-uis",
  components: {
    tab1,
    tab2,
    tab3,
    tab4
  },
  data() {
    return {
      currentTabComponent: "tab1"
    }
  }
}
</script>

<style scoped>

</style>