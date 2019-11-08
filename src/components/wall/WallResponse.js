import React, {Component} from 'react';

export default class WallResponse extends Component{
	render(){
		return(
		 <div className="panel-response">
            <div className="panel-response-user pull-left">
              <div class="panel-user-thumb pull-left">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="pull-left rounded-circle z-depth-0"
                alt="avatar image" height={35} width={35}/>
              </div>
              <h6 className="pull-left pt-2 pl-1"><a href="#" class="#">Andrzej Strzelba</a>: &nbsp;</h6>
            </div>
            <br/><br/>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
              <small>7 minutes ago, </small><a href="">Like</a>&nbsp;&nbsp;&nbsp;<a href="">Response</a>
              <hr/>
          </div>
		)
	}
}