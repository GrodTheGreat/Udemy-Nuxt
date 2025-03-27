<script setup>
// definePageMeta({
//   layout: "another",
// });

// useHead({
//   title: "About",
// });

// function enableCustomLayout() {
//   setPageLayout("another");
// }
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <!-- <div>This page is about me.</div>
  <div><button @click="enableCustomLayout">Update layout</button></div> -->
  <article class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>
