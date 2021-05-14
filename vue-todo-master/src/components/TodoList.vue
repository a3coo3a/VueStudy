<template>
  <div>
    <!--ul>li*3 -->
    <!--<ul>-->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in getTodoItems" :key="index" class="shadow">
        <i
          class="fas fa-check checkBtn"
          :class="{ checkBtnCompleted: todoItem.completed }"
          @click="toggleTodo(todoItem)"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
    <!--</ul>-->
  </div>
</template>

<script>
//import { mapGetters, mapActions, mapMutations } from "vuex";
import { mapGetters, mapActions } from "vuex";

export default {
  // stroe로 처리 예정
  // props: ["todoItems"],
  // data() {
  //   return {};
  // },
  // life cycle method
  mounted() {
    // actions 호출
    this.$store.dispatch("loadTodoItems");
  },
  computed: {
    ...mapGetters(["getTodoItems"]),
  },
  methods: {
    ...mapActions(["removeTodo"]),
    toggleTodo(todoItem) {
      todoItem.completed = !todoItem.completed;
      this.$store.dispatch("toggleTodo", todoItem);
    },
    //...mapMutations(["toggleTodo"]),
    //...mapMutations(["removeTodo", "toggleTodo"]),
    // removeTodo(todoItem, index) {
    //   //this.$emit("removeTodoEvent", todoItem, index);
    //   //es5
    //   //this.store.commit("removeTodo", { todoItem:todoItem, index:index });
    //   //es6
    //   this.$store.commit("removeTodo", { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   //this.$emit("toggleTodoEvent", todoItem, index);
    //   this.$store.commit("toggleTodo", { todoItem, index });
    // },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
