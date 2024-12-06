import React, { useState } from 'react'
import { Link } from "react-router-dom";

function ProductSearch(props) {

    const [height, setHeight] = useState("")
    const [width, setWidth] = useState("")
    const [openShopcategory, setShopCategory] = useState("")

    const toggleClass = (props) => {
        if (height === "" || width === "") {
            setHeight("toggle-dropdown");
            setWidth("open-nav")
        }
        else {
            document.body.style.overflow = 'auto'
            setHeight("");
            setWidth("")
        }
    }
    const openShop = () => {
        if (openShopcategory === "") {
            setShopCategory("nav-more-category")
        } else {
            setShopCategory("")
        }
    }



    return (
        <>
            <div className="product-search my-2">
                <div className="search-container">

                    <div className="option-container position-relative " onClick={toggleClass} >
                        <div className="option-box" onClick={toggleClass}>
                            <i className="fa-solid fa-bars"></i> <span> All Departments</span>
                        </div>

                        <div className={`dropdown ${height} `}>

                            <div className="dropdown-box">
                                <ul>
                                    <li><a href="/laptops"><i className="fa-solid fa-laptop"></i>Computer </a></li>
                                    <li><a href="/shop/tv"><i className="fa-solid fa-tv"></i>TV & Smart Box</a></li>
                                    <li><a href="/"><i className="fa-solid fa-camera"></i>Cameras & Photography</a></li>
                                    <li><a href="/shop/headphones"><i className="fa-solid fa-headphones"></i>Headphones</a></li>
                                    <li><a href="/shop/phones"><i className="fa-solid fa-tablet"></i>Smart Phones & Tablets</a></li>
                                    <li><a href="/gadgets"><i className="fa-solid fa-bolt"></i>Accessories</a></li>
                                    <li><a href="/shop/speakers"><i className="fa-solid fa-microphone"></i>Home Audio & Theator</a></li>
                                    <li><a href="/home appliances"><i className="fa-solid fa-house-chimney-window"></i>House Holds</a></li>
                                    <li><a href="/"><i className="fa-solid fa-clock"></i>Watches</a></li>
                                    <li><a href="/"><i className="fa-solid fa-shuffle"></i>Other</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`navbar-dropdown w-100 ${width} `} id='nav-drop'>
                            {/* <i class="fa-solid fa-x navbar-disable" onClick={disabletoggleClass}></i> */}
                            <div className="navbar-dropdown-box">
                                <div className="dropdown-links">

                                    <ul>
                                        <li> <Link to="/">Home</Link></li>
                                        <li className={` `}>
                                            <div className="md-nav-links w-100 d-flex align-items-center justify-content-between ">

                                                <Link to="/shop"  >Shop</Link>
                                            </div>
                                        </li>


                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to=".purchaseitem">Purchase Item</Link></li>
                                        <li><Link to="/customercare">Customer Care</Link></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="search-box">
                            <select >
                                <option defaultValue="">All Categories</option>
                                <option value="">Computer</option>
                                <option value="">Tv & Smart Box</option>
                                <option value="">Camera</option>
                                <option value="">Headphones</option>
                                <option value="">Mobiles</option>
                            </select>
                            <input type="text" placeholder='Search' />
                            <button>search</button>
                        </div>
                    </div>
               

                </div>
            </div>


        </>
    )
}

export default ProductSearch
