const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

// mysql connection
const mysql = require('mysql');
const DBconfig = require('./config/dev').database;

const connection = mysql.createConnection({
  host: DBconfig.host,
  user: DBconfig.user,
  password: DBconfig.password,
  port: DBconfig.port
});

connection.connect((err)=>{
	if(err) throw err;
	console.log('connected to database');
});

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//routes
const userRoutes = require('./routes/user');

app.use('/api/users',userRoutes);



app.listen(PORT, (err)=>{
	if(err) throw err;

	console.log(`server is running on port: ${PORT}`);
});