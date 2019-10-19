import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Regist from './views/Regist.vue'
import Details from './views/Details.vue'
Vue.use(Router)

export default new Router({
  routes: [
     {path:"/",component:Index},
     {path:"/index",component:Index},
     {path:"/login",component:Login},
     {path:"/regist",component:Regist},
     {path:"/details",component:Details},

  ]
})
