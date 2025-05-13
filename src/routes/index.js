import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue'; // 로그인 페이지
// import SignupPage from '@/views/SignupPage.vue'; // 회원가입 페이지

// Vue.use : 플러그인을 실행하기 위해서 초기화 하는 메소드
// Vue.use(VueRouter) : VueRouter 플러그인을 사용하겠다는 의미
Vue.use(VueRouter);

// export default new VueRouter({

const router = new VueRouter({
  // 해시 모드 ":  URL에 # 포함, 브라우저에서만 라우팅함. 서버는 경로 변경을 감지하지 않음 (기본값)
  // history  :history 모드는 해시를 사용하지 않기 때문에 브라우저 주소가 깔끔해지지만,
  // 새로고침 시 서버가 해당 경로(/login 등)를 실제 리소스 요청으로 인식하게 되므로,
  // 서버에서 index.html로 리디렉션하도록 설정이 필요하다.
  mode: 'history',
  //  routes : vue-router에 의해서 제어되는 페이지의 정보를 담고있음
  routes: [
    // 인증 권한이 필요하지 않은 페이지

    {
      //  redirect : 초기 진입 페이지 설정/ 특정 url에 접근하면 설정한 url로 리다이렉트 시킴
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login', // url
      // 코드 스플리팅: () => import()
      // 초기 로딩 시 전체 페이지를 불러오지 않고, 해당 경로 접근 시에만 컴포넌트를 비동기로 로드함
      component: () => import('@/views/LoginPage.vue'), //  로긍인    },
    },
    // 회원가입
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },

    // 인증권한 필요 - 사용자가 로그인 한 상태에서만 접근할 수 있는 페이지

    // 메인 페이지 : 학습 노트 목록 페이지
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      //  meta : 라우터에 대한 메타데이터를 설정할 수 있는 속성
      meta: { auth: true }, // auth : 인증이 필요함을 나타냄
    },
    // 학습 노트 추가 페이지
    {
      path: '/addPost',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    // 학습 노트 수정 페이지
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },

    // 존재하지 않는 경로에 접근하는 경우 404 페이지로 리다이렉트
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'), // 404 페이지
    },
  ],
});

//  라우터 네비게이션 가드
//  beforeEach : 라우터가 변경되기 전에 실행되는 메소드
// (to: 이동할 페이지 경로, from: 현재 페이지 경로, next: 페이지 이동할때 호출하는 메소드)
router.beforeEach((to, from, next) => {
  if (to.meta.auth == true) {
    console.log('인증이 필요한 페이지입니다.');
  }
  next();
});

export default router;
