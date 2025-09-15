<script setup lang="ts">
import Header from "./components/Header.vue";
function feetlicker() {
  const main = document.querySelector(".MainBody");
  if (main instanceof HTMLElement && window.scrollY > 0) {
    main.style.marginTop = "200px";
  }
  else if (main instanceof HTMLElement && window.scrollY == 0)
  {
    main.style.marginTop = "40px";
  }
}
window.addEventListener("scroll", feetlicker);

feetlicker();
</script>

<template>
<Header />
  <RouterView />
</template>

<style scoped>

</style>
