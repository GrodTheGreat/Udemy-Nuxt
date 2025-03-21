<script setup>
// definePageMeta({
//   layout: "another",
// });

useHead({
  title: "About",
});

function enableCustomLayout() {
  setPageLayout("another");
}
</script>

<template>
  <div>This page is about me.</div>
  <div><button @click="enableCustomLayout">Update layout</button></div>
</template>
