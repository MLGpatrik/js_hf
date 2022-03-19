var express = require('express');



var app = express();

//app.use(bodyParser.json());
app.use('/static', express.static('static'));

require('./route/index')(app);


var server = app.listen(3000, function () {
	console.log('Running on :3000');
});