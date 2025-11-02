<template lang="">
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点我输出h2这个元素</button>
    </div> 
</template>


<script lang="ts" name="Person" setup>
import { ref, defineExpose } from 'vue'

// 创建一个title2，用于存储ref标记的内容
let title2 = ref();
let a = ref(1);
let b = ref(2);
let c = ref(3);

// 方法
function showLog() {
    // 如果别的组件先用的title当id，person的title2会被覆盖
    // console.log(document.getElementById("title2")?.innerHTML)
    console.log(title2.value);
}

defineExpose({ a, b, c })

</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>