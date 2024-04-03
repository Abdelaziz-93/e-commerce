import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function Orders() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`{${window.location.origin}/order/getOrder`).then((res) => {
            setData(res.data);
        });
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className='col-md-10'>
                    <div className='text-center my-5'><h2>ORDERS</h2></div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Products</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.customerDetails[0].first_name} {order.customerDetails[0].last_name}</td>
                                        <td>{order.customerDetails[0].email}</td>
                                        <td>
                                            <ul>
                                                {order.products.map((productGroup, productIndex) => (
                                                    <li key={productIndex}>
                                                        {productGroup.map((product, subIndex) => (
                                                            <div key={subIndex}>
                                                                <p>Name: {product.name}</p>
                                                                <p>Price: {product.price}</p>
                                                            </div>
                                                        ))}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}


