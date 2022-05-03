/**
 * Changes specific item from the database.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const ItemModel = requireOption(objectrepository, 'ItemModel');

    return function (req, res) {

        if(
            typeof req.body.item_id === 'undefined' ||
            typeof req.body.item_name === 'undefined' ||
            typeof req.body.item_size === 'undefined' ||
            typeof req.body.item_price === 'undefined' 
           ){
            return res.end();
        }

        console.log("Editing item: \n item id: "+req.body.item_id+ " name: "+req.body.item_name+" item size: "+req.body.item_size+" price: "+req.body.item_price);
        ItemModel.findOneAndUpdate({_id:req.body.item_id}, {itemName: req.body.item_name, itemSize: req.body.item_size, price:req.body.item_price }, (err)=>{
            return res.end()
        });
    };
};