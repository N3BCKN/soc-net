import React,{Component} from 'react';
import Notification from './Notification';

export default class Header extends Component{

	renderNotifications(){
		const notifications = [];
		for(let i = 0; i < 6; i++){
			notifications.push(<Notification />);
		}

		return notifications;
	}

	render(){
		return(
		<nav className="navbar navbar-expand-lg navbar-light">
		  <a className="navbar-brand" href="#">Soc-Net</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <form className="form-inline my-2 my-lg-0">
		      <input className="form-control mr-sm-2 navbar-search" type="search" placeholder="Search" aria-label="Search" />
		      <button className="btn btn-outline-success btn-rounded my-2 my-sm-0" type="submit">Search</button>
		  </form>

		   <ul className="navbar-nav ml-auto nav-flex-icons">
		   		{/*NOTIFICATIONS*/}
		   	   <li className="nav-item notifications">
		   	   <a className="nav-link  waves-effect waves-light" id="navbarNotifications" data-toggle="dropdown"
		          aria-haspopup="true" aria-expanded="false">0 &nbsp;
		          <i className="fa fa-lg fa-bell notified"></i>
		        </a>
		    	{/*NOTIFICATIONS DROPDOWN*/}
		        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
		          aria-labelledby="navbarNotifications">
  					{this.renderNotifications()}
		        </div>
		      </li>
		       {/*MESSAGES*/}
		      <li className="nav-item notifications">
		        <a className="nav-link waves-effect waves-light">0 &nbsp;
		          <i className="fa fa-lg fa-envelope notified"></i>
		        </a>
		      </li>
		       {/*AVATAR*/}
		      <li className="nav-item avatar dropdown">
		        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
		          aria-haspopup="true" aria-expanded="false">
		          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
		            alt="avatar image" height={55} width={55}/>
		        </a>
		        <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
		          aria-labelledby="navbarDropdownMenuLink-55">
		          <a className="dropdown-item" href="#">Action</a>
		          <a className="dropdown-item" href="#">Another action</a>
		          <a className="dropdown-item" href="#">Something else here</a>
		        </div>
		      </li>
		    </ul>
		</nav>
	)
	}
}