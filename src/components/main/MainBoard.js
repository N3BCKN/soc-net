import React, {Component} from 'react';
import WallTimeline from '../wall/WallTimeline'
import ProfileCard from './ProfileCard';
import {connect} from 'react-redux';


class MainBoard extends Component{
	render(){
		const {userData} = this.props.auth;
		return(
			<div className="container">
				<div className="container py-4 my-2 profile">
				<div className="row">
					<div className="col-md-8 pr-md-5">
						<WallTimeline />
					</div>
					<div className="col-md-4 d-sm-block">
						<ProfileCard user={userData} />
					</div>
				</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps)(MainBoard);