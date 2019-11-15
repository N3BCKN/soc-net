const bcrypt 	 = require('bcrypt');
const jwt    	 = require('jsonwebtoken');
const sql        = require('../db');
const ErrHelper  = require('./error-helpers');
const config 	 = require('../config/dev');


exports.genSalt = function(password){

	return new Promise((resolve,reject) =>{
		bcrypt.hash(password, 10, (err, hash)=>{
		if(err) reject(err);

		resolve(hash);
		});
	});
}

exports.comparePass = function(plainTextPass,hash){
	return new Promise((resolve, reject) =>{
		bcrypt.compare(plainTextPass,hash, (err, res) =>{
		if(err) reject(err);

		resolve(res);
		});
	});
};

exports.genToken = function(user_id, user_username){
	const id = JSON.stringify(user_id).replace(/\"/g, "");
	const username = JSON.stringify(user_username).replace(/\"/g, "");

	return jwt.sign({
		userId: id,
		username: username
	}, config.SECRET, { expiresIn: '10h'});
};


exports.authMiddleware = function(req,res,next){
	const token = req.headers.authorization;

	if(token){
	const user = parseToken(token);
	const userQuery = `SELECT * FROM User WHERE id = ${user.userId}`

	sql.query(userQuery, (err, response) =>{
		if(err) res.status(500).send(ErrHelper.serverErr());

		if(response.length !== 0){
			res.locals.user = JSON.stringify(response[0].id);
			next();
		}
		else{
			return res.status(401).send(ErrHelper.unauthorized());
		}
	});
	}
	else{
	return res.status(401).send(ErrHelper.unauthorized());
	}
};


function parseToken(token){
	return jwt.verify(token.split(' ')[1], config.SECRET);
}