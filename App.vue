<template>
  <DynamicScroller
    :items="products"
    :min-item-size="MIN_PRODUCT_BLOCK_HEIGHT"
    class="scroller"
    page-mode
  >
    <template #before>
      <h1>List of products</h1>
    </template>
    <template #default="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[item.productDescription]"
        :data-index="index"
      >
        <product :data="item" />
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>

<script>
import Product from "./components/Product.vue";
const MIN_PRODUCT_BLOCK_HEIGHT = 300;
export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      MIN_PRODUCT_BLOCK_HEIGHT,
    };
  },
  mounted() {
    for (let i = 0; i < 1000; i++) {
      this.products.push({
        productName: "Example Product",
        productDescription: "This is an example product description.",
        productPrice: "$19.99",
        productDiscount: "50% off",
        productColors: ["#FF0000", "#00FF00", "#0000FF"],
        productSizes: ["S", "M", "L", "XL"],
        productRatings: [1, 2, 3, 4, 5],
        reviewCount: 10,
        selectedColorIndex: 0,
        selectedSizeIndex: 0,
        id: i,
      });
    }
  },
};
</script>
