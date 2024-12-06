import React, { useState } from 'react'
import allProduct from '../../Products Lists/allProduct.json'
import { Link } from "react-router-dom";


const AllFAshion = () => {
    //Clothing Items Tab 
    const [clothingItems, setClothingItems] = useState("fashion")
    const filterClothingItems = allProduct.filter(items => items.filter === clothingItems)
    const categoryFilter = allProduct.filter(items => items.category === clothingItems)
    // ADD TO CART FUNCTION
 


    //clothing Section 
    const getClothingButton = (clothingFilter) => {
        return clothingItems === clothingFilter ? "select-btn" : ""
    }
    return (
        <>
            <div className="shop-product px-4">
                <div className=" main-product-section-2 main-product-section-3 crousel-product-section-2 my-5 product-tab-2">
                    
                    <div className="product-nav product-nav-2 d-flex justify-content-between">
                        <div className="section-title tab-title" >
                            <h3>Clothing</h3>
                        </div>
                        <div className="product-nav-btn-section product-btn d-flex align-items-center" >
                            <button className={`mx-2 ${getClothingButton("fashion")}`} onClick={() => { setClothingItems("fashion") }}>All Fashion</button>
                            <button className={`mx-2 ${getClothingButton("mens")}`} onClick={() => { setClothingItems("mens") }}>Mens/Boys</button>
                            <button className={`mx-2 ${getClothingButton("womens")}`} onClick={() => { setClothingItems("womens") }}>Womens/Girls</button>
                            <button className={`mx-2 ${getClothingButton("kids")}`} onClick={() => { setClothingItems("kids") }}>Kids</button>

                        </div>
                    </div>


                    <div className="tab-content pb-5 mt-4">
                        {/*FILTERED ITEM SECRION 3 */}
                        {
                            filterClothingItems.map((data, key) => {
                                return <div className="tab-product clothing-tab" key={key}>
                                    <div className="title">
                                        <small>
                                            {data.category}
                                        </small>
                                        <h2 className='mt-3 fw-semibold'>{data.name}</h2>
                                    </div>
                                    <div className="thumb d-flex mt-3  position-relative">
                                        <img src={data.image} alt="" />
                                        <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger ${data.offer === "" ? "" : "badge"}`} >
                                            {data.offer}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>

                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"   onClick={() => {addItem(data)}}>
                                       Add To Cart
                                    </button>

                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span >${data.price}</span>
                                        </div>

                                        <span className='rating d-flex align-items-center'>
                                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                        </span>
                                    </div>
                                </div>

                            })
                        }
                        {
                            categoryFilter.map((data, key) => {
                                return <div className="tab-product clothing-tab"key={key}>
                                    <div className="title">
                                        <small>
                                            {data.category}
                                        </small>
                                        <h2 className='mt-3 fw-semibold'>{data.name}</h2>
                                    </div>
                                    <div className="thumb d-flex mt-3  position-relative">
                                        <img src={data.image} alt="" />
                                        <span className={`position-absolute offer top-0 start-100 translate-middle  rounded-pill bg-danger ${data.offer === "" ? "" : "badge"}`} >
                                            {data.offer}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </div>

                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"   onClick={() => {addItem(data)}}>
                                       Add To Cart
                                    </button>

                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span >${data.price}</span>
                                        </div>

                                        <span className='rating d-flex align-items-center'>
                                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                            <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                        </span>
                                    </div>
                                </div>

                            })
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default AllFAshion
