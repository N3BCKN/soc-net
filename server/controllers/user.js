const sql = require('../db');
const helper = require('../helpers/auth-helpers');


exports.registerUser = function(req,res){

	const {email, password, username, passwordConfirmation} = req.body;

	if (!password || !email) {
	   return res.status(422).send({errors: [{title: 'Data missing!', detail: 'Provide email and password!'}]});
	}

	if (password !== passwordConfirmation) {
	    return res.status(422).send({errors: [{title: 'Invalid passsword!', detail: 'Password is not a same as confirmation!'}]});
	}

	const userQuery = `SELECT * FROM User WHERE email = '${email}'`
	sql.query(userQuery, (err, response) => {

		if(err) return res.status(500).send({errors: [{title: 'Database error', detail: 'server error'}]});

		if(response.length !== 0) return res.status(422).send({errors: [{title: 'Invalid Email!', detail: 'Email already exists'}]});

		helper.genSalt(password).then(
		(cryptedPassword) => {
	
		const registerQuery = `INSERT INTO User (email, password, username) VALUES ('${email}','${cryptedPassword}','${username}')`;

			sql.query(registerQuery,(err, response)=>{
				if(err) return res.status(500).send({errors: [{title: 'Database error', detail: 'data cannot be saved'}]});
					return res.json({'registered': true});
				});
			},
		error => {return res.status(500).send({errors: [{title: 'Database error', detail: 'data cannot be saved'}]});}
		);
	});

};