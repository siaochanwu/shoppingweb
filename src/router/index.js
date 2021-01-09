import Vue from 'vue'
import VueRouter from 'vue-router'
//官方
// import Home from '../views/Home.vue'
import Login from "@/components/pages/Login"
import Dashboard from "@/components/Dashboard"
import Products from "@/components/pages/Products"


//自訂

Vue.use(VueRouter)//啟用

//定義路徑
const routes = [
  {
    path:'*',//防止隨便改網址
    redirect:'login'
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,//對應元件
  //   meta: { requiresAuth: true }//路油源信息
    
  // },
  {
    path:'/login',
    name: 'Login',
    component:Login,
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,//對應元件
    meta: { requiresAuth: true },//路油源信息
    children:[//巢狀
      {
        path:'products',
        name: 'Products',
        component:Products,
      },
    ],

  },
]

const router = new VueRouter({
  routes
})

export default router //輸出
