import React, {Component} from 'react';

import WallInput from './WallInput';
import WallResponse from './WallResponse';

export default class WallResponses extends Component{

	renderResponses(){
		let responses = [];

		for(let i = 0; i < 6; i++){
			responses.push(<WallResponse key={i} />);
		}

		return responses
	}

	render(){
		return(
			<React.Fragment>
				<div className="panel-responses">
	          		{this.renderResponses()}
	          	</div>
          	<WallInput placeholder={"Leave a comment"}/>
          </React.Fragment>
		)
	}
}