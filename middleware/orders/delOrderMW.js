/**
 * Deletes a specific order from the database
 * Redirects to '/' after deleting order
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel'); 

    return function (req, res, next) {
        console.log("Deleting order: "+req.params.id);

        if( typeof req.params.id === 'undefined' ){
              return res.redirect('/');
        }

        res.locals.order.remove((err)=>{
            if(err){
                return next(err);                
            }            
            return res.redirect('/');
        });
    };
};