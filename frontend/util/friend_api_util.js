export const fetchFriends = userId => {
    return (
      $.ajax({
        url: `api/users/${userId}/friends/`
    })
)};


export const createFriend = (friend, userId) => (
    $.ajax({
      url: `api/users/${userId}/friends/`,
      method: 'POST',
      data: { friend }
    })
);

export const deleteFriend = (friendId, userId) => (
    $.ajax({
      url: `/api/users/${userId}/friends/${friendId}/`,
      method: 'DELETE'
    })
)