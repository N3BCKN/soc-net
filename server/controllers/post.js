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
	console.log(req.body);
	res.sendStatus(200);
};