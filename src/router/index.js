import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Cart1View from '../views/Cart1View.vue'
import Cart2View from '../views/Cart2View.vue'
import Cart3View from '../views/Cart3View.vue'
import Cart4View from '../views/Cart4View.vue'

const router = createRouter({
  history: createWebHashHistory(), //import.meta.env.BASE_URL
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'logon',
      component: LoginView,
    },
    {
      path: '/cart1',
      name: 'cart1',
      component: Cart1View,
    },
    {
      path: '/cart2',
      name: 'cart2',
      component: Cart2View,
    },
    {
      path: '/cart3',
      name: 'cart3',
      component: Cart3View,
    },
    {
      path: '/cart4',
      name: 'cart4',
      component: Cart4View,
    },
    {
      path: '/learning/id:',
      name: 'learning',
      component: () => import('@/views/20250722-learning.vue'),
    },
  ],

  // --- ↓↓↓ 新增這段 scrollBehavior 函式 => 跳頁回到最頂端 ↓↓↓ ---
  scrollBehavior(to, from, savedPosition) {
    // 如果有儲存的位置 (例如點擊上一頁)，則返回該位置
    if (savedPosition) {
      return savedPosition
    }
    // 其他所有情況，滾動到頁面頂端
    else {
      return { top: 0 }
    }
  },
  // --- ↑↑↑ 新增結束 ↑↑↑ ---
})  

export default router
