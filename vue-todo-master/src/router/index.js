import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts.vue";
import PostNew from "../views/PostNew.vue";
import PostDetail from "../views/PostDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 사용자가 링크를 클릭해서 요청 할때만(방문했을때만) import 진행
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/posts",
    component: Posts,
    children: [
      { path: "new", component: PostNew },
      { path: ":id", component: PostDetail, name: "post" }, // 해당 id로 특정글하나를 가져오기 위해
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
