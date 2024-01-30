const mongoose= require('mongoose')
const product = require('../models/product')

const newProduct = (req,res)=>{
    console.log(req.files)
    let images=[]
    for(let i=0;i<1;i++){
        images.push(req.files[i].originalname)
    }
    console.log(req.body)

    let newProduct=new product({
        name:req.body.name,
        marque:req.body.marque,
        price:req.body.price,
        image:images,
        short_description:req.body.short_description,
        description:req.body.description,
        categoryId:req.body.categoryId

    })

    newProduct.save().then(result => {
        res.status(200).json({message:'product created successfully!'})
    }).catch(err=>{
        res.status(500).json({error:err})

    })
}

const updateProduct =async (req,res)=>{
    let id=req.params.id
    const productExist = await product.findOne({
        _id : id
    })
    
    let images=[]
    for(let i=0;i<1;i++){
        images.push(req.files.originalname)
    }
    productExist.name=req.body.name   
    productExist.marque=req.body.marque
    productExist.image=images
    productExist.price=req.body.price
    productExist.categoryId=req.body.categoryId
    productExist.short_description=req.body.short_description
    productExist.description=req.body.description


    productExist.save().then(result => {
        res.status(200).json({message:'product updated successfully!'} )
    }).catch(err=>{
        res.status(500).json({error:err})

    })
}

const deleteProduct =(req,res)=>{
    product.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "product deleted!"
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

const getProducts = async(req,res)=>{
    const products = await product.find()
    res.json(products)
}

// const getProductById = async(req,res)=>{
//     let products =await product.findOne({_id: new mongoose.Types.ObjectId(req.params.id)})
//     res.json(products);
//  }
 const getProductById = async (req, res) => {
    try {
      const productId = req.params.id;
  
      // Validate if the provided id is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ error: 'Invalid product ID' });
      }
  
      const products = await product.findOne({ _id: productId });
  
      if (!products) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(products);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  

const getByCategory = async (req,res)=>{
    let products =await product.find({categoryId: req.params.categoryId})
    res.json(products)
}








module.exports={newProduct,updateProduct,deleteProduct,getProducts,getProductById,getByCategory}