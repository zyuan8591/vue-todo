import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    todoList: [],
    todoToday: [],
  },
  getters: {},
  mutations: {
    addTodoList(state, { todo }) {
      if (!todo) return;
      state.todoList.push({ id: uuidv4(), todo, isEdit: false });
    },
    getTodoList(state) {
      state.todoList = JSON.parse(localStorage.getItem('todoList'));
      state.todoToday = JSON.parse(localStorage.getItem('todoToday'));
    },
    delTodoList(state, { id }) {
      let newTodo = state.todoList.filter((todo) => todo.id !== id);
      state.todoList = newTodo;
    },
    editTodoList(state, { id }) {
      let newTodo = state.todoList.map((todo) => {
        if (todo.id === id) return { ...todo, isEdit: true };
        return todo;
      });
      state.todoList = newTodo;
    },
    saveTodoList(state, { id, todo }) {
      let newTodo = state.todoList.map((t) => {
        if (t.id === id) return { ...t, todo, isEdit: false };
        return t;
      });
      state.todoList = newTodo;
    },
    saveToLocal(state) {
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
      localStorage.setItem('todoToday', JSON.stringify(state.todoToday));
    },
  },
  actions: {
    addTodoList({ commit }, payload) {
      commit('addTodoList', payload);
      commit('saveToLocal');
    },
    getTodoList({ commit }) {
      commit('getTodoList');
    },
    delTodoList({ commit }, payload) {
      commit('delTodoList', payload);
      commit('saveToLocal');
    },
    editTodoList({ commit }, payload) {
      commit('editTodoList', payload);
    },
    saveTodoList({ commit }, payload) {
      commit('saveTodoList', payload);
      commit('saveToLocal');
    },
  },
  modules: {},
});
