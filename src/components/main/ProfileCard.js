import React from 'react';
import {Link} from 'react-router-dom';


export default function ProfileCard(props){
	const {id, username, avatar} = props.user;
	return(
		<div className="container">
			<div className="card card-profile text-center">
					  <img className="card-img-top" src="https://unsplash.it/340/160?image=354" alt=""/><div className="card-block">
					     <img src={avatar} width="130" height="130" className="card-img-profile" alt="user avatar" />
					     <h4 className="card-title">
				     <Link to={`/profile/${id}`}> Hi, {username} </Link>
				    {/*  <small>Front-end designer</small>*/}
						</h4>
					</div>
			</div>

			<div className="card card-profile text-center">
				<div className="card-body">
				<h5 className="card-title">Notices</h5>
				 <ul className="list-group list-group-flush notices-list ">
				    <li className="list-group-item display-6 notices-element">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <small><Link to="/">Read More...</Link></small></li>
				    <li className="list-group-item notices-element">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <small><Link to="/">Read More...</Link></small></li>
				    <li className="list-group-item notices-element">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum <small><Link to="/">Read More...</Link></small></li>
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