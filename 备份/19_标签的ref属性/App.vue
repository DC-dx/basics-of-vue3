<template>
    <!-- html -->
     <h2 ref="title2">您好</h2>
     <button @click="showLog">点我输出h2这个元素</button>
    <!-- 3、使用Person组件 -->
    <Person ref="ren"/>
</template>

<script lang="ts" setup name="App">
// 为什么不用{}解构赋值？因为Vue组件选项中，必须通过export default导出一个对象，而不是单独导出某些属性或方法
import Person from './components/Person.vue';   // 1、引入Person组件
import {ref} from 'vue';
let title2 = ref();
let ren = ref();

function showLog()
{
    console.log(title2.value);
    console.log(ren.value)
}

</script>
