<template>
  <v-card flat>
    <v-form>
      <v-text-field
        prepend-icon="mdi-account-edit"
        name="Username"
        label="Username"
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-account-lock"
        name="Password"
        label="Password"
        type="password"
      ></v-text-field>
      <v-card-actions>
        <v-btn primary large block>Login</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {};
</script>
