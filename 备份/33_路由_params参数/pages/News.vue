<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- <a href="#">{{news.title}}</a> -->
                <!-- query传参 -->
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">
                    {{ news.title }}</RouterLink> -->
                <!-- 第二种写法 -->
                <RouterLink :to="{
                    // 必须要用单引号
                    name:'xiangqing',
                    // path: '/news/detail',
                    query: {
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }
                }">
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { type News } from '@/types';
import { RouterView } from 'vue-router';

const newsList: News = reactive([
    { id: "dsafafgsag01", title: '很好的抗癌食物', content: "西蓝花" },
    { id: "dsafafgsag02", title: '如何一夜暴富', content: "学IT" },
    { id: "dsafafgsag03", title: '震惊，万万没想到', content: "明天才周三" },
    { id: "dsafafgsag04", title: '好消息！', content: "快过年了" },
])
</script>

<style scoped>
/*新闻 */
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news li::marker {
    color: #64967E;
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>