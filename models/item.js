const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Item = db.model('Item',{
	itemName: String,
	itemSize: String,
	price: Number
});

module.exports = Item;