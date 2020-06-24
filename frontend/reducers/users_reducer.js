import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_ALL_POSTS} from '../actions/post_actions'
import {RECEIVE_USER} from '../actions/user_actions'
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let users = Object.assign({}, {[action.currentUser.user.id]: action.currentUser.user}, action.currentUser.friends )
            return Object.assign({}, state, users)
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.id]: action})
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, action.payload.author)
        default:
            return state
    }
}

export default usersReducer;


