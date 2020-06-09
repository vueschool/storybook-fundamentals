<template>
  <div class="p-3 rounded-md bg-gray-200 inline-block">
    <input
      class="border px-2"
      :class="isTextTooLong ? 'border-red-500 bg-red-200' : undefined"
      v-model="val"
      @input="$emit('input', val)"
    />
    <p v-if="isTextTooLong" class="text-red-600 text-xs">
      Limited to {{ limit }} chars.
    </p>
  </div>
</template>

<script>
export default {
  name: "LimitedInput",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 12,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return { val: this.value };
  },
  computed: {
    isTextTooLong() {
      return this.val.length > this.limit;
    },
  },
};
</script>
