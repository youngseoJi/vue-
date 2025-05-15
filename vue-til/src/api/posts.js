import { posts } from './index';

// 학습 노트 조작과 관련된 CRUD API 함수파일

// 학습 노트 데이터를 전체 조회 API
function fetchPosts() {
  return posts.get('/');
}

// 학습 노트 데이터 조회 API (ID로 조회)
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습 노트 데이터 생성 API
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습 노트 데이터 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

// 학습 노트 데이터 수정 API
function updatePost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, updatePost };
