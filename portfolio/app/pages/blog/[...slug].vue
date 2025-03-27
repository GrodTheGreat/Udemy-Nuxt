<script setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
console.log(page);
</script>

<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 max-w-none"
  >
    <p>{{ page.body.toc }}</p>
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>
