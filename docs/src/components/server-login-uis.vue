<template>
  <button @click="currentTabComponent = 'tab1'">Sharp Pages</button>
  <button @click="currentTabComponent = 'tab2'">Client TypeScript</button>
  <button @click="currentTabComponent = 'tab3'">Client jQuery</button>
  <button @click="currentTabComponent = 'tab4'">Client Razor</button>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</template>

<script>
import tab1 from "../../.vitepress/includes/validation/login/server-sharp.md";
import tab2 from "../../.vitepress/includes/validation/login/server-ts.md";
import tab3 from "../../.vitepress/includes/validation/login/server-jquery.md";
import tab4 from "../../.vitepress/includes/validation/login/server-razor.md";
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