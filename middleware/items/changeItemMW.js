/**
 * Changes specific item from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res) {
        console.log("Editing item: \n item id: "+req.body.item_id+ " name: "+req.body.item_name+" item size: "+req.body.item_size+" price: "+req.body.item_price);
        res.end();
    };
};