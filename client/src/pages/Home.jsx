import img1 from '../assets/image/WOMEN.PNG'
import img2 from '../assets/image/KIDS.PNG'
import img3 from '../assets/image/MEN.PNG'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
        <h1 className="text-center">Discover, and Shop</h1>
    <p className="text-center">Discover and Buy products that suit you, delivered to your home within 24 hours in Morocco</p>
    </div>
    </div>
    <div className="container">
    <div className="row">
      <div className="col-md-4 category my-4">
      <NavLink to="/femmes">
      <img src={img1} alt="femme" className='category-img w-100' />
      <p className='category-name1'>WOMEN</p>
          </NavLink>
      
      </div>
      <div className="col-md-4 category my-4">
      <NavLink to="/hommes">
      <img src={img3} alt="homme" className='category-img w-100'/>
      <p className='category-name2'>MEN</p>
      </NavLink>
      </div>
      <div className="col-md-4 category my-4">
      <NavLink to="/enfants">
      <img src={img2} alt="enfant" className='category-img w-100'/>
      <p className='category-name3'>KIDS</p>
      </NavLink>
      </div>
    </div>
    
    
        </div>
      </div>
      <Logo/>
    
    </>

  )
}