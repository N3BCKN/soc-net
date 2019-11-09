import React, {Component} from 'react';
import Conversation from './Conversation';


export default class ConversationsList extends Component{

	renderConversations(){
		const conversations = [];
		for(let i = 0; i < 20; i++){
			conversations.push(<Conversation key={i} name={"Andrzej Strzelba"} />)
		}
		return conversations;
	}

	render(){
		return(
		<div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Recent</h4>
            </div>
            <div className="srch_bar">
              <div className="stylish-input-group">
                <input type="text" className="search-bar"  placeholder="Search" />
                <span className="input-group-addon">
                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                </span> </div>
            </div>
          </div>
          <div className="inbox_chat">
            <div className="chat_list active_chat">
              <div className="chat_people">
                <div className="chat_img"> <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"/> </div>
                <div className="chat_ib">
                  <h5>Andrzej Strzelba <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
            {this.renderConversations()}
          </div>
        </div>
		)
	}
}