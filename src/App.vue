<template>
    <!-- html -->
    <!-- 3、使用Person组件 -->
    <Person/>
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
