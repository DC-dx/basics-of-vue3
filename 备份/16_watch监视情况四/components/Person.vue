<template lang="">
    <div class="person">
        <h1>情况四：监视【reactive】定义的【对象类型】数据的某个属性</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>
    </div> 
</template>


<script lang="ts" name="Person" setup>
import { reactive, watch } from 'vue';

// 数据
let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
});

// 方法
function changeName() {
    person.name += '~';
}
function changeAge() {
    person.age += 1;
}
function changeC1() {
    person.car.c1 += 'X';
}
function changeC2() {
    person.car.c2 += 'X';
}
function changeCar() {
    person.car = {
        c1: '雅迪',
        c2: '爱玛'
    };
}

// 监视，情况四：监视reactive定义的对象类型数据的某个属性，直接传入一个getter函数即可
watch(() => person.name, (newVal, oldVal) => {
    console.log('person数据被修改了');
    console.log('修改前：', oldVal);
    console.log('修改后：', newVal);
});

// 监视person.car属性 当car地址值变化后，就监视不到car内部属性的变化了
// watch(person.car, (newVal, oldVal) => {
//     console.log('person.car数据被修改了');
//     console.log('修改前：', oldVal);
//     console.log('修改后：', newVal);
// });

// 能监视到car整体的变化，即地址变化，但是监视不到car内部属性的变化,要加上deep:true才能监视到car内部属性的变化
watch(() => person.car, (newVal, oldVal) => {
    console.log('person.car数据被修改了');
    console.log('修改前：', oldVal);
    console.log('修改后：', newVal);
}, { deep: true });

watch(() => person, (newVal, oldVal) => {
    console.log('person数据被修改了');
    console.log('修改前：', oldVal);
    console.log('修改后：', newVal);
}, { deep: true });

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