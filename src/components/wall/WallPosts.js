import React,{Component} from 'react';
import WallResponses from './WallResponses';
import {Link} from 'react-router-dom';

export default class WallPosts extends Component{
	render(){
		return(
			<div className="panel pt-4">
        <div className="p-2 panel-body">
          <div className="panel-message">
          <div className="panel-message-header pt-1 pl-3">
            <div className="panel-user-thumb pull-left">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="pull-left rounded-circle z-depth-0"
                alt="user avatar" height={55} width={55}/>
              </div>
              <div className="panel-user-details">
                  <h4><Link to="/profile/234" className="#">&nbsp; Margarita Elina</Link>
                  <br/>
                 <Link to="/post/342"> <span className="panel-date">7 minutes ago </span></Link><span className="panel-date">near Alaska, USA</span>
                  </h4>

                  <br />
                  
              </div>
          </div>
          <div className="panel-message-content px-2">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </div>
          </div>
          <hr />
          <div className="panel-likes px-3">
          <p><a href="">Like</a>&nbsp;&nbsp;&nbsp;<a href="">Response</a></p>
          <hr />
            <div className="fb-time-action like-info">
                      <Link to="/profile/234">Jhon Due, </Link>
                      <Link to="/profile/234"> Danieal Kalion </Link>
                      <span>&nbsp; and &nbsp;</span>
                      <a href="#">40 more</a>
                      <span>&nbsp;like this &nbsp;</span>
            </div>
          </div>
          <hr />
          {/*RESPONSES*/}
          <WallResponses />
        </div>
    </div>
		)
	}
}