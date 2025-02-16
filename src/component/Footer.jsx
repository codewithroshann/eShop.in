import React from 'react'
import {Link}  from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='footer footer-area ' style={{position:"relative",bottom:"0px"}}>
                <div className="footer-container">
                    <div className=" footer-row row ">

                        <div className="footer-col col-lg-3">
                            <div className="company-info">
                                <div className="logo-box footer-logo">
                                    <Link to="/"> <span>e</span>SHOP</Link>
                                </div>
                                <p>101 E 129th St, East Chicago, <br />IN 46312, US</p>
                                <p>Phone : 0123456789</p>
                                <p>Email : www.eshop@gmail.com</p>

                            </div>
                            <div className="copyright">
                                <p>Copyright 2024 © <Link to="/">eSHOP</Link>. All rights reserved.</p>
                            </div>
                            <div className="payments d-flex justify-content-between flex-wrap">
                                <img src="src/images/p1.png" alt="" />
                                <img src="src/images/p2.png" alt="" />
                                <img src="src/images/p3.png" alt="" />
                                <img src="src/images/p4.png" alt="" />
                                <img src="src/images/p5.png" alt="" />
                                <img src="src/images/p6.png" alt="" />
                            </div>
                        </div>
                        <div className="footer-col col-lg-2">
                            <div className="footer-widget">
                                <h4 className='fix'>Find It Fast</h4>
                                <div className="footer-widget-menu widgets">
                                    <ul>
                                        <li><Link to="/laptops">Laptop & Computer</Link></li>
                                        <li><Link to="/phones">Phones & Tablets</Link></li>
                                        <li><Link to="/shop/tv">Tv & Audio</Link></li>
                                        <li><Link to="/gadgets">Gadgets & Accessories</Link></li>
                                      <li><Link to="/electronics">Electronics</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-col col-lg-2">
                            <div className="footer-widget">
                                <h4 className='fix'>Information</h4>
                                <div className="footer-widget-menu widgets">
                                    <ul>
                                        <li><Link to="/">Find Store</Link></li>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Term & Condition</Link></li>
                                        <li><Link to="/">Gift Cards</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="footer-col col-lg-2">
                            <div className="footer-widget">
                                <h4 className='fix'>Customer Care</h4>
                                <div className="footer-widget-menu widgets">
                                    <ul>
                                        <li><Link to="/">My Account</Link></li>
                                        <li><Link to="/">Wish List</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/">Customer Service</Link></li>
                                        <li><Link to="/">FAQs</Link></li>

                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="footer-col col-lg-3">
                            <div className="footer-widget">
                                <div className="subscribe-information sb-info">
                                    <h4>Sign Up To <strong> Newsletter</strong></h4>
                                    <p>Subscribe our newsletter gor get notification about information discount.</p>
                                    <input type="text" />
                                    <button>Subscribe</button>
                                </div>
                                <div className="social-links d-flex text-align-center text-uppercase mt-4">
                                    <strong className='my-auto'>Links</strong>
                                    <Link to=""><i className="fa-brands fa-facebook-f"></i></Link>
                                    <Link to=""><i className="fa-brands fa-twitter"></i></Link>
                                    <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                                    <Link to=""><i className="fa-brands fa-youtube"></i></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer
