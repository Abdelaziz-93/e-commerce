const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customerId:{
        ref:'customers',
        type: mongoose.Schema.Types.ObjectId
    },
    products:[{
        productId:{
            ref:'product',
            type: mongoose.Schema.Types.ObjectId
        },
        quantity: { type: Number },
        size:{
            type:Number,
            required:true   
        },
    }],
    price:{
        type:Number,
    }
})

const ordre = mongoose.model('ordre',orderSchema)
module.exports=ordre;