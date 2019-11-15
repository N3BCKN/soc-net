const sql        = require('../db');
const ErrHelper  = require('../helpers/error-helpers');

exports.updateBio = function(req,res){
	const {phone, email, address, birth_date, gender, education, about, avatar, user_id, id} = req.body;
	const user = res.locals.user;

	if(user != user_id) return res.status(401).send(ErrHelper.unauthorized());

	const updateQuery = `UPDATE Bio SET 
	phone = '${isUndef(phone)}', email = '${isUndef(email)}', address  = '${isUndef(address)}', birth_date = '${isUndef(birth_date)}', 
	gender = '${isUndef(gender)}', education = '${isUndef(education)}', about = '${isUndef(about)}', avatar= '${isUndef(avatar)}'
	 WHERE id = ${id}`;

	 sql.query(updateQuery, (err, response)  => {
	 	if(err) return res.status(500).send(ErrHelper.serverErr());

	 	return res.json({updated: true});
	 });
};


function isUndef(setectedValue){
	return (typeof(setectedValue) !== 'undefined') ?  setectedValue : null;
}