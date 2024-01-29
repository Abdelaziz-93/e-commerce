import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import soldeImg from '../assets/image/solde.PNG'


export default function Femmes() {
  const [data, setData] = useState([])
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    axios.get("http://localhost:5000/product/getProductByCategory/658f19d44ad5eb546e939385").then((res) => {
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
          <div className="">
          <img src={soldeImg} className="solde-img w-100" />
        </div>

          <Slider {...settings} className='slider'>
      
      {data.map((value, key)=>{
           return <div className="col-md-3 rounded-0 cards my-3" key = {key} >
            <div className="caards p-1" onClick={() => goToProductDetail(value._id)} >
          <img src={`http://localhost:5000/uploads/${value.image[0]}`} alt="" className="cardImage w-100" />
          <h6 className="py-2">{value.name}</h6>
          <p className="product-marque">{value.marque} </p>
          <p className="product-price">{value.price}$</p>
          </div>
          </div> })}
      
      
    </Slider>
        </div>
      </div>
      

      
    </>
  );
}
