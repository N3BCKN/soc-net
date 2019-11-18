import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as actions from '../../actions';
import RegisterForm from './RegisterForm';

export default class RegisterPanel extends Component{
    constructor(){
        super();
        this.state = {
            errors: [],
            redirect: false
        };

        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(formData){
        actions.register(formData)
        .then(
        response => {
            this.setState({redirect: true});
        }, 
        errors => {
            this.setState({errors});  
        });
    }

	render(){
    const {errors, redirect} = this.state; 

    if(redirect){
        return <Redirect to={{pathname: '/login', state: {successRegister: true}}} />
    }

	return(
	<div className="container-fluid">
    <div className="row no-gutter">
       {/*	LEFT SIDE*/}
        <div className="col-md-6">
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                           <h3 className="display-4">SocNet</h3>
                           <p className="text-muted mb-4">Register your account</p>

                            <RegisterForm submitCb = {this.registerUser} errors={errors} />

                           <div className="text-center d-flex justify-content-between mt-4">
                            <Link to="/login"><p>Member already? Login</p></Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* RIGHT SIDE*/}
        <div className="col-md-6 d-none d-md-flex register-image">
        </div>
    </div>
</div>
		)
	}
}