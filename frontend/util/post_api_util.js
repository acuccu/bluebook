
export const fetchPosts = userId => {
  return (
    $.ajax({
      url: `api/users/${userId}/posts/`
    })
  )};

export const createPost = (post, userId) => (
  $.ajax({
    url: `api/users/${userId}/posts/`,
    method: 'POST',
    data: { post }
  })
);

export const updatePost = (post, userId) => (
  $.ajax({
    url: `/api/users/${userId}/posts/${post.id}`,
    method: 'PATCH',
    data: { post }
  })
);

export const deletePost = (postId, userId) => (
  $.ajax({
    url: `/api/users/${userId}/posts/${postId}/`,
    method: 'DELETE'
  })
);