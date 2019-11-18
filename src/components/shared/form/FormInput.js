import React from 'react';

export const FormInput = ({input, type, placeholder, meta: { touched, error, warning }}) =>{

	return(
		<div className="form-group mb-3">
             <input {...input} type={type} placeholder={placeholder} className="form-control rounded-pill border-0 shadow-sm px-4"/>
             {touched &&((error && <div className="alert alert-danger">{error}</div>))}
       </div>
	)
}