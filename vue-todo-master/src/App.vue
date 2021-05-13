<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    //es5문법
    // 'TodoHeader': TodoHeader,
    // 'TodoInput': TodoInput,
    // 'TodoList': TodoList,
    // 'TodoFooter': TodoFooter
    //es6문법 : 왼쪽 오른쪽 같을 경우 생략 가능
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  // methods: {
  // store로 옮김.....
  // addTodo(todoItem) {
  //   let obj = { completed: false, item: todoItem };
  //   //console.log(obj);
  //   //JSON.stringify는 object를 Json string 으로 변환
  //   localStorage.setItem(obj.item, JSON.stringify(obj)); // 스토리지에 넣고
  //   this.todoItems.push(obj); // 객체를 배열에 저장하고
  // },
  // removeTodo(todoItem, index) {
  //   localStorage.removeItem(todoItem.item);
  //   this.todoItems.splice(index, 1);
  // },
  // toggleTodo(todoItem, index) {
  //   // todoItem.completed = !todoItem.completed;
  //   // 아래와 같이 인덱스 받는 모습으로 수정
  //   this.todoItems[index].completed = !todoItem.completed;
  //   // //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
  //   localStorage.removeItem(todoItem.item);
  //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  // },
  // clearTodo() {
  //   localStorage.clear();
  //   this.todoItems = [];
  // },
  //},
  /* life cycle method */
  // store로 옮김......
  // created() {
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         //console.log(typeof localStorage.getItem(localStorage.key(i)));
  //         //console.log( JSON.parse(localStorage.getItem(localStorage.key(i))) );
  //         //JSON.parse()는 json string을 object로 변환
  //         const todoObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //         this.todoItems.push(todoObj);
  //       }
  //     }
  //   }
  // },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
