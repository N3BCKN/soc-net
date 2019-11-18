import {LOGIN_SUCCESS,LOGIN_FAILURE} from './types';
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
  		.then(token => {
        	AuthService.saveUserToken(token);
        	dispatch(loginSuccess());
  		})
  		.catch(errors => dispatch(loginFailure(errors.response.data.errors)))
  	}
  };

  export const loginSuccess = () => {
  		const username = AuthService.getUsername();
    	return{
  			type: LOGIN_SUCCESS,
  			username
  		}
  };

  export const loginFailure = (errors) => {
  		return{
  			type: LOGIN_FAILURE,
  			errors
  		}
  };