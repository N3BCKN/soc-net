import React,{Component} from 'react';
import * as actions from '../../actions'
import WallPosts from './WallPosts';
import WallInput from './WallInput';
import {connect} from 'react-redux';


class WallTimeline extends Component{

    constructor(){
        super();

        this.state = {
        posts: []
        };
    }

    componentDidMount(){
        this.mountPosts();
    }

    mountPosts(){
        const id = this.props.auth.userData.id;
        actions.fetchPosts(id,'profile')
        .then(posts => this.setState({...this.state, posts}))
        .catch(err => console.log(err));
    }

    renderPosts(){
        if(this.state.posts.length > 0){
        return this.state.posts.map(post =>{
            return <WallPosts key={post.id} post={post} />
        })
        }
        else{
            return "No Posts Yet";
        }
    }

	render(){
		return(
		  <div>
            <WallInput placeholder={"What's on your mind today?"}  />
            {this.renderPosts()}
          </div>
		)
	}
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
};

export default connect(mapStateToProps)(WallTimeline);