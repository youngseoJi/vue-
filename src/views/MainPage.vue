<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <li v-for="postItem in postItems" :key="postItem._id">
          {{ postItem.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchNoteDatas } from '@/api/index';
export default {
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchNoteDatas() {
      const { data } = await fetchNoteDatas();
      this.postItems = data.posts;
    },
  },
  // 컴포넌트 생성 시점에 실행
  created() {
    this.fetchNoteDatas();
  },
};
</script>

<style></style>
