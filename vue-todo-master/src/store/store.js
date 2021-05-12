import Vue from "vue";
import Vuex from "vuex";

// Vue가 Vuex라는 미들웨어를 사용하겠다는 의미
Vue.use(Vuex);

export const store = new Vuex.Store({
  // 외부에서 사용해야 하기때문에 export함.
  // 내부구성요소 : state, getters, mutations, actions
});
