import {LOGIN_SUCCESS,LOGIN_FAILURE, LOGOUT} from './types';
import AuthService from '../services/auth-service';
import axiosService from '../services/axios-service';
import axios from 'axios';


const axiosInstance = axiosService.getInstance(); 

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

  export const fetchBio = (profileId) =>{
     return axiosInstance.get('bio/fetch',{params:{id: profileId}})
     .then(
      res => res.data[0],
      error => Promise.reject(error.response.data.errors))
  };

  export const updateBio = (userBio) => {
    return axiosInstance.put('bio/update',{...userBio})
    .then(response => response,
      error => Promise.reject(error.response.data.errors));
  }

  export const fetchPosts = (profileId, status) => {
      return axiosInstance.get('posts/index',
        {params: {id: profileId, status: status}}).then(
        response => response.data,
        error => Promise.reject(error.response.data.errors));
  };

  export const newPost = (content,id) => {
      return axiosInstance.post('posts/new', {"content": content, "id": id})
      .then(
        response => response.data,
        error => Promise.reject(error.response.data.errors));
  };

  export const fetchOnePost = (postId) =>{
      return axiosInstance.get('posts/fetch', {params: {id: postId}})
      .then(
        response => response.data,
        error => Promise.reject(error.response.data.errors)
        )
  };

  export const deletePost = (postId, userId) => {
    return axiosInstance.delete('posts/delete',{params: {post_id: postId, user_id: userId}})
           .then(
          response => response.data,
          error => Promise.reject(error.response.data.errors)
          )
  }

  export const editPost = (content, userId, postId) =>{
    console.log(`${content}, ${userId}, ${postId}`);
    return axiosInstance.put('posts/edit', 
      {id: postId, 
       user_id: userId,
       content: content
      }).then(
        response => response.data,
        error => Promise.reject(error.response.data.errors)
      )
  }

  export const newResponse = (content, postId) =>{
    return axiosInstance.post('responses/new', {content: content, post_id: postId})
    .then(
      response => response.data,
      error => Promise.reject(error.response.data.errors));
  }

  export const fetchFriends = (userId) =>{
    return axiosInstance.get('friends/index',{params: {id: userId}})
    .then(
      response => response.data,
      error => Promise.reject(error.response.data.errors));
  };
  