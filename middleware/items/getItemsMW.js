/**
 * Load all item from the database
 * After insert redirects to '/'
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("Getting all the items...");
        res.locals.items=[
            {itemid:1,itemName:"mouse",itemSize:"small",price:300},
            {itemid:2,itemName:"Graphics card",itemSize:"medium",price:3000},
            {itemid:3,itemName:"Monitor",itemSize:"medium",price:420}
        ]
        next();
    };
};