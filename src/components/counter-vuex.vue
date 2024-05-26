<template>
  <div class="counter">
    <p>{{ counter }}</p>
    <button @click="handleDecrease">-</button>
    <button @click="handleReset">0</button>
    <button @click="handleIncrease">+</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
// const counter = computed(() => store.state.counter.counter);
const counter = computed(() => store.getters.counter);

const handleDecrease = () => {
  store.commit("DECREASE_COUNTER");
};

const handleReset = () => {
  if (counter.value !== 0) store.commit("RESET_COUNTER");
};

const handleIncrease = () => {
  store.commit("INCREASE_COUNTER");
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
}
p {
  align-self: center;
}
</style>

