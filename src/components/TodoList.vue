<template>
  <input type="text" v-model.trim="newTodo" class="text-black px-2 focus:outline-0" @keyup.enter="addTodoList" />
  <button @click="addTodoList" class="px-3 bg-white text-black ml-3">Add</button>
  <ul class="list-disc list-inside my-3">
    <li v-for="todo in todoList.slice().reverse()" :key="todo.id" class="mb-3">
      <button class="border px-2 mr-3" @click="delTodoList(todo.id)">刪除</button>

      <button v-if="todo.isEdit" class="border px-2 mr-3" @click="saveTodoList(todo.id, todo.todo)">儲存</button>
      <button v-else class="border px-2 mr-3" @click="editTodoList(todo.id)">編輯</button>
      <input v-if="todo.isEdit" class="pl-2 text-black focus:outline-0" type="text" v-model="todo.todo" @keyup.enter="saveTodoList(todo.id, todo.todo)" />
      <span v-else class="pl-2">{{ todo.todo }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newTodo: '',
    };
  },
  computed: {
    todoList: function () {
      return this.$store.state.todoList;
    },
  },
  methods: {
    addTodoList: function () {
      this.$store.dispatch('addTodoList', { todo: this.newTodo });
      this.newTodo = '';
    },
    delTodoList: function (id) {
      this.$store.dispatch('delTodoList', { id });
    },
    editTodoList: function (id) {
      this.$store.dispatch('editTodoList', { id });
    },
    saveTodoList: function (id, todo) {
      this.$store.dispatch('saveTodoList', { id, todo });
    },
  },
  mounted() {
    this.$store.dispatch('getTodoList');
  },
};
</script>
