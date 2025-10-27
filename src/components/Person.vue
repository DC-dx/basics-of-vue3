<template lang="">
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age}},{{nl}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>


<script lang="ts" name="Person" setup>
import { reactive, toRefs, ref, toRef } from 'vue';

let person = reactive({
    name: '张三',
    age: 18
})

let person2 = ref({
    name: '张三',
    age: 18
})

console.log(person);
console.log(person2);

// 所有keyvalue转refImpl对象
let { name, age } = toRefs(person); // 解构赋值不会使person变成响应式对象

// 单个keyvalue转refImpl对象
let nl = toRef(person, 'age');
console.log(nl);
console.log(nl.value);

console.log(toRefs(person));
// name、age变成refImpl对象, 通过.value访问和修改值
console.log(name);
console.log(age);

function changeName() {
    // person.name = '李四';
    name.value += '~';
    console.log(name, person.name); // name和person.name是同步变化的
}

function changeAge() {
    // person.age += 1;
    age.value += 1;
    console.log(age);
}

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

li {
    font-size: 20px;
}
</style>