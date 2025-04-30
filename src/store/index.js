import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // store안 state : 여러 컴포넌트 간에 공유할 데이터
  state: {
    username: '', // 사용자 이름
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
    // 사용자명
    setUserName(state, username) {
      state.username = username;
    },
  },
});
