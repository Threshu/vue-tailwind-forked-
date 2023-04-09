<template>
  <div class="product-page">
    <div class="product-images">
      <div class="product-thumbnail-list"></div>
    </div>
    <div class="product-details">
      <h1 class="product-name">{{ productName }}</h1>
      <div class="product-rating">
        <span class="star" v-for="rating in productRatings" :key="rating">
          <i class="fas fa-star"></i>
        </span>
        <span class="product-review-count">{{ reviewCount }} Reviews</span>
      </div>
      <button class="inline-block rounded bg-gray-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-600"
              data-bs-toggle="collapse" :data-bs-target="'#desc-' + data.id">
        Toggle description
      </button>
      <div class="collapse" :id="'desc-' + data.id">
        <p>{{ productDescription }}</p>
      </div>
      <div class="product-price">
        <span class="price">{{ productPrice }}</span>
        <span class="discount">{{ productDiscount }}</span>
      </div>
      <div class="product-options">
        <div class="option-color">
          <span class="option-title">Color:</span>
          <ul>
            <li v-for="(color, index) in productColors" :key="index">
              <a
                :style="{ backgroundColor: color }"
                @click="selectColor(index)"
              ></a>
            </li>
          </ul>
        </div>
        <div class="option-size">
          <span class="option-title">Size:</span>
          <ul>
            <li v-for="(size, index) in productSizes" :key="index">
              <a @click="selectSize(index)">{{ size }}</a>
            </li>
          </ul>
        </div>
        <div class="option-quantity">
          <span class="option-title">Quantity:</span>
          <input type="number" min="1" max="10" v-model="selectedQuantity" />
        </div>
      </div>
      <div class="product-actions">
        <button class="btn add-to-cart">Add to Cart</button>
        <button class="btn buy-now">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    data: Object,
  },
  data() {
    return {
      productName: "Example Product",
      productDescription: "This is an example product description.",
      productPrice: "$19.99",
      productDiscount: "50% off",
      productColors: ["#FF0000", "#00FF00", "#0000FF"],
      productSizes: ["S", "M", "L", "XL"],
      productRatings: [1, 2, 3, 4, 5],
      reviewCount: 10,
      selectedImageIndex: 0,
      selectedColorIndex: 0,
      selectedSizeIndex: 0,
      selectedQuantity: 1,
    };
  },
  methods: {
    selectColor(index) {
      this.selectedColorIndex = index;
    },
    selectSize(index) {
      this.selectedSizeIndex = index;
    },
  },
};
</script>