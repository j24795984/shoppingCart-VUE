<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'
</script>

<script>
  export default {
    data() {
      return {
        payments: [
          {id: 1 , way: '信用卡'},
          {id: 2 , way: '網路ATM'},
          {id: 3 , way: '銀行代碼'},
        ],
        transports: [
          {id: 1 , way: '黑貓宅配'},
          {id: 2 , way: '超商店到店'},
        ],
        methods: {
          paymentMethod: '',
          shippingMethod: '',
        }
      }
    },
    methods: {
      savePayAndShippingMethod() {
        const jsonData = JSON.stringify(this.methods);
        sessionStorage.setItem('my-methods' , jsonData);
      },
      getPayAndShippingMethod() {
        const jsonData = sessionStorage.getItem('my-methods');
        const data = JSON.parse(jsonData) || this.methods;
        this.methods = data;
      },
      goToNext() {
        this.savePayAndShippingMethod();
        this.$router.push('/cart4');
      }
    },
    mounted() {
      this.getPayAndShippingMethod();
    }
  }
</script>

<template>
  <!-- 導覽列 -->
  <Navbar />
  <!-- =================================================  -->
  <main class="box flex-grow-1">
    <!-- 購物車 -->
    <form class="container-xl py-3 p-md-5 m-auto" @submit.prevent="goToNext">
      <div class="p-2 py-4 p-md-5 bg-light rounded-2 shadow-lg">
        <!-- 流程圖 -->
        <div class="w-100 mb-4">
          <!-- 標題 -->
          <h2 class="h3 fw-bolder text-secondary">購物車</h2>
          <!-- 流程 -->
          <div class="row row-cols-4 mx-0">
            <!-- 1 -->
            <div class="col p-0">
              <div class="num-box position-relative mb-3">
                <div
                  class="num-circle m-auto rounded-5 border border-2 border-success text-bg-success fs-4 lh-lg text-center">
                  1
                </div>
                <div class="progress rounded-5 progress-w position-absolute top-50 start-100 translate-middle">
                  <div class="progress-bar bg-success" style="width: 100%"></div>
                </div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-success m-auto" style="width: 146px;">確認你的商品及金額</p>
              </div>
            </div>
            <!-- 2 -->
            <div class="col p-0">
              <div class="num-box position-relative mb-3">
                <div
                  class="num-circle m-auto rounded-5 border border-2 border-success text-bg-success fs-4 lh-lg text-center">
                  2</div>
                <div class="progress rounded-5 progress-w position-absolute top-50 start-100 translate-middle">
                  <div class="progress-bar bg-success" style="width: 100%"></div>
                </div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-success m-auto" style="width: 146px;">選擇付款與運送方式</p>
              </div>
            </div>
            <!-- 3 -->
            <div class="col p-0">
              <div class="num-box position-relative mb-3">
                <div
                  class="num-circle m-auto rounded-5 border border-2 border-success text-bg-success fs-4 lh-lg text-center">
                  3</div>
                <div class="progress rounded-5 progress-w position-absolute top-50 start-100 translate-middle">
                  <div class="progress-bar bg-success" style="width: 50%"></div>
                </div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-success m-auto" style="width: 146px;">填寫基本資料</p>
              </div>
            </div>
            <!-- 4 -->
            <div class="col p-0">
              <div class="num-box position-relative mb-3">
                <div
                  class="num-circle m-auto rounded-5 border border-2 border-secondary-subtle opacity-50 text-secondary fs-4 lh-lg text-center">
                  4</div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-secondary text-opacity-50 px-2 m-auto" style="width: 146px;">完成訂購</p>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-secondary">

        <!-- 付款方式 -->
        <div class="w-100 px-3">
          <h2 class="h4 fw-bolder text-secondary ">付款方式</h2>
          <div class="w-100 p-2 p-sm-4">
            <!-- 使用 v-model="paymentMethod" 儲存所選的項目，並且將value中的值帶入 -->
            <!-- 單選 => 全部的 v-model都要一樣的 -->
            <template  v-for="(item , index) in payments" :key="index">
              <div class="form-check py-3">
                <input v-model="this.methods.paymentMethod" class="form-check-input" type="radio" name="radioPay" :id="'payment' + item.id" :value="item.way" required>
                <label class="form-check-label" :for="'payment' + item.id">
                  {{ item.way }}
                </label>
              </div>
              <template v-if="(index !== (this.payments.length - 1))">
                <hr class="border-secondary">
              </template>
            </template>
          </div>
        </div>
        <hr class="border-secondary">

        <!-- 運送方式 -->
        <div class="w-100 px-3">
          <h2 class="h4 fw-bolder text-secondary ">運送方式</h2>

          <div class="w-100 p-2 p-sm-4">
            <template v-for="(item , index) in transports" :key="index">
              <div class="form-check py-3">
                <input v-model="this.methods.shippingMethod" class="form-check-input" type="radio" name="transport" :id="'transport' + item.id" :value="item.way" required>
                <label class="form-check-label" :for="'transport' + item.id">
                  {{ item.way }}
                </label>
              </div>
              <template v-if="(index !== this.transports.length - 1)">
                <hr class="border-secondary">
              </template>
            </template>
          </div>
        </div>
        <hr class="border-secondary">

        <!-- 總金額計算 -->
        <div class="w-100 row m-0 py-2">
          <ul class="amount-box col-sm-10 col-md-6 col-lg-3 m-0 ms-auto px-4 fs-5 text-secondary">
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">數量:</p>
              <p class="mb-0 flex-grow-1 text-end">4</p>
            </li>
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">小記:</p>
              <p class="mb-0 flex-grow-1 text-end">$</p>
              <p class="mb-0">8,400</p>
            </li>
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">運費:</p>
              <p class="mb-0 flex-grow-1 text-end">$</p>
              <p class="mb-0">0</p>
            </li>
            <hr class="border-secondary">
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">總計:</p>
              <p class="mb-0 flex-grow-1 text-end">$</p>
              <p class="mb-0">8,400</p>
            </li>
          </ul>
        </div>
        <hr class="border-secondary">

        <!-- 案扭區 -->
        <div class="w-100 pt-3 d-flex justify-content-between">
          <a href="./practice-web-cart-1.html"
            class="py-2 fs-5 fw-semibold link-dark link-opacity-50-hover text-decoration-none"><i
              class="bi bi-arrow-left-short"></i>上一頁</a>

          <button type="submit" class="check-btn btn btn-warning px-5 py-2 fs-5 fw-semibold">
            下一步
          </button>
        </div>
      </div>
    </form>

  </main>
  <!-- =================================================  -->
<!--  footer====================================  -->
  <Footer />
</template>
