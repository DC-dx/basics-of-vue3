<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }} 套</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的电脑</button>
		<!-- 所有的儿子的参数 -->
		<button @click="getAllChildren($refs)">让所有孩子的书变多</button>
		<Child1 ref="c1" />
		<Child2 ref="c2" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { reactive, ref } from 'vue'
// 数据
let house = ref(4)
let c1 = ref()
let c2 = ref()

// 什么时候需要.value
// 1. 读取ref变量本身的值时，需要.value
// 2. 修改ref变量本身的值时，需要.value
// 3. 读取ref变量所引用的对象的属性时，不需要.value
// 4. 修改ref变量所引用的对象的属性时，不需要.value

// 注意点：访问obj.c时，自动拆包，底层会自动读取value属性，因为c是在obj这个响应式对象中的
/*let obj=reactive({
	a:1,
	b:2,
	c:ref(3)
})
let x= ref(10)
console.log(obj.a) 
console.log(obj.b) 
console.log(obj.c)	// 自动拆包
console.log(x.value)*/

// 方法
function changeToy() {
	c1.value.toy = '小猪佩奇'
}
function changeComputer() {
	c2.value.computer = '苹果'
}
// 拿到所有子组件的数据
function getAllChildren(refs: {[key: string]: any}) {
	for (let key in refs) {
		// refs本来就是响应式对象，再去读取属性时，不需要.value
		// 修改属性时，也不需要.value
		refs[key].book += 3
	}
}

defineExpose({
	house
})
</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>
