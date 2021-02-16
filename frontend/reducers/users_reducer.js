import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_ALL_USERS} from '../actions/user_actions'
const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let users = Object.assign({}, {[action.currentUser.user.id]: action.currentUser.user}, action.currentUser.friends )
            return Object.assign({}, state, users)
        case RECEIVE_USER:
            let user = Object.assign({}, {[action.payload.user.id]: action.payload.user}, action.payload.friends )
            return Object.assign({}, state, user)
        case RECEIVE_ALL_USERS:
            return users = Object.assign({}, state, action.payload.users)
        default:
            return state
    }
}

export default usersReducer;


