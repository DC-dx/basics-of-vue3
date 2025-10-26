<template lang="">
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <hr>
        <h2>测试：{{a}}</h2>
        <h2>测试：{{c}}</h2>
        <button @click="b">调用方法b</button>
    </div>
</template>
<script lang="ts">
export default {
    name: "Person",
    beforeCreate() {
        console.log('@@@beforeCreate生命周期被调用了');
    },
    data() {
        return {
            a: 100,
            c: this.name,
            d: 900
        }
    },
    methods: {
        b() {
            console.log('@@@方法b被调用了');
        }
    },
    // setup执行的最早
    setup() {
        // console.log('@@',this); // setup函数中的this是undefined,vue3中已经开始摒弃对this的使用

        console.log('@@@setup函数被调用了');
        // 这里可以使用Composition API进行逻辑编写
        // 数据，原来是写在data函数中，此时的name、age、tel都不是响应式的数据
        let name = '张三';
        let age = 18;
        let tel = '13800138000';
        // let x = d;  // 报错：Cannot find name 'd'.  setup函数中无法访问data中的数据

        // 方法
        function changeName() {
            name = '李四';  //注意：这里修改name变量，并不会更新到视图中
            console.log(name);  // name变量的值已经被修改，但name不是响应式的，视图不会更新
        }
        function changeAge() {
            age += 1;   //注意：这里修改age变量，并不会更新到视图中
            console.log(age);  // age变量的值已经被修改，但age不是响应式的，视图不会更新
        }
        function showTel() {
            alert(`联系方式：${tel}`);
        }

        return { name, age, changeName, changeAge, showTel };
        // return () => '哈哈'// 注意：直接渲染到页面上
    }
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
</style>