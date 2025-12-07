<template>
	<div class="app">
		<h2>我是APP组件</h2>
		<!-- 通过插槽实现 -->
		<Suspense>
			<template v-slot:default>
				<Child />
			</template>
			<template v-slot:fallback>
				<h2>图片加载中</h2>
			</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts" name="App">
import Child from './Child.vue';
import { Suspense } from 'vue';


</script>

<style scoped>
.app {
	background-color: #ddd;
	border-radius: 10px;
	padding: 10px;
	box-shadow: 0 0 10px;
}
</style>