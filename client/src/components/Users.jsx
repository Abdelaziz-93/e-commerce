import React from 'react'
import Sidebar from './Sidebar'
import Logo from './../assets/image/new shoes.jpg'

export default function Users() {
  return (<>
  <div className="container-fluid">
    <div className="row">
    <Sidebar/>
    <div className='col-md-10'>
      <h2>Users</h2>
      <div className="row">
    <div className="col-md-3">
    <div className="card">
  <img src={Logo} className="card-img-top" alt="..."/>
  <div className="card-body text-center py-5 border-top">
    <h5 className="card-title">User</h5>
    <p className="card-text">Customer</p>
    <a href="#" class="">Admin@gmail.com</a>
  </div>
</div>
</div>
<div className="col-md-3">
    <div className="card">
  <img src={Logo} className="card-img-top" alt="..."/>
  <div className="card-body text-center py-5 border-top">
    <h5 className="card-title">User</h5>
    <p className="card-text">Customer</p>
    <a href="#" class="">Admin@gmail.com</a>
  </div>
</div>
</div>
<div className="col-md-3">
    <div className="card">
  <img src={Logo} className="card-img-top" alt="..."/>
  <div className="card-body text-center py-5 border-top">
    <h5 className="card-title">User</h5>
    <p className="card-text">Customer</p>
    <a href="#" class="">Admin@gmail.com</a>
  </div>
</div>
</div>
<div className="col-md-3">
    <div className="card">
  <img src={Logo} className="card-img-top" alt="..."/>
  <div className="card-body text-center py-5 border-top">
    <h5 className="card-title">User</h5>
    <p className="card-text">Customer</p>
    <a href="#" class="">Admin@gmail.com</a>
  </div>
</div>
</div>
<div className="col-md-3 my-3">
    <div className="card">
  <img src={Logo} className="card-img-top" alt="..."/>
  <div className="card-body text-center py-5 border-top">
    <h5 className="card-title">User</h5>
    <p className="card-text">Customer</p>
    <a href="#" class="">Admin@gmail.com</a>
  </div>
</div>
</div>
</div>
    </div>
    </div>
    </div>
  
  
  </>
    
  )
}
