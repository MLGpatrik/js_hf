/**
 * Removes an item from the database
 * After deletion redirects to '/'
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("Deleting item: "+req.params.id);
        res.redirect('/');
        res.end();
    };
};