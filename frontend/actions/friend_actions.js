import * as APIUtil from "../util/friend_api_util";

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveAllFriends = payload => ({
    type: RECEIVE_ALL_FRIENDS,
    payload
});


