<template>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab1'), 'bg-blue-600': isActive('tab1'),
          'text-blue-600': !isActive('tab1')}"
          @click="currentTabComponent = 'tab1'">Sharp Pages
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
  <keep-alive class="mt-4">
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