/**
 * Edit a specific order from the database
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const OrderModel = requireOption(objectrepository, 'OrderModel'); 
    
    return function (req, res) {
        console.log("Editing order: \n id: "+req.body.order_id+" name: "+req.body.name+" address: "+req.body.address+" item id: "+req.body.item_id);


        if( typeof req.body.name === 'undefined' ||
            typeof req.body.order_id === 'undefined' ||
            typeof req.body.address === 'undefined' ||
            typeof req.body.item_id === 'undefined'
           ){
              return res.end();
        }

        OrderModel.findOneAndUpdate({_id:req.body.order_id}, {name: req.body.name, address: req.body.address, _item:req.body.item_id }, (err)=>{
  
            return res.end()
        });
    };
};