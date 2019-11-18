const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db  = require('./db');

const PORT = process.env.PORT || 3001;

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// CORS 
app.use((req,res, next) =>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers',
	'Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if(req.method === 'OPTIONS'){
		res.header('Access-Contol-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

// keep mysql connection alive
setInterval(function () {
    db.query('SELECT 1');
    console.log('refresh');
}, 15000);

//routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const responseRoutes = require('./routes/response');
const bioRoutes = require('./routes/bio');
const friendsRoutes = require('./routes/friends');
const likesRoutes = require('./routes/like');

app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/responses',responseRoutes);
app.use('/api/bio',bioRoutes);
app.use('/api/friends',friendsRoutes);
app.use('/api/likes',likesRoutes);

app.listen(PORT, (err)=>{
	if(err) throw err;

	console.log(`server is running on port: ${PORT}`);
});