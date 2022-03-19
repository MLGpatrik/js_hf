/**
 * Add new order to the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res) {
        console.log("Placing order: \n name: "+req.body.name+" address: "+req.body.address+" item id: "+req.body.item_id);        
        res.end();
    };
};