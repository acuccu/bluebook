export const fetchFriends = userId => {
    return (
      $.ajax({
        url: `api/users/${userId}/friends/`
    })
)};


export const createFriend = (friendship, currentUserId) => (
    $.ajax({
      url: `api/users/${currentUserId}/friends/`,
      method: 'POST',
      data: { friendship }
    })
);

export const deleteFriend = (userId, friendId) => (
    $.ajax({
      url: `/api/users/${userId}/friends/${friendId}`,
      method: 'DELETE'
    })
);