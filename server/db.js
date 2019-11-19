// mysql connection
const mysql = require('mysql');
const DBconfig = require('./config/dev').database;

const connection = mysql.createConnection({
  host: DBconfig.host,
  user: DBconfig.user,
  password: DBconfig.password,
  database: DBconfig.database,
  port: DBconfig.port,
  multipleStatements: true
});

connection.connect((err)=>{
	if(err) throw err;
	console.log('connected to database');
});

module.exports = connection;