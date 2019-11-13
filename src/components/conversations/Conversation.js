import React,{Component} from 'react';


export default class Conversation extends Component{
	render(){
		return (
			<div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img alt="user avatar" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"/> </div>
                <div className="chat_ib">
                  <h5>{this.props.name} <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
		)
	}
}