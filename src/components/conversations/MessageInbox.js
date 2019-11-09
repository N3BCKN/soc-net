import React, {Component} from 'react';
import ConversationsList from './ConversationsList';
import MessagesHistory from './MessagesHistory';

export default class MessageInbox extends Component{
	render(){
		return(
<div className="container bg-white py-5">
<h3 className=" text-center">Conversations</h3>
<div className="messaging">
      <div className="inbox_msg">
       	<ConversationsList/>
        <div className="mesgs">
          <div className="msg_history">
          	<MessagesHistory/>
          </div>
          <div className="type_msg">
            <div className="input_msg_write">
              <input type="text" className="write_msg" placeholder="Type a message" />
              <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
     </div>
     </div>
		)
	}
}