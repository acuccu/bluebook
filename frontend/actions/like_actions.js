import * as ApiUtil from '../util/like_api_util';
import {receivePost} from './post_actions'


export const createLike = (userId, postId) => dispatch => (
    ApiUtil.createLike(userId, postId)
    .then(post => dispatch(receivePost(post)))
  );

export const deleteLike = (userId, postId) => dispatch => (
    ApiUtil.deleteLike(userId, postId)
    .then(post => dispatch(removePost(post)))
  );
