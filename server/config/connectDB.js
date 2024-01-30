const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDb=async()=>{
try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('mongodb connection')
} catch (error) {
    console.log('error!')
}
}

module.exports = ConnectDb;