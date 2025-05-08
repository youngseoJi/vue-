<!-- 글 발행 폼 -->
<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" action="">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" type="text" rows="5" />
        </div>
        <button type="submt" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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
