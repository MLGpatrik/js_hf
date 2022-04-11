const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Order = db.model('Order',{
	name: String,
	address: String,
	_item: {
		type: Schema.Types.ObjectID,
		ref: 'Item'
	}
});

module.exports = Order;