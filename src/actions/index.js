import {DEFAULT_TYPE} from './types';


export const fetchDefaultProps = () =>{
	const test = {success: true};
	return{
		type: 'DEFAULT_TYPE',
		test
	}
}