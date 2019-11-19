import React from 'react';



function EditProfileForm(props){
	const {phone,address,birth_date,education,email,gender,occupation,about} = props.user;
	return(
		<form onSubmit={(e) => props.submitEdit(e)}>
		<div className="form-group">
	    	<label>Email</label>
	    	<input name="email" type="email" className="form-control"  placeholder="Contact Email"/>
	 	</div>
	 	<div className="form-group">
	    	<label>Phone</label>
	    	<input name="phone"   type="text" className="form-control"  placeholder="Phone Number"/>
	 	</div>
	 	<div className="form-group">
	    	<label>Address</label>
	    	<input name="address" type="text"  className="form-control"  placeholder="Address"/>
	 	</div>
	 	<div className="form-group">
	    	<label>Birth Date</label>
	    	<input name="birth_date" type="text"  className="form-control"  placeholder="Date Of Birth"/>
	 	</div>
	 	<div className="form-group">
	    	<label>Education</label>
	   		<input name="education" type="text"  className="form-control"  placeholder="Education"/>
	 	</div>
	 	<div className="form-group">
	    	<label>Current Occupation</label>
	    	<input name="occupation"  type="text" className="form-control"  placeholder="Occupation"/>
	 	</div>
	 	<div className="form-group">
		    <label>Gender</label>
		    <select name="gender" className="browser-default custom-select custom-select mb-3">
			  <option value="" disabled defaultValue>Choose your Gender</option>
			  <option value="female">Female</option>
			  <option value="male">Male</option>
			  <option value="other">Other</option>
			</select>
	  	</div>
	  	<div className="form-group">
	    	<label>About Me</label>
	    	<textarea name="about" rows="5" defaultValue={about || ''} className="rounded-0 form-control"></textarea>
	  	</div>

        <button type="submit" className="btn btn-primary btn-block">Edit Profile</button>
		</form>
	)
};


export default EditProfileForm;