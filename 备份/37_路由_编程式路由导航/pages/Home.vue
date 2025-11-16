<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt=""></img>
    </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// onMounted(() => {
//     setTimeout(() => {
//         // 在此编写一段代码，让路由实现跳转
//         router.push('/news');   // push编程留下历史记录
//     }, 3000);
// });
</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

</style>