import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    todoList: [
      { id: 1, todo: 'learn vue' },
      { id: 2, todo: 'learn vuex' },
      { id: 3, todo: 'learn vue-router' },
    ],
    todoToday: [],
  },
  getters: {},
  mutations: {
    addTodoList(state, { todo }) {
      if (!todo) return;
      state.todoList.push({ id: uuidv4(), todo });
    },
    saveToLocal(state) {
      localStorage.setItem('todoList', state.todoList);
      localStorage.setItem('todoList', state.todoToday);
    },
  },
  actions: {
    addTodoList({ commit }, payload) {
      commit('addTodoList', payload);
      // commit('saveToLocal');
    },
  },
  modules: {},
});
