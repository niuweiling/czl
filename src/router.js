import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
	{
	  path: "/",
	  name: "index",
	  meta: {
	    title: "有求必应-车主必备"
	  },
	  component: () => import("./views/home/index.vue")
	},
	{
	  path: "/list",
	  name: "list",
	  meta: {
	    title: "有求必应-车主必备"
	  },
	  component: () => import("./views/home/list.vue")
	},
	{
	  path: "/serchlist",
	  name: "serch",
	  meta: {
	    title: "有求必应-车主必备"
	  },
	  component: () => import("./views/home/serchlist.vue")
	},

  ]
});
