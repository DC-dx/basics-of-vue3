<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input v-model="msg" type="text"></input>
	</div>


</template>

<script setup lang="ts" name="App">
import { ref, customRef } from 'vue'
import userMsgRef from './hooks/userMsgRef';

// 使用useMsgRef来定义一个响应式数据且有延迟效果
let {msg} = userMsgRef('你好吗', 2000)

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