<script setup>
  import Navbar from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'
</script>

<script>
// imgs =================================================
  import BannerImg011 from '../assets/img/index-carousel/LrLL14d-16x9.jpg'
  import BannerImg012 from '../assets/img/index-carousel/LrLL14d-6x5.jpg'
  import BannerImg021 from '../assets/img/index-carousel/media(1)16x9.jpg'
  import BannerImg022 from '../assets/img/index-carousel/media(1)6x5.jpg'
  import BannerImg031 from '../assets/img/index-carousel/被子16x9.jpg'
  import BannerImg032 from '../assets/img/index-carousel/被子6x5.jpg'
  import BannerImg041 from '../assets/img/index-carousel/media16x9.jpg'
  import BannerImg042 from '../assets/img/index-carousel/media6x5.jpg'
  // ---------------- 
  import Cart01 from '../assets/img/cart-img/LrLL14d.jpg'
  import Cart02 from '../assets/img/cart-img/media(1).jpg'
  import Cart03 from '../assets/img/cart-img/media.jpg'
  import Cart04 from '../assets/img/cart-img/被子.jpg'
  // ---------------- 
  import ArtImg01 from '../assets/img/art-img/CUB3-3封面.jpg'
  import ArtImg02 from '../assets/img/art-img/M_.jpg'
  import ArtImg03 from '../assets/img/art-img/冷米飯友-定稿-20250321-2.jpg'
  import ArtImg04 from '../assets/img/art-img/委託-西塔-名片-20240125-2.jpg'
  import ArtImg05 from '../assets/img/art-img/部落.jpg'
  import ArtImg06 from '../assets/img/art-img/飯友.jpg'
  // ================================================= 

  export default {
    components: {
    },
    data() {
      return {
        imgs : {
          bannerImgs: {
            banner01:[
              BannerImg011,
              BannerImg012,
            ],
            banner02:[
              BannerImg021,
              BannerImg022,
            ],
            banner03:[
              BannerImg031,
              BannerImg032,
            ],
            banner04:[
              BannerImg041,
              BannerImg042,
            ],
          },
          cartImgs: {
            Cart01,
            Cart02,
            Cart03,
            Cart04,
          },
          artImgs: [
            ArtImg01,
            ArtImg02,
            ArtImg03,
            ArtImg04,
            ArtImg05,
            ArtImg06,
          ]
        }
      }
    }
  }
</script>

