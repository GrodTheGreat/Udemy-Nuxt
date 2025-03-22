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
  <section class="not-prose">
    <ul>
      <li v-for="page in pages" :key="page.title">
        <NuxtLink :to="page.path">{{ page.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
