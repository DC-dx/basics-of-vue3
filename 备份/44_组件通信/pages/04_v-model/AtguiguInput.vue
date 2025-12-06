<template>
 <!-- <input type="text" 
   :value="modelValue"  -->
  <!-- @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"> -->
    <input type="text" 
   :value="name"  
  @input="emit('update:name', (<HTMLInputElement>$event.target).value)">
    <br/>
    <br/>
       <input type="text" 
   :value="pwd"  
  @input="emit('update:pwd', (<HTMLInputElement>$event.target).value)">


</template>

<script setup lang="ts" name="AtguiguInput">
// defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])
defineProps(['name', 'pwd'])
const emit = defineEmits(['update:name', 'update:pwd'])
</script>

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>