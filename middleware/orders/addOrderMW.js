/**
 * Add new order to the database
 */
const requireOption = require('../requireOption');
const mongoose = require('mongoose');

module.exports = function (objectrepository) {

    const OrderModel = requireOption(objectrepository, 'OrderModel'); 

    return function (req, res) {
        console.log("Placing order: \n name: "+req.body.name+" address: "+req.body.address+" item id: "+req.body.item_id);        

        if( typeof req.body.name === 'undefined' ||
            typeof req.body.address === 'undefined' ||
            typeof req.body.item_id === 'undefined'
           ){
              return res.end();
        }

        let myorder = new OrderModel();
        myorder.name=req.body.name;
        myorder.address=req.body.address;
        myorder._item=mongoose.Types.ObjectId(req.body.item_id);

        myorder.save((err) =>{
            console.log(err);            
        });
        return res.end();
    };
};