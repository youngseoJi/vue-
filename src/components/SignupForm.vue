<template>
  <!-- @submit form 제출 후 새로고침막기 -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input
        :class="{ inputLine: !isUserNameValid }"
        id="username"
        type="text"
        v-model="username"
      />
    </div>
    <div>
      <label for="password">pw: </label>
      <input
        :class="{ inputLine: !password }"
        id="password"
        type="text"
        v-model="password"
      />
    </div>
    <div>
      <label for="nickoname">nickoname: </label>
      <input id="nickoname" type="text" v-model="nickname" />
    </div>
    <button v-bind:disabled="!isUserNameValid || !password" type="submit">
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '../utils/validation';
export default {
  data() {
    return {
      // form actiona
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      console.log('Form submitted!');
      const userData = {
        // v-model으로 사용자 입력값을 저장함
        //this : 현재 vue 인스턴스의 data 속성에 접근
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };

      // 인자로 userData 서버로 전송하여 회원가입 요청히여 응답 받기
      // 구조분해 : response에서 data를 추출
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username}님 환영합니다.`;
      console.log(this.logMessage);
      this.initForm();
    },
    // 초기화 메서드 : 회원가입 후 값
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
      // log
    },
  },
};
</script>

<style>
.inputLine {
  border: 1px solid red;
  background-color: #f8d7da;
}
</style>
