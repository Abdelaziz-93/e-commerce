import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import soldeImg from '../assets/image/solde.PNG'
import Slider from "react-slick";


export default function All() {
  const [data, setData] = useState([]);
  const idOne='65ba2c37510b1e345f702023'
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
    axios.get("http://localhost:5000/product/getProducts").then((res) => {
      setData(res.data);
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
          <img src={soldeImg} className="solde-img w-100" />
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
          <div className=" py-4 border-top">
          <h2>
          Featured
          </h2>
        </div>
        <div className="row">
          
        <div className="col-md-6 my-2">
        <div className="card-Featured position-relative">
          <h2 className="card-Featured-name py-2 text-white fs-3">The Latest Nike Dunk</h2>
          <button className="btn btn-light fw-bold" onClick={() => goToProductDetail('65ba3272510b1e345f702057')}>Shop</button>
          </div>
        </div>
        <div className="col-md-6 my-2">
        <div className="card-Featured2 position-relative">
          <h2 className="card-Featured-name py-2 text-white fs-3">Striped Adidas Shoes</h2>
          <button className="btn btn-light fw-bold" onClick={() => goToProductDetail('65ba3421510b1e345f70205f')}>Shop</button>
          </div>
        </div>
          
        </div>
          <div className=" py-4 border-top">
          <h2>
            Trending
          </h2>
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
        

        
      </>
    );


}
