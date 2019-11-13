import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './auth-reducer';


export const init = () =>{

	const reducer = redux.combineReducers({
		auth: authReducer
	});

	const store = redux.createStore(reducer,redux.applyMiddleware(thunk));

	return store;
}