<!-- 글 발행 폼 -->
<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <!-- Form -->
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/index';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        const { data } = await createPost(postData);
        console.log(data);
        this.$router.push('/main');
      } catch (err) {
        console.log(err.response.data.message);
        this.logMessage = err.response.data.message;
      }
    },
  },
};
</script>

<style scope>
.form-wrapper .form {
  padding: 0% 10%;
  width: 100%;
}
.btn {
  color: white;
}
</style>
