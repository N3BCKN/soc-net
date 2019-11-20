import React, {Component} from 'react';

import WallInput from './WallInput';
import WallResponse from './WallResponse';

import * as actions from '../../actions';
import {connect} from 'react-redux';

class WallResponses extends Component{

	constructor() {
	  super();
	
	  this.state = {
        responses: {},
        inputValue: ''
       };

       this.newPost = this.newPost.bind(this);
       this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
	}

	renderResponses(){
		const responses = this.props.responses;
		if(Object.keys(this.state.responses).length) {responses.push(this.state.responses)};
		if(responses.length > 0){
			return responses.map((response,i) => {
				return <WallResponse key={i} response={response} />
			});	
		}else{
			return <h5 className="text-center p-3">No Responses Yet...</h5>
		}
	};

    newPost(event){
        event.preventDefault();
        const content = this.state.inputValue;
        const postId  = this.props.postId;
        actions.newResponse(content,postId)
        .then(
        response => {
        	const tempResponse = {
        		content: content,
        		created_at: new Date(),
        		user_id: this.props.auth.userData.id,
        		username: this.props.auth.userData.username,
        		avatar: this.props.auth.userData.avatar
        	}
        	this.setState({inputValue: '', responses: tempResponse});
        },
        err => console.log(err))
    }

    onChangeInputHandler(val){
        this.setState({...this.state, inputValue: val.target.value});
    }



	render(){
		return(
			<React.Fragment>
				<div className="panel-responses">
	          		{this.renderResponses()}
	          	</div>
	          	
	        	<WallInput 
	        	placeholder={"Leave a comment"}
	        	newPost = {this.newPost}
	        	inputValue = {this.state.inputValue}
	        	onChangeValue = {this.onChangeInputHandler}
	        	/>
          </React.Fragment>
		)
	}
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
};

export default connect(mapStateToProps)(WallResponses);
