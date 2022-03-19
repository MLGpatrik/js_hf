/**
 * Edit a specific order from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res) {
        console.log("Editing order: \n id: "+req.body.order_id+" name: "+req.body.name+" address: "+req.body.address+" item id: "+req.body.item_id);
        res.end()
    };
};