import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue'; // 로그인 페이지
// import SignupPage from '@/views/SignupPage.vue'; // 회원가입 페이지

// Vue.use : 플러그인을 실행하기 위해서 초기화 하는 메소드
// Vue.use(VueRouter) : VueRouter 플러그인을 사용하겠다는 의미
Vue.use(VueRouter);

export default new VueRouter({
  //  routes : vue-router에 의해서 제어되는 페이지의 정보를 담고있음
  routes: [
    {
      path: '/login', // url
      // 코드 스플리팅: () => import()
      // 초기 로딩 시 전체 페이지를 불러오지 않고, 해당 경로 접근 시에만 컴포넌트를 비동기로 로드함
      component: () => import('@/views/LoginPage.vue'), //  로긍인    },
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'), // 회원가입
    },
  ],
});
