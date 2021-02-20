import * as  APIUtil from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
  });

  const receiveUsers = (payload) => ({
    type: RECEIVE_ALL_USERS,
    payload
  })

  const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors
  });

  export const fetchUsers = () => dispatch => (
    APIUtil.fetchUser()
    .then(
      (users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveErrors(errors))
    )
  );
  
  export const fetchUser = (userId) => dispatch => (
    APIUtil.fetchUser(userId)
      .then(
        (user) => dispatch(receiveUser(user)),
        (errors) => dispatch(receiveUserErrors(errors))
      )
  );

  export const updateUser = (user, userId) => dispatch => (
    APIUtil.updateUser(user, userId)
    .then(
      (user) => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveUserErrors(errors))
    )
  );

  