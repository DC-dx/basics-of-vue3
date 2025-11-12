<template>
    <ul class="new-list">
        <li>编号：{{ params.id }}</li>
        <li>标题：{{ params.title }}</li>
        <li>内容：{{ params.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const { params } = toRefs(route);
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