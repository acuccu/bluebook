export const fetchUser = (userId) => (
    $.ajax({
      method: "GET",
      url: `/api/users/${userId}`,
    })
  );

export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: `/api/users/`
  })
);

export const updateUser = (user, userId) => 
  $.ajax({
    method: "PATCH",
    url: `/api/users/${userId}`,
    data: { user }
  })


  
  
  
  
  