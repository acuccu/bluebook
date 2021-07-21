// import {RECEIVE_LIKE} from '../actions/like_actions';
// import {REMOVE_LIKE} from '../actions/like_actions';
// import {RECEIVE_ALL_POSTS} from '../actions/post_actions';

// const likesReducer = (state = {}, action) => {
//     Object.freeze(state);
//     switch(action.type) {
//         case RECEIVE_LIKE:
//             return Object.assign({}, state, action.like)
//         case REMOVE_LIKE:
//             let nextState = Object.assign({}, state);
//             delete nextState[action.likeId]
//         case RECEIVE_ALL_POSTS:
//             return Object.assign({}, state, action.payload.likes) 
//         default: 
//             return state;
//     }
// };

// export default likesReducer;

