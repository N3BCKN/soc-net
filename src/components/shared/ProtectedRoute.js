import React from 'react';
import authService from '../../services/auth-service';
import {Route, Redirect} from 'react-router-dom';

export default function ProtectedRoute(props) {

  const {component: Component, ...rest} = props;

  return (
    <Route {...rest} render={(props) => authService.isAuthenticated()
                                        ? <Component {...props} {...rest}/>
                                        : <Redirect to={{pathname: '/login'}}/>}/>
    )
}
