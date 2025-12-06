<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="person.age++">年龄+1</button>
		<!-- 数据改变，但页面不更新了 -->
		<!-- <button @click="person2.age++">年龄+1(原始数据)</button> -->
		<hr>
		<h2>car:{{ car }}</h2>
		<h2>car2:{{ car2 }}</h2>
		<button @click="car2.price += 10">点我交个+10</button>
	</div>


</template>

<script setup lang="ts" name="App">
import { reactive, toRaw, markRaw } from 'vue'
import mockjs from 'mockjs'

let person = reactive({
	name: 'tony',
	age: 18
})

/* toRaw */
let person2 = toRaw(person)
// console.log('响应式数据', person)
// console.log('原始数据', person2)

// function showPerson(p: any) {
// 	p.age += 1
// 	p.name += '~'
// 	console.log(p)
// }

/* markRow */
let car = markRaw({ brand: '奔驰', price: 100 })
// car.price += 1
// car.price += 1
// car.price += 1
// car2永远变成不了响应式数据了，因为被markRow标记了
let car2 = reactive(car)
// 永远不能改变
let mockjs2 = markRaw(mockjs)
console.log(mockjs2)

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