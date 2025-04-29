<template>
  <header>
<<<<<<< HEAD
    <div>
      <router-link to="/" class="logo">
        TIL
      </router-link>
    </div>
    <div class="navigations">
      <router-link to="/login">로그인</router-link>
      <router-link to="/signup">회원가입</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>
=======
    <router-link to="/login">로그인</router-link>
    <router-link to="/signup">회원가입</router-link>
  </header>
</template>

<script></script>
>>>>>>> db4cc318002da9694170b4b93e3e94ef895b03b2

<style scoped>
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
