<template>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab1'), 'bg-blue-600': isActive('tab1'),
          'text-blue-600': !isActive('tab1')}"
          @click="currentTabComponent = 'tab1'">Script Pages
  </button>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab2'), 'bg-blue-600': isActive('tab2'),
          'text-blue-600': !isActive('tab2')}"
          @click="currentTabComponent = 'tab2'">Server TypeScript
  </button>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab3'), 'bg-blue-600': isActive('tab3'),
          'text-blue-600': !isActive('tab3')}"
          @click="currentTabComponent = 'tab3'">Server jQuery
  </button>
  <button class="border-0 py-2 px-4 box-border rounded bg-white text-lg cursor-pointer"
          :class="{'text-white': isActive('tab4'), 'bg-blue-600': isActive('tab4'),
          'text-blue-600': !isActive('tab4')}"
          @click="currentTabComponent = 'tab4'">Server Razor
  </button>
  <keep-alive>
    <component :is="currentTabComponent" class="mt-4"></component>
  </keep-alive>
</template>

<script>
import tab1 from "../../.vitepress/includes/validation/contacts/server-sharp.md";
import tab2 from "../../.vitepress/includes/validation/contacts/server-ts.md";
import tab3 from "../../.vitepress/includes/validation/contacts/server-jquery.md";
import tab4 from "../../.vitepress/includes/validation/contacts/server-razor.md";

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