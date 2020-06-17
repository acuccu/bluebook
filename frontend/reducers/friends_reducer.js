import {RECEIVE_ALL_FRIENDS, REMOVE_FRIEND, RECEIVE_FRIEND} from '../actions/friend_actions';

const FriendsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
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