<template>
  <!-- 導覽列 -->
  <Navbar />
  <!-- =============================================  -->
  <!-- 輪播 -->
  <div id="carouselExampleIndicators" class="carousel slide" style="padding-top: 85px;">
    <!-- 輪播控制器 -->
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
      </div>
      <!-- 輪播圖片 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <picture>
            <source media="(min-width: 760px)" :srcset="imgs.bannerImgs.banner01[0]" class="d-block w-100">
            <img :src="imgs.bannerImgs.banner01[0]" class="d-block w-100" alt="...">
          </picture>
        </div>
        <div class="carousel-item">
          <picture>
            <source media="(min-width: 760px)" :srcset="imgs.bannerImgs.banner02[0]" class="d-block w-100">
            <img :src="imgs.bannerImgs.banner02[0]" class="d-block w-100" alt="...">
          </picture>
        </div>
        <div class="carousel-item">
          <picture>
            <source media="(min-width: 760px)" :srcset="imgs.bannerImgs.banner03[0]" class="d-block w-100">
            <img :src="imgs.bannerImgs.banner03[0]" class="d-block w-100" alt="...">
          </picture>
        </div>
        <div class="carousel-item">
          <picture>
            <source media="(min-width: 760px)" :srcset="imgs.bannerImgs.banner04[0]" class="d-block w-100">
            <img :src="imgs.bannerImgs.banner04[0]" class="d-block w-100" alt="...">
          </picture>
        </div>
      </div>
      <!-- 左右。 -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- main==========================================  -->
  <main class="box flex-grow-1">
    <div class="container-sm my-1 my-md-5 py-0 py-md-3">
      <!-- 關於我 -->
      <div class="text-center pt-5 px-md-5">
        <div class="row m-0">
          <h2 class="col-12 col-sm-10 col-lg-8 fs-2 mx-auto p-0 mb-4">Norphen.Studio</h2>
        </div>
        <div class="row m-0">
          <p class="col-12 col-sm-10 col-lg-8 fs-5 mx-auto p-0 text-secondary ">
            嗨!歡迎來到我的網站
            <br>
            希望在這裡可以找到你喜歡的內容~
          </p>
        </div>
      </div>
      <!-- 服務項目 -->
      <div class="pt-5">
        <div class=" row m-0 justify-content-center">
          <div class="col-12 col-sm-6 col-md-3 card p-3 border-0">
            <img :src="imgs.cartImgs.Cart01" class="card-img-top servise-img rounded-circle m-auto" alt="">
            <div class="card-body text-center">
              <h5 class="card-title">插畫創作</h5>
              <p class="card-text text-secondary">我喜歡用插畫把腦中的想像變成畫面，希望可以透握裹的創作讓你一起感受我的想像世界!</p>
              <a href="#" class="text-decoration-none link-warning">Learn more<i
                  class="bi bi-arrow-right-short"></i></a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3 card p-3 border-0">
            <img :src="imgs.cartImgs.Cart01" class="card-img-top servise-img rounded-circle m-auto" alt="">
            <div class="card-body text-center">
              <h5 class="card-title">平面設計</h5>
              <p class="card-text text-secondary">設計，能豐富一個畫面，更能賦予一個插畫創作實用價值!</p>
              <a href="#" class="text-decoration-none link-warning">Learn more<i
                  class="bi bi-arrow-right-short"></i></a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3 card p-3 border-0">
            <img :src="imgs.cartImgs.Cart01" class="card-img-top servise-img rounded-circle m-auto" alt="">
            <div class="card-body text-center">
              <h5 class="card-title">網頁設計</h5>
              <p class="card-text text-secondary">建立一個屬於自己的頁面，為自己創建一個屬於自己的空間!</p>
              <a href="#" class="text-decoration-none link-warning">Learn more<i
                  class="bi bi-arrow-right-short"></i></a>
            </div>
          </div>
        </div>
        <div class="d-flex btn-area pt-2 pb-3">
          <button type="button" class=" btn btn-warning m-auto">想要瞭就更多我的創作嗎?</button>
        </div>
      </div>
      <!-- 照片區 -->
      <div class="pt-5">
        <div class="row m-0 text-start align-items-end">
          <div class="col-12 col-md-3 col-lg-2 fs-2 p-0 mb-2 m-md-0 me-md-5">這裡！是一些我的創作~</div>
          <div class="col-12 col-md p-0 h5 text-secondary">這裡收藏了一些我設計與插畫，希望在這些創作中，能夠找到讓你喜歡的內容！</div>
        </div>
        <!-- 相簿 -->
        <div class="pt-3 row m-0 gap-2">
          <!-- 左  -->
          <div class="col p-0">
            <div class="row m-0 gap-2">
              <div class="col-12 p-0">
                <div class="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                  <div class="w-100">
                    <img :src="imgs.artImgs[0]" alt="" class="w-100 img-fluid">
                  </div>
                </div>
              </div>
              <div class="col p-0">
                <div class="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                  <div class="w-100">
                    <img :src="imgs.artImgs[1]" alt="" class="w-100 img-fluid">
                  </div>
                </div>
              </div>
              <div class="col p-0">
                <div class="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                  <div class="w-100">
                    <img :src="imgs.artImgs[2]" alt="" class="w-100 img-fluid">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右 -->
          <div class="col p-0">
            <div class="row m-0 gap-2">
              <div class="col-12 p-0 order-1">
                <div class="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                  <div class="w-100">
                    <img :src="imgs.artImgs[3]" alt="" class="w-100 img-fluid">
                  </div>
                </div>
              </div>
              <div class="col p-0">
                <div class="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                  <div class="w-100">
                    <img :src="imgs.artImgs[4]" alt="" class="w-100 img-fluid">
                  </div>
                </div>
              </div>
              <div class="col p-0">
                <div class="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                  <div class="w-100">
                    <img :src="imgs.artImgs[5]" alt="" class="w-100 img-fluid">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 價目表 -->
      <div class="w-100 py-5 px-md-5">
        <div class="text-center">
          <div class="row m-0">
            <h2 class="col-12 col-sm-10 col-lg-8 fs-2 mx-auto p-0 mb-4">價目表</h2>
          </div>
          <div class="row m-0">
            <p class="col-12 col-sm-10 col-lg-8 fs-5 mx-auto p-0 text-secondary ">
              這裡有一些參考價格~
              <br>
              <span class="fs-6 text-danger opacity-75">∆∆ 注意!!價格會隨內容複雜度變動喔!! ∆∆</span>
            </p>
          </div>
        </div>

        <!-- 價目表table -->
        <div class=" mx-auto" style="max-width: 1000px;">
          <!-- 大字 -->
          <table class="table align-middle table-hover d-none d-sm-table">
            <thead class=" table-secondary">
              <tr>
                <th scope="col">plan</th>
                <th scope="col">Speed</th>
                <th scope="col">Storage</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Start</th>
                <td>5Mb/s</td>
                <td>15 GB</td>
                <td>Free</td>
                <td>
                  <label for="free" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="free">
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row">Pro</th>
                <td>25Mb/s</td>
                <td>25 GB</td>
                <td>$24</td>
                <td>
                  <label for="pro" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="pro">
                  </label>
                </td>

              </tr>
              <tr>
                <th scope="row">Bussiness</th>
                <td>36Mb/s</td>
                <td>40 GB</td>
                <td>$50</td>
                <td>
                  <label for="bussiness" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="bussiness">
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row">Exclusive</th>
                <td>48Mb/s</td>
                <td>120 GB</td>
                <td>$72</td>
                <td>
                  <label for="exclusive" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="exclusive">
                  </label>
                </td>

              </tr>
            </tbody>
          </table>
          <!-- 小字 -->
          <table class="small-table table align-middle table-hover d-table d-sm-none">
            <thead class=" table-secondary">
              <tr>
                <th scope="col" class="text-break">plan</th>
                <th scope="col" class="text-break">Speed</th>
                <th scope="col" class="text-break">Storage</th>
                <th scope="col" class="text-break">Price</th>
                <th scope="col" class="text-break"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="text-break">Start</th>
                <td class="text-break">5Mb/s</td>
                <td class="text-break">15 GB</td>
                <td class="text-break">Free</td>
                <td class="text-break">
                  <label for="free" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="free">
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-break">Pro</th>
                <td class="text-break">25Mb/s</td>
                <td class="text-break">25 GB</td>
                <td class="text-break">$24</td>
                <td class="text-break">
                  <label for="pro" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="pro">
                  </label>
                </td>

              </tr>
              <tr>
                <th scope="row" class="text-break">Bussiness</th>
                <td class="text-break">36Mb/s</td>
                <td class="text-break">40 GB</td>
                <td class="text-break">$50</td>
                <td class="text-break">
                  <label for="bussiness" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="bussiness">
                  </label>
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-break">Exclusive</th>
                <td class="text-break">48Mb/s</td>
                <td class="text-break">120 GB</td>
                <td class="text-break">$72</td>
                <td class="text-break">
                  <label for="exclusive" class="w-100 h-100 text-center">
                    <input type="radio" name="price" id="exclusive">
                  </label>
                </td>

              </tr>
            </tbody>
          </table>
          <!-- 按鈕區 -->
          <div class="w-100 pt-3 d-flex justify-content-between align-items-center">
            <a href="#" class="text-decoration-none link-warning">Learn more<i class="bi bi-arrow-right-short"></i></a>
            <a href="/cart1" class="text-decoration-none text-dark">
              <button type="button" class="btn btn-warning px-4 fs-6 fw-semibold">
                加入購物車
              </button>
            </a>
          </div>
        </div>
      </div>
      <!-- 卡片區-2  -->
      <div class="pt-5">
        <!-- 上方文字 -->
        <div class="row m-0 row-gap-3 column-gap-5 justify-content-center">
          <div class="col-12 col-md-4 p-2">
            <p class="fs-4 mb-2 d-flex justify-content-center justify-content-md-start">這裡有一些實際製作的案例~</p>
            <hr class="border-5 rounded-pill border-warning opacity-100 m-auto m-md-0" style="width: 40px;">
          </div>
          <div class="col-12 col-md p-2">
            <p class="fs-6 mb-2 text-secondary">
              目前我有提供這些不同的委託項目，包含設計與插畫相關的多元服務，無論是角色設計、商業插畫、名片、海報平面設計等，都歡迎提出需求討論。若您有特別的創意構想或客製化的視覺需求，也歡迎隨時向我聯絡，希望可以跟你一起創造出吸引動人的創作！
            </p>
          </div>
        </div>
        <!-- 卡片  -->
        <div class="row m-0 pt-4 row-cols-1 row-cols-sm-2 row-cols-lg-4">
          <div class="col p-2">
            <div class="card p-4">
              <div class="ratio ratio-16x9 overflow-hidden rounded-2">
                <div class="w-100 translate-middle-y">
                  <img :src="imgs.artImgs[0]" class="card-img-top img-fuild" alt="...">
                </div>
              </div>
              <p class="text-warning my-1">
                平面設計
              </p>
              <div class="card-body px-0 py-3">
                <h5 class="card-title1">漫畫封面</h5>
                <p class="card-text text-secondary">參加場次時所創作的漫畫合本封面，除了依據主題與角色氛圍設計視覺構圖外，也要讓作品在攤位上更具吸引力！</p>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card p-4">
              <div class="ratio ratio-16x9 overflow-hidden rounded-2">
                <div class="w-100 translate-middle-y">
                  <img :src="imgs.artImgs[0]" class="card-img-top img-fuild" alt="...">
                </div>
              </div>
              <p class="text-warning my-1">
                平面設計
              </p>
              <div class="card-body px-0 py-3">
                <h5 class="card-title1">漫畫封面</h5>
                <p class="card-text text-secondary">參加場次時所創作的漫畫合本封面，除了依據主題與角色氛圍設計視覺構圖外，也要讓作品在攤位上更具吸引力！</p>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card p-4">
              <div class="ratio ratio-16x9 overflow-hidden rounded-2">
                <div class="w-100 translate-middle-y">
                  <img :src="imgs.artImgs[0]" class="card-img-top img-fuild" alt="...">
                </div>
              </div>
              <p class="text-warning my-1">
                平面設計
              </p>
              <div class="card-body px-0 py-3">
                <h5 class="card-title1">漫畫封面</h5>
                <p class="card-text text-secondary">參加場次時所創作的漫畫合本封面，除了依據主題與角色氛圍設計視覺構圖外，也要讓作品在攤位上更具吸引力！</p>
              </div>
            </div>
          </div>
          <div class="col p-2">
            <div class="card p-4">
              <div class="ratio ratio-16x9 overflow-hidden rounded-2">
                <div class="w-100 translate-middle-y">
                  <img :src="imgs.artImgs[0]" class="card-img-top img-fuild" alt="...">
                </div>
              </div>
              <p class="text-warning my-1">
                平面設計
              </p>
              <div class="card-body px-0 py-3">
                <h5 class="card-title1">漫畫封面</h5>
                <p class="card-text text-secondary">參加場次時所創作的漫畫合本封面，除了依據主題與角色氛圍設計視覺構圖外，也要讓作品在攤位上更具吸引力！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 圖文區 -->
      <div class="pt-5">
        <div class="m-auto" style="max-width: 800px;">
          <!-- 1  -->
          <div class="card p-3 border-0">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="icon-box d-flex justify-content-center align-items-center rounded-circle bg-warning-subtle">
                  <i class="bi bi-brush fs-1"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                  <a href="#" class="link-warning text-decoration-none d-inline-flex align-items-center">Learn More<i
                      class="bi bi-arrow-right-short fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
          <hr class="m-0">

          <!-- 2  -->
          <div class="card p-3 border-0">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center order-0 order-md-2">
                <div class="icon-box d-flex justify-content-center align-items-center rounded-circle bg-warning-subtle">
                  <i class="bi bi-brush fs-1"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                  <a href="#" class="link-warning text-decoration-none d-inline-flex align-items-center">Learn More<i
                      class="bi bi-arrow-right-short fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
          <hr class="m-0">

          <!-- 3  -->
          <div class="card p-3 border-0">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="icon-box d-flex justify-content-center align-items-center rounded-circle bg-warning-subtle">
                  <i class="bi bi-brush fs-1"></i>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional
                    content. This content is a little bit longer.</p>
                  <a href="#" class="link-warning text-decoration-none d-inline-flex align-items-center">Learn More<i
                      class="bi bi-arrow-right-short fs-4"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-area d-flex flex-column flex-sm-row justify-content-center">
          <button type="submit" class="btn btn-warning px-4 py-2">了解更多</button>
        </div>
      </div>
      <!-- 商品目錄  -->
      <div class="pt-5">
        <!-- 大商品 -->
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-md-4">
              <div class=" ratio ratio-1x1 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class=" w-100 img-fluid rounded-start" alt="...">
                </div>
              </div>
            </div>
            <div class=" col-md-8 py-3 px-4">
              <div clas4="card-body">
                <p class="fs-6 text-uppercase">brand name</p>
                <h5 class="card-title h2">The Catcher in the Rye</h5>
                <div class="row m-0 mb-3 gap-2 align-items-center">
                  <div class="col-auto p-0 text-warning">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                  <div class="col-auto text-secondary">
                    4 Reviews
                  </div>
                  <div class="col-auto text-secondary fs-5 border-start py-1">
                    <a href="#" class="link-secondary me-1"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="link-secondary me-1"><i class="bi bi-twitter-x"></i></a>
                    <a href="#" class="link-secondary me-1"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="link-secondary"><i class="bi bi-telegram"></i></a>
                  </div>
                </div>
                <p class="card-text pb-2 mb-3">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde
                  DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
                  tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
                <!-- 規格 -->
                <div class="row m-0 align-items-center column-gap-4">
                  <!-- 顏色 -->
                  <div class="col-auto p-0 d-flex align-items-end">
                    <p class="m-0 me-3 fs-6">Color</p>
                    <form class="d-flex column-gap-2">
                      <div class="form-check p-0">
                        <input type="radio" class="btn-check" name="color-select" id="color-1" autocomplete="off">
                        <label class="btn p-0 rounded-circle border-5-checked" for="color-1"
                          style="background-color: orange; width: 20px; height: 20px;"></label>
                      </div>
                      <div class="form-check p-0">
                        <input type="radio" class="btn-check" name="color-select" id="color-2" autocomplete="off">
                        <label class="btn p-0 rounded-circle border-5-checked" for="color-2"
                          style="background-color: brown; width: 20px; height: 20px;"></label>
                      </div>
                      <div class="form-check p-0">
                        <input type="radio" class="btn-check" name="color-select" id="color-3" autocomplete="off">
                        <label class="btn p-0 rounded-circle border-5-checked" for="color-3"
                          style="background-color: gray; width: 20px; height: 20px;"></label>
                      </div>
                    </form>
                  </div>
                  <!-- 下拉選單 -->
                  <div class="col-auto p-0 d-flex align-items-center">
                    <p class="m-0 me-3 fs-6">Size</p>
                    <form class="d-flex">
                      <select class="form-select" aria-label="Default select example">
                        <option selected disabled hidden>select</option>
                        <option value="0">SM</option>
                        <option value="1">M</option>
                        <option value="2">L</option>
                        <option value="3">XL</option>
                      </select>
                    </form>
                  </div>
                </div>
                <hr class="border-secondary opacity-25">
                <!-- 價格 -->
                <div class="d-flex justify-content-between py-3">
                  <!-- 數字 -->
                  <h5 class="h3">$580</h5>
                  <!-- 功能 -->
                  <div class="btn-area">
                    <button type="button" class="btn btn-lg btn-warning"><strong
                        class="opacity-50">加入購物車</strong></button>
                    <div class="form-check d-inline ps-2">
                      <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
                      <label class="add-like btn bg-secondary-subtle p-0 rounded-circle text-center text-light"
                        for="btn-check" style="width: 35px;height: 35px;">
                        <i class="bi bi-heart-fill" style="line-height: 35px;"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 商品group  -->
        <div class="row m-0 row-gap-2 row-gap-md-5 py-5">
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3 px-2 px-md-4">
            <div class="card border-0">
              <div class="ratio ratio-4x3 overflow-hidden">
                <div class="w-100">
                  <img :src="imgs.artImgs[0]" class="card-img-top" alt="...">
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fs-6" style="color: gray;"><small>Card title</small></h5>
                <p class="card-text mb-1">
                  The Catalyzer
                </p>
                <p class="card-text text-secondary mb-3">
                  <small>$160</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- google-map  -->
    <div class="map-box w-100 position-relative m-0">
      <iframe class="w-100 m-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5559.2951835566655!2d120.65281127402105!3d24.184794261937466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346916380b877075%3A0x4c9665c5dba65b36!2z5Y-w5Lit5Lit5aSu5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1749100613440!5m2!1szh-TW!2stw"
        style="filter: grayscale(1) contrast(1.2) opacity(0.7);" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div class="form-box position-absolute top-0 end-0 w-100 h-100 p-1 p-sm-5">
        <div class="row m-0 p-0 h-100 align-items-end align-items-md-center">
          <div class="col-12 col-md-6 col-xl-4 mb-5 m-md-0 ms-md-auto me-md-5">
            <form class=" p-3 rounded-3 text-bg-warning">
              <p class="fs-4 text-center">歡迎隨時聯絡我!</p>
              <div class="mb-3">
                <label for="indexFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="indexFormControlInput1" placeholder="name@example.com">
                <p class="remark">請留下你的聯絡方式!</p>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">想了解什麼~</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="btn-area d-flex flex-column flex-sm-row">
                <button type="submit" class="btn btn-outline-dark opacity-75">送出</button>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  </main>
  <!--  footer====================================  -->
  <Footer />
</template>
