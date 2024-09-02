import React from 'react'
import '../App.css'
function Navbar(props) {
  return (
    <>
      <div className="nav-container">
        <div className="main-nav navbar ">
          <div className="logo-container">
            <div className="logo-box">
              <a href="/"> <span>e</span>SHOP</a>
            </div>
          </div>
          <div className="nav-links">
            <div className="links">
              <ul>
                <li> <a href="">Home</a></li>
                <li><a href="Shop">Shop 
                  <i className="fa-solid mx-1 fa-caret-down"></i></a></li>
                <li><a href="About">About</a></li>
                <li><a href="Blog">Blog</a></li>
                <li><a href="Contact">Contact</a></li>
                <li><a href="Purchase Item">Purchase Item</a></li>
              </ul>
            </div>
          </div>
          <div className="account-container">
            <div className="account-box">
              <a href="">Register</a>/<a href="">Sign In</a>
            </div>
          </div>

          <div className="cart-section top-cart">
                        <div className="cart-container">
                            <ul>
                               <li><a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20"height="20"fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                    <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                                        1
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </a></li>
                                <li><a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20"height="20"fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                    <span className="top-5 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                    <span className="cost">$180.00</span>

                                </a>
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
