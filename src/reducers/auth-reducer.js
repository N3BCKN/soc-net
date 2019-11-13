const INITIAL_STATE  = {
	test: {}
};


export const authReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'DEFAULT_TYPE':
			return {...state, test: action.test}
		default:
			return state
	}
};