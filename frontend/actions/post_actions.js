import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


export const receiveAllPosts = payload => ({
    type: RECEIVE_ALL_POSTS,
    payload
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const fetchPosts = (userId) => {
  return ( (dispatch) => {
  ApiUtil.fetchPosts(userId)
    .then(payload => dispatch(receiveAllPosts(payload)))}
)};

  // export const fetchPost = (postId, userId) => dispatch => (
  //   PostApiUtil.fetchPost(postId, userId)
  //     .then(post => dispatch(receivePost(post)))
  // );

  export const createPost = (post, userId) => dispatch => (
    ApiUtil.createPost(post, userId)
      .then(post => dispatch(receivePost(post)))
  );

  export const updatePost = (post, userId) => dispatch => (
    ApiUtil.updatePost(post, userId)
      .then(post => dispatch(receivePost(post)))
  );

  export const deletePost = (postId, userId) => dispatch => (
    ApiUtil.deletePost(postId, userId)
      .then(() => dispatch(removePost(postId)))
  );
  


  
  