<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        TIL
      </router-link>
    </div>
    <div class="navigations">
      <!-- 로그인 상태에 따라서 header 표시 분기 -->
      <!-- 1. 로그인 상태-->
      <template v-if="isUserLogin">
        <span class="username">{{ $store.state.username }}</span>
      </template>
      <!-- 2. 로그인 아닌 상태 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  // 값이 변할 때마다 자동으로 업데이트
  computed: {
    isUserLogin() {
      // isLogin: true/false
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
