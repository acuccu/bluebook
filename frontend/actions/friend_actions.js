import * as ApiUtil from "../util/friend_api_util";
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveAllFriends = payload => ({
    type: RECEIVE_ALL_FRIENDS,
    payload
});

const removeFriend = payload => ({
    type: REMOVE_FRIEND,
    payload
});

const receiveFriend = friend => ({
    type: RECEIVE_FRIEND,
    friend
});

export const fetchFriends = (userId) => dispatch => (
    ApiUtil.fetchFriends(userId)
      .then(payload => dispatch(receiveAllFriends(payload)))
);

export const createFriend = (friendship, currentUserId) => dispatch => (
    ApiUtil.createFriend(friendship, currentUserId)
    .then(friendships => dispatch(receiveAllFriends(friendships)))
); 

export const acceptFriend = (currentUserId, friendId) => dispatch => (
    ApiUtil.acceptFriend(currentUserId, friendId)
    .then(friendships => dispatch(receiveAllFriends(friendships))) 
);

export const deleteFriend = (profileId, currentUserId) => dispatch => (
    ApiUtil.deleteFriend(profileId, currentUserId)
    .then(friendships => dispatch(receiveAllFriends(friendships)))
); 


