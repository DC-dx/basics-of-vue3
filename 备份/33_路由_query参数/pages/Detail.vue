<template>
    <ul class="new-list">
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.title }}</li>
        <li>内容：{{ query.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
// hooks
import { toRefs } from 'vue';
import { useRoute } from 'vue-router'
let route = useRoute()
let { query } = toRefs(route);  //为了解构后的属性也是响应式
console.log("@", route)
</script>

<style scoped>
.new-list {
    list-style: none;
    padding-left: 20px;
}

.new-list>li {
    line-height: 30px;
}
</style>