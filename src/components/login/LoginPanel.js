import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class LoginPanel extends Component{
    constructor() {
        super();
        this.userLogin = this.userLogin.bind(this);
    }

    userLogin(loginData){
        this.props.dispatch(actions.login(loginData));
    }

	render(){
    const {errors, isAuth} = this.props.auth;
    const { successRegister }  = this.props.location.state || false;

    if(isAuth){
        return <Redirect to={{pathname: '/', state: {}}} />
    }

	return(
	<div className="container-fluid">
    <div className="row no-gutter">
       {/*	LEFT SIDE*/}
        <div className="col-md-6 d-none d-md-flex login-image">
        </div>
        {/*	RIGHT SIDE*/}
        <div className="col-md-6">
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">SocNet</h3>
                            <p className="text-muted mb-4">Login</p>
                            {successRegister && 
                            <div className="alert alert-success">
                                <p> You have been registered successfully. Please login. </p>
                            </div>}

                            <LoginForm submitCb={this.userLogin} errors={errors}/>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
		)
	}
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}


export default connect(mapStateToProps)(LoginPanel);