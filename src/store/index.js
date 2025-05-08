import Vue from 'vue';
import Vuex from 'vuex';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  //actions 속성을 이용한 로그인 기능 구현과 비동기 처리
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      // 쿠키에 저장 : 토큰과 유저네임 저장하여 새로고침시 유지되도록
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      // return 을 하지않더라도 무조건 promise를 반환한다.
      // 하지만 명시적으로  data를  return 해야 호출하는 쪽에서 응답값을 활용할 수 있다.
      return data;
    },
  },
});
