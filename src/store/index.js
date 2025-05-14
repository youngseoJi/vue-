import Vue from 'vue';
import Vuex from 'vuex';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  // store안 state : 여러 컴포넌트 간에 공유할 데이터
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  // getters : Vuex의 state를 기반으로, state가 바뀔때마다 자동으로 계산된 값을 반환( Vue의 computed와 비슷)
  // state를 가공하거나 조건 처리할 때 사용
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  // mutations : state 를 변경하는 메소드
  // 함수명(state, payload(전달받은 값){}
  mutations: {
    // 헤더에 필요":  로그인 성공 시 사용자명 저장 or  초기화 하도록 처리
    // 사용자명
    setUserName(state, username) {
      state.username = username;
    },
    // 토큰
    setToken(state, token) {
      state.token = token;
    },
    // 사용자명 초기화
    clearUserName(state) {
      state.username = '';
    },
    // 토큰 초기화
    clearToken(state) {
      state.token = '';
    },
  },
  //actions 속성을 이용한 로그인 기능 구현과 비동기 처리
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit('setToken', data.token);
      commit('setUsername', data.user.setUserName);
      // 쿠키에 저장 : 토큰과 유저네임 저장하여 새로고침시 유지되도록
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      // return 을 하지않더라도 무조건 promise를 반환한다.
      // 하지만 명시적으로  data를  return 해야 호출하는 쪽에서 응답값을 활용할 수 있다.
      return data;
    },
  },
});
