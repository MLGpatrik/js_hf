//const authMW = require('../middleware/auth/authMW');
//const checkPassMW = require('../middleware/auth/checkPassMW');
//
const renderMW = require('../middleware/renderMW');
const delItemMW = require('../middleware/items/delItemMW');
const createItemMW = require('../middleware/items/createItemMW');
const changeItemMW = require('../middleware/items/changeItemMW');
const getItemMW = require('../middleware/items/getItemMW');
const getItemsMW = require('../middleware/items/getItemsMW');
const getOrdersMW = require('../middleware/orders/getOrdersMW');
const getOrderMW = require('../middleware/orders/getOrderMW');
const delOrderMW = require('../middleware/orders/delOrderMW');
const editOrderMW = require('../middleware/orders/editOrderMW');
const addOrderMW = require('../middleware/orders/addOrderMW');
const bodyParser = require('body-parser');
const path = require('path');
const ItemModel = require('../models/item');
const OrderModel = require('../models/order');

var jsonParser = bodyParser.json()

module.exports = function (app) {
    const objRepo = {
    	ItemModel: ItemModel,
    	OrderModel: OrderModel
    };

	app.get('/deleteorder/:id',
		getOrdersMW(objRepo),
		getOrderMW(objRepo),
	 	delOrderMW(objRepo));

	app.get('/deleteitem/:id',
		getItemsMW(objRepo), 		
		delItemMW(objRepo));

	app.post('/additem',jsonParser, createItemMW(objRepo));

	app.post('/changeitem',jsonParser, changeItemMW(objRepo));

	app.post('/modifyorder', jsonParser ,editOrderMW(objRepo));

	app.post('/addorder',jsonParser,addOrderMW(objRepo));

	app.get('/',
		getOrdersMW(objRepo) ,
		renderMW(objRepo,'index','shop management'));

	app.get('/addorder',
		getItemsMW(objRepo),
		renderMW(objRepo,'add_order','order placement site'));

	app.get('/editorder/:id',
		getOrdersMW(objRepo),
		getOrderMW(objRepo),
		getItemsMW(objRepo),
		renderMW(objRepo,'modify_order','order modifier'));

	app.get('/edititems', 
		getItemsMW(objRepo),
		renderMW(objRepo,'edit_items','item editor'));

};











