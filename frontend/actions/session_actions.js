import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVER_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signUp = user => dispatch =>(
    APIUtil.signUp(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err)))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        err =>  dispatch(receiveErrors(err))
    )
);

export const logout = () => dispatch => (
    APIUtil.logout().then(
    user => dispatch(logoutCurrentUser(user)),
    err => dispatch(receiveErrors(err))
    )
);