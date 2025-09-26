<script setup>
  import Navbar from '../components/Nav.vue'
  import Footer from '../components/Footer.vue'
  import BgImg from '../assets/img/login-img/萬聖.jpg'
</script>

<template>
  <!-- 導覽列 -->
  <Navbar />
  <!-- =============================================  -->
  <main class="flex-grow-1">
    <div class="container-fluid p-0 m-0 row h-100">
      <div class="col w-100 p-0 position-relative">
        <div class="w-100 h-100 px-3 py-5 d-flex flex-column justify-content-center">
          <div class="px-sm-5 mx-0 mx-sm-5 text-light">
            <h1 class="h1 p-0 text-start">想要獲得我的更新通知嗎!</h1>
            <hr class="border-2 opacity-50">
            <h5 class="h5 p-0 text-start opacity-75">登入會員，即可獲得更新通知!</h5>
          </div>
          <div class="w-100 py-5 d-block d-lg-none">
            <form class="px-sm-5 mx-0 mx-sm-5">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-light">帳號</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text text-light opacity-75">請填入Email</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label text-light">密碼</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <button type="submit" class="btn btn-outline-warning shadow-sm">登入</button>
            </form>
          </div>
        </div>

        <!-- 圖片 -->
        <div class="z-n1 position-absolute top-0 left-0 w-100 h-100 overflow-hidden">
          <div class="mask position-absolute top-0 left-0 w-100 h-100 bg-dark opacity-75"></div>
          <img :src="BgImg" class="login-img w-100 h-100" alt="">
        </div>
      </div>
      <div class="col w-100 bg-warning p-0 d-none d-lg-flex align-items-center">
        <form class="px-5 mx-auto" style="width: 500px;">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">帳號</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">請填入Email</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密碼</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-outline-dark shadow-sm">登入</button>
        </form>
      </div>
    </div>
  </main>
  <!-- =================================================  -->
<!--  footer====================================  -->
  <Footer />
</template>

<style scoped>
  main {
    min-height: 0;
  }
</style>
