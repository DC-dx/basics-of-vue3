<template>
    <!-- html -->
    <div class="app">
        <h1>Hello Vue3 + Vite + TypeScript!</h1>
        <!-- 3、使用Person组件 -->
        <Person></Person>  
    </div>
</template>

<script lang="ts">
// 为什么不用{}解构赋值？因为Vue组件选项中，必须通过export default导出一个对象，而不是单独导出某些属性或方法
import Person from './components/Person.vue';   // 1、引入Person组件


// js or ts
    export default {
        name: 'App', // 组件名称
        components: {
            Person  // 2、注册Person组件
        }
    }
</script>

<style>
/* 样式 css */
.app {
    background-color: #ddd;
    box-shadow: 0, 0, 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>