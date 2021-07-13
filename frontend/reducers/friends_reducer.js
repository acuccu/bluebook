import {RECEIVE_ALL_FRIENDS, REMOVE_FRIEND, RECEIVE_FRIEND} from '../actions/friend_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_USER} from '../actions/user_actions'

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, action.currentUser.friendships)
      case RECEIVE_USER:
        return Object.assign({}, state, action.payload.friendships)
      case RECEIVE_ALL_FRIENDS:
        const newState = state;
        return Object.assign({}, newState, action.payload.friendships)
      case RECEIVE_FRIEND:
        return Object.assign({}, state, action.friend )
      case REMOVE_FRIEND:
        return Object.assign({}, state, action.payload.friendships)
      default:
        return state;
    }
  };
  
  export default friendsReducer;
