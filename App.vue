<template>
  <div>
    <h1>List of products</h1>
    <template v-for="product in products" :key="product.id">
      <product :data="product" />
    </template>
  </div>
</template>

<script>
import Product from "./components/Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    for (let i = 0; i < 1000; i++) {
      this.products.push({ id: i });
    }
  },
};
</script>