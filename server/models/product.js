const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    marque:{
        type:String,
        required:true
    },
    image:[{
        type: String, 
    }] ,
    short_description:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },

})


const product=mongoose.model('product',productSchema)
module.exports=product;