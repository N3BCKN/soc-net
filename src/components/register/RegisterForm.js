import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {FormInput} from '../shared/form/FormInput';

const RegisterForm = props =>{
	const { handleSubmit, submitting, submitCb, errors } = props;
	return(
       <form onSubmit={handleSubmit(submitCb)}>
         <Field
            name="username"
            placeholder = "Username"
            type="text"
            component={FormInput}
          />
          <Field
            name="email"
            placeholder = "Email Address"
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
            name="passwordConfirmation"
            placeholder = "Confirm Password"
            type="password"
            component={FormInput}
          />
          <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
          Sign up
          </button>
          {errors.length > 0 && <div className="alert alert-danger" role="alert">
            {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
          </div>}
       </form>		
	)
};

const validate = values => {
  const errors = {}
  
    if(!values.username){
  		errors.username = "Please enter an username";
  	}
  	if(values.username && values.username.length < 4){
  		errors.username = "Username minimum length is 4 characters";
  	}
  	if(!values.email){
  		errors.email = "Please enter an email";
  	}
  	if(!values.password){
  		errors.password = "Please enter a password";
  	}
  	if(!values.passwordConfirmation){
  		errors.passwordConfirmation = "Please enter password confimation";
  	}
  	if(values.password !== values.passwordConfirmation){
  		errors.password = "Passwords must be the same";
  	}
  return errors
}

export default reduxForm({
	form: 'register-form',
	validate
})(RegisterForm)