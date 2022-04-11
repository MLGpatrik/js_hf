var express = require('express');
var app = express();
app.set('view engine', 'ejs');
//app.use(bodyParser.json());
app.use('/static', express.static('static'));

require('./route/index')(app);

app.use((err,req,res,next) =>{
	res.end("Problem occurred...");
	console.log(err);	
});

var server = app.listen(3000, function () {
	console.log('Running on :3000');
});
