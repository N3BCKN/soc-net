const INITIAL_STATE  = {
	isAuth: false,
	errors: [],
	userData: {}
};

export const authReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'LOGIN_SUCCESS':
			return {...state, isAuth: true,  errors: [], userData: action.userData}
		case 'LOGIN_FAILURE':
			return {...state, errors: action.errors}
		case 'LOGOUT':
			return {...state, isAuth: false}
		default:
			return state;
	}
}