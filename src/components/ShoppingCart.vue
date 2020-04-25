<template>
  <div
    class="w-64 float-right bg-white border-2 border-gray-500 p-4 m-4 rounded-lg"
  >
    <h2>Your Cart</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        class="border border-gray-500 px-1 my-2"
      >
        {{ product.title }} - ${{ product.price }} x
        {{ product.quantity }}
      </li>
    </ul>
    <p>Total: ${{ total }}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">
        Checkout
      </button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    },
  },
};
</script>
