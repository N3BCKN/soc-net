import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actions from '../../../actions';
import EditProfileForm from './EditProfileForm';


class EditProfile extends Component{

	constructor() {
	  super();
	
	  this.state = {
	  	edited: false,
	  	user: {
		  	email: '',
		  	phone: '',
		  	birth_date: '',
		  	address:  '',
		  	education: '',
		  	occupation: '',
		  	gender:    '',
		  	about: ''
		  }
	  };
	  this.submitEdition = this.submitEdition.bind(this);
	  this.onChange      = this.onChange.bind(this);
	}

	componentDidMount(){
		const userId = this.props.auth.userData.id;
		actions.fetchBio(userId)
		.then(response => this.setState({user: response}))
		.catch(err => console.log(err));
	}

	submitEdition(event){
		event.preventDefault();
		actions.updateBio(this.state.user)
		.then(response => {
			console.log(response);
			this.setState({edited: true});
			console.log(this.state);
		})
		.catch(err => console.log(err));
	}

	onChange(event){
		this.setState({user:{...this.state.user, [event.target.name]: event.target.value}});
	}

	render(){
		const  {email, phone, address, education, occupation, birth_date, about} = this.state.user;

		if(this.state.edited){
			return <Redirect to={{pathname: `/profile/${this.props.auth.userData.id}`}} />
		}

		return(
			<div className="container py-4 my-2 profile">
			<h2>Edit Your Profile</h2>
			<form onSubmit={this.submitEdition}>
			<div className="form-group">
		    	<label>Email</label>
		    	<input name="email" type="email" value={email} onChange={this.onChange} className="form-control"  placeholder="Contact Email"/>
		 	</div>
		 	<div className="form-group">
		    	<label>Phone</label>
		    	<input name="phone" value={phone} type="text" onChange={this.onChange}className="form-control"  placeholder="Phone Number"/>
		 	</div>
		 	<div className="form-group">
		    	<label>Address</label>
		    	<input name="address" value={address} type="text"  onChange={this.onChange} className="form-control"  placeholder="Address"/>
		 	</div>
		 	<div className="form-group">
		    	<label>Birth Date</label>
		    	<input name="birth_date" value={birth_date} type="text" onChange={this.onChange} className="form-control"  placeholder="Date Of Birth"/>
		 	</div>
		 	<div className="form-group">
		    	<label>Education</label>
		   		<input name="education" value={education} type="text"  onChange={this.onChange} className="form-control"  placeholder="Education"/>
		 	</div>
		 	<div className="form-group">
		    	<label>Current Occupation</label>
		    	<input name="occupation" value={occupation} type="text" onChange={this.onChange} className="form-control"  placeholder="Occupation"/>
		 	</div>
		 	<div className="form-group">
			    <label>Gender</label>
			    <select name="gender" onChange={this.onChange} className="browser-default custom-select custom-select mb-3">
				  <option value="" disabled defaultValue>Choose your Gender</option>
				  <option value="female">Female</option>
				  <option value="male">Male</option>
				  <option value="other">Other</option>
				</select>
		  	</div>
		  	<div className="form-group">
		    	<label>About Me</label>
		    	<textarea name="about" rows="5" value={about} onChange={this.onChange} className="rounded-0 form-control"></textarea>
		  	</div>

	        <button type="submit" className="btn btn-primary btn-block">Edit Profile</button>
			</form>
			</div>
		)
	}

};

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(EditProfile);