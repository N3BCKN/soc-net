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
	const postId = req.query.id;
	if(!postId) return res.status(422).send(ErrHelper.dataMissing());

	const postQuery = `SELECT Post.*, User.username, User.avatar FROM Post 
	INNER JOIN User ON Post.user_id=User.id WHERE Post.id = ${postId}`;

	sql.query(postQuery, (err, post) =>{
	if(err) res.status(500).send(ErrHelper.serverErr);

	const responseQuery = `SELECT Response.*, User.id, User.username, User.avatar FROM Response 
	INNER JOIN User ON Response.user_id=User.id WHERE post_id = ${post[0].id} ORDER BY created_at ASC;`

	sql.query(responseQuery, (err, responses) => {
	if(err) res.status(500).send(ErrHelper.serverErr);
		if(responses.length > 1){
			post[0].responses = {};
			post[0].responses = responses;
		}
		else{
			post[0].responses = [];
			post[0].responses.push(responses);
		}


		return res.json(post);
	});

	});
};

exports.indexPosts = function(req,res){
	const userId = req.query.id;
	if(!userId) return res.status(422).send(ErrHelper.dataMissing());

	const postQuery = `SELECT Post.*, User.username, User.avatar FROM Post 
	INNER JOIN User ON Post.user_id=User.id WHERE user_id = ${userId} ORDER BY created_at DESC`;

	sql.query(postQuery, (err, posts) =>{
	if(err) return res.status(500).send(ErrHelper.serverErr);

	// fetch responses for posts
	let postIds = [];
	let responseQueries = '';
	for(let i in posts){
		postIds.push(posts[i].id);
		responseQueries += `SELECT Response.*, User.id, User.username, User.avatar FROM Response 
		INNER JOIN User ON Response.user_id=User.id WHERE post_id = ? ORDER BY created_at ASC;`
	};

	sql.query(responseQueries, postIds, (err, results) => {
		if(err) return res.status(500).send(ErrHelper.serverErr);
		if(posts.length > 1)
		{	
			for(let i in posts){
				posts[i].responses = results[i];
			}
		}
		else{posts[0].responses = results}


		return res.json(posts);
	});


	});
};



exports.editPost = function(req,res){
	const {content, user_id, id} = req.body;
	const user       = res.locals.user;

	if(!content || !id || !user_id) return res.status(422).send(ErrHelper.dataMissing());

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
	const {user_id, post_id} = req.query;
	const user          = res.locals.user;

	if(!post_id || !user_id) return res.status(422).send(ErrHelper.dataMissing());

	if(user != user_id) return res.status(401).send(ErrHelper.unauthorized());

	const deleteQuery = `DELETE FROM Post WHERE id = ${post_id}`;

	sql.query(deleteQuery,(err, response) => {
		if(err) return res.status(500).send(ErrHelper.serverErr());
		if(response.affectedRows == 1){

			return res.json({deleted: true})	
		}

			return res.status(404).send(ErrHelper.notFound('Post'));
		});
};