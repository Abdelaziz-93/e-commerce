const express=require('express')
const {createUser,loginUser,UpdateUser,deleteUser,getUsers}=require('../controllers/customresControlles')
const route=express.Router()

route.post('/signup',createUser)
route.post('/login',loginUser)
route.get('/users',getUsers)
route.put('/updateCustomres/:id',UpdateUser)
route.delete('/delete/:id',deleteUser)

module.exports=route;