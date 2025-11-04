
// 三种暴露方式

// 1.分别暴露:用于一个文件内暴露多个属性的场景，分别暴露，每一个属性都进行暴露，使用 import {} 命令接收
/*export function add(a:number, b:number){ return a + b }
export const PI = 3.14159

import { add, PI } from '../utils/math'
console.log(add(1,2), PI)*/

// 2.统一暴露：　用于一个文件内暴露多个属性的场景，统一进行暴露，必须使用 import {} 命令接收
/*const a =()=>{
    console.log(999);
} 
const b = 2
const c = 1 
export{a,b,c}

import {a,b,c} from '@/api/api' */

/* 3.默认暴露
一个模块中默认暴露只能使用一次，而分别暴露、统一暴露可以使用多次
　　应用场景：只需要暴露一个属性时引用。
　　使用import 直接引用*/
/*
const a=(data)=>{
    return data+1
}
export default a
 
import a from '@/test/test'*/

// 定义一个接口，用于限制person对象的具体属性
// 分别暴露
export interface PersonInter{
id:string,
name:string,
age:number
}

// 一个自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]