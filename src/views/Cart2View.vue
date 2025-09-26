<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'
</script>

<script>
  export default {
    data() {
      return {
        sendInfos: {
          name:'',
          phone: '',
          email: '',
          city: '',
          code:'' ,
          address:'',
        }
      }
    },
    methods: {
      saveSendInfos() {
        const jsonData = JSON.stringify(this.sendInfos);
        sessionStorage.setItem('my-send-infos' , jsonData);
      },
      getSendInfos() {
        const jsonData = sessionStorage.getItem('my-send-infos');
        const data = JSON.parse(jsonData) || this.sendInfos;
        this.sendInfos = data;
      },
      goToNext() {
        // 儲存 
        this.saveSendInfos();
        // 前往指定的頁面
        this.$router.push({name: 'cart3'});
        // this.$router.push({ name: 'cart2' }); // 推薦使用路由的 name 來導覽 =>頁面位置可能改變，但name不會
      }
    },
    // 預載入資料
    mounted() {
      this.getSendInfos();
    }
  }
</script>

<template>
  <!-- 導覽列 -->
  <Navbar />
  <!-- =============================================  -->
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
                  <div class="progress-bar bg-success" style="width: 50%"></div>
                </div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-success m-auto " style="width: 146px;">選擇付款與運送方式</p>
              </div>
            </div>
            <!-- 3 -->
            <div class="col p-0">
              <div class="num-box position-relative mb-3">
                <div
                  class="num-circle m-auto rounded-5 border border-2 border-secondary-subtle opacity-50 text-secondary fs-4 lh-lg text-center">
                  3</div>
                <div class="progress rounded-5 progress-w position-absolute top-50 start-100 translate-middle">
                  <div class="progress-bar bg-success" style="width: 0%"></div>
                </div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-secondary text-opacity-50 px-2 m-auto" style="width: 146px;">填寫基本資料</p>
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

        <!-- 寄送資料 -->
        <div class="w-100 px-3">
          <h2 class="h4 fw-bolder text-secondary">寄送資料</h2>
          <!-- v-model 修飾符： -->
          <!-- trim:移除多餘的空白輸入 -->
          <!-- 最大長度限制 maxlength="50" =>台灣戶政事務所最高限制是50 -->
          <div class="mb-3 py-3">
            <label for="name-input" class="form-label fs-5">姓名</label>
            <input v-model.trim="sendInfos.name"  type="text" maxlength="50" class="form-control text-bg-light" id="name-input" placeholder="王小明" required>
          </div>
          <div class="mb-3 py-3">
            <label for="tel-input" class="form-label fs-5">電話</label>
            <!-- type - tel 跟text一樣，但更語意化 -->
            <input v-model.trim="sendInfos.phone" type="tel" class="form-control text-bg-light" id="tel-input" placeholder="0900123456">
          </div>
          <div class="mb-3 py-3">
            <label for="email-input" class="form-label fs-5">E-mail</label>
            <!-- type - email 跟text一樣，但會增加一些Email的判斷 -->
            <input v-model.trim="sendInfos.email" type="email" class="form-control text-bg-light" id="email-input" placeholder="name@example.com">
          </div>
          <div class="mb-3 py-3">
            <label for="address-city" class="form-label fs-5">地址</label>
            <div class="row m-0 gap-2">
              <div class="col p-0">
                <input v-model.trim="sendInfos.city" type="text" class="form-control text-bg-light" id="address-city" placeholder="縣市" required>
              </div>
              <div class="col p-0">
                <input v-model.trim="sendInfos.code" type="text" class="form-control text-bg-light" id="address-district" placeholder="郵遞區號" required>
              </div>
              <div class="col-12 p-0">
                <input v-model.trim="sendInfos.address" type="text" class="form-control text-bg-light" id="address-detail" placeholder="地址" required>
              </div>
            </div>
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

          <RouterLink to="/cart1" class="py-2 fs-5 fw-semibold link-dark link-opacity-50-hover text-decoration-none">
            <i class="bi bi-arrow-left-short"></i>上一頁
          </RouterLink>

          <!-- type: submit => 綁定表單，並偵測是否有必填(required)的未填 -->
          <!-- 這邊會是觸發 submit 事件，而不是點擊事件，因此要用@submit -->
          <!-- @submit.prevent =>阻止他應該要做的事，並自行指定後續的動作 -->
          <!-- 後面要記得填動作(需要執行的內容) -->
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
