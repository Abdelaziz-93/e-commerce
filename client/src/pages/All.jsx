import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import soldeImg from '../assets/image/solde.PNG'

export default function All() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

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
            {data.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search);
              }).map((value, key)=>{
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
