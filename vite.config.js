import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/shoppingCart-VUE/', // 1. 設定基礎路徑
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: { // npm run dev 自動開啟葉面
    open: true,
  },
  build: {
    outDir: 'docs' // 2. 設定輸出資料夾名稱為 docs
  },
})
