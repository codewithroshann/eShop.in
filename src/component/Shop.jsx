import React, { useState } from 'react'
import allProduct from '../Products Lists/allProduct.json'
import { Link } from "react-router-dom";

const Shop = () => {



    return (
        <>
            <div className="shop-section slider-section">
                <div className="shop-container">

                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Electronics</h3>
                                </div>
                                <Link to="/electronics">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*ELECTRONICS */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop electronic").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product shop-product" key={key} >
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'>{ }</h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" className="btn btn-primary view view-btn " style={{ top: "80%" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* BEAUTY PRODUCTS */}
                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Beauty Products</h3>
                                </div>
                                <Link to="/beauty">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*FILTERED ITEM SECRION 1 */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop beauty").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product " key={key} >
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'></h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" style={{top:"80%"}} className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* CLOTHING */}
                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Fashion</h3>
                                </div>
                                <Link to="/fashion">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*FILTERED ITEM SECRION 1 */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop fashion").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product "  key={key} >
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'>{ }</h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" style={{top:"80%"}} className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*HOME APPLIANCES      */}
                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Home Appliances</h3>
                                </div>
                                <Link to="/home appliances">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*FILTERED ITEM SECRION 1 */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop home appliances").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product " key={key}>
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'>{ }</h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" style={{top:"80%"}} className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*SOUND SYSTEMS     */}
                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Home Theater&Sound Bars</h3>
                                </div>
                                <Link to="/:shop/speakers">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*FILTERED ITEM SECRION 1 */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop sound").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product " key={key}>
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'>{ }</h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" style={{top:"80%"}} className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*GADGETS*/}
                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Gadgets</h3>
                                </div>
                                <Link to="/gadgets">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*FILTERED ITEM SECRION 1 */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop gadgets").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product " key={key}>
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'>{ }</h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" style={{top:"80%"}} className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*Mobile Phones*/}
                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Mobiles</h3>
                                </div>
                                <Link to="/phones">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*FILTERED ITEM SECRION 1 */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop phone").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product " key={key} >
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'>{ }</h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" style={{top:"80%"}} className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*laptops and computers*/}
                    <div className="main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                        <div className="electronics-section mt-5 main-product-section-2 my-2 crousel-product-section-1 product-tab-2">
                            <div className="product-nav product-nav-2 d-flex flex-row align-items-center justify-content-between ">
                                <div className="section-title tab-title" >
                                    <h3>Laptops&Computers</h3>
                                </div>
                                <Link to="/laptops">See More</Link>
                            </div>
                            <div className="tab-content scrolable-container pt-4">
                                {/*FILTERED ITEM SECRION 1 */}
                                {
                                    allProduct.filter(items => items.category_2 === "shop laptop").map((data,key) => {
                                        return <div className="scrolable-products tab-product shop-product " key={key} >
                                            <div className="title">
                                                <small>
                                                    {data.link}
                                                </small>
                                                <h2 className='mt-3 fw-semibold'>{ }</h2>
                                            </div>
                                            <div className="thumb scrolable-image d-flex mt-3  position-relative">
                                                <img src={data.image} alt="" />
                                                <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger `} >
                                                    { }
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </div>
                                            <Link to={data.link}>
                                                <button type="button" style={{top:"80%"}} className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    view
                                                </button>
                                            </Link>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>





                </div>
            </div>


        </>
    )
}

export default Shop
