<template>
  <link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-d9b0ae634c1abe51fe671d575be5a7d2.css">
  <button @click="currentTabComponent = 'tab1'">#Script Pages</button>
  <button @click="currentTabComponent = 'tab2'">Server TypeScript</button>
  <button @click="currentTabComponent = 'tab3'">Server jQuery</button>
  <button @click="currentTabComponent = 'tab4'">Server Razor</button>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</template>

<script>
import tab1 from "./includes/validation/contacts/server-sharp.vue";
import tab2 from "./includes/validation/contacts/server-ts.vue";
import tab3 from "./includes/validation/contacts/server-jquery.vue";
import tab4 from "./includes/validation/contacts/server-razor.vue";
export default {
  name: "server-contacts-uis",
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