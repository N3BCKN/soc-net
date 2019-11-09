import React, {Component} from 'react';
import WallTimeline from '../wall/WallTimeline'
import ProfileCard from './ProfileCard';


export default class MainBoard extends Component{
	render(){
		return(
			<div className="container">
				<div className="container py-4 my-2 profile">
				<div className="row">
					<div className="col-md-8 pr-md-5">
						<WallTimeline />
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