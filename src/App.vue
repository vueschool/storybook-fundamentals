<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <LimitedInput />
  </div>
</template>

<script>
import LimitedInput from "./components/LimitedInput.vue";

export default {
  name: "App",
  components: {
    LimitedInput,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
