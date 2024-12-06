import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import { useSelector } from 'react-redux';

function Navbar(props) {
  const [isHover, setIsHover] = useState(false)
  const cartProducts = useSelector(state => state.cart.items)

  
  return (
    <>
      <div className="nav-container ">
        <div className="main-nav navbar ">
          <div className="logo-container">
            <div className="logo-box">
              <Link to="/"> <span>e</span>SHOP</Link>
            </div>
          </div>
          <div className="nav-links  ">
            <div className="links">
              <ul className=''>
                <li> <Link to="/">Home</Link></li>
                <li className={`shop`} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
                  <Link to="Shop">Shop
                    <i className={`fa-solid mx-1 ${isHover === true ? "fa-caret-right" : "fa-caret-down"}`}></i>
                  </Link>

                  <div className={` shop-dropdown-container`}>
                    <div className={`shop-dropdown d-flex  ${isHover === true ? "open" : ""} `}>
                      <div className="electronics-section flex-grow dropdown-category-section">
                        <h4>Electronics</h4>
                        <ul className='electronics row d-flex flex-column'>
                          <li><Link to="/shop/dryers">Dryer's</Link></li>
                          <li><Link to="/shop/cycles">Cycle's</Link></li>
                          <li><Link to="/shop/fans">Fan's</Link></li>
                          <li><Link to="/shop/speakers">Speaker's</Link></li>
                          <li><Link to="/shop/lights">Light's</Link></li>
                          <li><Link to="/shop/moniters">Moniter's</Link></li>
                          <li><Link to="/shop/trimmers">trimmer's</Link></li>
                          <li><Link to="/shop/clocks">Clock's</Link></li>
                        </ul>
                      </div>
                      <div className="home-appliances-section flex-grow dropdown-category-section">
                        <h4>Home Appliances</h4>
                        <ul className=' home-appliances d-flex flex-column'>
                          <li><Link to="/shop/tv">Tv's</Link></li>
                          <li><Link to="/shop/micro waves">Micro Wave's</Link></li>
                          <li><Link to="/shop/grinders">Grinder's</Link></li>
                          <li><Link to="/shop/vaccum cleaners">Vaccum Cleaner's</Link></li>
                          <li><Link to="/shop/washing machines">Washing Machine's</Link></li>
                          <li><Link to="/shop/fridges">Fridge's</Link></li>
                          <li><Link to="/shop/gas stoves">Gas Stoves's</Link></li>
                          <li><Link to="/shop/coolers">Cooler's</Link></li>
                          <li><Link to="/shop/room heaters">Room Heater's</Link></li>
                          <li><Link to="/shop/fans">Fan's</Link></li>
                        </ul>
                      </div>
                      <div className="fashion-section flex-grow dropdown-category-section">
                        <h4>Fashion</h4>
                        <ul className='d-flex flex-column'>
                          <li><Link to="/shop/mens shirt">Mens Shirt</Link></li>
                          <li><Link to="/shop/boys hoodie">Boys Hoodie</Link></li>
                          <li><Link to="/shop/mens tshirt">Mens Tshirt</Link></li>
                          <li><Link to="/shop/girls top wear">Girls Top Wear</Link></li>
                          <li><Link to="/shop/girls bottom wear">Girls Bottom Wear</Link></li>
                          <li><Link to="/shop/girls hoodie">Girls Hoodie</Link></li>
                          <li><Link to="/shop/kids wear">Kids Wear</Link></li>
                          <li><Link to="/shop/family night dress">Night Dress</Link></li>
                          <li><Link to="/shop/wedding dress">Wedding Dress</Link></li>
                          <li><Link to="/shop/mens foot wear">Boys Foot Wear</Link></li>
                          <li><Link to="/shop/girls foot wear">Girls Foot Wear</Link></li>
                        </ul>
                      </div>
                      <div className="mobile-section flex-grow dropdown-category-section">
                        <h4>Mobiles</h4>
                        <ul className='d-flex flex-column'>
                          <li><Link to="/shop/mi">Mi</Link></li>
                          <li><Link to="/shop/vivo">Vivo</Link></li>
                          <li><Link to="/shop/realme">Realme</Link></li>
                          <li><Link to="/shop/oppo">Oppo</Link></li>
                          <li><Link to="/shop/samsung">Samsung</Link></li>
                          <li><Link to="/shop/google pixel">Google Pixel</Link></li>
                          <li><Link to="/shop/apple">I Phone</Link></li>
                          <li><Link to="/shop/1+">OnePlus</Link></li>
                          <li><Link to="/shop/nothing phone">Nothing Phone</Link></li>
                          <li><Link to="/shop/infinix">Infinix</Link></li>
                          <li><Link to="/shop/other">Other</Link></li>
                        </ul>
                      </div>
                      <div className="gadgets-section dropdown-category-section">
                        <h4>Gadgets</h4>
                        <ul className='d-flex flex-column'>
                          <li><Link to="/shop/smartwatches">Smart Watches</Link></li>
                          <li><Link to="/shop/headphones">Headphones</Link></li>
                          <li><Link to="/shop/neckbands">Neckbands</Link></li>
                          <li><Link to="/shop/tws">TWS Earbuds</Link></li>
                          <li><Link to="/shop/chargers">Chargers</Link></li>
                        </ul>
                      </div>
                      <div className="beauty-section dropdown-category-section">
                        <h4>Beautys</h4>
                        <ul className='d-flex flex-column'>
                          <li><Link to="/shop/lipsticks">Lip Sticks</Link></li>
                          <li><Link to="/shop/foundations">Foundations</Link></li>
                          <li><Link to="/shop/eyeliners">Eye Liners</Link></li>
                          <li><Link to="/shop/mascaras">Mascara</Link></li>
                        </ul>
                      </div>
                      <div className="laptop-section dropdown-category-section">
                        <h4>Laptops&Computers</h4>
                        <ul className='d-flex flex-column'>
                          <li><Link to="/shop/dryers">Lenovo Laptops</Link></li>
                          <li><Link to="/shop/ev cycles">Infinix Laptops</Link></li>
                          <li><Link to="/shop/fans">Gigabyte</Link></li>
                          <li><Link to="/shop/lights">Asus</Link></li>
                          <li><Link to="/shop/moniters">Aser</Link></li>
                        </ul>
                      </div>


                    </div>
                  </div>
                </li>
                <li><Link to="About">About</Link></li>
                <li><Link to="Contact">Contact</Link></li>
                <li><Link to="cart" className=' className="btn btn-primary position-relative'>
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartProducts.length  || 0}
                    <span className="visually-hidden">unread messages</span>
                  </span>

                </Link></li>
              </ul>
            </div>
          </div>
          <div className="account-container">
            <div className="account-box">
              <Link to="">Register</Link>/<Link to="">Sign In</Link>
            </div>
          </div>

          <div className="cart-section top-cart">
            <div className="cart-container">
              <ul>
                <li><Link to="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                  <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link></li>
                <li><Link to="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>

                  <span className="top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartProducts.length}

                    <span className="visually-hidden">unread messages</span>
                  </span>
                  <span className="cost">$180.00</span>

                </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Navbar
