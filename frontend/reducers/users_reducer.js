import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_ALL_POSTS} from '../actions/post_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
        case RECEIVE_ALL_POSTS:
                return Object.assign({}, state, action.payload.author)
        default:
            return state
    }
}

export default usersReducer;


