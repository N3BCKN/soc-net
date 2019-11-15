const sql        = require('../db');
const ErrHelper  = require('../helpers/error-helpers');


exports.addLike = function(req,res){
	const {user_id, post_id, response_id} = req.body;
	const user = res.locals.user;

	if(user_id != user) return res.status(401).send(ErrHelper.unauthorized());
	if(!post_id && !response_id) return res.status(422).send(ErrHelper.dataMissing());

	const likeQuery = `INSERT into Likes (post_id, response_id, user_id) VALUES (${isUndef(post_id)}, ${isUndef(response_id)} ,${user_id})`;

	sql.query(likeQuery, (err, response)=> {
		if(err) return res.status(500).send(ErrHelper.serverErr());
		res.json({liked: true});
	});
};

exports.deleteLike = function(req,res){
	const {id, user_id} = req.body;
	const user = res.locals.user;

	if(user_id != user) return res.status(401).send(ErrHelper.unauthorized());
	if(!id) return res.status(422).send(ErrHelper.dataMissing());

	const deleteQuery = `DELETE FROM Likes WHERE id = ${id}`;
	sql.query(deleteQuery, (err, response)=> {
		if(err) return res.status(500).send(ErrHelper.serverErr());
		res.json({deleted: true});
	});

};


function isUndef(setectedValue){
	return (typeof(setectedValue) !== 'undefined') ?  setectedValue : null;
}