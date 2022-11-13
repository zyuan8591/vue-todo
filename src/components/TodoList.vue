<template>
  <input type="text" v-model.trim="newTodo" class="text-black px-2 focus:outline-0" @keyup.enter="addTodoList" />
  <button @click="addTodoList" class="px-3 bg-white text-black ml-3">Add</button>
  <ul class="list-disc list-inside">
    <li v-for="todo in todoList.slice().reverse()" :key="todo.id">
      {{ todo.todo }}
    </li>
  </ul>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

const store = useStore();

const newTodo = ref('');

const todoList = computed(() => {
  return store.state.todoList;
});

function addTodoList() {
  store.dispatch('addTodoList', { todo: newTodo.value });
  newTodo.value = '';
}
</script>
