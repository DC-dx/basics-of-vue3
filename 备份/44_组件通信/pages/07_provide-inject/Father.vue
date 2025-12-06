<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref, reactive, provide } from 'vue'
// 数据
let money = ref(100)
let car = reactive({
  brand: '奔驰',
  price: 100
})

function updateMoney(value: number) {
  money.value -= value
}

// 向所有后代提供数据 
provide('moneyContext', {money, updateMoney}) //money不能传.value，否则会失去响应式
provide('car', car)

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>