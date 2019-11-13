import React from 'react';
import {Link} from 'react-router-dom';

export default function Notification(props){
	return(
		<React.Fragment>
		  <Link className="dropdown-item" to="/profile/2342">
		     <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0 pull-left mr-1"
		     alt="user avatar" height={25} width={25}/>
		     <p>Andrzej Like Your Comment</p>
		     <small> 7 minutes ago </small> 
		   </Link>
		</React.Fragment>
	)
}