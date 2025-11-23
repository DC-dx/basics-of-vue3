import { defineStore } from 'pinia'
import axios from 'axios';
import { nanoid } from 'nanoid';

export const useLoveTalkStore = defineStore('loveTalk', {
    actions: {
        async getLoveTalk() {
            //         发请求。下面这行大的写法是：连续解构赋值+重命名
            // 做容错处理：默认提示，并捕获异常或无数据情况
            try {
                let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
                let obj = {
                    id: nanoid(),
                    title
                }
                // 放到数据前面
                this.loveTalkList.unshift(obj);
            } catch (e) {
                // 请求失败，保留默认提示（可选：根据 e 做额外处理或日志）
                // 放到数据前面
                this.loveTalkList.unshift({ id: nanoid(), title: '获取失败，请稍后重试。' });
            }
        }
    },
    state() {
        return {
            loveTalkList: [
                { id: 'dsafavqf01', title: '你是我的小呀小苹果，怎么爱你都不嫌多。' },
                { id: 'dsafavqf02', title: '你是风儿我是沙，缠缠绵绵到天涯。' },
                { id: 'dsafavqf03', title: '遇见你是我最美丽的意外。' },
                { id: 'dsafavqf04', title: '你是我的心肝宝贝。' }
            ]
        }
    }
});