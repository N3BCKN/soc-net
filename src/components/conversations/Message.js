import React from 'react';

export default function Message(props){
	const msgReceived = (props.index % 2 == 0 || props.index == 0) ? true : false;
	return(
		<div>
		{ msgReceived ? 
		<div className="outgoing_msg">
              <div className="sent_msg">
                <p>Test which is a new approach to have all
                  solutions</p>
                <span className="time_date"> 11:01 AM    |    June 9</span> 
               </div>
            </div>
            :
         <div className="incoming_msg">
              <div className="incoming_msg_img"> 
              	<img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"/> 
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Test, which is a new approach to have</p>
                  <span className="time_date"> 11:01 AM    |    Yesterday</span>
                 </div>
              </div>
         </div>

        }   
		</div>
	)
}


