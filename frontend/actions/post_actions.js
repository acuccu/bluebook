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

  export const createPost = (post, userId) => dispatch => (
    ApiUtil.createPost(post, userId)
    .then(post => dispatch(receivePost(post)))
  );

  export const updatePost = (post) => dispatch => (
    ApiUtil.updatePost(post, post.author_id)
      .then(post => dispatch(receivePost(post)))
  );

  export const deletePost = (postId) => dispatch => (
    ApiUtil.deletePost(postId, post.author_id)
    .then(() => dispatch(removePost(postId)))
  );
  


  
  