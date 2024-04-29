import Logo from './../assets/image/new shoes.jpg'
import { NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlinePerson } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from 'react';



export default function Navbar() {
  const [search, setSearch] = useState('');

  

 
 
  return (

    <nav className="navbar coloor navbar-expand-lg bg-white sticky-top">
  <div className="container">
    <NavLink className="navbar-brand Logo font-family-Caveat p-0 m-0" to="/">
      <img src={Logo} alt="logo" className='img-logo'/>
    </NavLink>
    <button className="navbar-toggler border-0 outline-0" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="fs-1 border-0 outline-0">
        <FaBarsStaggered/>
      </span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link link px-3" aria-current="page" to="/all">
            TOUS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link link px-3" to="/femmes">
            WOMEN
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link link px-3" to="/hommes">
          MEN
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link link px-3" to="/enfants">
          KIDS
          </NavLink>
        </li>
      </ul>
      <form class="d-flex" role="search" >
      <input
            className="form-control w-100-sm"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
         {/* <input className="form-control w-100-sm" type="search" placeholder="Search" aria-label="Search"/>  */}
        <button className="btn3 fs-4" type="submit"><BiSearchAlt2 /></button>
      </form>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link px-3" to="/login"><span className='nav-login'>Log in</span>
          <MdOutlinePerson size={20}/>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-3" to="/cart">
          <FaCartShopping />
          </NavLink>
        </li>
        
      </ul>
      
    </div>

  </div>
</nav>
    
  )
}
