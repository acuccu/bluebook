import * as APIUtil from "../util/friend_api_util";

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const receiveAllFriends = payload => ({
    type: RECEIVE_ALL_FRIENDS,
    payload
});

const removeFriend = friendId => ({
    type: REMOVE_FRIEND,
    friendId
});

const receiveFriend = friend => ({
    type: RECEIVE_Friend,
    friend
});

export const fetchFriends = (userId) => {
    return ( (dispatch) => {
    PostApiUtil.fetchFriends(userId)
      .then(payload => dispatch(receiveAllFriends(payload)))}
)};

export const createFriend = (friend, userId) => dispatch => (
    FriendApiUtil.createFriend(friend, userId)
      .then(friend => dispatch(receiveFriend(friend)))
);

// Need to figure out how to find the friend 

export const deleteFriend = (friendshipId) => dispatch => (
    FriendApiUtil.deleteFriend(friendshipId)
      .then(() => dispatch(removeFriendId(firendshipId)))
); 


