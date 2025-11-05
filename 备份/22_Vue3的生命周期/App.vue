<template>
    <!-- html -->
    <!-- 务必看懂下面这行代码 -->
    <!-- <h2 a="1+1" :b="1 + 1" c="x" :d="x" ref="qwe"></h2> -->
    <!-- 3、使用Person组件 -->
    <Person v-if="isShow" />
</template>

<script lang="ts" setup name="App">
// 为什么不用{}解构赋值？因为Vue组件选项中，必须通过export default导出一个对象，而不是单独导出某些属性或方法
import { ref, onMounted } from 'vue';
import Person from './components/Person.vue';   // 1、引入Person组件

let isShow = ref(true);
// 挂载完毕
onMounted(() => {
    // 先子后父
    console.log("父---挂载完毕")
});

</script>
