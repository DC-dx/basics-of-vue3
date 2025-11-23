import { defineStore } from 'pinia';
export const useCountStore = defineStore('count', {
    // actions 用于存储方法的地方 用于响应组件中的“动作”
    actions: {
        // action存在的意义：可以复用代码  可以封装业务逻辑  可以处理异步操作
        increment(value: number) {
            console.log('increment方法被调用了');
            console.log('value的值为：', value);
            // this是当前的store实例对象
           if(this.sum + value > 10) {
               alert('sum的值不能超过10');
               return;
           }
            this.sum += value;
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school:'CSU',
            address:'Changsha'
        }
    }
});