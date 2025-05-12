import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 기본 인스턴스 : 인증 토큰이 없는 API 요청에 사용한다.
function createInstance() {
  return axios.create({ baseURL: process.env.VUE_APP_API_URL });
}

// 인증 토큰을 포함한 인스턴스
// url : posts 전용 인스턴스 생성하기 위한 인자
// 액시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}
