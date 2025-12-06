<template>
	<div class="app">
		<h2>当前sum1求和为：{{ sum1 }}</h2>
		<h2>当前sum2求和为：{{ sum2 }}</h2>
		<h2>当前汽车car1为：{{ car1 }}</h2>
		<h2>当前汽车car2为：{{ car2 }}</h2>
		<button @click="changeSum1">点我sum1+1</button>
		<button @click="changeSum2">点我sum2+1</button>
		<button @click="changBrand1">修改品牌(car1)</button>
		<button @click="changColor1">修改颜色(car1)</button>
		<button @click="changPrice1">修改价格(car1)</button>
		<button @click="changBrand2">修改品牌(car2)</button>
		<button @click="changColor2">修改颜色(car2)</button>
	</div>


</template>

<script setup lang="ts" name="App">
import { ref, readonly, reactive ,shallowReadonly} from 'vue'
let sum1 = ref(0)
// 会维护住关联关系 sum1变了，sum2也会变
let sum2 = readonly(sum1)
let car1 = reactive({
	brand: '梅奔',
	options: {
		color: '红色',
		price: 100
	}
})

// 浅层次的只读，从第二层就能改变了
let car2 = shallowReadonly(car1)

function changeSum1() {
	sum1.value += 1
}

function changeSum2() {
	// sum2是只读属性，不能被赋值
	// sum2.value += 1
}

function changBrand1() {
	car1.brand = '奔驰'
}

function changColor1() {
	car1.options.color = '黑色'
}

function changPrice1() {
	car1.options.price += 10
}

function changBrand2() {
	car2.brand = '奔驰'
}

function changColor2() {
	car2.options.color = '黑色'
}

</script>

<style scoped>
.app {
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}

button {
	margin: 0 5px;
}
</style>