import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { HiViewGridAdd } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BsFillHandbagFill } from "react-icons/bs";


export default function Sidebar() {
  return (
    <>
    <div className="bg-white col-md-2 shadow pt-3">
      <ul className='nav nav-pills flex-column'>
        <li className="nav-item">
        <NavLink className="nav-link text-decoration-none" aria-current="page" to='/products-admin'>
        <BsFillGridFill  size={15}/>
        <span className='ms-3 d-sm-inline'>Products</span>
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-decoration-none" to='/add-product-admin'>
          <HiViewGridAdd /><span className='ms-3 d-sm-inline'>Add Product</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-decoration-none" to='/users-admin'>
          <FaHouseUser /><span className='ms-3 d-sm-inline'>Users</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-decoration-none" to='/orders-admin'>
          <BsFillHandbagFill /><span className='ms-3 d-sm-inline'>Orders</span>
          </NavLink>
        </li>
        
      </ul>
    </div>
    </>
  )
}
