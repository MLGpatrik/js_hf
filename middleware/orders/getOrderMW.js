/**
 * Get a specific order from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getting order: "+ req.params.id)
        
        if( typeof req.params.id === 'undefined' ){
              return next(error);
        }


        for (key in res.locals.orders){
            if(req.params.id == res.locals.orders[key].id){
                res.locals.order=res.locals.orders[key];
            }
        }
        return next();
    };
};