/**
 * Get a specific order from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getting order: "+ req.params.id)
        next();
    };
};