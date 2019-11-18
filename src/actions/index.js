import {LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT} from './types';
import AuthService from '../services/auth-service';
import axios from 'axios';

export const register = (userData) => {
    return axios.post('/api/users/register', {...userData}).then(
      res =>  res.data,
      err =>  Promise.reject(err.response.data.errors))
  };


export const login = (loginData) => {
  	return dispatch => {
  		return axios.post('/api/users/login',{...loginData})
  		.then(res => res.data)
  		.then(response => {
        	AuthService.saveUserToken(response);
        	dispatch(loginSuccess());
  		})
  		.catch(errors => dispatch(loginFailure(errors.response.data.errors)))
  	}
  };

  export const loginSuccess = (avatar) => {
  		const userData = AuthService.getUserData()
    	return{
  			type: LOGIN_SUCCESS,
  			userData
  		}
  };

  export const loginFailure = (errors) => {
  		return{
  			type: LOGIN_FAILURE,
  			errors
  		}
  };

  export const logout = () =>{
     AuthService.removeUserToken();
     return{
      type: LOGOUT
     }
  }