<!-- 글 수정 폼 -->
<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
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

        <!-- :class="`btn ${!isTitleValid || !isContentsValid ? 'disabled' : ''}`" -->
        <button
          type="submit"
          :disabled="!isTitleValid || !isContentsValid"
          :class="['btn', { disabled: !isTitleValid || !isContentsValid }]"
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
import { fetchPost } from '@/api/posts';

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
  methods: { async submitForm() {} },
  async created() {
    // 학습 노트 데이터 조회
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    // console.log(data);
    this.title = data.title;
    this.contents = data.contents;
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
