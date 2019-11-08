import React, {Component} from 'react';

import WallInput from './WallInput';
import WallResponse from './WallResponse';

export default class WallResponses extends Component{
	render(){
		return(
			<React.Fragment>
				<div className="panel-responses">
	          		<WallResponse />
	          		<WallResponse />
	          		<WallResponse />
	          		<WallResponse />
	          		<WallResponse />
	          		<WallResponse />
	          	</div>
          	<WallInput placeholder={"Leave a comment"}/>
          </React.Fragment>
		)
	}
}