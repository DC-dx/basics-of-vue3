import { defineStore } from 'pinia'

export const useLoveTalkStore = defineStore('loveTalk', {
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