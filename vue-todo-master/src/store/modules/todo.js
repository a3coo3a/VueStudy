import axios from "axios";

//const api_url = process.env.VUE_APP_APIURL;
const todo_url = process.env.VUE_APP_APIURL;

const state = {
  todoItems: [],
};
const getters = {
  getTodoItems(state) {
    return state.todoItems;
  },
};
const actions = {
  loadTodoItems(context) {
    axios
      .get(`${todo_url}`)
      .then((res) => res.data)
      .then((items) => context.commit("setTodoItems", items))
      .catch((err) => console.error(err));
  },
  removeTodo(context, payload) {
    axios
      .delete(`${todo_url}/${payload.id}`)
      .then((res) => res.data)
      .then((items) => context.commit("setTodoItems", items))
      .catch((err) => console.error(err));
  },
  addTodo(context, payload) {
    axios
      .post(`${todo_url}`, payload)
      .then((res) => res.data)
      .then((items) => context.commit("setTodoItems", items))
      .catch((err) => console.error(err));
  },
  clearTodo(context) {
    axios
      .delete(`${todo_url}`)
      .then((res) => res.data)
      .then((items) => context.commit("setTodoItems", items))
      .catch((err) => console.error(err));
  },
  toggleTodo(context, payload) {
    axios
      .put(`${todo_url}/${payload.id}`, payload)
      .then((res) => res.data)
      .then((items) => context.commit("setTodoItems", items))
      .catch((err) => console.error(err));
  },
};
const mutations = {
  setTodoItems(state, items) {
    state.todoItems = items;
  },
  addTodo(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    //JSON.stringify는 object를 json string 으로 변환
    localStorage.setItem(todoItem, JSON.stringify(obj));
    //todoItems 배열에 저장
    state.todoItems.push(obj);
  },
  removeTodo(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  },
  toggleTodo(state, payload) {
    const todoItem = payload.todoItem;
    state.todoItems[payload.index].completed = !todoItem.completed;
    //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  },
  clearTodo(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
/*
const todo = {
  namespace: true,
  state: {
    todoItems: [],
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    },
  },
  actions: {
    loadTodoItems(context) {
      axios
        .get(`${todo_url}`)
        .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((err) => console.error(err));
    },
    removeTodo(context, payload) {
      axios
        .delete(`${todo_url}/${payload.id}`)
        .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((err) => console.error(err));
    },
    addTodo(context, payload) {
      axios
        .post(`${todo_url}`, payload)
        .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((err) => console.error(err));
    },
    clearTodo(context) {
      axios
        .delete(`${api_url}`)
        .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((err) => console.error(err));
    },
    toggleTodo(context, payload) {
      axios
        .put(`${todo_url}/${payload.id}`, payload)
        .then((res) => res.data)
        .then((items) => context.commit("setTodoItems", items))
        .catch((err) => console.error(err));
    },
  },
  mutations: {
    setTodoItems(state, items) {
      state.todoItems = items;
    },
    addTodo(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      //JSON.stringify는 object를 json string 으로 변환
      localStorage.setItem(todoItem, JSON.stringify(obj));
      //todoItems 배열에 저장
      state.todoItems.push(obj);
    },
    removeTodo(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleTodo(state, payload) {
      const todoItem = payload.todoItem;
      state.todoItems[payload.index].completed = !todoItem.completed;
      //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodo(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
};
export default todo;
*/
