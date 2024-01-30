const mongoose=require('mongoose')
const Order = require('../models/orders')

const newOrder = (req,res)=>{
   
    let ordre = new Order({
        customerId:req.body.customerId,
        products:req.body.products,
        price:req.body.price
    }) 

    ordre.save().then(result => {
        res.status(200).json({
            message: "Order created!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

const updateOrder=async(req,res)=>{
    let id =req.params.id
    let findOrder= await Order.findOne({
      _id: id

    });
    console.log(findOrder)
    findOrder.price=req.body.price
    findOrder.save().then(result => {
        res.status(200).json({
            message: "Order updated!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });;

   
}
const deleteOrder =(req,res)=>{
    Order.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "Order deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}

const getOrder =async(req,res)=>{
    const orders = await Order.aggregate([
        {
            $lookup: {
                from: 'customers',
                localField: 'customerId',
                foreignField: '_id',
                as: 'customerDetails'
            }
        },
        {
            $unwind: '$products'
        },
        {
            $lookup: {
                from: 'products',
                localField: 'products.productId',
                foreignField: '_id',  
                as: 'products'
            }
        },
        {
            $group: {
                _id: '$_id',
                customerId: { $first: '$customerId' },
                customerDetails: { $first: '$customerDetails' },
                price:{$first:'$price'},
                products: { $push: '$products'},
            }
        }
    ]);
  
   res.json(orders)
}




module.exports={newOrder,updateOrder,deleteOrder,getOrder}