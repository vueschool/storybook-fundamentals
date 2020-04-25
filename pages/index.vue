<template>
  <v-app class="container">
    <LoginForm class="login-box" />
  </v-app>
</template>

<script>
import LoginForm from "~/components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
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

.login-box {
  width: 250px;
  margin: 50px auto;
  padding: 10px;
}
</style>
