var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json()
app.use(bodyParser.json());
app.use('/static', express.static('static'));


app.get('/deleteorder/:id', (req, res,next) => {
	console.log("Deleting order: "+req.params.id);
	res.redirect('/');
});

app.get('/deleteitem/:id', (req, res,next) => {
	console.log("Deleting item: "+req.params.id);
	res.redirect('/');
});

app.post('/additem',jsonParser, (req, res) => {
	console.log("Adding new item: \n item name: "+req.body.item_name+" item size: "+req.body.item_size+" price: "+req.body.item_price);
	res.end();
});

app.post('/changeitem',jsonParser, (req, res) => {
	console.log("Editing item: \n item id: "+req.body.item_id+ " name: "+req.body.item_name+" item size: "+req.body.item_size+" price: "+req.body.item_price);
	res.end();
});

app.post('/modifyorder', jsonParser ,(req, res) => {
	console.log("Editing order: \n id: "+req.body.order_id+" name: "+req.body.name+" address: "+req.body.address+" item id: "+req.body.item_id);
	res.end();
});

app.post('/addorder', jsonParser,(req, res) => {
	console.log("Placing order: \n name: "+req.body.name+" address: "+req.body.address+" item id: "+req.body.item_id);
	res.sendStatus(200)
});

app.get('/', (req, res,next) => {
	return res.sendFile(path.resolve('static/pages/index.html'));
	res.end();
});

app.get('/addorder', (req, res,next) => {
	return res.sendFile(path.resolve('static/pages/add_order.html'));
	res.end();
});

app.get('/editorder/:id', (req, res,next) => {
	console.log("editing order: "+req.params.id);
	return res.sendFile(path.resolve('static/pages/modify_order.html'));
	res.end();
});

app.get('/edititems', (req, res,next) => {
	return res.sendFile(path.resolve('static/pages/edit_items.html'));
	res.end();
});


var server = app.listen(3000, function () {
	console.log('Running on :3000');
});