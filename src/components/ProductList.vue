<template>
  <ul>
    <li v-for="product in products" :key="product.id" class="flex-row m-3 mb-6">
      {{ product.title }} - {{ product.price }}
      <br />
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)"
        class="text-xs ml-5"
      >
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: mapActions("cart", ["addProductToCart"]),
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>
