const sql = require('../db');


exports.registerUser = function(req,res){
	sql.query('SELECT * FROM `User` WHERE 1',(err,response) => {
		if(err) throw err

		response.map((user) => {
			console.log(typeof(user));
			return console.log(user);
		});

		return res.json(response);
	});
};