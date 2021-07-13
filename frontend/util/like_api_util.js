export const createLike = (userId, postId) => (
    $.ajax({
      url: `api/users/${userId}/posts/${postId}/likes`,
      method: 'POST'
    })
  );

  export const deleteLike = (userId, postId) => (
    $.ajax({
      url: `/api/users/${userId}/posts/${postId}/`,
      method: 'DELETE'
    })
  );