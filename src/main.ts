// 引入createApp用于创建应用实例
import { createApp } from 'vue';
// 引入根组件App
import App from './App.vue';
// 引入路由器
import router from './router';

// 创建应用实例并挂载到DOM
const app = createApp(App);
// 使用路由器
app.use(router);
// 挂载整个应用到APP容器中
app.mount('#app');