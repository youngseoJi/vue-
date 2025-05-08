<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <postListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        />
        <!-- <li v-for="postItem in postItems" :key="postItem._id">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-contents">
            {{ postItem.contents }}
          </div>
          <div class="post-time">
            {{ postItem.createdAt }}
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import postListItem from '@/components/posts/postListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchNoteDatas } from '@/api/index';

export default {
  components: {
    postListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchNoteDatas() {
      this.isLoading = true;
      const { data } = await fetchNoteDatas();
      this.isLoading = false;
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
