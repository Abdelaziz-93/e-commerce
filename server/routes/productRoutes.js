express = require('express')
const {newProduct,updateProduct,deleteProduct,getProducts,getProductById,getByCategory} = require('../controllers/productConrollers')
const {uploadMultply} = require('../utils/multerMiddlware')
const route = express.Router()

route.post('/newProduct',uploadMultply,newProduct)
route.put('/updateProduct/:id',uploadMultply,updateProduct)
route.delete('/deleteProduct/:id',deleteProduct)
route.get('/getProducts',getProducts)
route.get('/getProduct/:id',getProductById)
route.get('/getProductByCategory/:categoryId',getByCategory)


module.exports=route