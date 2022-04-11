/**
 * Get all orders from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const ItemModel = requireOption(objectrepository, 'ItemModel'); 
    const OrderModel = requireOption(objectrepository, 'OrderModel'); 


    return function (req, res, next) {
        console.log("getting all the orders...");
        OrderModel.find({},(err, orders) =>{
            res.locals.orders=orders;
                ItemModel.find({},(err,items)=>{
                    for(key in res.locals.orders){
                        for(key2 in items){
                            if(items[key2]._id.toString() == res.locals.orders[key]._item.toString()){
                                res.locals.orders[key].itemName=items[key2].itemName;                    
                                res.locals.orders[key].itemSize=items[key2].itemSize;
                                res.locals.orders[key].price=items[key2].price;
                            }
                        }

                    }
                return next();    
            });
        });
    };
};