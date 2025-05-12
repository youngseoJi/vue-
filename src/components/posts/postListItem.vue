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
      await deletePost(this.postItem._id);
      console.log('deleted');
    },
  },
};
</script>

<style></style>
