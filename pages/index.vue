<template>
  <div class="container">
    <LimitedInput />
  </div>
</template>

<script>
import LimitedInput from "~/components/LimitedInput.vue";

export default {
  components: {
    LimitedInput
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
