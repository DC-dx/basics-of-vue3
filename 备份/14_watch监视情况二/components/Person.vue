<template lang="">
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div> 
</template>


<script lang="ts" name="Person" setup>
import { ref, watch } from 'vue';
// 数据
let person = ref({
    name: '张三',
    age: 18
});

// 方法
function changeName() {
    person.value.name += '~';
}
function changeAge() {
    person.value.age += 1;
}
function changePerson() {
    // 地址值发生变化
    person.value = {
        name: '李四',
        age: 20
    };
}

// 监视，情况一：监视ref定义的对象类型数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要设置deep:true
// immediate:true表示立即执行一次回调函数,即在监视开始时就执行一次回调函数
// 大多数情况下是不管旧值的，所以可以省略不写旧值参数
watch(person, (newVal, oldVal) => {
    console.log('person数据被修改了');
    console.log('修改前：', oldVal);
    console.log('修改后：', newVal);
}, { deep: true ,immediate: true});
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>