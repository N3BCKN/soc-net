import React,{Component} from 'react';
import WallResponses from './WallResponses';

export default class WallPosts extends Component{
	render(){
		return(
			<div className="panel pt-4">
        <div className="p-2 panel-body">
          <div className="panel-message">
          <div className="panel-message-header pt-1 pl-3">
            <div class="panel-user-thumb pull-left">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="pull-left rounded-circle z-depth-0"
                alt="avatar image" height={55} width={55}/>
              </div>
              <div class="panel-user-details">
                  <h4><a href="#" class="#">&nbsp; Margarita Elina</a>
                  <br/>
                  <span className="panel-date">7 minutes ago near Alaska, USA</span>
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
            <div class="fb-time-action like-info">
                      <a href="#">Jhon Due, </a>
                      <a href="#"> Danieal Kalion </a>
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