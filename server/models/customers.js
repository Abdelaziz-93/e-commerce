const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true

    },
    password:{
        type: String,
        required:true

    },
    role: {
        type: String,
        default: 'client'
    }
})

//image first last timestame

const customers = mongoose.model('customers',customerSchema)

module.exports=customers;