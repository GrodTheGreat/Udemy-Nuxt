<script setup>
import TOCLinks from "~/components/content/TOCLinks.vue";

const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 max-w-none"
  >
    <div class="grid grid-cols-6 gap-16">
      <div
        :class="{
          'col-span-4': page.body.toc.links.length,
          'col-span-6': !page.body.toc.links.length,
        }"
      >
        <ContentRenderer v-if="page" :value="page" />
      </div>
      <div class="col-span-2 not-prose" v-if="page.body.toc.links.length">
        <aside class="sticky top-8">
          <div class="font-semibold mb-2">Table of Contents</div>
          <nav>
            <TOCLinks :links="page.body.toc.links" />
          </nav>
        </aside>
      </div>
    </div>
  </article>
</template>
