import Vue from 'vue';
import Vuex from 'vuex';
import Chart from './chart/index.js'


Vue.use(Vuex);


export const store = new Vuex.Store({
    modules:{
        Chart   
    },
    state:{
      locationInfo:''
    },
    getters:{
      getLocationInfo(state){
          return state.locationInfo;
      }
    },
    mutations:{
     setLocationInfo(state, payload){
         state.locationInfo = payload;
     }
  }
});