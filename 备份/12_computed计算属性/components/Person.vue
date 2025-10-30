<template lang="">
    <div class="person">
        <!-- :value="firstName" 通过 v-bind:value属性实现的是单向绑定 只能由数据->页面 -->
       <!-- 姓：<input type="text" value="firstName"><br> -->
       姓：<input type="text" v-model="firstName"><br>
       名：<input type="text" v-model="lastName"><br>
       <!-- 全名：<span>{{firstName}}-{{lastName}}</span> <br> -->
       全名：<span>{{fullName}}</span> <br>
       全名：<span>{{fullName}}</span> <br>
       全名：<span>{{fullName2()}}</span> <br>
       全名：<span>{{fullName2()}}</span> <br>
       全名：<span>{{fullName2()}}</span> <br>
       <button @click="changeFullName">修改全名</button>
    </div>
</template>


<script lang="ts" name="Person" setup>
import { ref, computed } from 'vue';
let firstName = ref('zhang');
let lastName = ref('san');

// // 这样定义的fullName是一个计算属性，且是只读的
// let fullName = computed(() => {
//     console.log('计算fullName');    // 没变的话不会再重新计算 有缓存
//     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
// });

// 这样定义的fullName是一个计算属性，可读可写
let fullName = computed( {
    get(){
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
    },
    set(val){
        // 解释const和let的区别: const是常量，不能被重新赋值；let是变量，可以被重新赋值
        const[str1, str2] = val.split('-');
        firstName.value = str1 ?? '';
        lastName.value = str2 ?? '';
        console.log('set fullName');
    }
});

function fullName2() {
    console.log('计算fullName2');    // 会再重新计算 无缓存
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
};
function changeFullName() {
    // fullName的类型是ComputedRefImpl 不能直接赋值
    fullName.value='li-si'  // 计算属性是只读的 不能被修改
}

</script>

<style scoped></style>