<template>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <p>ID: {{ data.id }}</p>
    <p>Title: {{ data.title }}</p>
    <p>Completed: {{ data.completed }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref("");
const loading = ref(true);

const { url } = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data.value = json;
      loading.value = false;
    });
};

onMounted(() => {
  fetchData(url);
});
</script>

<style scoped>
</style>