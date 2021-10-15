<template>
  <button @click="currentTabComponent = 'tab1'">Vuetify</button>
  <button @click="currentTabComponent = 'tab2'">Client TypeScript</button>
  <button @click="currentTabComponent = 'tab3'">Client jQuery</button>
  <button @click="currentTabComponent = 'tab4'">Client Razor</button>
  <keep-alive>
    <component :is="currentTabComponent"></component>
  </keep-alive>
</template>

<script>
import tab1 from '../../.vitepress/includes/validation/contacts/vuetify.md';
import tab2 from '../../.vitepress/includes/validation/contacts/client-ts.md';
import tab3 from '../../.vitepress/includes/validation/contacts/client-jquery.md';
import tab4 from '../../.vitepress/includes/validation/contacts/client-razor.md';
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