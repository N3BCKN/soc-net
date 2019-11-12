import React, {Component} from 'react';

export default function Notification(props){
	return(
		<React.Fragment>
		  <a className="dropdown-item" href="#">
		     <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0 pull-left mr-1"
		     alt="avatar image" height={25} width={25}/>
		     <p className="display-7">Andrzej Like Your Comment</p>
		     <small> 7 minutes ago </small> 
		   </a>
		</React.Fragment>
	)
}