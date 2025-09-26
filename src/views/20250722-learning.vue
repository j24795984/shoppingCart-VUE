<script>
import { computed } from 'vue';

export default {
  data() {
    return {
      products: [
        {
          id:'A',
          name: '商品A',
          price: 1000,
          img: '',
        },
        {
          id:'B',
          name: '商品B',
          price: 1000,
          img: '',
        }
      ]
    }
  },
  computed: {
    //透過路由參數呈現選擇的產品
    selectedProduct() {
      //路徑參數
      const routeId = this.$route.params.id;
      const product = this.products.find(item => item.id === routeId);
      return product;
    }
  }
}
</script>

<template>
  <div>
    <figure>
      <img src="" alt="">
      <p>{{ selectedProduct.name }}</p>
      <p>{{ selectedProduct.price }}</p>
    </figure>
  </div>
</template>