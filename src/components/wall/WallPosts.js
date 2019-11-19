import React,{Component} from 'react';
import WallResponses from './WallResponses';
import {Link} from 'react-router-dom';
import moment from 'moment';

export default class WallPosts extends Component{
	render(){
    const {id, content, created_at, user_id, username, avatar} = this.props.post;

		return(
			<div className="panel pt-4">
        <div className="p-2 panel-body">
          <div className="panel-message">
          <div className="panel-message-header pt-1 pl-3">
            <div className="panel-user-thumb pull-left">
                  <img src={avatar} className="pull-left rounded-circle z-depth-0"
                alt="user avatar" height={55} width={55}/>
              </div>
              <div className="panel-user-details">
                  <h4><Link to={`profile/${user_id}`}>&nbsp; {username}</Link>
                  <br/>
                 <Link to={`/post/${id}`}> <span className="panel-date pl-3">{moment(created_at).fromNow()}</span></Link>
                 <span className="panel-date">&nbsp; near Alaska, USA</span>
                  </h4>

                  <br />
                  
              </div>
          </div>
          <div className="panel-message-content px-2">
          {content}
          </div>
          </div>
          <hr />
          <div className="panel-likes px-3">
          <p><Link to="/">Like</Link>&nbsp;&nbsp;&nbsp;<Link to="/">Response</Link></p>
          <hr />
            <div className="fb-time-action like-info">
                      <Link to="/profile/234">Jhon Due, </Link>
                      <Link to="/profile/234"> Danieal Kalion </Link>
                      <span>&nbsp; and &nbsp;</span>
                      <Link to="/">40 more</Link>
                      <span>&nbsp;like this post &nbsp;</span>
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