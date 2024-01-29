import React from 'react'
import Sidebar from './Sidebar'
import { useEffect, useState } from "react";
import axios from "axios";
import { MdMode } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import soldeImg from '../assets/image/solde.PNG'

export default function ProductsDashboard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/product/getProducts").then((res) => {
          setData(res.data);
        });
      }, []);

    //   const removeProduct = (productId) => {
    //     useEffect(() => {
    //         axios.get("http://localhost:5000/product/getProducts").then((res) => {
    //           setData(res.data);
    //         });
    //       }, []);
    //   };
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
    
      
  return (<>
  <div className="container-fluid">
    <div className="row">
    <Sidebar/>
    
        <div className="col-md-10">
        <div className="container"> 
        <div className='text-center'>
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
            <p><span className='ms-5 me-5'><MdMode size={20}/></span><span onClick={() => removeProduct(value._id)} 
                              style={{ cursor: 'pointer', color: 'red' }}><FaRegTrashAlt size={20}/></span></p>
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
