<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <ion-icon class="icon ion-md-create" name="create-outline"></ion-icon>
      <ion-icon
        class="icon"
        name="trash-outline"
        @click="deletePostItem"
      ></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deletePostItem() {
      if (confirm('정말 삭제하시겠습니까?')) {
        await deletePost(this.postItem._id);
        // .$emit 헤딩 캄포넌트에서 -> 부모 컴포넌트에 refresh 이벤트를 발생시켜서 데이터를 새로고침 시킨다.
        this.$emit('refresh');
      }
    },
  },
};
</script>

<style></style>
