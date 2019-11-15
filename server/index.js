const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const responseRoutes = require('./routes/response');
const bioRoutes = require('./routes/bio');

app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/responses',responseRoutes);
app.use('/api/bio',bioRoutes);



app.listen(PORT, (err)=>{
	if(err) throw err;

	console.log(`server is running on port: ${PORT}`);
});