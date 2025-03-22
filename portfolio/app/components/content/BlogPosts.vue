<script setup>
const { data: pages } = await useAsyncData("blog-list", () => {
  return queryCollection("content")
    .select("path", "title", "description")
    .where("path", "LIKE", "%blog%")
    .where("title", "NOT LIKE", "All Blog Posts!")
    .all();
});
</script>

<template>
  <section class="not-prose font-mono">
    <div class="header-column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="page in pages" :key="page.title">
        <NuxtLink
          :to="page.path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div class="text-gray-500">2025</div>
          <div>{{ page.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
.header-column {
  @apply flex items-center space-x-8 py-2;
}
.column {
  @apply flex items-center space-x-8 py-2 border-t border-gray-200 dark:border-gray-700;
}
</style>
