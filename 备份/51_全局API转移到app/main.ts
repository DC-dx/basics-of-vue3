import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'
import { createPinia } from 'pinia'
// 创建应用
const app = createApp(App)

// 注册全局组件
app.component("Hello", Hello)
// 全局属性(尽量少用)
app.config.globalProperties.x = 99

declare module 'Vue' {
    interface ComponentCustomProperties {
        x: number
    }
}

app.directive('beauty', (elment, { value }) => {
    elment.innerText += value
    elment.style.color = 'green'
    elment.style.backgroundColor = 'yellow'
})

const pinia = createPinia()
app.use(pinia)

// 挂载应用
app.mount('#app')

// 卸载应用
setTimeout(() => {
    app.unmount()
}, 2000)