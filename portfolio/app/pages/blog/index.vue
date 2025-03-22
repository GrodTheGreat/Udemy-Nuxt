<script setup>
const { data: pages } = await useAsyncData("blog-list", () => {
  return queryCollection("content")
    .select("path", "title", "description")
    .where("path", "LIKE", "%blog%")
    .all();
});
</script>

<template>
  <div>All blog posts!</div>
  <section>
    <ul>
      <li v-for="page in pages" :key="page.title">
        <NuxtLink :to="page.path">{{ page.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
