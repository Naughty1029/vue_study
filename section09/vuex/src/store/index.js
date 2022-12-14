import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//初期値
    count:0,
    users:[
      {id:1,name:"大谷",isVisible:true},
      {id:2,name:"ダルビッシュ",isVisible:true},
      {id:3,name:"錦織",isVisible:false},
    ]
  },
  getters: {
    visibleUsers( state ) {
      return state.users.filter (user => user.isVisible === true)
    }
  },
  mutations: {
    increment( state ){
      state.count++;
    },
    addCount( state , payload){
      state.count += payload.value
    }
  },
  actions: {//非同期
    incrementAction({commit}){
      commit("increment");
    },
    addCountAction({commit},payload){
      commit("addCount",payload);
    }
  },
  modules: {
    auth
  }
})
