<template>
  <div class="py-3 px-5 bg-black text-yellow-100 font-mono h-screen">
    <h1 class="text-3xl font-bold underline mb-3">Hello world!</h1>
    <todo-list />
  </div>
</template>
<script setup>
import TodoList from '@/components/TodoList.vue';
console.log(TodoList);
</script>
