<template>
	<div class="child1">
		<h3>子组件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>弟弟给哥哥的电脑：{{ computer }}</h4>
		<!-- 触发事件 -->
		<button @click="emitter.emit('send-toy', toy)">给弟弟玩具</button>
	</div>
</template>

<script setup lang="ts" name="Child1">
import { ref, onUnmounted } from 'vue';
import emitter from '@/utils/emitter';
let toy = ref('奥特曼');
let computer = ref('');

// 监听事件
emitter.on('send-computer', (value: any) => {
	computer.value = value;
});

// 在组件卸载时，解绑事件
onUnmounted(() => {
	emitter.off('send-computer');
});
</script>

<style scoped>
.child1 {
	margin-top: 50px;
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}

.child1 button {
	margin-right: 10px;
}
</style>