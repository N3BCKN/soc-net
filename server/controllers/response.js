const sql        = require('../db');
const ErrHelper  = require('../helpers/error-helpers');

exports.newResponse = function(req,res){
	const {content, post_id} = req.body;
	const user = res.locals.user;

	if(!content || !post_id) return res.status(422).send(ErrHelper.dataMissing());

	const respQuery = `INSERT INTO Response (content, post_id, user_id) VALUES ('${content}', ${post_id}, ${user})`;

	sql.query(respQuery,(err, response, field) => {
		if(err) return res.status(500).send(ErrHelper.serverErr());

		if(response.affectedRows == 1){
			return res.json({created: true});
		}
		else{
			return res.status(404).send(ErrHelper.notFound('Post/User'));
		}
	});
}

exports.editResponse = function(req,res){
	const {id,content, user_id} = req.body;
	const user = res.locals.user;

	if(!content || !id || user_id) return res.status(422).send(ErrHelper.dataMissing());
	if(user != user_id) return res.status(401).send(ErrHelper.unauthorized());

	const editQuery = `UPDATE Response SET content = '${content}' WHERE id = ${id}`;
	sql.query(editQuery,(err, response) => {
		if(err) return res.status(500).send(ErrHelper.serverErr());

		if(response.affectedRows == 1){
			return res.json({edited: true});
		}
		else{
			return res.status(404).send(ErrHelper.notFound('Post/User'));
		}
	});
	
}

exports.deleteResponse = function(req,res){
	const {id, user_id} = req.body;
	const user = res.locals.user;

	if(!id || !user_id) return res.status(422).send(ErrHelper.dataMissing());
	if(user != user_id) return res.status(401).send(ErrHelper.unauthorized());
	
	const deleteQuery = `DELETE FROM Response WHERE id = ${id}`;

	sql.query(deleteQuery,(err, response) => {
		if(err) return res.status(500).send(ErrHelper.serverErr());

		if(response.affectedRows == 1){
			return res.json({deleted: true});
		}
		else{
			return res.status(404).send(ErrHelper.notFound('Post/User'));
		}
	});
}