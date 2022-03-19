/**
 * Inserts an item into the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res) {
        console.log("Adding new item: \n item name: "+req.body.item_name+" item size: "+req.body.item_size+" price: "+req.body.item_price);
        res.end()
    };
};