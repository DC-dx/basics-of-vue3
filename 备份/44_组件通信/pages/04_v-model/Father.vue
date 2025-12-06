<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>用户名：{{ userName }}</h4>
    <h4>密码：{{ passWord }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input v-model="userName" type="text"> -->
    <!-- 底层原理 -->
    <!-- :value用于实现数据到页面 -->
    <!-- <input type="text" :value="userName" @input="userName = (<HTMLInputElement>$event.target).value"> -->

    <!-- 自定义组件上使用v-model -->
    <!-- <AtguiguInput v-model="userName"/> -->
    <!-- $event到底是什么 
     对于原生事件,$event就是事件对象，可用dom元素拆解 ===>能.target
     对于自定义事件，$event就是触发事件时，所传递的数据 ===>不能.target-->
    <!-- <AtguiguInput 
      :modelValue="userName"
      @update:modelValue="userName = $event" /> -->

    <!-- 修改modelValue名称 -->
    <AtguiguInput v-model:name="userName" v-model:pwd="passWord" />
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import AtguiguInput from './AtguiguInput.vue'

// 数据
let userName = ref('zhangsan')
let passWord = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
