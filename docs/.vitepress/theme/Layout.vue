<!-- .vitepress/theme/Layout.vue -->
<template>
  <navigation></navigation>
  <div class="preloader">
    <div class="status"></div>
  </div>
  <div class="text-center">
    <Content /><!-- this is where markdown content will be rendered -->
  </div>
</template>
<script>
import Navigation from "./components/navigation.vue";
export default {
  components: {Navigation}
}
</script>