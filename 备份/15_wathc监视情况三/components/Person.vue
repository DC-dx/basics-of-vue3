<template lang="">
    <div class="person">
        <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <hr>
        <h2>嵌套对象的值：{{ obj.a.b.c }}</h2>
        <button @click="test">修改obj.a.b.c</button>
    </div> 
</template>


<script lang="ts" name="Person" setup>
import { reactive, watch } from 'vue';
// 数据
let person = reactive({
    name: '张三',
    age: 18
});

let obj = reactive({
    a: {
        b: {
            c: 666
        }
    }
})

// 方法
function changeName() {
    person.name += '~';
}
function changeAge() {
    person.age += 1;
}
function changePerson() {
    // 地址值未发生变化，只是修改了值
    Object.assign(person, {
        name: '李四',
        age: 20
    });
}

function test() {
    obj.a.b.c += 1;
}

// 监视，情况三：监视reactive定义的对象类型数据，reactive定义的数据是响应式的，监视对象内部属性的变化不需要设置deep:true 
// 默认开启深度监视，隐式创建了深层监听
watch(person, (newVal, oldVal) => {
    console.log('person数据被修改了');
    console.log('修改前：', oldVal);
    console.log('修改后：', newVal);
});

watch(obj, (newVal, oldVal) => {
    console.log('obj数据被修改了');
    console.log('修改前：', oldVal);
    console.log('修改后：', newVal);
});

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