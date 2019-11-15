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