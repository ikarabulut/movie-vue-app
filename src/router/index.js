import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movieindex from "../views/Movieindex.vue";
import NewMovie from "../views/NewMovie.vue";
import MovieShow from "../views/MovieShow.vue";
import MovieEdit from "../views/MovieEdit.vue";

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
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/movieindex",
    name: "Movieindex",
    component: Movieindex,
  },
  {
    path: "/newmovie",
    name: "NewMovie",
    component: NewMovie,
  },
  {
    path: "/movieshow/:id",
    name: "MovieShow",
    component: MovieShow,
  },
  {
    path: "/movies/:id/edit",
    name: "MovieEdit",
    component: MovieEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
