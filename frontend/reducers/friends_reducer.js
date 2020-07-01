import {RECEIVE_ALL_FRIENDS, REMOVE_FRIEND, RECEIVE_FRIEND} from '../actions/friend_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_USER} from '../actions/user_actions'

const FriendsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, action.currentUser.friendships)
      case RECEIVE_USER:
        return Object.assign({}, state, action.payload.friendships)
      case RECEIVE_ALL_FRIENDS:
        return Object.assign({}, state, action.payload.friends)
      case RECEIVE_FRIEND:
        return Object.assign({}, state, { [action.friend.id]: action.friend })
      case REMOVE_FRIEND:
        let nextState = Object.assign({}, state);
        delete nextState[friend.postId]
        return nextState;
      default:
        return state;
    }
  };
  
  export default FriendsReducer;
