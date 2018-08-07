import Vue from 'vue'
import VueRouter from 'vue-router'
import MainComponent from '../components/Main.vue'
import LoginComponent from '../components/Login.vue'

Vue.use(VueRouter);


export default new VueRouter({
       mode:'history',
       routes:[
        {
          path:'/main',
          name:'main',
          component: MainComponent
        },
        {
          path:'/',
          name:'login',
          component: LoginComponent
        }
    ]
})