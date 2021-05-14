import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import todo from "./modules/todo";
import post from "./modules/post";

// Vue가 Vuex라는 미들웨어를 사용하겠다는 의미
Vue.use(Vuex);
Vue.use(VueAxios, axios);

// const storage = {
//   fetch() {
//     const arr = [];
//     // 로컬스토리지에서 읽은 내용을 arr에 push 해서 반환
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     }
//     return arr;
//   },
// };

//const api_url = "http://localhost:4500/api/todos";
//const api_url = process.env.VUE_APP_APIURL; // 환경변수 사용해서 값을 넣음.

export const store = new Vuex.Store({
  // 외부에서 사용해야 하기때문에 export함.
  // 내부구성요소 : state, getters, mutations, actions
  modules: {
    todo,
    post,
  },
  // 상태 변수 선언
  // state: {
  //   todoItems: [],
  // },
  // // getter methods 선언
  // getters: {
  //   getTodoItems(state) {
  //     return state.todoItems;
  //   },
  // },
  // // setter methods 선언
  // mutations: {
  //   setTodoItems(state, items) {
  //     state.todoItems = items;
  //   },
  //   addTodo(state, todoItem) {
  //     let obj = { completed: false, item: todoItem };
  //     //console.log(obj);
  //     //JSON.stringify는 object를 Json string 으로 변환
  //     localStorage.setItem(obj.item, JSON.stringify(obj)); // 스토리지에 넣고
  //     state.todoItems.push(obj); // 객체를 배열에 저장하고
  //   },
  //   removeTodo(state, payload) {
  //     localStorage.removeItem(payload.todoItem.item);
  //     state.todoItems.splice(payload.index, 1);
  //   },
  //   toggleTodo(state, payload) {
  //     // 객체분해
  //     const { todoItem, index } = payload;
  //     // todoItem.completed = !todoItem.completed;
  //     // 아래와 같이 인덱스 받는 모습으로 수정
  //     state.todoItems[index].completed = !todoItem.completed;
  //     // //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
  //     localStorage.removeItem(todoItem.item);
  //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearTodo(state) {
  //     localStorage.clear();
  //     state.todoItems = [];
  //   },
  // },
  // actions: {
  //   loadTodoItems(context) {
  //     axios
  //       .get(`${api_url}`)
  //       .then((res) => res.data)
  //       .then((items) => {
  //         context.commit("setTodoItems", items);
  //       })
  //       .catch((err) => console.log(err));
  //   },
  //   removeTodo(context, payload) {
  //     axios
  //       .delete(`${api_url}/${payload.id}`)
  //       .then((res) => res.data)
  //       .then((items) => {
  //         context.commit("setTodoItems", items);
  //       })
  //       .catch((err) => console.log(err));
  //   },
  //   addTodo(context, payload) {
  //     axios
  //       .post(`${api_url}`, payload)
  //       .then((res) => res.data)
  //       .then((items) => {
  //         context.commit("setTodoItems", items);
  //       })
  //       .catch((err) => console.log(err));
  //   },
  //   toggleTodo(context, payload) {
  //     axios
  //       .put(`${api_url}/${payload.id}`, payload)
  //       .then((res) => res.data)
  //       .then((items) => {
  //         context.commit("setTodoItems", items);
  //       })
  //       .catch((err) => console.log(err));
  //   },
  //   clearTodo(context) {
  //     axios
  //       .delete(`${api_url}`)
  //       .then((res) => res.data)
  //       .then((items) => {
  //         context.commit("setTodoItems", items);
  //       })
  //       .catch((err) => console.log(err));
  //   },
  // },
});
