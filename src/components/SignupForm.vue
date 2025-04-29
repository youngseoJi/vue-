<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
  data() {
    return {
      // form values
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

<style></style>
