const express=require('express')
const app = express()
const path =require('path')
const ConnectDb = require('./config/connectDB')
const cors =require('cors')
const customerRoutes = require('./routes/customersRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const directory = path.join(__dirname, '/uploads');

app.use(express.json())
ConnectDb();
app.use(cors({
  origin: '*'
}))
app.use('/uploads', express.static(directory));

app.use('/customers',customerRoutes)
app.use('/product',productRoutes)
app.use('/order',orderRoutes)
app.use('/category',categoryRoutes)

app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,'client','build')));
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})




app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
  });