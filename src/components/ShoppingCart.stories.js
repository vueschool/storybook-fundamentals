import ShoppingCart from "./ShoppingCart";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const cart = {
  namespaced: true,
  getters: {
    cartProducts: () => [],
  },
};

export default {
  title: "ShoppingCart",
};

export const emptyCart = () => {
  cart.getters.cartProducts = () => [];
  return {
    store: new Vuex.Store({
      modules: {
        cart,
      },
    }),
    render() {
      return <ShoppingCart />;
    },
  };
};

export const fullCart = () => {
  cart.getters.cartProducts = () => [
    {
      title: "Apples",
      price: 36,
      quantity: 3,
    },
    {
      title: "Oranges",
      price: 24,
      quantity: 2,
    },
    {
      title: "Bananas",
      price: 36,
      quantity: 1,
    },
  ];
  return {
    store: new Vuex.Store({
      modules: {
        cart,
      },
    }),
    render() {
      return <ShoppingCart />;
    },
  };
};
