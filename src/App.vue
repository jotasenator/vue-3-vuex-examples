<script setup>
import { reactive, ref, watch, onMounted, onUnmounted } from "vue";

import CounterExample from "./components/counter-example.vue";

import FetchExample from "./components/fetch-example.vue";

import CounterVuex from "./components/counter-vuex.vue";

import FetchVuex from "./components/fetch-vuex.vue";

const initialState = {
  firstName: "",
  email: "",
  age: "",
};

const formState = reactive({ ...initialState });

const handleFormSubmit = () => {
  console.log(formState);
  resetForm();
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  formState[name] = value;
};

const resetForm = () => {
  Object.assign(formState, initialState);
};

const showInitialMessage = ref(true);

watch(
  () => formState.firstName,
  (newVal) => {
    if (newVal) {
      showInitialMessage.value = false;
    }
    if (!newVal) {
      showInitialMessage.value = true;
    }
    console.log(newVal);
  }
);

onMounted(() => {
  console.log("Component mounted");
});

// Lifecycle hook: Component unmounted
onUnmounted(() => {
  console.log("Component unmounted");
});
</script>

<template>
  <div class="form">
    <p
      :style="{
        color: 'red',
        fontSize: '16px',
        fontWeight: 'bold',
        visibility: showInitialMessage ? '' : 'hidden',
      }"
    >
      Please enter your first name
    </p>
    <form @submit.prevent="handleFormSubmit">
      <div class="input">
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          v-model="formState.firstName"
          placeholder="Enter your first name"
          type="text"
          @change="handleInputChange"
        />
      </div>
      <div class="input">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          v-model="formState.email"
          placeholder="Enter your email"
          type="email"
          @change="handleInputChange"
        />
      </div>
      <div class="input">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          v-model="formState.age"
          placeholder="Enter your age"
          type="number"
          @change="handleInputChange"
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    <div>
      <div>
        <CounterExample />
      </div>
      <div :style="{ marginTop: '10px' }">
        <FetchExample url="https://jsonplaceholder.typicode.com/todos/1" />
      </div>
    </div>
  </div>
  <div>
    <div>
      <counter-vuex />
    </div>

    <div>
      <FetchVuex url="https://jsonplaceholder.typicode.com/todos/1" />
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
label {
  display: flex;
}
input[type="submit"] {
  margin: 5px 0;
}
</style>
