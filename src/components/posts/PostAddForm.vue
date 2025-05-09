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
          <p v-if="!isTitleValid" class="validation-text warning">
            contents must be than 20 (20자 이하)
          </p>
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            contents must be than 200 (200자 이하)
          </p>
        </div>
        <button
          type="submit"
          :class="['btn', { disabled: !isTitleValid || !isContentsValid }]"
          :disabled="!isTitleValid || !isContentsValid"
        >
          Create
        </button>
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
  computed: {
    // 글 유효성 검사 : 200자 이하인경우
    isContentsValid() {
      return this.contents.length <= 200;
    }, // 글 제목 20자 이하
    isTitleValid() {
      return this.title.length <= 20;
    },
  },
  methods: {
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        await createPost(postData); // console.log(data);
        this.$router.push('/main');
      } catch (err) {
        // console.log(err.response.data.message);
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
