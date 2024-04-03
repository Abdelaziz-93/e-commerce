const customers=require('../models/customers')
const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const createUser=(req,res)=>{
    const PasswordHache = bcrypt.hashSync(req.body.password, 8);
    let newUser = new customers({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:PasswordHache,
    })
    newUser.save().then(result => {
        res.json('customer created successfully!')
    }).catch(error=>{
        res.json('error!')

    })
}


const loginUser = async(req,res)=>{
    try {
        const customer = await customers.findOne({
            email : req.body.email
        });
        if (customer===null) {
            res.json('Customer not found');
        }else{

        const comparePassword = bcrypt.compareSync(req.body.password, customer.password)
        if(!comparePassword){
            res.status(404).json({error: "wrong password!"})
        } 
        const token = jwt.sign({ user: customer },'secret-key' );
        res.status(200).json({message : "logged in successfully" ,token:token})
    }
    } catch (error) {
        res.json('error!')
    }
}

    // const logout = async(req,res)=>{
    //     try{
    //         res.redirect('/')
    //     }catch(err) {
    //         console.log(err.message)
    //     }
    // }

    const UpdateUser = async(req,res)=>{
       const id=req.params.id
        const customerExists = await customers.findOne({
            _id : id
        })
            const PasswordHache = bcrypt.hashSync(req.body.password, 8);
            customerExists.email=req.body.email
            customerExists.first_name=req.body.first_name
            customerExists.last_name=req.body.last_name
            customerExists.password=PasswordHache
        customerExists.save().then(result => {
            res.status(200).json({
                message: "customer updated!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
     res.json(customerExists)
    }

    const deleteUser=(req,res)=>{
        customers.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json({
                message: "customer deleted!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
        
    }

    const getUsers=async(req,res) =>{
        const users = await customers.find()
        res.json(users)
    }

module.exports={
    createUser,
    loginUser,
    UpdateUser,
    deleteUser,
    getUsers
}