import React from 'react';

export const CheckboxInput = ({input, type, id, placeholder, meta: { touched, error, warning }}) =>{

	return(
		<div className="custom-control custom-checkbox mb-3">
             <input {...input} id={id} type={type} placeholder={placeholder} className="custom-control-input"/>
             <label className="custom-control-label">Remember password</label>
       </div>
	)
}