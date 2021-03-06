import React,{Component} from 'react';
import Notification from './Notification';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{

	renderNotifications(){
		const notifications = [];
		for(let i = 0; i < 6; i++){
			notifications.push(<Notification key={i}/>);
		}
		return notifications;
	}

	render(){
		const {id,avatar} = this.props.auth.userData;

		return(
		<nav className="navbar navbar-expand-lg navbar-light">
		  <Link className="navbar-brand" to="/main">Soc-Net</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <form className="form-inline my-2 my-lg-0">
		      <input className="form-control mr-sm-2 navbar-search" type="search" placeholder="Search" aria-label="Search" />
		      <button className="btn btn-outline-success btn-rounded my-2 my-sm-0" type="submit">Search</button>
		  </form>

		  <div className="collapse navbar-collapse">
		   <ul className="navbar-nav ml-auto  nav-flex-icons">
		   		{/*NOTIFICATIONS*/}
		   	   <li className="nav-item notifications">
		   	   <Link to="/" className="nav-link  waves-effect waves-light" id="navbarNotifications" data-toggle="dropdown"
		          aria-haspopup="true" aria-expanded="false">0 &nbsp;
		          <i className="fa fa-lg fa-bell notified"></i>
		        </Link>
		    	{/*NOTIFICATIONS DROPDOWN*/}
		        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
		          aria-labelledby="navbarNotifications">
  					{this.renderNotifications()}
		        </div>
		      </li>
		       {/*MESSAGES*/}
		      <li className="nav-item notifications">
		        <Link to="/" className="nav-link waves-effect waves-light">0 &nbsp;
		          <i className="fa fa-lg fa-envelope notified"></i>
		        </Link>
		      </li>
		       {/*AVATAR*/}
		      <li className="nav-item avatar dropdown">
		        <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
		          aria-haspopup="true" aria-expanded="false">
		          <img src={avatar} className="rounded-circle z-depth-0"
		            alt="user avatar" height={55} width={55}/>
		        </Link>
		        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
		          aria-labelledby="navbarDropdownMenuLink-55">
		          <Link className="dropdown-item" to={`/profile/${id}`}> My profile</Link>
		          <Link className="dropdown-item" to="/edit/profile"> <i className="fa fa-lg fa-user"/> Edit Profile</Link>
		          <Link className="dropdown-item" to="/"> <i className="fa fa-lg fa-gear"/> Settings</Link>
		          <button onClick={this.props.handleLogout.bind(this)} className="dropdown-item"><i className="fa fa-lg fa-sign-out"/>Logout</button>
		        </div>
		      </li>
		    </ul>
		    </div>
		</nav>
	)
	}
}

function mapStateToProps(state){
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Header);