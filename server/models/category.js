const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});


const category = mongoose.model('category',categoriesSchema)

module.exports=category;