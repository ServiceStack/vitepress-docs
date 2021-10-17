<template>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab1'), 'bg-blue-600': isActive('tab1'),
          'text-blue-600': !isActive('tab1')}"
          @click="currentTabComponent = 'tab1'">Vuetify
  </button>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab2'), 'bg-blue-600': isActive('tab2'),
          'text-blue-600': !isActive('tab2')}"
          @click="currentTabComponent = 'tab2'">Client TypeScript
  </button>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab3'), 'bg-blue-600': isActive('tab3'),
          'text-blue-600': !isActive('tab3')}"
          @click="currentTabComponent = 'tab3'">Client jQuery
  </button>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab4'), 'bg-blue-600': isActive('tab4'),
          'text-blue-600': !isActive('tab4')}"
          @click="currentTabComponent = 'tab4'">Client Razor
  </button>
  <keep-alive>
    <component :is="currentTabComponent" class="mt-4"></component>
  </keep-alive>
</template>

<script>
import tab1 from '../../.vitepress/includes/validation/login/vuetify.md';
import tab2 from '../../.vitepress/includes/validation/login/client-ts.md';
import tab3 from '../../.vitepress/includes/validation/login/client-jquery.md';
import tab4 from '../../.vitepress/includes/validation/login/client-razor.md';

export default {
  name: "client-login-uis",
  components: {
    tab1,
    tab2,
    tab3,
    tab4
  },
  data() {
    return {
      currentTabComponent: "tab1",
      isActive(tab) {
        return this.currentTabComponent == tab;
      }
    }
  }
}
</script>

<style scoped>

</style>