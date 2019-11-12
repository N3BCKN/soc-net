import React from 'react';


export default function ProfileCard(props){
	return(
		<div className="container">

			<div className="card card-profile text-center">
					  <img className="card-img-top" src="https://unsplash.it/340/160?image=354" alt=""/><div className="card-block">
					     <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="130" height="130" className="card-img-profile" alt="avatar image" />
					     <h4 className="card-title">
				      Hi, Nicola
				    {/*  <small>Front-end designer</small>*/}
						</h4>
					</div>
			</div>

			<div className="card card-profile text-center">
				<div className="card-body">
				<h5 className="card-title">Notices</h5>
				 <ul className="list-group list-group-flush notices-list ">
				    <li className="list-group-item display-6 notices-element">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <small><a href="">Read More...</a></small></li>
				    <li className="list-group-item notices-element">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <small><a href="">Read More...</a></small></li>
				    <li className="list-group-item notices-element">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <small><a href="">Read More...</a></small></li>
				  </ul>
				  </div>
			</div>

			<div className="card card-profile text-center">
				<div className="card-body">
				<h5 className="card-title">Suggested</h5>
				 <ul className="list-group list-group-flush notices-list ">
				    <li className="list-group-item display-6 notices-element text-center"><h6>#suggestedGroup1</h6></li>
				    <li className="list-group-item notices-element text-center"><h6>#suggestedGroup2</h6></li>
				    <li className="list-group-item notices-element text-center"><h6>#suggestedGroup3</h6></li>
				    <li className="list-group-item notices-element text-center"><h6>#suggestedUser1</h6></li>
				    <li className="list-group-item notices-element text-center"><h6>#suggestedUser2</h6></li>
				    <li className="list-group-item notices-element text-center"><h6>#suggestedUser3</h6></li>
				  </ul>
				  </div>
			</div>
		</div>
		)
}