import { Link } from 'react-router-dom'
import Logo from './../assets/image/black_shoes_logo-removebg-preview.png'
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdFax } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
    <footer>
        <div className="container-fluide overflow-x-hidden">
            <div className="row register bg-warning justify-content-center align-items-center">
                <div className="col-md-10">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 text-center">
                    <p className='pt-2'>BECOME A MEMBER AND ENJOY OUR PRODUCTS</p>
                    </div>
                    <div className="col-md-4 text-center">
                    <Link className='btn btn-dark rounded-0' to='/signup'>REGISTER FOR FREE</Link>
                    </div>
                
                    </div>    
                
                
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 footer-vide"></div>
            </div>

            <div className="row bg-dark">

                <div className="col-md-3">
        
                        <div className="logo-footer mb-3 py-2">
                            <Link className="" to="/">
                                <img src={Logo} alt="logo" className='img-logo'/>
                            </Link>
                        </div>
                    
                        
                        <p className='description'>
                        Discover and Buy products that suit you, delivered to your home within 24 hours in Morocco
                        </p>
                
                    
                    
                </div>
                <div className="col-md-3">
                    <ul>
                    <li className='footer-item fs-5'>CATEGORY</li>
                    <li className='footer-link mt-2'>
                    <Link className="text-decoration-none " to="/femmes">
                         Women
                    </Link>
                     </li>
                        <li className='footer-link1 mt-2'><Link className="text-decoration-none " to="/hommes">
                            Men
                            </Link>
                        </li>
                        <li className='footer-link1 mt-2'><Link className="text-decoration-none " to="/enfants">
                            Kids
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                <ul>
                        <li className='footer-item fs-5'>CONTACT
                        </li>
                        <li className='footer-contact mt-2 '><span className=' fs-5 pe-2'><FaHome/></span>Marrakesh,Rue Guliz N2992</li>
                        <li className='footer-contact mt-2 '><span className='fs-6 pe-2'><FaEnvelope /></span>abdelaziz.oubella@gmail.com</li>
                        <li className='footer-contact mt-2'><span className='fs-6 pe-2'><FaPhoneAlt /></span>+212524000000</li>
                        <li className='footer-contact mt-2'><span className='fs-6 pe-2'><MdFax /></span>+212524000000</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li className='footer-item fs-5'>FOLLOW US</li>
                        <li className='fs-4 mt-2'><RiInstagramFill/></li>
                        <li className='fs-4 mt-2'><FaFacebook /></li>
                        <li className='fs-4 mt-2'><FaSquareXTwitter/></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
