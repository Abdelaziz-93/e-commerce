import React, { useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar';

export default function DashboardAdmin() {
  const navigate = useNavigate()
  useEffect(() => {

    const token = localStorage.getItem('Token')
    if (token) {
      const user = jwtDecode(token);
      console.log(user.user.role);
      
      if (!user) {
        localStorage.removeItem('Token')
        navigate('/login')
      } else {
        if (user.user.role == 'admin') {
           alert('Welcome Chef')

        }
      }
    } else {
      navigate('/login')
    }
  }, [])

  return (<>
<div className="container-fluid">
        <div className="row">
        <Sidebar/>
        <div className="col-md-10">
        <p>welcom to dashboard</p>
        </div>
        </div>
        </div>
</>


      )
}