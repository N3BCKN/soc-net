import React from 'react';
import {Link} from 'react-router-dom';
import {FormInput} from '../shared/form/FormInput'; 
import {CheckboxInput} from '../shared/form/CheckboxInput';
import {reduxForm, Field} from 'redux-form';

const LoginForm = (props) => {
	const { handleSubmit, submitting, submitCb, errors } = props;
	return(
       <form onSubmit={handleSubmit(submitCb)}>
       	  <Field
            name="email"
            placeholder = "Email"
            type="email"
            component={FormInput}
          />
         <Field
            name="password"
            placeholder = "Password"
            type="password"
            component={FormInput}
          />
        <Field
            name="checkbox"
            type="checkbox"
            id="customCheck"
            component={CheckboxInput}
          />
           <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
           <div className="text-center d-flex justify-content-between mt-4">
           <Link to="/register"><p>Register</p></Link>
           </div>
          {errors.length > 0 && <div className="alert alert-danger" role="alert">
            {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
          </div>}
       </form>		
	)
}

const validate = values => {
  const errors = {}
  	if(!values.email){
  		errors.email = "Please enter an email";
  	}
  	if(!values.password){
  		errors.password = "Please enter a password";
  	}
  return errors
}

export default reduxForm({
	form: 'login-form',
	validate
})(LoginForm)