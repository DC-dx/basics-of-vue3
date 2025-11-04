<template>
    <!-- html -->
     <!-- 务必看懂下面这行代码 -->
    <!-- <h2 a="1+1" :b="1 + 1" c="x" :d="x" ref="qwe"></h2> -->
    <!-- 3、使用Person组件 -->
    <Person a="哈哈" :list="personList" />
</template>

<script lang="ts" setup name="App">
// 为什么不用{}解构赋值？因为Vue组件选项中，必须通过export default导出一个对象，而不是单独导出某些属性或方法
import Person from './components/Person.vue';   // 1、引入Person组件
import { reactive } from 'vue';
import { type Persons } from '@/types'

let x = 9

let personList = reactive<Persons>([
    { id: 'asdasafafaf01', name: '张三', age: 13 },
    { id: 'asdasafafaf02', name: '李四', age: 18 },
    { id: 'asdasafafaf03', name: '王五', age: 19 },
])


</script>
