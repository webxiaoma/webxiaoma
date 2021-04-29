import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin:false, // 是否登录
    logining:false, // 正在登录中
    englishObj:{ // 英语
      showWord:true,
      showSoundmark:true,
      showMeaning:true,
    }
  },
  modules: {},
  actions: {
    changeLogin({commit},bol){
      commit("LOGIN_STATE",bol)
    },
    isLogin({commit},bol){
      commit("IS_LOGIN",bol)
    },
    changeEnglish({commit},obj){
      localStorage.WEBXIAOMA_ENGLISH = JSON.stringify(obj)
      commit("CHANGE_ENGLISH",obj)
    }
  },
  mutations: {
    LOGIN_STATE(state, val) {
      state.logining = val;
    },
    IS_LOGIN(state, val){
      state.isLogin = val;
    },
    CHANGE_ENGLISH(state, obj){
      state.englishObj = Object.assign({},state.englishObj,obj);
    }
  },
  strict: false,
});
