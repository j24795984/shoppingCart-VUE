<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'

  // img 
  import CartImg1 from '@/assets/img/cart-img/LrLL14d.jpg'
  import CartImg2 from '@/assets/img/cart-img/media.jpg'
  import CartImg3 from '@/assets/img/cart-img/media(1).jpg'
  import CartImg4 from '@/assets/img/cart-img/被子.jpg'
  // ============================= 
</script>

<script>
  import QuantityBtn from '@/components/QuantityBtn.vue'

  export default {
    components: {
      QuantityBtn,
    },
    data() {
      return {
        cartCard: [
          { 
            id:1,
            name:'委託-角色單圖',
            tagId: '123456',
            img: CartImg1,
            amount: 1800,
            count: 1,
            totalAmount: 0 ,
          },
          { 
            id:2,
            name:'委託-情境插畫',
            tagId: '223456',
            img: CartImg2,
            amount: 2500,
            count: 1,
            totalAmount: 0 ,
          },
          { 
            id:3,
            name:'名片設計-海報設計',
            tagId: '323456',
            img: CartImg3,
            amount: 2000,
            count: 1,
            totalAmount: 0 ,
          },
          { 
            id:4,
            name:'平面設計-名片設計',
            tagId: '423456',
            img: CartImg4,
            amount: 2100,
            count: 1,
            totalAmount: 0 ,
          },
        ],
        // 運費
        fee: 20,
      }
    },
    //監聽功能函式
    computed: {
      totalCount() {
        let total = 0;
        this.cartCard.forEach(item => {
          total += item.count;
        });

        return total;
      },
      totalPrice() {
        let total = 0;
        this.cartCard.forEach(item => {
          total += (item.amount * item.count);
        });

        return total;
      },
      
    },
    // 預載入的內容
    mounted() {
      this.setCartData();
      this.cartCard.forEach((item , index) => {
        this.cardTotalAmount(index);
      })
    },
    // 方法(function)
    methods: {
      cardTotalAmount(index) {
        this.cartCard[index].totalAmount = this.cartCard[index].count * this.cartCard[index].amount;
      },
      // 儲存到 sessionStorage
      saveCartData() {
        const jsonData = JSON.stringify(this.cartCard);
        sessionStorage.setItem('my-cart' , jsonData);
      },
      setCartData() {
        const data = sessionStorage.getItem('my-cart');
        //如果 data = null or falus => 放置原始值(this.cartCard)
        const jsonData = JSON.parse(data) || this.cartCard;
        this.cartCard = jsonData;
      },
      nextStep() {
        this.saveCartData();
        // 紀錄完成後，跳轉至下一個頁面
        // 使用 this.$router.push() 來進行路由導覽
        this.$router.push({ name: 'cart2' }); // 推薦使用路由的 name 來導覽
      }
    }
  }
</script>

<template>
  <!-- 導覽列 -->
  <Navbar />
  <!-- =================================================  -->
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
                  <div class="progress-bar bg-success" style="width: 50%"></div>
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
                  class="num-circle m-auto rounded-5 border border-2 border-secondary-subtle opacity-50 text-secondary fs-4 lh-lg text-center">
                  2</div>
                <div class="progress rounded-5 progress-w position-absolute top-50 start-100 translate-middle">
                  <div class="progress-bar bg-success" style="width: 0%"></div>
                </div>
              </div>

              <div class="text-box text-center">
                <p class="d-inline text-secondary text-opacity-50 px-2 m-auto" style="width: 146px;">選擇付款與運送方式</p>
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

        <!-- 訂單明細 -->
        <div class="w-100 px-3">
          <h2 class="h4 fw-bolder text-secondary ">訂單明細</h2>

          <div class="w-100 pt-2">
            <template v-for="(item , index) in cartCard">
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
                  $ {{ item.amount }}
                </div>
                <!-- @calc 將元件中的值帶入這個頁面中 -->
                <QuantityBtn :quantity="item.count" @calc="(count) => item.count = count" @click="cardTotalAmount(index)" />
                <div class="total d-flex align-items-center justify-content-center fs-4 px-3">
                  $ {{ item.totalAmount }}
                </div>
              </div>
              <template v-if="index !== (cartCard.length - 1)">
                <hr class="bg-secondary">
              </template>
            </template>
          </div>
        </div>
        <hr class="bg-secondary">

        <!-- 總金額計算 -->
        <div class="w-100 row m-0 py-2">
          <ul class="amount-box col-sm-10 col-md-6 col-lg-3 m-0 ms-auto px-4 fs-5 text-secondary">
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">數量:</p>
              <p class="mb-0 flex-grow-1 text-end">{{ totalCount }}</p>
            </li>
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">小記:</p>
              <p class="mb-0 flex-grow-1 text-end">$ {{ totalPrice }}</p>
            </li>
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">手續費:</p>
              <p class="mb-0 flex-grow-1 text-end">$ {{ fee }}</p>
            </li>
            <hr class="border-secondary">
            <li class="d-flex mb-2">
              <p class="mb-0 opacity-50">總計:</p>
              <p class="mb-0 flex-grow-1 text-end">$ {{ totalPrice + fee }}</p>
            </li>
          </ul>
        </div>
        <hr class="border-secondary">

        <!-- 案扭區 -->
        <div class="w-100 pt-3 d-flex justify-content-between">
          <RouterLink to="/" class="py-2 fs-5 fw-semibold link-dark link-opacity-50-hover text-decoration-none">
            <i class="bi bi-arrow-left-short"></i>返回購物
          </RouterLink>

          <button type="button" class="check-btn btn btn-warning px-5 py-2 fs-5 fw-semibold" @click="nextStep">
            下一步
          </button>
        </div>
      </div>  
    </form>

  </main>
  <!-- =================================================  -->
<!--  footer====================================  -->
<Footer></Footer>
</template>