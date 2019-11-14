const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');
const config = require('../config/dev');

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
}