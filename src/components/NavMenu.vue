<template>
  <ul class="flex m-4">
    <li class="mr-2">
      <router-link
        class="hover:bg-gray-300 p-2 rounded"
        active-class="border-b-2 border-red-400"
        to="/home"
      >
        Home
      </router-link>
    </li>
    <li class="mr-2">
      <router-link
        class="hover:bg-gray-300 p-2 rounded"
        active-class="border-b-2 border-red-400"
        to="/blog"
      >
        Blog
      </router-link>
    </li>
    <li class="mr-2">
      <router-link
        class="hover:bg-gray-300 p-2 rounded"
        active-class="border-b-2 border-red-400"
        to="/cart"
      >
        ShoppingCart
      </router-link>
    </li>
  </ul>
</template>
