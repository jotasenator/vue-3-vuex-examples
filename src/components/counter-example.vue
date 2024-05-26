<template>
  <div class="counter">
    <p>{{ counter }}</p>
    <button @click="handleDecrease">-</button>
    <button @click="handleReset">0</button>
    <button @click="handleIncrease">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);

const handleDecrease = () => {
  counter.value--;
};

const handleReset = () => {
  if (counter.value !== 0) counter.value = 0;
};

const handleIncrease = () => {
  counter.value++;
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

