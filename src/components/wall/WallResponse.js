import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class WallResponse extends Component{
	render(){
		return(
		 <div className="panel-response">
            <div className="panel-response-user pull-left">
            <Link to="/" className="#">
              <div className="panel-user-thumb pull-left">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="pull-left rounded-circle z-depth-0"
                alt="user avatar" height={35} width={35}/>
              </div>
              <h6 className="pull-left pt-2 pl-1">Andrzej Strzelba: &nbsp;</h6>
              </Link>
            </div>
            <br/><br/>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
              <small>7 minutes ago, </small><Link to="/">Like</Link>&nbsp;&nbsp;&nbsp;<Link to="/">Response</Link>
              <hr/>
          </div>
		)
	}
}