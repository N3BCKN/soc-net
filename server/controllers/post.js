const sql        = require('../db');
const ErrHelper  = require('../helpers/error-helpers');


exports.newPost = function(req,res){
	const content = req.body.content;
	const user    = res.locals.user;

	if(!content || content.length < 4) return res.status(422).send(ErrHelper.dataMissing());

	const postQuery = `INSERT INTO Post (content, user_id) VALUES ('${content}', ${user})`;

	sql.query(postQuery, (err, response) => {
		if(err) res.status(500).send(ErrHelper.serverErr);
		if(response.affectedRows == 1){
		res.json({created: true});
		}
		else{
		res.status(500).send(ErrHelper.serverErr)
		}
		
	});
};

exports.fetchPost = function(req,res){
	const postId = req.body.id;
	if(!postId) return res.status(422).send(ErrHelper.dataMissing());

	const postQuery = `SELECT * FROM Post WHERE id = ${postId}`;

	sql.query(postQuery, (err, response) =>{
		if(err) res.status(500).send(ErrHelper.serverErr);
		res.json(response);
	});
};

exports.indexPosts = function(req,res){
	const userId = req.body.id;
	if(!userId) return res.status(422).send(ErrHelper.dataMissing());

	const postQuery = `SELECT * FROM Post WHERE user_id = ${userId}`;

	sql.query(postQuery, (err, response) =>{
		if(err) res.status(500).send(ErrHelper.serverErr);
		res.json(response);
	});
};



exports.editPost = function(req,res){
	const {content, user_id, id} = req.body;
	const user       = res.locals.user;

	if(!content || id || user_id) return res.status(422).send(ErrHelper.dataMissing());

	if(user != user_id) return res.status(401).send(ErrHelper.unauthorized());

	const editQuery = `UPDATE Post SET content = '${content}' WHERE id = ${id}`;

	sql.query(editQuery,(err, response) => {
		if(err) return res.status(500).send(ErrHelper.serverErr());
		if(response.affectedRows == 1){
			return res.json({edited: true})	
		}
		else{
			return res.status(404).send(ErrHelper.notFound());
		}
	});

};


exports.deletePost = function(req,res){
	const {user_id, id} = req.body;
	const user          = res.locals.user;

	if(!id || !user_id) return res.status(422).send(ErrHelper.dataMissing());

	if(user != user_id) return res.status(401).send(ErrHelper.unauthorized());

	const deleteQuery = `DELETE FROM Post WHERE id = ${id}`;
	console.log(deleteQuery);
	sql.query(deleteQuery,(err, response) => {
		console.log('im here');
		if(err) return res.status(500).send(ErrHelper.serverErr());
		if(response.affectedRows == 1){
			console.log('im here 2');
			return res.json({deleted: true})	
		}
		else{
			console.log('im here 3');
			return res.status(404).send(ErrHelper.notFound('Post'));
		}
	});

};