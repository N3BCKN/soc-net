const sql        = require('../db');
const Authhelper = require('../helpers/auth-helpers');
const ErrHelper  = require('../helpers/error-helpers');

exports.registerUser = function(req,res){
	const {email, password, username, passwordConfirmation} = req.body;

	if (!password || !email) {
	   return res.status(422).send(ErrHelper.dataMissing());
	}

	if (password !== passwordConfirmation) {
	    return res.status(422).send(ErrHelper.invalidPswd());
	}

	const userQuery = `SELECT * FROM User WHERE email = '${email}'`
	sql.query(userQuery, (err, response) => {

	if(err) return res.status(500).send(ErrHelper.serverErr());

	if(response.length !== 0) return res.status(422).send(ErrHelper.existance('Email'));

	Authhelper.genSalt(password).then(
	(cryptedPassword) => {

	const registerQuery = `INSERT INTO User (email, password, username) VALUES ('${email}','${cryptedPassword}','${username}')`;

	sql.query(registerQuery,(err, response)=>{
		if(err) return res.status(500).send(ErrHelper.serverErr());

		const bioQuery = `INSERT INTO Bio (user_id) VALUES (${response.insertId})`;

		sql.query(bioQuery,(err, response)=>{
			if(err) return res.status(500).send(ErrHelper.serverErr());
			return res.status(200).json({'registered': true});
		});

		});
	},
	error =>  res.status(500).send(ErrHelper.serverErr())
	);
});
};


exports.loginUser = function(req,res){
	const {email, password} = req.body;

	if(!email || !password){
		return res.status(422).send(ErrHelper.dataMissing());
	};

	const loginQuery = `SELECT * FROM User WHERE email = '${email}'`;
	sql.query(loginQuery, (err, response)=>{
		if(err) return res.status(500).send(ErrHelper.serverErr());

		if(response.length === 0) return res.status(422).send(ErrHelper.notFound('User'));

		Authhelper.comparePass(password, JSON.stringify(response[0].password).replace(/\"/g, ""))
		.then(
		(result) => {
		if(!result){
		res.status(401).send(ErrHelper.unauthorizedUser());
		}
		else{
		
		const token = Authhelper.genToken(response[0].id,response[0].username);

		res.send(token);

		}
		},
		err =>  res.status(500).send(ErrHelper.serverErr())
		);
	});

};