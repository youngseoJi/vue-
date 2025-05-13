import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index'; // Vuex 스토어
// import { formatData } from '@/utils/filters';

// 전역 필터 등록 vue2 방식
// Vue.filter('formatData', formatData); // 날짜 포맷 필터 등록

Vue.config.productionTip = false;
Vue.config.devtools = true; // Vue Devtools 작동을 위한 설정
window.Vue = Vue; // 브라우저 콘솔에서 Vue 인식용

new Vue({
  render: h => h(App),
  router, // Vue Router 사용
  store, // Vuex 스토어 사용
}).$mount('#app');
