import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @ 替代为 src
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [vue()],
  //https://cn.vitejs.dev/config/server-options.html
  server:{
    proxy:{
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true
      },
    }
  }

})
