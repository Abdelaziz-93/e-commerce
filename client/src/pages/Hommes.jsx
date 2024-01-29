import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import soldeImgSnow from '../assets/image/soldesnow.PNG'

export default function Hommes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/product/getProductByCategory/658f1a78c93e9178bf6d4398").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const navigate = useNavigate();
    
     const goToProductDetail =(productId)=>{
       navigate(`/product/${productId}`)
    }
  return (
    <>
      <div className="container">
      <div className="">
          <img src={soldeImgSnow} className="solde-img w-100" alt="" />
        </div> 
        <div className="row">
          {data.map((value, key)=>{
           return <div className="col-md-3 rounded-0 cards my-3" key = {key} >
            <div className="caards p-0 " onClick={() => goToProductDetail(value._id)} >
          <img src={`http://localhost:5000/uploads/${value.image[0]}`} alt="" className="cardImage w-100" />
          <h6 className="py-2">{value.name}</h6>
          <p className="product-marque">{value.marque} </p>
          <p className="product-price">{value.price}$</p>
          </div>
          </div> })}
        </div>
      </div>
    </>
  );
  }