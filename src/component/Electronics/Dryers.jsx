import React from 'react'
import allProduct from '../../Products Lists/allProduct.json'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/Slices/showProducts'
import ProductModule from '../ProductModule'
const Dryers = () => {
    const dispatch = useDispatch();
  
    return (
        <>
            <div className="shop-product px-4">
             
                <div className=" main-product-section-2 main-product-section-3 crousel-product-section-2 my-5 product-tab-2">
<ProductModule/>
                    <div className="product-nav product-nav-2 d-flex justify-content-between">
                        <div className="section-title tab-title" >
                            <h3>Hair Dryer</h3>
                        </div>
                    </div>


                    <div className="tab-content pb-5 mt-4">
                        {
                            allProduct.filter(items => items.category_3 === "dryer").map((data,key) => {
                                return <div className="tab-product clothing-tab"key={key}>
                                    <div className="title">
                                        <small>
                                            {data.link}
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { dispatch(addProduct(data)) }}>
                                        Tap to see
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

export default Dryers
