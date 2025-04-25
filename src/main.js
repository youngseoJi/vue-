import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';

Vue.config.productionTip = false;
Vue.config.devtools = true; // Vue Devtools 작동을 위한 설정
window.Vue = Vue; // 브라우저 콘솔에서 Vue 인식용

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
