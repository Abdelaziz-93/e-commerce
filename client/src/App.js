import { Route, Routes } from "react-router-loading";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import All from "./pages/All";
import Femmes from "./pages/Femmes";
import Hommes from "./pages/Hommes";
import Enfants from "./pages/Enfants";
import { topbar } from "react-router-loading";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";

// import ShopContextProvider from "./context/ShopContext";
import ProductDetails from "./components/ProductDetails";

import Users from "./components/Users";
import AddProduct from "./components/AddProduct";
import ProductsDashboard from "./components/ProductsDashboard";
import UpdateProduct from "./components/UpdateProduct";
import Orders from "./components/Orders";



  function App() {
    topbar.config({
      
      barColors: {
        0: '#969090'
    },
  });
    return (
      <>
        
        <Navbar/>
        
        <Routes  maxLoadingTime={500}>
        <Route path='/' element={<Home/>} loading />
        <Route path='/all' element={<All/>} loading/>
        <Route path='/femmes' element={<Femmes/>} loading/>
        <Route path='/hommes' element={<Hommes/>} loading/>
        <Route path='/enfants' element={<Enfants/>} loading/>
         <Route path='/login' element={<Login/>} loading/>
        <Route path='/signup' element={<SignUp/>} loading/>
        <Route path='/update-product' element={<UpdateProduct/>} loading/> 
        <Route path='/products-admin' element={<ProductsDashboard/>} loading/>
        <Route path='/add-product-admin' element={<AddProduct/>} loading/>
        <Route path='/users-admin' element={<Users/>} loading/>
        <Route path='/orders-admin' element={<Orders/>} loading/>
        <Route path="/product/:productId" element={<ProductDetails/>} loading/>
        <Route path="/cart/:productId?" element={<Cart/>} loading/>

        </Routes>
       
        <Footer/>
        
        
      </>
    );
  }


export default App;
