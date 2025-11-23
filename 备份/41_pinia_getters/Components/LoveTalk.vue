<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul >
            <li v-for="talk in loveTalkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { storeToRefs } from 'pinia';
import { useLoveTalkStore } from '@/store/loveTalk';
const loveTalkStore = useLoveTalkStore();
const { loveTalkList } = storeToRefs(loveTalkStore);

async function getLoveTalk() {
    await loveTalkStore.getLoveTalk();
}
</script>

<style scoped>
.talk {
    background-color: yellowgreen;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>