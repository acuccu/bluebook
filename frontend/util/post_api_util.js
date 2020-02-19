
export const fetchPosts = userId => (
    $.ajax({
      url: `api/users/${userId}/posts/`
    })
  );