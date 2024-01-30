const express = require('express')
const {addCategory,updateCategory,deleteCategory}=require('../controllers/categoryControllers')
const route = express.Router()

route.post('/newCategory',addCategory)
route.put('/updateCategory/:id',updateCategory)
route.delete('/deleteCategory/:id',deleteCategory)


module.exports=route;