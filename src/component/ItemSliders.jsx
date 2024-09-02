import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductModule from './ProductModule';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
{/*SWIPERJS MODULES  */ }
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const ItemSliders = () => {
    {/*COUNTDOWN FUCTION*/ }
    let [days, setDay] = useState("1");
    let [hours, setHours] = useState("1");
    let [min, setMin] = useState("1");
    let [sec, setSec] = useState("1");

    const deadline = "September , 31 , 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setDay(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60) % 24))
        setMin(Math.floor((time / 1000 * 60) % 60))
        setSec(Math.floor((time / 1000) % 60))
    }
    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    })



    return (
        <>
            <div className="slider-section">
                <div className="slider-container d-flex">                  
                    <ProductModule/>
                    <div className="slick-list my-4" >
                        <div className="slick-track">
                            <div className="section-title">

                                <h3>Deal Of The Week</h3>
                            </div>
                            <div className="slick-wrapper ">
                                <Swiper className='slider-func'
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{ delay: 3000, disableOnIntraction: false }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide className="slick-item ">
                                        <span>tech</span>
                                        <p>Blue Yeti Remote Control Robot</p>
                                        <img src="src/images/robot-slider.png" style={{ width: "82px" }} alt="" />
                                        <button type="button" class="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            view
                                        </button>
                                        <hr className="divider" />
                                        <div className="deal-price d-flex justify-content-between mb-4 my-3">
                                            <span>$195.00</span>
                                            <span className='rating d-flex align-items-center'>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                            </span>
                                        </div>
                                        <div className="product-awailablity">
                                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar w-75"></div>
                                            </div>
                                            <span>Already Sold: 20</span>
                                            <span>Awailable: 35</span>
                                        </div>

                                        <div className="countdown my-2">
                                            <div className="countdown-items">
                                                <span className="date"> {days} </span>
                                                Days
                                            </div>
                                            <div className="countdown-items">
                                                <span className="hours">{hours}</span>
                                                Hours
                                            </div>
                                            <div className="countdown-items">
                                                <span className="min">{min}</span>
                                                Mins
                                            </div>
                                            <div className="countdown-items">
                                                <span className="sec">{sec} </span>
                                                Sec
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slick-item ">
                                        <span>tech</span>
                                        <p>Nike White & Orange Airmax Shoe</p>
                                        <img src="src/images/shoe-slider.png" style={{ width: "130px" }} alt="" />
                                        <button type="button" class="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            view
                                        </button>
                                        <hr className="divider" />
                                        <div className="deal-price d-flex justify-content-between mb-4 my-3">
                                            <span>$250.00</span>
                                            <span className='rating d-flex align-items-center'>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                            </span>
                                        </div>
                                        <div className="product-awailablity">
                                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar w-75"></div>
                                            </div>
                                            <span>Already Sold: 20</span>
                                            <span>Awailable: 35</span>
                                        </div>
                                        <div className="countdown my-2">
                                            <div className="countdown-items">
                                                <span className="date"> {days} </span>
                                                Days
                                            </div>
                                            <div className="countdown-items">
                                                <span className="hours">{hours}</span>
                                                Hours
                                            </div>
                                            <div className="countdown-items">
                                                <span className="min">{min}</span>
                                                Mins
                                            </div>
                                            <div className="countdown-items">
                                                <span className="sec">{sec} </span>
                                                Sec
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slick-item ">
                                        <span>tech</span>
                                        <p>Louis Vitton Limited Edition Bag</p>
                                        <img src="src/images/ladiesBag-slider.png" style={{ width: "117px" }} alt="" />
                                        <button type="button" class="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            view
                                        </button>
                                        <hr className="divider" />
                                        <div className="deal-price d-flex justify-content-between mb-4 my-3">
                                            <span>$150.00</span>
                                            <span className='rating d-flex align-items-center'>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                            </span>
                                        </div>
                                        <div className="product-awailablity">
                                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar w-75"></div>
                                            </div>
                                            <span>Already Sold: 20</span>
                                            <span>Awailable: 35</span>
                                        </div>
                                        <div className="countdown my-2">
                                            <div className="countdown-items">
                                                <span className="date"> {days} </span>
                                                Days
                                            </div>
                                            <div className="countdown-items">
                                                <span className="hours">{hours}</span>
                                                Hours
                                            </div>
                                            <div className="countdown-items">
                                                <span className="min">{min}</span>
                                                Mins
                                            </div>
                                            <div className="countdown-items">
                                                <span className="sec">{sec} </span>
                                                Sec
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="slick-item ">
                                        <span>tech</span>
                                        <p>DermaCo Vitamin C FaceWash</p>
                                        <img src="src/images/faceWash-slider.png" style={{ width: "141px" }} alt="" />
                                        <button type="button" class="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            view
                                        </button>
                                        <hr className="divider" />
                                        <div className="deal-price d-flex justify-content-between mb-4 my-3 mb-4">
                                            <span>$200.00</span>

                                            <span className='rating d-flex align-items-center'>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                                <i className="fa-regular fa-star" style={{ color: '#FFD43B' }}></i>
                                            </span>
                                        </div>
                                        <div className="product-awailablity">
                                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar w-75"></div>
                                            </div>
                                            <span>Already Sold: 20</span>
                                            <span>Awailable: 35</span>
                                        </div>
                                        <div className="countdown my-2">
                                            <div className="countdown-items">
                                                <span className="date"> {days} </span>
                                                Days
                                            </div>
                                            <div className="countdown-items">
                                                <span className="hours">{hours}</span>
                                                Hours
                                            </div>
                                            <div className="countdown-items">
                                                <span className="min">{min}</span>
                                                Mins
                                            </div>
                                            <div className="countdown-items">
                                                <span className="sec">{sec} </span>
                                                Sec
                                            </div>

                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/*---------------PRODUCT CATEGORY-------------*/}
                    <div className="category-container my-4 ms-4 position-relative ">
                        <div className="category-product position-relative">
                            <div className="section-title category-title ">
                                <h3>Top Category</h3>
                            </div>
                            <div className="product-category-crousel">
                                <div className="product-warapper">
                                    <Swiper className='category-func'
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                      spaceBetween={30}
                                        slidesPerView={4}
                                        navigation
                                        loop={true}
                                        autoplay={{ delay: 3000, disableOnIntraction: false }}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/Helmate-image.png" alt="" />
                                                <span>Sports & Outdoors</span>
                                            </div>


                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/HeadPhone.png" alt="" />
                                                <span>HeadSets</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/Mobile-product.png" alt="" />
                                                <span>Smart Phones</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/fridge-removebg-preview.png" alt="" />
                                                <span>Home Appliances</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/CCTV-image.png" alt="" />
                                                <span>Security</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/MIcrowave-image.png" alt="" />
                                                <span>Home Appliances</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/WashingMachne.png" alt="" />
                                                <span>Home Appliances</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <img src="src/images/AirCooler-image.png" alt="" />
                                                <span>Home Appliances</span>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default ItemSliders
