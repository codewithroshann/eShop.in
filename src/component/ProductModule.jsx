import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
{/*SWIPERJS MODULES  */ }
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductModule = () => {
    return (
        <>
            {/*--------------------MODAL--------------------*/}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body rx-1 d-flex">
                            <div className="product-image">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <img src="src/images/Laptop-1.jpg" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="src/images/Laptop-2.jpg" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="src/images/Laptop-3.jpg" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="product-infobox">
                                <div className="product-info">
                                    <span>Apple The New MacBook Retina 2016 MLHA2 12 inches</span>
                                    <div className="product-discription my-3">
                                        <p>1.6 GHz dual-core Intel Core i5 (Turbo Boost up to 2.7 GHz) with 3 MB shared L3 cache 8 GB of 1600 MHz LPDDR3 RAM; 128 GB PCIe-based flash storage</p>
                                        <p>13.3-Inch (diagonal) LED-backlit Glossy Widescreen Display, 1440 x 900 resolution Intel HD Graphics 6000</p>
                                        <p>OS X El Capitan, Up to 12 Hours of Battery Life Macbook Air does not have a Retina display on any model.</p>
                                    </div>
                                </div>
                                <hr className="divider" />
                                <div className="product-meta">

                                    <ul className="list-none">
                                        <li>MODEL : MAC90012K <span>|</span></li>
                                        <li>Categories : <a href="/">Tech Macbook Laptop</a><span>|</span></li>
                                        <li>Tags : <a href="/">Tech, </a><a href="/">Apple, MacBook, </a><a href="/">Laptop</a></li>
                                    </ul>
                                    <div className="share-links">
                                        <span>  Share Links : </span>
                                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-body rx-2">
                            <div className="row lg-4"></div>
                            <div className="free-delivery ">
                                <button><i class="fa-solid fa-truck-fast"></i>Free Delivery</button>
                            </div>
                            <div className="product-rating-rice my-3">
                                <div>
                                    <del style={{ color: "#4c4c4c" }}>$629.99</del>
                                </div>
                                <span>$495.00</span>
                                <span className='rating d-flex align-items-center'>
                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                    <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                    <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                </span>
                            </div>
                            <div className="product-color d-flex align-items-center">
                                <label>Select Color :</label>
                                <ul className="list-none d-inline-block">
                                    <li>red</li>
                                    <li>black</li>
                                    <li>blue</li>
                                </ul>
                            </div>

                            <div className="product-quantity mt-3">
                            <label >Quantity : </label>
                            <input type="number"value={1} />
                            </div>
                            <div className="cart-buy-option mt-4">
                                <button>Add To Cart</button>
                                <button>Buy Now</button>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModule
