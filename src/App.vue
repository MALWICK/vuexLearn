<template>
  <div class="app">
    <ProductListone v-bind:products="products"></ProductListone>
    <ProductListtwo v-bind:products="products"></ProductListtwo>
  </div>
</template>

<script >
import ProductListone from "./components/Product-list-one.vue";
import ProductListtwo from "./components/Product-list-two.vue";

export default {
  components: {
    ProductListone,
    ProductListtwo,
  },
  name: "app",
  data() {
    return {
      products: [
        { name: "Banana Skin", price: 20 },
        { name: "Shiny Star", price: 40 },
        { name: "Green Shells", price: 60 },
        { name: "Red Shell", price: 20 },
      ],
    };
  },
};
</script>


<style scoped>
</style>
