<template>
    <div class="child">
        <h2>我是Child组件</h2>
        <h3>当前求和为：{{ sum }}</h3>
        <img v-for="(dog, index) in dogList" :key="index" :src="dog"></img>
    </div>

</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
import axios from 'axios';
let sum = ref(0)
let dogList = ref<Array<string>>([])
let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
dogList.value.push(result.data.message);
console.log(dogList.value);

</script>

<style scoped>
.child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>