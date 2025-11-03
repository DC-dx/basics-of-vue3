<template lang="">
    <div class="person">
       ???
    </div> 
</template>


<script lang="ts" name="Person" setup>
import { type PersonInter, type Persons } from '@/types'

// let person: PersonInter = { id: 'iddasrda01', name: '张三', age: 60 }

// let personList: Array<PersonInter> = [
//     { id: 'iddasrda01', name: '张三', age: 60 },
//     { id: 'iddasrda02', name: '李四', age: 20 },
//     { id: 'iddasrda03', name: '王五', age: 30 }
// ]

let persons: Persons = [
    { id: 'iddasrda01', name: '张三', age: 60 },
    { id: 'iddasrda02', name: '李四', age: 20 },
    { id: 'iddasrda03', name: '王五', age: 30 }
]

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