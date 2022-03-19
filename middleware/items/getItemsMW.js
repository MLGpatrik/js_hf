/**
 * Load all item from the database
 * After insert redirects to '/'
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("Getting all the items...");
        next();
    };
};