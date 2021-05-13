<template>
  <div class="inputBox shadow">
    <input
      type="text"
      ref="newTodoItem"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodo"
    />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <!-- <button @click="addTodo">add</button> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    };
  },
  mounted() {
    this.$refs.newTodoItem.focus();
  },
  methods: {
    // addTodo: function(){ 을 아래와 같이 변경 가능 es6문법으로써 가능
    addTodo() {
      if (this.newTodoItem !== "") {
        // Event 발생
        // this.$emit("addTodoEvent", this.newTodoItem);
        // stroe 생성 후 mutations에 있는 addTodo() 호출
        this.$store.commit("addTodo", this.newTodoItem);
        this.clearInput();
        //     var value = this.newTodoItem && this.newTodoItem.trim();
        //     localStorage.setItem(value,value);
        //     this.clearInput();
      }
    },
    clearInput() {
      //addTodo() 함수에 있었지만 clearInput()함수로 이동
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 15px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
