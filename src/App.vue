<template>
  <div class="app">
    <ProductListone ></ProductListone>
    <ProductListtwo ></ProductListtwo>
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
      
    };
  },
};
</script>


<style scoped>
</style>
