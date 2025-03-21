<script setup>
const { error, status, data } = await useFetch(
  "https://api.github.com/users/GrodTheGreat/repos"
);
// console.log(response);
</script>

<template>
  <div>Projects</div>

  <section v-if="status === 'pending'">Loading...</section>
  <section v-else-if="error">Something went wrong... try again!</section>
  <section v-else>Here we display the repos!</section>
</template>
