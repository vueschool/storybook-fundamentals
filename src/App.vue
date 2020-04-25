<template>
  <Layout>
    <template #navmenu>
      <NavMenu />
    </template>
    <template #title>
      Shopping Cart Example
    </template>
    <router-view />
  </Layout>
</template>

<script>
import NavMenu from "./components/NavMenu";
import Layout from "./components/Layout";

export default {
  components: { NavMenu, Layout },
};
</script>
