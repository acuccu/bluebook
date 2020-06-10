import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receiveAllPosts = payload => ({
    type: RECEIVE_ALL_POSTS,
    payload
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const fetchPosts = (userId) => {
  return ( (dispatch) => {
  PostApiUtil.fetchPosts(userId)
    .then(payload => dispatch(receiveAllPosts(payload)))}
)};

  // export const fetchPost = (postId, userId) => dispatch => (
  //   PostApiUtil.fetchPost(postId, userId)
  //     .then(post => dispatch(receivePost(post)))
  // );

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
  


  
  