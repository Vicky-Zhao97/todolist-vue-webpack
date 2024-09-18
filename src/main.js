import { createApp } from 'vue'  // 从 'vue' 导入 createApp
import App from './App.vue'

// 创建应用实例
const app = createApp(App)

// 挂载应用到 DOM
app.mount('#app')

// 让 Vue 知道 HMR 的存在
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
      app.unmount();
    });
  }
