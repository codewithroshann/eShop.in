import React from 'react'
import allProduct from '../../Products Lists/allProduct.json'

const Phones = () => {
 

    return (
        <>
            <div className="shop-product px-4">

                <div className=" main-product-section-2 main-product-section-3 crousel-product-section-2 my-5 product-tab-2">

                    <div className="product-nav product-nav-2 d-flex justify-content-between">
                        <div className="section-title tab-title" >
                            <h3>Mobile</h3>
                        </div>
                    </div>

                    <div className="tab-content pb-5 mt-4">
                        {/* MI */}
                        {
                            allProduct.filter(items => items.category_3 === "mi").map((data,key) => {
                                return <div className="tab-product clothing-tab "key={key} >
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

                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                      
                                    >
                                    view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* REALME */}
                        {
                            allProduct.filter(items => items.category_3 === "realme").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                     onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* OPPO */}
                        {
                            allProduct.filter(items => items.category_3 === "oppo").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                     onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* VIVO */}
                        {
                            allProduct.filter(items => items.category_3 === "vivo").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* SAMSUNG */}
                        {
                            allProduct.filter(items => items.category_3 === "samsung").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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

                        {/* ONEPLUS */}
                        {
                            allProduct.filter(items => items.category_3 === "oneplus").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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

                        {/* APPLE IPHONE */}
                        {
                            allProduct.filter(items => items.category_3 === "apple").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* Nothing */}
                        {
                            allProduct.filter(items => items.category_3 === "nothing phone").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* GOOGLE PIXEL */}
                        {
                            allProduct.filter(items => items.category_3 === "google pixel").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* INFINIX */}
                        {
                            allProduct.filter(items => items.category_3 === "infinix").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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
                        {/* Others */}
                        {
                            allProduct.filter(items => items.category_3 === "other").map((data) => {
                                return <div className="tab-product clothing-tab">
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
                                    <button type="button" className="btn btn-primary view view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={() => {addItem(data)}}>
                                        view
                                    </button>
                                    <hr className="divider" />
                                    <div className="rating mt-4 deal-price d-flex  justify-content-between mb-4 my-3">
                                        <div className=' px1 d-flex flex-column'>
                                            <del>$500.00</del>
                                            <span>${data.price}</span>
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

export default Phones
