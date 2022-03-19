/**
 * Deletes a specific order from the database
 * Redirects to '/' after deleting order
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("Deleting order: "+req.params.id);
        res.redirect('/');
    };
};