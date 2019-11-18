import jwt from 'jsonwebtoken';
import moment from 'moment';

class AuthService {

	saveUserToken(userData){
		localStorage.setItem('auth_token',userData.token);
		localStorage.setItem('avatar',userData.avatar);
	}

	getUserData(){
		const userData = jwt.decode(this.fetchUserToken());
		return{
			id:       userData.userId,
			username: userData.username,
			avatar:   localStorage.getItem('avatar')
		}
	}

	fetchUserToken(){
		return localStorage.getItem('auth_token');
	}

	isValidToken(token){
		return moment().isBefore(this.getTokenExpiration(token));
	}

	getUsername(){
		return jwt.decode(this.fetchUserToken()).username;
	}

	getUserI

	removeUserToken(){
		localStorage.removeItem('auth_token');
		localStorage.removeItem('avatar');
	}

	getTokenExpiration(token){
		const decodedToken = jwt.decode(token);

		return moment.unix(decodedToken.exp);
	}

	isAuthenticated(){
		const token = this.fetchUserToken();

		if(token && this.isValidToken(token)){
			return true;
		}

		return false;
	}
};

export default new AuthService();