<template>
    <div class="count">
        <h2>当前求和为：{{sum}}</h2>
        <h3>欢迎来到：{{school}}，坐落于：{{address}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
import { ref,reactive,toRefs } from 'vue';
import { storeToRefs } from 'pinia';
// 引入useCountStore函数，用于获取count模块的store对象
import { useCountStore } from '@/store/count';
// 使用useCountStore函数，得到count模块的store对象
const countStore = useCountStore();

// 使用toRefs将store对象中的响应式属性转换为响应式引用
// 会把countStore中的每个响应式属性，转换为一个ref引用，消耗一定的性能，所以一般不用
// const { sum, school, address } = toRefs(countStore);
// console.log(toRefs(countStore));

// 只取store中的响应式数据，转换为ref引用，推荐使用
// storeToRefs只会关注store中的响应式数据，不会对方法进行ref包裹，性能更好
// console.log(storeToRefs(countStore));
const { sum, school, address } = storeToRefs(countStore);

// 数据
let n = ref(1); // 用户选择的数字

// 方法
function add() {
    // 第三种修改方式：action函数修改
    countStore.increment(n.value);
}
function minus() {
    countStore.sum -= n.value;
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;

}
</style>