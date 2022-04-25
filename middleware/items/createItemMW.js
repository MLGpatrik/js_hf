/**
 * Inserts an item into the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const ItemModel = requireOption(objectrepository, 'ItemModel'); 

    return function (req, res) {
        console.log("Adding new item: \n item name: "+req.body.item_name+" item size: "+req.body.item_size+" price: "+req.body.item_price);

        if(           
            typeof req.body.item_name === 'undefined' ||
            typeof req.body.item_size === 'undefined' ||
            typeof req.body.item_price === 'undefined' 
           ){
            return res.end();
        }

        
        let myitem= new ItemModel();
        myitem.itemName=req.body.item_name;
        myitem.itemSize=req.body.item_size;
        myitem.price=req.body.item_price;
        myitem.save((err)=>{
            console.log(err);
        });
        res.end();
    };
};