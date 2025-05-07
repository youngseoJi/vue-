import axios from 'axios';

import { setInterCeptors } from './common/interceptors';
// axios 초기화 함수
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

// 회원가입 API
function registerUser(userData) {
  // axios.post('localhost:8080/signup', userData);
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습노트 데이터 조회 API
function fetchNoteDatas() {
  return instance.get('Posts');
}

export { registerUser, loginUser, fetchNoteDatas };
