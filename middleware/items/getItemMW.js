/**
 * Load a specific item from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Getting item data: '+req.params.id)
        next();
    };
};