import { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios'


export default function Cart() {

   const [data, setData] = useState([]);
   const [total, setTotal] = useState(0);
   const [delivery, setDelivery] = useState(30);

   useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const uniqueProducts = filterUniqueProducts(storedProducts);
    const totalPrice = uniqueProducts.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setData(uniqueProducts)
    if(totalPrice>150){
      setDelivery(0)
    }if(totalPrice<=150){
      setDelivery(30)
    }
    setTotal(totalPrice); // Include delivery in the initial total
  }, [data, delivery]);

  const filterUniqueProducts = (products) => {
    const uniqueProductIds = Array.from(new Set(products.map((item) => item.product._id)));
    return uniqueProductIds.map((productId) => {
      const productItem = products.find((item) => item.product._id === productId);
      return productItem;
    });
  };

  
  const removeProduct = (productId) => {
    // Get products from local storage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  
    // Remove the product with the given ID
    const updatedProducts = storedProducts.filter((item) => item.product._id !== productId);
  
    // Update local storage with the modified products
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  
    // Update state to trigger re-render
    setData(filterUniqueProducts(updatedProducts));
  };
  const IncrementQuantity = (productId) => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = storedProducts.map((item) => {
      if (item.product._id === productId) {
        if(item.quantity<10){
          return { ...item, quantity: item.quantity + 1 };
        }
        
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setData(filterUniqueProducts(updatedProducts));
  };
  const descrementQuantity = (productId) => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = storedProducts.map((item) => {
      if (item.product._id === productId) {
        if(item.quantity>1){
          return { ...item, quantity: item.quantity - 1 };
        }
        
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setData(filterUniqueProducts(updatedProducts));
  };
  const descrementSize = (productId) => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = storedProducts.map((item) => {
      if (item.product._id === productId) {
        if(item.size>25){
          const newSize = item.size - 1;
        return { ...item, size: newSize };
        }
        
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setData(filterUniqueProducts(updatedProducts));
  };
  const IncrementSize = (productId) => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = storedProducts.map((item) => {
      if (item.product._id === productId) {
        if(item.size<46){
          const newSize = item.size + 1;
        return { ...item, size: newSize };
        }
        
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setData(filterUniqueProducts(updatedProducts));
  };
  function addOrder() {
    const token = localStorage.getItem('Token');
    const products = JSON.parse(localStorage.getItem('products')); // Parse products string into an array
    if (!token) {
      console.error("Token not found in localStorage.");
      return;
    }
  
    // Decode the token to get user information
    const user = jwtDecode(token);
    const userId = user.user._id;
    const orderData = products.map(item => ({
      productId: item.product._id,
      size: item.size,
      quantity: item.quantity
    }));
  
    // Include the token in the request headers
    const headers = {
      'Authorization': `Bearer ${token}`
    };
  
    axios.post(`http://localhost:5000/order/newOrder`, {
      customerId: userId, // Include the user ID in the request body
        products: orderData,
        price: total + delivery
      }, {
        headers: headers
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert('your order is added successffly')
        } else if (res.status === 500) {
          alert('error')
        }
      })
      .catch((error) => {
        console.error("Error adding order:", error);
      });
  }
  return (
    <div className='panier my-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-8 my-3">
            <div className="row">
              <div className="col-md-12 cart">
                <div className=' pt-2 px-2 pb-1 border'>
                  <h3 className='cart-title-free'>Members get free shipping on orders $150+</h3>
                  <p>Become a bella shoes Member for fast free shipping on orders $150+ Join us or Sign-in</p>
                </div>
                <h2 className="panier-title my-4">BAG</h2>
                {
                  data.map((value, key) => {
                    return <div className='order-card d-flex my-5' key={key}>
                      <div className='float-start order-img'>
                        <img src={`http://localhost:5000/uploads/${value.product.image[0]}`} className='imgcart w-100' alt="" />
                      </div>
                      <div className='float-end ms-4 description w-100'>
                        <div className="row d-flex justify-content-between">
                          <div className="col-md-9">
                            <h6 className='my-3'><span className=''>{value.product.name}</span></h6>
                            <p><span className='text-secondary'>{value.product.short_description}</span></p>
                            <p>
                              <span className='me-2 text-secondary'>{`Size:`}<button onClick={()=>descrementSize(value.product._id)} className='btn py-0 px-1' >-</button>{value.size}<button onClick={()=>IncrementSize(value.product._id) } className='btn py-0 px-1'>+</button></span>
                              <span className='text-secondary'>{`Quantity`}<button onClick={()=> descrementQuantity(value.product._id) } className='btn py-0 px-1'>-</button>{value.quantity} <button onClick={()=>IncrementQuantity(value.product._id) } className='btn py-0 px-1'>+</button></span> 
                            </p>
                            <p><span onClick={() => removeProduct(value.product._id)} 
                              style={{ cursor: 'pointer', color: 'red' }}><FaRegTrashAlt /></span></p>
                          </div>
                          <div className='col-md-2'>
                            <p className='product-price my-2'>{`${value.product.price}$`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className='mx-3'>
              <h4 className=''>Summary</h4>
              <table className="table border-none">
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <td>${total} </td>
                  </tr>
                  <tr>
                    <th>Delivery</th>
                    <td>${delivery} </td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>${total + delivery} </td>
                  </tr>
                </tbody>
              </table>
              <div className='text-center my-4'><button className='btn btn1 fw-4' onClick={addOrder}>Checkout</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}
