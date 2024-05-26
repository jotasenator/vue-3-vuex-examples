<template>
  <p v-if="loading">Loading...</p>
  <div v-else>
    <p>ID: {{ data.id }}</p>
    <p>Title: {{ data.title }}</p>
    <p>Completed: {{ data.completed }}</p>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
// const data = computed(() => store.state.data.data);
const data = computed(() => store.getters.data);

let loading = ref(true);

const { url } = defineProps({
  url: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  await store.dispatch("fetchData", url);
  loading.value = false;
});
</script>

<style scoped>
</style>