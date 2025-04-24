import axios from 'axios';

// axios Api

// 회원가입
function registerUser(userData) {
  const url = 'http://localhost:3000/signup';

  // axios HTTP 요청 함수는 무조건 Promise 객체를 반환합니다.
  // return 필수 : 호출 결과를 반환해야 이후에 then/catch로 연결 가능하다.

  return axios.post(url, userData);
}
export { registerUser };
