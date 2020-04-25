<template>
  <label
    class="m-3 inline-block p-3 w-56 rounded-md cursor-pointer"
    :class="
      checked
        ? 'bg-green-400 hover:bg-green-300'
        : 'bg-red-400 hover:bg-red-300'
    "
  >
    <input v-model="checked" class="m-3" type="checkbox" :name="name" />{{
      text
    }}
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: this.value,
    };
  },
};
</script>

<style></style>
