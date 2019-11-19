import React, {Component} from 'react';
import ProfileCard from '../main/ProfileCard';
import * as actions from '../../actions';
import WallPosts from './WallPosts';

export default class SinglePost extends Component{

	constructor() {
	  super();
	
	  this.state = {
	  	post: {}
	  };
	}


	componentDidMount(){
		this.renderPost();
	}

	renderPost(){
		const post_id = this.props.match.params.id;
		actions.fetchOnePost(post_id)
		.then(post => {
			this.setState({post: post[0]})
		})
		.catch(err => console.log(err));
	}

	render(){
		return(
			<div className="container">
				<div className="container py-4 my-2 profile">
				<div className="row">
					<div className="col-md-8 pr-md-5">
						  <WallPosts post={this.state.post}/>
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


