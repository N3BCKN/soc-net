import React, {Component} from 'react';
import ProfileCard from '../main/ProfileCard';
import WallPosts from './WallPosts';
import {Link} from 'react-router-dom';

export default class SinglePost extends Component{
	render(){
		return(
			<div className="container">
				<div className="container py-4 my-2 profile">
				<div className="row">
					<div className="col-md-8 pr-md-5">
						  <WallPosts />
					</div>
					<div className="col-md-4 d-sm-block">
						<ProfileCard />
					</div>
				</div>
				</div>
			</div>
		)
	}
}