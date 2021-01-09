import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;//儲存cookie
Vue.use(VueAxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//導航守衛
router.beforeEach((to, from, next) => {
  // 執行環境在router下,不能用this.$http,要改axios
  console.log("to",to,"from",from,"next",next);
  if(to.meta.requiresAuth){
    console.log('需要驗證');
    const api = "https://vue-course-api.hexschool.io/api/user/check";
      const vm =this;
      axios.post(api)
      .then((response)=>{
        console.log(response.data);
        if(response.data.success){
          // vm.$router.push('/')
          next();
        }else{
          next({
            path:'/login',
          })
        }
      });
  }else{
    next();//直接放行
  }
  
})