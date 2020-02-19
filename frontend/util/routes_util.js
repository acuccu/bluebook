import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, userId }) => {
  debugger
  return (
    <Route path={path} exact={exact} render={(props) => ( 
        !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/users/${userId}`} />
      )
    )} />
  )};
  
  const Protected = ({ component: Component, path, loggedIn, exact }) => {
    
    return (
    <Route path={path} exact={exact} render={(props) => (
       loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
  )};
  
  const mapStateToProps = state => (
    {loggedIn: Boolean(state.session.currentUserId),
      userId: state.session.currentUserId}
  );
  
  export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
  export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));