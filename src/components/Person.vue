<template lang="">
    <div class="person">
        <h1>情况1：监视ref定义的基本类型数据</h1>
        <h2>当前求和为：{{sum}}</h2>
        <button @click="changeSum">点我+1</button>
    </div>
</template>


<script lang="ts" name="Person" setup>
import { ref, watch } from 'vue';
// 数据
let sum = ref(0);

// 方法
function changeSum() {
    sum.value += 1;
}
// 监听sum的变化
const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log(`@@@sum的值从${oldValue}变为了${newValue}`);
    if (sum.value >= 10) {
        console.log('@@@sum已经大于等于10了，停止监听');
        stopWatch();  // 停止监听
    }
})

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