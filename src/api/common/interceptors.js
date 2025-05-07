import store from '@/store/index'; // Vuex 스토어 가져오기

export function setInterCeptors(instance) {
  // Add a request interceptor 요청 인터셉터
  instance.interceptors.request.use(
    function(config) {
      // 요청 전 실행되는 부분
      // console.log('Request Interceptor:', config);
      config.headers.Authorization = store.state.token; // 토큰을 헤더에 추가

      console.log('Request Interceptor:', config);
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // 응답 후 처리
      return response;
    },
    function(error) {
      return Promise.reject(error);
    },
  );
  return instance;
}
