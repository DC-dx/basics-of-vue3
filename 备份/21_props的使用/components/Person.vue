<template lang="">
    <div class="person">
       <!-- <h2>{{a}}</h2> -->
       <!-- <h2>{{list}}</h2> -->
        <ul>
            <li v-for="item in list" ::key="item.id">
                {{item.name}}--{{item.age}}
            </li>  
        </ul>
    </div> 
</template>


<script lang="ts" name="Person" setup>

import { defineProps, withDefaults } from 'vue'
import { type Persons } from "@/types"

// // 接收a，同时将props保存起来
// let x = defineProps(['a', 'list'])
// console.log(x.a)

// // 只接收list
// defineProps(['list'])

// 接收list+限制类型
// defineProps<{ list: Persons }>()

// 接收list+限制类型+限制必要性+指定默认值
withDefaults(defineProps<{ list?: Persons }>(),{
    list:()=>[{ id: 'asdasafafaf01', name: '张三', age: 13 }]
})

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