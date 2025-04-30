import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue'; // 로그인 페이지
// import SignupPage from '@/views/SignupPage.vue'; // 회원가입 페이지

// Vue.use : 플러그인을 실행하기 위해서 초기화 하는 메소드
// Vue.use(VueRouter) : VueRouter 플러그인을 사용하겠다는 의미
Vue.use(VueRouter);

export default new VueRouter({
<<<<<<< HEAD
  mode: 'history',
  routes: [
    {
=======
  // 해시 모드 ":  URL에 # 포함, 브라우저에서만 라우팅함. 서버는 경로 변경을 감지하지 않음 (기본값)
  // history  :history 모드는 해시를 사용하지 않기 때문에 브라우저 주소가 깔끔해지지만,
  // 새로고침 시 서버가 해당 경로(/login 등)를 실제 리소스 요청으로 인식하게 되므로,
  // 서버에서 index.html로 리디렉션하도록 설정이 필요하다.
  mode: 'history',
  //  routes : vue-router에 의해서 제어되는 페이지의 정보를 담고있음
  routes: [
    {
      //  redirect : 초기 진입 페이지 설정/ 특정 url에 접근하면 설정한 url로 리다이렉트 시킴
>>>>>>> main
      path: '/',
      redirect: '/login',
    },
    {
<<<<<<< HEAD
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
=======
      path: '/login', // url
      // 코드 스플리팅: () => import()
      // 초기 로딩 시 전체 페이지를 불러오지 않고, 해당 경로 접근 시에만 컴포넌트를 비동기로 로드함
      component: () => import('@/views/LoginPage.vue'), //  로긍인    },
    },
    // 회원가입
>>>>>>> main
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
<<<<<<< HEAD
=======
    // 메인 페이지
>>>>>>> main
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
<<<<<<< HEAD
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
=======
    // 존재하지 않는 경로에 접근하는 경우 404 페이지로 리다이렉트
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'), // 404 페이지
>>>>>>> main
    },
  ],
});
