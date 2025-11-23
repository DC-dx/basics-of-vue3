<template>
    <div class="count">
        <h2>当前求和为：{{countStore.sum}}</h2>
        <h3>欢迎来到：{{countStore.school}}，坐落于：{{countStore.address}}</h3>
        <select v-model.number="n">
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
import { ref,reactive } from 'vue';
// 引入useCountStore函数，用于获取count模块的store对象
import { useCountStore } from '@/store/count';
// 使用useCountStore函数，得到count模块的store对象
const countStore = useCountStore();


// 数据
let n = ref(1); // 用户选择的数字

// 方法
function add() {
    // 第一种修改方式
    // timeline修改三次
    // countStore.sum += n.value;
    // countStore.school = '中南大学';
    // countStore.address = '湖南长沙';

    // 第二种修改方式：批量修改
    // timeline修改一次
    // countStore.$patch({
    //     sum: countStore.sum + n.value,
    //     school: '中南大学',
    //     address: '湖南长沙'
    // });

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