<template lang="">
    <div class="person">
        <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
        <h2>当前水温为：{{ temp }}</h2>
        <h2>当前水位为：{{ height }}</h2>
        <button @click="changeTemp">升高水温</button>
        <button @click="changeHeight">升高水位</button>
    </div> 
</template>


<script lang="ts" name="Person" setup>

import { ref, watch, watchEffect } from 'vue';
// 数据
let temp = ref(10);
let height = ref(20);

// 方法
function changeTemp() {
    temp.value += 10;
}

function changeHeight() {
    height.value += 10;
}
// 用watch实现，需要明确的指出要监视：temp、height
/*watch([temp, height], ([newTemp, newHeight], [oldTemp, oldHeight]) => {
    if (newTemp >= 60 || newHeight >= 80) {
        console.log('水温或水位达到指定值，发送请求给服务器');
    }
    console.log(`水温由${oldTemp}变为${newTemp}，水位由${oldHeight}变为${newHeight}`);
});*/

// watchEffect 有点像watch＋immediate
watchEffect(()=>{
    if (temp.value >= 60 || height.value >= 80) {
        console.log('水温或水位达到指定值，发送请求给服务器');
    }
    else{
        console.log([temp.value,height.value])
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