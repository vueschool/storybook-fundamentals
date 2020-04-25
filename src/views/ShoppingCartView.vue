<template>
  <div>
    <ShoppingCart />
    <h2 class="m-4 text-lg">Products</h2>
    <ProductList class="p-3 bg-blue-200" />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
  components: { ProductList, ShoppingCart },
};
</script>
