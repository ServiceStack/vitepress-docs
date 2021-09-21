<template>
  <link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-d9b0ae634c1abe51fe671d575be5a7d2.css">
  <button @click="currentTabComponent = 'tab1'">Vuetify</button>
  <button @click="currentTabComponent = 'tab2'">Client TypeScript</button>
  <button @click="currentTabComponent = 'tab3'">Client jQuery</button>
  <button @click="currentTabComponent = 'tab4'">Client Razor</button>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</template>

<script>
import tab1 from './includes/validation/contacts/vuetify.vue';
import tab2 from './includes/validation/contacts/client-ts.vue';
import tab3 from './includes/validation/contacts/client-jquery.vue';
import tab4 from './includes/validation/contacts/client-razor.vue';
export default {
  name: "client-contacts-uis",
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