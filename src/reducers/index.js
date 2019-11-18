import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './auth-reducer';

import {reducer as formReducer} from 'redux-form';

export const init = () =>{

	const reducer = redux.combineReducers({
		auth: authReducer,
		form: formReducer
	});

	const store = redux.createStore(reducer,redux.applyMiddleware(thunk));

	return store;
}