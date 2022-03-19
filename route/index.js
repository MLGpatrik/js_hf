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

var jsonParser = bodyParser.json()

module.exports = function (app) {
    const objRepo = {};

	app.get('/deleteorder/:id', delOrderMW(objRepo));

	app.get('/deleteitem/:id', delItemMW(objRepo));

	app.post('/additem',jsonParser, createItemMW(objRepo));

	app.post('/changeitem',jsonParser, changeItemMW(objRepo));

	app.post('/modifyorder', jsonParser ,editOrderMW(objRepo));

	app.post('/addorder',jsonParser,addOrderMW(objRepo));

	app.get('/',
		getOrdersMW(objRepo) ,
		renderMW(objRepo,'index'));

	app.get('/addorder',
		getItemsMW(objRepo),
		renderMW(objRepo,'add_order'));

	app.get('/editorder/:id',
		getOrderMW(objRepo),
		getItemsMW(objRepo),
		renderMW(objRepo,'modify_order'));

	app.get('/edititems', 
		getItemsMW(objRepo),
		renderMW(objRepo,'edit_items'));

};











