<script setup>
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0,
  },
});

const route = useRoute();
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'ml-4': level }"
      >
        {{ link.text }}
      </NuxtLink>
      <TOCLinks :links="link.children" :level="level + 1" />
    </li>
  </ul>
</template>
