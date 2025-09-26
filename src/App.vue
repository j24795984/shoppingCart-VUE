<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 商品 -->
  <!-- <RouterLink to="/learning/A">商品1</RouterLink> -->
  <!-- 查詢參數 -->
  <!-- <RouterLink to="/learning/A?test=123&test2=999">商品1查詢</RouterLink> -->
  <RouterView />
</template>
