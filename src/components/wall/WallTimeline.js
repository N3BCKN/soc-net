import React,{Component} from 'react';
import * as actions from '../../actions'
import WallPosts from './WallPosts';
import WallInput from './WallInput';
import {connect} from 'react-redux';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


class WallTimeline extends Component{

    constructor(){
        super();

        this.state = {
        posts: [],
        inputValue: ''
        };

        this.newPost = this.newPost.bind(this);
        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete(id){
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure you want to delete this post?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                actions.deletePost(id, this.props.auth.userData.id)
                .then(response => this.mountPosts())
                .catch(err => console.log(err));
              }
            },
            {
              label: 'No',
              onClick: () =>  false
            }
          ]
        });
      };

    renderPosts(){
        if(this.state.posts.length > 0){
        return this.state.posts.map(post =>{
            return <WallPosts 
            key={post.id} 
            post={post} 
            currentUser={this.props.auth.userData.id}
            handleDelete = {this.handleDelete} 
            />
        })
        }
        else{
            return "No Posts Yet...";
        }
    }

    newPost(event){
        event.preventDefault();
        const content = this.state.inputValue;
        const id  = this.props.auth.userData.id;
        actions.newPost(content,id)
        .then(response => {
            this.setState({...this.state, inputValue: ''});
            this.mountPosts();
        })
        .catch(err => console.log(err));
    }

    onChangeInputHandler(val){
        this.setState({...this.state, inputValue: val.target.value});
    }

	render(){
		return(
		  <div>
            <WallInput 
            placeholder={"What's on your mind today?"} 
            newPost={this.newPost}
            inputValue={this.state.inputValue}
            onChangeValue={this.onChangeInputHandler} 
            />
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