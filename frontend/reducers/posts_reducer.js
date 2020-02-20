import {RECEIVE_ALL_POSTS, REMOVE_POST, RECEIVE_POST} from '../actions/post_actions';


const PostsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ALL_POSTS:
        return Object.assign({}, state, action.payload.posts)
      case RECEIVE_POST:
        return Object.assign({}, state, { [action.post.id]: action.post })
      case REMOVE_POST:
        let nextState = Object.assign({}, state);
        delete nextState[action.postId]
        return nextState;
      default:
        return state;
    }
  };
  
  export default PostsReducer;