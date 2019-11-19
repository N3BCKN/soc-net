import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

export default class WallResponse extends Component{
	render(){
    const {content, created_at, post_id, user_id,avatar, username} = this.props.response;
 		return(
		 <div className="panel-response">
            <div className="panel-response-user pull-left">
            <Link to={`profile/${user_id}`} className="#">
              <div className="panel-user-thumb pull-left">
                  <img src={avatar} className="pull-left rounded-circle z-depth-0"
                alt="user avatar" height={35} width={35}/>
              </div>
              <h6 className="pull-left pt-2 pl-1">{username}: &nbsp;</h6>
              </Link>
            </div>
            <br/><br/>
            <p>{content}</p>
              <small>{moment(created_at).fromNow()}, </small><Link to="/">Like</Link>&nbsp;&nbsp;&nbsp;<Link to="/">Response</Link>
              <hr/>
          </div>
		)
	}
}