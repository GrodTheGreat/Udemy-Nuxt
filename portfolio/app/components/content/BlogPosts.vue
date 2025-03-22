<script setup>
const { data } = await useAsyncData("blog-list", () => {
  return queryCollection("content")
    .select("path", "title", "description", "meta")
    .where("path", "LIKE", "%blog%")
    .where("title", "NOT LIKE", "All Blog Posts!")
    .all();
});

const posts = computed(() => {
  if (!data.value) {
    return [];
  }
  const result = [];
  const years = new Set();
  for (const post of data.value) {
    const year = new Date(post.meta.publishedAt).getFullYear();
    if (years.has(year)) {
      post.displayYear = false;
    } else {
      years.add(year);
      post.displayYear = true;
    }
    post.year = year;
    result.push(post);
  }
  result.sort((a, b) => b.year - a.year);
  return result;
});
</script>

<template>
  <section class="not-prose font-mono">
    <div class="header-column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="page in posts" :key="page.title">
        <NuxtLink
          :to="page.path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white dark:text-gray-900': !page.displayYear,
              'text-gray-400 dark:text-gray-500': page.displayYear,
            }"
          >
            {{ page.year }}
          </div>
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
