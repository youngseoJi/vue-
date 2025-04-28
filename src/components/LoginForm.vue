<template>
  <!-- @submit form 제출 후 새로고침막기 -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="usernaem">id: </label>
      <input id="usernaem" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '../utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },

  methods: {
    // 로그인 : 서버로 로그인 요청
    async submitForm() {
      console.log('로그인');
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        // console.log(data.user.username);
        this.logMessage = `${data.user.username}님 환영합니다.`;
        // this.initForm();
      } catch (error) {
        // 에러 처리
        // console.log('로그인 실패:', error.response.data);
        this.logMessage = error.response.data;
        // this.initForm();
      } finally {
        // try, catch 에서 사옹하는 함수가 중복될 경우 finally 에 작성하면된다.
        this.initForm();
      }
    },
    // 초기화
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
