import jwt from 'jsonwebtoken';
import moment from 'moment';

class AuthService {

	saveUserToken(token){
		localStorage.setItem('auth_token',token);
	}

	fetchUserToken(){
		return localStorage.getItem('auth_token');
	}

	isValidToken(token){
		return moment().isBefore(this.getExpiration(token));
	}

	getUsername(){
		return jwt.decode(this.fetchUserToken()).username;
	}

	removeUserToken(){
		localStorage.removeItem('auth_token');
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