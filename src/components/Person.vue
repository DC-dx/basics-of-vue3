<template lang="">
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>
<script lang="ts">
export default {
    name: "Person",
    data() {
        return {
            name: "John Doe",
            age: 30,
            tel: "123-456-7890"
        }
    },
    methods: {
        showTel() {
            // 为什么要加this？因为tel是data中的属性,需要通过this来访问,否则会报错,提示找不到tel
            alert(`联系方式：${this.tel}`);
        },
        changeName() {
            this.name = "Jane Smith";
        },
        changeAge() {
            this.age += 1;
        }
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