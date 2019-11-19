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
		const responses = this.props.responses;
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