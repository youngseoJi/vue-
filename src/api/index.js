import axios from 'axios';

// axios Api
// axios HTTP 요청 함수는 무조건 Promise 객체를 반환합니다.
// return 필수 : 호출 결과를 반환해야 이후에 then/catch로 연결 가능하다.

// API  공통화 작업 설정 : axios.create()
const instance = axios.create({
  // baseURL: 'http://localhost:3000', // 공통 URL
  baseURL: process.env.VUE_APP_API_URL, // 공통 URL
});

// 회원가입
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
