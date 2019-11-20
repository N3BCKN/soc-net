import React from 'react';
import {Link} from 'react-router-dom';

export default function Friends(props){
	console.log('friends');
	return(
		<div className="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="friends-tab">
          Friends ({props.friends.length})
          <div className="row">
          	<div className="col-md-12">
          {
          	props.friends.map((friend, i)=>{
          	return <div key={i} className="nearby-user">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img src={friend.avatar} alt="user" className="profile-photo-lg"/>
                  </div>
                  <div className="col-md-7 col-sm-7">
                    <h5><Link to={`/profile/${friend.id}`} className="profile-link">{friend.username}</Link></h5>
                    <p>Software Engineer</p>
                    <p className="text-muted">500m away</p>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <button className="btn btn-primary pull-right">Remove Friend</button>
                  </div>
                </div>
              </div>
          	})
          }
          </div>
          </div>
        </div>
		)
}