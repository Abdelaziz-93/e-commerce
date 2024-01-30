const mongoose =require('mongoose')
const category = require('../models/category')


const addCategory =(req,res)=>{
    let newCategory = new category({
        name:req.body.name
    })
    newCategory.save().then(result =>{
        res.status(200).json({message:'category created'})
    }).catch(err=>{
        res.status(404).json({error:err})
    })
}

const updateCategory = async(req,res)=>{
    let CategoryExist=await category.findOne({_id: new mongoose.Types.ObjectId(req.params.id)})
    CategoryExist.name=req.body.name
    CategoryExist.save().then(result =>{
        res.status(200).json({message:'category updated'})
    }).catch(err=>{
        res.status(404).json({error:err})
    })

}

const deleteCategory = (req,res)=>{
    category.deleteOne({_id: new mongoose.Types.ObjectId(req.params.id)}).then(result =>{
        res.status(200).json({message:'category deleted'})
    }).catch(err=>{
        res.status(404).json({error:err})
    })
}


module.exports={addCategory,updateCategory,deleteCategory}
