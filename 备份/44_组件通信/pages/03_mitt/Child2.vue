<template>
	<div class="child2">
		<h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>哥哥给弟弟的玩具：{{ toy }}</h4>
		<button @click="emitter.emit('send-computer', computer)">给弟弟电脑</button>
	</div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onUnmounted } from 'vue';
import emitter from '@/utils/emitter';
// 数据
let computer = ref('联想');
let toy = ref('');
// 监听事件
emitter.on('send-toy', (value: any) => {
	toy.value = value;
});
// 在组件卸载时，解绑事件
onUnmounted(() => {
	emitter.off('send-toy');
});
</script>

<style scoped>
.child2 {
	margin-top: 50px;
	background-color: orange;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>