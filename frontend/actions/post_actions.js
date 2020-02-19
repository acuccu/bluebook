import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
  });

const receivePost = post => ({
    type: RECEIVE_POST,
    post
  });

const removePost = postId => ({
    type: REMOVE_POST,
    postId
  });

  export const fetchPosts = (userId) => dispatch => (
    PostApiUtil.fetchPosts(userId)
      .then(posts => dispatch(receiveAllPosts(posts)))
  );

  export const fetchPost = (postId, userId) => dispatch => (
    PostApiUtil.fetchPost(postId, userId)
      .then(post => dispatch(receivePost(post)))
  );

  export const createPost = (post, userId) => dispatch => (
    PostApiUtil.createPost(post, userId)
      .then(post => dispatch(receivePost(post)))
  );

  export const updatePost = (post, userId) => dispatch => (
    PostApiUtil.updatePost(post, userId)
      .then(post => dispatch(receivePost(post)))
  );

  export const deletePost = (postId, userId) => dispatch => (
    PostApiUtil.deletePost(postId, userId)
      .then(() => dispatch(removePost(postId)))
  );
  


  
  