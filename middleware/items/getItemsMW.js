/**
 * Load all item from the database
 * After insert redirects to '/'
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const ItemModel = requireOption(objectrepository, 'ItemModel'); 

    return function (req, res, next) {
        console.log("Getting all the items...");

        ItemModel.find({},(err,items) =>{
            if(err){
                return next(err);
            }
            res.locals.items=items;
            return next();
        });
    };
};