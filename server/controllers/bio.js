const sql        = require('../db');
const ErrHelper  = require('../helpers/error-helpers');

exports.updateBio = function(req,res){
	const {phone, email, address, birth_date, gender, education, about, user_id, id} = req.body;
	const user = res.locals.user;

	if(user != user_id) return res.status(401).send(ErrHelper.unauthorized());

	const updateQuery = `UPDATE Bio SET 
	phone = '${isUndef(phone)}', email = '${isUndef(email)}', address  = '${isUndef(address)}', birth_date = '${isUndef(birth_date)}', 
	gender = '${isUndef(gender)}', education = '${isUndef(education)}', about = '${isUndef(about)}' 
	WHERE id = ${id}`;
	
	sql.query(updateQuery, (err, response)  => {;
	 	if(err) return res.status(500).send(ErrHelper.serverErr());

	 	return res.json({updated: true});
	 });
};

exports.fetchBio = function(req,res){
	const userId = req.query.id;

	const bioQuery = `SELECT Bio.*,User.avatar,User.username FROM Bio INNER JOIN User On Bio.user_id=User.id WHERE User.id = ${userId}`;
	sql.query(bioQuery, (err, response)=>{
		if(err) return res.status(500).send(ErrHelper.serverErr());

		return res.json(response);
	});
};


function isUndef(setectedValue){
	return (typeof(setectedValue) !== 'undefined') ?  setectedValue : null;
}