// 引入createApp用于创建应用实例
import { createApp } from 'vue';
// 引入根组件App
import App from './App.vue';
// 引入pinia用于状态管理
import { createPinia } from 'pinia';

// 创建应用实例并挂载到DOM
const app = createApp(App);
// 创建pinia实例
const pinia = createPinia();
// 将pinia挂载到应用实例上
app.use(pinia);
// 挂载整个应用到APP容器中
app.mount('#app');