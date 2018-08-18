import Vue from 'vue'
import VueRouter from 'vue-router'
import MainComponent from '../components/Main.vue'
import LoginComponent from '../components/Login.vue'
import ChartComponent from '../components/Chart.vue'

Vue.use(VueRouter);


export default new VueRouter({
       mode:'history',
       routes:[
        {
          path:'/chart',
          name:'chart',
          component: ChartComponent
        },
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