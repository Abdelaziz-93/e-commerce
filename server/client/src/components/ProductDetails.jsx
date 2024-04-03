import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const { productId } = useParams();
    const [data, setData] = useState([]);
    
      useEffect(() => {
        axios.get(`${window.location.origin}/product/getProduct/${productId}`).then((res) => {
          setData(res.data);
        });
      }, []);
    const handleAddToCart = (productId) => {
        let productsId = {
            product:productId,
            quantity:1,
            size:40
        };
        let products=[]
    
        if (localStorage.getItem("products") !== null) {
            // Retrieve existing data from localStorage
            products = JSON.parse(localStorage.getItem("products"));
    
            // Check if the existing data is not an array
             if (!Array.isArray(products)) {
                 products = [];
             }

        }

        products.push(productsId);
        localStorage.setItem("products", JSON.stringify(products));
    
        alert("Ajouté avec succès");
    }

     console.log(data)
  return (
    <>
    
    <div className="container product-detail my-4"> 
    <div className='text-center pt-2 pb-1 my-5 border'>
               <h3 className='cart-title-free'>Members get free shipping on orders $150+</h3>
               <p>Become a bella shoes Member for fast free shipping on orders $150+ Join us or Sign-in</p>
             </div>       
        <div className="row">
                <div className="col-md-6">
                   <img src={data.image && Array.isArray(data.image) && data.image.length > 0
        ? `${window.location.origin}/uploads/${data.image[0]}`: 'fallback-image-url.jpg'} alt="" className=' img-product-detail'/> 
            </div>
            <div className="col-md-6">
                <div className='mb-5'>
                <h4 className='text-uppercase fw-bold text-black-50'>{data.short_description} </h4>
                <h1 className="display-5">{data.name}</h1>
                
                <p className='display-6 fw-bold my-4'>${data.price} </p>
                <p className='lh-lg lead'>
                    {data.description}
                    </p>
                </div>
                <div>
                 <div className='text-center my-4 '><button className='btn btn1 fw-4' onClick={()=>handleAddToCart(data)}>add to bag</button></div>
                </div>
                 <div>
                 
                </div> 
            </div>
            </div>            
        </div>
   
    </>
  )
}