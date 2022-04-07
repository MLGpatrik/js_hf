/**
 * Get all orders from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getting all the orders...");
        res.locals.orders=[
            {id:3214, name:"Orange Juice", address:"2330 Ág utca 4/A",itemName:"mouse",itemSize:"small",price:300},
            {id:3215, name:"Térvolen Krisztián", address:"2330 Alkotmány utca 6/A",itemName:"Graphics card",itemSize:"medium",price:3000}
        ]
        next();
    };
};