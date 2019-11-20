const sql        = require('../db');
const ErrHelper  = require('../helpers/error-helpers');


exports.newFriendship = function(req,res){
	const {inviting_id,receiver_id} = req.body;
	const user = res.locals.user;

	if(!inviting_id || !receiver_id) return res.status(422).send(ErrHelper.dataMissing());
	if(inviting_id != user) return res.status(401).send(ErrHelper.unauthorized());
	const searchQuery = `SELECT * FROM Friends WHERE receiver_id = ${receiver_id} AND inviting_id = ${inviting_id}`;

	sql.query(searchQuery, (err,response) => {
		if(err) return res.status(500).send(ErrHelper.serverErr());
		if(response.length == 0){
			const addQuery = `INSERT INTO Friends (inviting_id, receiver_id, accepted) VALUES (${inviting_id}, ${receiver_id}, false)`;

			sql.query(addQuery,(err,response) => {
				if(err) return res.status(500).send(ErrHelper.serverErr());
				res.json({created: true});
			});
		}
		else{
			return res.status(422).send(ErrHelper.existance('Friendship'));
		}
	});
};

exports.aceptFriendship = function(req,res){
	const {id, receiver_id} = req.body;
	const user = res.locals.user;

	if(!receiver_id || !id) return res.status(422).send(ErrHelper.dataMissing());
	if(receiver_id != user) return res.status(401).send(ErrHelper.unauthorized());
	const acceptQuery = `UPDATE Friends SET accepted = true WHERE id = ${id}`;

	sql.query(acceptQuery, (err, response)=>{
		if(err) return res.status(500).send(ErrHelper.serverErr());
		res.json({acepted: true});
	});

};

exports.deleteFriendship = function(req,res){
	const {inviting_id,receiver_id, id} = req.body;
	const user = res.locals.user;

	if(!inviting_id || !receiver_id || !id) return res.status(422).send(ErrHelper.dataMissing());
	if(inviting_id != user && receiver_id != user) return res.status(401).send(ErrHelper.unauthorized());
	const deleteQuery = `DELETE FROM Friends WHERE id = ${id}`;

	sql.query(deleteQuery, (err, response)=>{
		if(err) return res.status(500).send(ErrHelper.serverErr());
		res.json({deleted: true});
	});

};

exports.indexFriendship = function(req,res){
	const userId = req.query.id;
	const user = res.locals.user;

	const friendsQuery = `SELECT User.id, User.username, User.avatar FROM Friends
	INNER JOIN User ON Friends.inviting_id=User.id
	WHERE receiver_id = ${userId} AND accepted = true;`

	sql.query(friendsQuery, (err, response)=>{
		if(err) return res.status(500).send(ErrHelper.serverErr());

		res.send(response);
	})
};