<template lang="">
    <div class="person">
        <h2>汽车品牌：{{ car.brand }},价值：{{ car.price }}万</h2>
        <button @click="changeBrand">修改汽车品牌</button>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeCar">修改汽车</button>
        <hr>
        <h2>当前求和为：{{ sum }}万</h2>
        <button @click="changeSum">增加1万</button>

        <!-- <hr>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFistGame">修改第一个游戏的名字</button> -->
        <!-- <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ address }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button> -->
        <!-- <hr>
        <h2>测试：{{a}}</h2>
        <h2>测试：{{c}}</h2>
        <button @click="b">调用方法b</button> -->
    </div>
</template>
<!-- <script lang="ts">
export default {
    name: "Person"
}
</script> -->

<script lang="ts" name="Person" setup>

/* - 使用原则：
** > 1. 若需要一个基本类型的响应式数据，必须使用`ref`。
** > 2. 若需要一个响应式对象，层级不深，`ref`、`reactive`都可以。
** > 3. 若需要一个响应式对象，且层级较深，推荐使用`reactive`。*/

// import { reactive } from 'vue';
import { reactive, ref } from 'vue';
// 数据
let car = ref({ brand: '奔驰', price: 100 });
// let car = reactive({ brand: '奔驰', price: 100 });
let sum = ref(0);
// let games = ref([
//     { id: 'asdfsdgfggg01', name: '王者荣耀' },
//     { id: 'asdfsdgfggg02', name: '原神' },
//     { id: 'asdfsdgfggg03', name: '三国志' },
// ]);

let obj = reactive({ x: 100 });

// ref的value就是reactive的对象
console.log(car);
console.log(obj);

// 方法
function changeBrand() {
    car.value.brand = '奥迪';
}

function changePrice() {
    car.value.price += 10;
}
function changeCar() {
    // car = { brand: '宝马', price: 80 };  // 这样写会报错，因为car是reactive的对象，不能整体替换
    // car = reactive ({ brand: '宝马', price: 80 }); // 这样写也会报错，因为car是reactive的对象，不能整体替换

    // // 下面这个写法可以更新car对象的属性值
    // Object.assign(car, { brand: '宝马', price: 80 });

    car.value = { brand: '宝马', price: 80 }; // 这样写是可以的，因为car是ref对象，ref对象可以整体替换
}

function changeSum() {
    sum.value++;
    // sum = ref(9);   // sum的地址被改变了，视图不会更新
}

// function changeFistGame() {
//     games.value[0].name = '和平精英';
//     console.log(games.value);
// }

</script>

<!-- setup语法糖 -->
<!-- <script  lang="ts" name="Person123" setup>
    import { ref } from 'vue';
    // 数据，原来是写在data函数中，此时的name、age、tel都不是响应式的数据
    let name =ref( '张三');
    let age = ref(18);
    let tel = '13800138000';
    let address = "广东省深圳市";
 
    console.log(name);
    console.log(age);
    console.log(tel);
    console.log(address);

    // 方法
    function changeName() {
        name.value = '李四';  //注意：这里修改name变量，并不会更新到视图中
        console.log(name.value);  // name变量的值已经被修改，但name不是响应式的，视图不会更新
    }
    function changeAge() {
        age.value += 1;   //注意：这里修改age变量，并不会更新到视图中
        console.log(age.value);  // age变量的值已经被修改，但age不是响应式的，视图不会更新
    }
    function showTel() {
        alert(`联系方式：${tel}`);
    }
</script> -->

<!-- <script lang="ts">
export default {
    name: "Person",
    beforeCreate() {
        console.log('@@@beforeCreate生命周期被调用了');
    },
    // data() {
    //     return {
    //         a: 100,
    //         c: this.name,
    //         d: 900
    //     }
    // },
    // methods: {
    //     b() {
    //         console.log('@@@方法b被调用了');
    //     }
    // },
    // setup执行的最早
    setup() {
        // console.log('@@',this); // setup函数中的this是undefined,vue3中已经开始摒弃对this的使用

        console.log('@@@setup函数被调用了');
        // 这里可以使用Composition API进行逻辑编写
        // 数据，原来是写在data函数中，此时的name、age、tel都不是响应式的数据
        let name = '张三';
        let age = 18;
        let tel = '13800138000';
        // let x = d;  // 报错：Cannot find name 'd'.  setup函数中无法访问data中的数据

        // 方法
        function changeName() {
            name = '李四';  //注意：这里修改name变量，并不会更新到视图中
            console.log(name);  // name变量的值已经被修改，但name不是响应式的，视图不会更新
        }
        function changeAge() {
            age += 1;   //注意：这里修改age变量，并不会更新到视图中
            console.log(age);  // age变量的值已经被修改，但age不是响应式的，视图不会更新
        }
        function showTel() {
            alert(`联系方式：${tel}`);
        }

        return { name, age, changeName, changeAge, showTel };
        // return () => '哈哈'// 注意：直接渲染到页面上
    }
}
</script> -->
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

li {
    font-size: 20px;
}
</style>