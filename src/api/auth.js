import { instance } from './index';

// 계정에 관련된 API

// 회원가입 API
function registerUser(userData) {
  // axios.post('localhost:8080/signup', userData);
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
