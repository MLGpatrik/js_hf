/**
 * Get a specific order from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("getting order: "+ req.params.id)
        orders=[
            {id:3214, name:"Orange Juice", address:"2330 Ág utca 4A",itemid:1},
            {id:3215, name:"Térvolen Krisztián", address:"2330 Alkotmány utca 6A",itemid:2}
        ]
        for (key in orders){
            if(req.params.id == orders[key].id){
                res.locals.order=orders[key]
            }
        }
        next();
    };
};