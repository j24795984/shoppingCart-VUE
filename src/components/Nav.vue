<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>
<script>
  import Logo from '../assets/img/logo/logo.jpg'
  
  export default {
    components: {

    },
    data() {
      return {
        Logos : [
          Logo
        ],
      }
    }
  }
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
    <div class="container-xxl">
      <RouterLink to="/" class="navbar-brand" style="height:70px;">
        <img :src="Logos[0]" class="rounded-2" style="height: 100%;width: auto;" alt="">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 選單 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center gap-2">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">關於我</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown">
              作品集
            </RouterLink>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/">插畫</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/">平面設計</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/">其他合作</RouterLink></li>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/cart1" role="button">
              <i class="bi bi-cart-fill fs-5"></i>
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="member nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle fs-5"></i>
            </RouterLink>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/login">Login</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
