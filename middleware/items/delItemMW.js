/**
 * Removes an item from the database, deletes orders which were connected to this item.
 * After deletion redirects to '/'
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const ItemModel = requireOption(objectrepository, 'ItemModel'); 
    const OrderModel = requireOption(objectrepository, 'OrderModel'); 

    return function (req, res, next) {
        console.log("Deleting item: "+req.params.id);

        if(typeof req.params.id === 'undefined'){
            res.redirect('/');
            return res.end();
        }


        for (key in res.locals.items){
            if(req.params.id == res.locals.items[key].id){
                res.locals.item=res.locals.items[key];
            }
        }
        res.locals.item.remove((err)=>{
            if(err){
                return next(err);                
            }
            OrderModel.deleteMany({_item: req.params.id},(err)=>{
                if(err){
                    console.log(err);
                }
                res.redirect('/');
                res.end();
            });
        });
    };
};