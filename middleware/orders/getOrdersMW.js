/**
 * Get all orders from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getting all the orders...");
        next();
    };
};