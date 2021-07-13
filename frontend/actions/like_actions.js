import * as ApiUtil from '../util/post_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const createLike = (like, userId) => dispatch => (
    ApiUtil.createLike(like, userId)
    .then(like => dispatch(receiveLike(like)))
  );

export const deleteLike = (like) => dispatch => (
    ApiUtil.deleteLike(like.id, like.author_id)
    .then(() => dispatch(removeLike(like.id)))
  );
