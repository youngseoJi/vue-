import axios from 'axios';

import { setInterCeptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL, // 모든 요청의 기본 URL로 환경변수 값 사용
    // 정적 셋팅 : 로그인 전에는 토큰이 없기 때문에  미리 설정하면 빈 값 저장
    // headers: {
    //   Authorization: store.state.token, // 토큰을 헤더에 추가
    // },
  });

  // Authorization 헤더는 인터셉터에서 설정함
  return setInterCeptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
  // axios.post('localhost:8080/signup', userData);
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
