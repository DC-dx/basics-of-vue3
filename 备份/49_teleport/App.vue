<template>
	<div class="outer">
		<h2>我是APP组件</h2>
		<img src="https://www.atguigu.com/images/index_new/logo.png"></img>
		<br>
		<Model></Model>
	</div>

</template>

<script setup lang="ts" name="App">
import Model from './Model.vue';
</script>

<style scoped>
.outer {
	background-color: #ddd;
	border-radius: 10px;
	padding: 5px;
	box-shadow: 0 0 10px;
	width: 400px;
	height: 400px;
	/* 定位废了 */
	filter: saturate(200%);
}

img {
	width: 270px;
}
</style>