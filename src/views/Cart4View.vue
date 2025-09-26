<script setup>
  import Navbar from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'
    // img 
  import CartImg1 from '@/assets/img/cart-img/LrLL14d.jpg'
  import CartImg2 from '@/assets/img/cart-img/media.jpg'
  import CartImg3 from '@/assets/img/cart-img/media(1).jpg'
  import CartImg4 from '@/assets/img/cart-img/被子.jpg'
</script>

<script>
  export default {
    data() {
      return {
        cartData: [],
        sendInfos:[],
        methods: [],
        fee:50,
      }
    },
    methods: {
      setcartData() {
        const data = sessionStorage.getItem('my-cart');
        //如果 data = null or falus => 放置原始值(this.cartData)
        const jsonData = JSON.parse(data) || this.cartData;
        this.cartData = jsonData;
      },
      getSendInfos() {
        const jsonData = sessionStorage.getItem('my-send-infos');
        const data = JSON.parse(jsonData) || this.sendInfos;
        this.sendInfos = data;
      },
      getPayAndShippingMethod() {
        const jsonData = sessionStorage.getItem('my-methods');
        const data = JSON.parse(jsonData) || this.methods;
        this.methods = data;
      },
      resetStorage() {
        sessionStorage.removeItem('my-cart');
        sessionStorage.removeItem('my-methods');
        sessionStorage.removeItem('my-send-infos');
      },
      submit() {
        Swal.fire({
          title: "確認送出訂單嗎?",
          showDenyButton: true,
          showCancelButton: false, // 拿掉 '取消'  按鈕
          confirmButtonText: "送出",
          denyButtonText: `先不要`
        }).then((result) => {
          // 確認 =>跳出通知 => 清空資料 + 返回首頁
          if (result.isConfirmed) {
            Swal.fire("送出成功", "", "success").then(result => {
              if(result.isConfirmed) {
                this.resetStorage();
                this.$router.push('/');
              }
            });
          }
        });
      }
    },
    //監聽功能函式
    computed: {
      totalCount() {
        let total = 0;
        this.cartData.forEach(item => {
          total += item.count;
        });
        return total;
      },
      totalPrice() {
        let total = 0;
        this.cartData.forEach(item => {
          total += (item.amount * item.count);
        });
        return total;
      },
    },
    mounted() {
      this.setcartData();
      this.getSendInfos();
      this.getPayAndShippingMethod();
    }
  }
</script>

<template>
  <!-- 導覽列 -->
  <Navbar />
  <!-- =============================================  -->
  <main class="box flex-grow-1">
    <!-- 購物車 -->
    <form class="container-xl py-3 p-md-5 m-auto">
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
                  <div class="progress-bar bg-success" style="width: 100%"></div>
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
                  class="num-circle m-auto rounded-5 border border-2 border-success text-bg-success fs-4 lh-lg text-center">
                  4</div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-success m-auto" style="width: 146px;">完成訂購</p>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-secondary">

        <!-- 訂單明細 -->
        <div class="w-100 px-3">
          <h2 class="h4 fw-bolder text-secondary ">訂單明細</h2>
          
          <div class="w-100 pt-2" v-for="(item , index) in cartData" :key="index">

              <div class="w-100 px-0 py-2 p-md-4 d-flex flex-column flex-sm-row justify-content-end row-gap-3">
                <!-- 項目 -->
                <div class="d-flex flex-grow-1 flex-column flex-sm-row align-items-center">
                  <!-- 項目圖片 -->
                  <div class="cart-img-box rounded-circle flex-shrink-0">
                    <img :src="item.img" class="w-100 img-fluid card-img-top" alt="">
                  </div>
                  <!-- 項目內容 -->
                  <div class="info-text-box flex-grow-1 me-2 me-lg-5 p-2 text-center text-sm-start">
                    <h5 class="card-title mb-2 fs-5">{{item.name}}</h5>
                    <p class="card-text m-0 pb-1 d-inline-flex text-secondary"># {{item.tagId}}</p>
                  </div>
                </div>

                <!-- 計算區 -->
                <div class="d-flex align-items-center justify-content-center fs-4 px-3 text-secondary opacity-50">
                  數量 {{ item.count }}
                </div>
                <div class="total d-flex align-items-center justify-content-center fs-4 px-3">
                  $ {{ item.totalAmount }}
                </div>
              </div>
              <template v-if="index !== (cartData.length - 1)">
                <hr class="bg-secondary">
              </template>

          </div>
        </div>
        <hr class="border-secondary">

        <!-- 寄送資料 -->
        <div class="w-100 px-3">
          <h2 class="h4 fw-bolder text-secondary">寄送資料</h2>

          <ul class="send-info w-100 m-0 p-3 ">
            <li class="p-0 m-0 d-flex column-gap-3">
              <p class="flex-shrink-0 text-secondary">姓名</p>
              <p class="flex-grow-1 text-break">{{sendInfos.name}}</p>
            </li>
            <li class="p-0 m-0 d-flex column-gap-3">
              <p class="flex-shrink-0 text-secondary">電話</p>
              <p class="flex-grow-1 text-break">{{sendInfos.phone}}</p>
            </li>
            <li class="p-0 m-0 d-flex column-gap-3">
              <p class="flex-shrink-0 text-secondary">Email</p>
              <p class="flex-grow-1 text-break ">{{sendInfos.email}}</p>
            </li>
            <li class="p-0 m-0 d-flex column-gap-3">
              <p class="flex-shrink-0 text-secondary">地址</p>
              <p class="flex-grow-1 text-break">{{`${sendInfos.city} ${sendInfos.code} ${sendInfos.address}`}}</p>
            </li>
            <li class="p-0 m-0 d-flex column-gap-3">
              <p class="flex-shrink-0 text-secondary">付款方式</p>
              <p class="flex-grow-1 text-break">{{methods.paymentMethod}}</p>
            </li><li class="p-0 m-0 d-flex column-gap-3">
              <p class="flex-shrink-0 text-secondary">運送方式</p>
              <p class="flex-grow-1 text-break">{{methods.shippingMethod}}</p>
            </li>
          </ul>
        </div>
        <hr class="border-secondary">

        <!-- 總金額計算 -->
        <div class="w-100 row m-0 py-2">
          <ul class="amount-box col-sm-10 col-md-6 col-lg-3 m-0 ms-auto px-4 fs-5 text-secondary">
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">數量:</p>
              <p class="mb-0 flex-grow-1 text-end">{{ totalCount }}</p>
            </li>
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">小記:</p>
              <p class="mb-0 flex-grow-1 text-end">$</p>
              <p class="mb-0">{{ totalPrice }}</p>
            </li>
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">運費:</p>
              <p class="mb-0 flex-grow-1 text-end">$</p>
              <p class="mb-0">{{ fee }}</p>
            </li>
            <hr class="border-secondary">
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">總計:</p>
              <p class="mb-0 flex-grow-1 text-end">$</p>
              <p class="mb-0">{{ totalPrice + fee }}</p>
            </li>
          </ul>
        </div>
        <hr class="border-secondary">

        <!-- 案扭區 -->
        <div class="w-100 pt-3 d-flex justify-content-end">
          <button type="button" class="check-btn btn btn-warning px-5 py-2 fs-5 fw-semibold" @click="submit">
            送出訂單
          </button>
        </div>
    </div>
    </form>
  </main>
  <!-- =================================================  -->
<!--  footer====================================  -->
  <Footer />
</template>