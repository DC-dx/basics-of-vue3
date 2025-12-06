<template>
	<div class="father">
		<h3>父组件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- $event是一个特殊占位符：事件对象 -->
		<!-- 给子组件Child绑定事件 -->
		 <!-- 肉串命名 小驼峰 -->
		<Child @send-toy="saveToy" />
	</div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue';
import Child from './Child.vue'
let toy = ref('');
function saveToy(value: string) {
	toy.value = value;
	console.log('xyz函数被调用了，传递参数：', value);
}

</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-right: 5px;
}
</style>