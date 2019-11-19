import React, {Component} from 'react';

import WallInput from './WallInput';
import WallResponse from './WallResponse';

export default class WallResponses extends Component{

	constructor() {
	  super();
	
	  this.state = {
        responses: [],
        inputValue: ''
       };
	}

	renderResponses(){
		let responses = [];
		for(let i = 0; i < 6; i++){
			responses.push(<WallResponse key={i} />);
		}
		return responses
	};

    newPost(event){
        event.preventDefault();
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