<!-- 數量按鈕組件 -->

<script>
  export default {
    props: {
      // 導入外部數值 (初始值)
      quantity: {
        type: Number,
        default: 1,
      }
    },
    // 自訂的點擊事件名稱
    emits: [
      'calc',
    ],
    data() {
      return {
        // 用於改變的數量
        count:1,
      }
    },
    methods: {
      add() {
        this.count++;
      },
      minus() {
        //count < 1時，不再減少
        if (this.count <= 1 ) {
          return this.count = 1;
        };
        this.count--;
      }
    },
    //監聽器 有變化時就執行
    watch: {
      //需要監聽的變數(要是已定義的)
      count(newVal , oldVal) {
        // 有變化時要做的事
        // 有變化時，紀錄新的(變化後)的數值
        this.$emit('calc' , newVal);
      },
      // 間聽 quantity ， 當 quantity 有變動時，把 quantity放到 count 中
      quantity(newVal) {
        this.count = newVal ;
      }
    }
  }
</script>

<template>
  <div class="quantity-box d-flex align-items-between align-items-sm-center flex-column flex-sm-row column-gap-4 row-gap-3">
    <!-- 數量增減 -->
    <div class="quantity-amount input-group">
      <button class="minus-btn btn" type="button" @click="minus">
        <i class="bi bi-dash"></i>
      </button>
      <div class="show-count d-flex align-items-center justify-content-center">{{ count }}</div>
      <button class="plus-btn btn" type="button" @click="add"><i class="bi bi-plus"></i></button>
    </div>
  </div>
</template>

<style scoped>
  .show-count {
    height: 100%;
    min-width: 50px;
  }
</style>