import React from 'react'
import Sidebar from './Sidebar'
import { useEffect, useState } from "react";
import axios from "axios";
import { MdMode } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function ProductsDashboard() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
  useEffect(() => {

    const token = localStorage.getItem('Token')
    if (token) {
      const user = jwtDecode(token);
      console.log(user.user.role);
      
      if (!user) {
        localStorage.removeItem('Token')
        navigate('/login')
      } else {
        if (user.user.role == 'admin') {
           alert('Welcome Chef')

        }
      }
    } else {
      navigate('/login')
    }
  }, [])
    useEffect(() => {
        axios.get("http://localhost:5000/product/getProducts").then((res) => {
          setData(res.data);
        });
      }, []);

    const removeProduct = (productId) => {
        axios.delete(`http://localhost:5000/product/deleteProduct/${productId}`)
          .then((res) => {
            console.log("Product removed successfully");
            // Update products state to reflect the removal
            setData(data.filter(product => product._id !== productId));
          })
          .catch((error) => {
            console.error("Error removing product:", error);
          });
      };

      const handleAddToCart=(productId)=>{
        localStorage.setItem('id' ,productId)
      }
    
      
  return (<>
  <div className="container-fluid">
    <div className="row">
    <Sidebar/>
    
        <div className="col-md-10">
        <div className="container"> 
        <div className='text-center py-4'>
          <h1>WELCOM CHEF</h1>
        </div>
          <div className="row">
            {data.map((value, key)=>{
             return <div className="col-md-3 rounded-0 cards my-3" key = {key} >
              <div className="caards p-0 "  >
            <img src={`http://localhost:5000/uploads/${value.image[0]}`} alt="" className="cardImage w-100" />
            <h6 className="py-2">{value.name}</h6>
            <p className="product-marque">{value.marque} </p>
            <p className="product-price">{value.price}$</p>
            <p><span><button className='btn btn-secondary rounded-0' onClick={()=>handleAddToCart(value._id)}><NavLink className='text-decoration-none text-white' to='/update-product'>edit<MdMode size={15}/></NavLink></button></span><span className='buttoon'><button className='btn btn-secondary rounded-0' onClick={() => removeProduct(value._id)}>delete<FaRegTrashAlt size={15}/></button></span></p>
            </div>
              </div> })}
          </div>
        </div>
        </div>

        </div>
        </div>

    </>

  )
}
