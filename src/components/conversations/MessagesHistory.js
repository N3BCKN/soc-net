import React, {Component} from 'react';
import Message from './Message';

export default class MessagesHistory extends Component{

	renderMessages(){
		const messages = [];
		for(let i = 0; i < 30; i++){
			messages.push(<Message key={i} index={i} />);
		}
		return messages;

	}

	render(){
		return(
			<React.Fragment>
				{this.renderMessages()}
            </React.Fragment>
		)
	}
}

		  