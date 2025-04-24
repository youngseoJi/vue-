import axios from 'axios';

// axios Api
// axios HTTP 요청 함수는 무조건 Promise 객체를 반환합니다.
// return 필수 : 호출 결과를 반환해야 이후에 then/catch로 연결 가능하다.

// url 공통화 작업 설정 : baseURL 설정
const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

// 회원가입
function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  instance.post('/signup', userData);
}
export { registerUser };
