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
const ItemSliders = (props) => {
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
            {/* OFFER ITEM SLIDER */}
            <div className="slider-section">
                <div className="slider-container d-flex">
                    <ProductModule />
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
                                    autoplay={{ delay: 3000000, disableOnIntraction: false }}
                                    breakpoints={{

                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                        },

                                        500: {
                                            slidesPerView: 2,
                                            spaceBetween: 15
                                        },

                                        1080: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        }
                                    }}

                                >
                                    <SwiperSlide className="slick-item ">
                                        <span>tech</span>
                                        <p>Blue Yeti Remote Control Robot</p>
                                        <div className='position-relative' style={{ width: "max-content", margin: "auto" }}>
                                            <img src="src/images/robot-slider.png" className='extend image-1' alt="" />
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                -25%
                                            </span>
                                        </div>
                                        <button type="button" className="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                        <div className='position-relative' style={{ width: "max-content", margin: "auto" }}>
                                            <img src="src/images/shoe-slider.png" className='extend image-2' alt="" />
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                -25%
                                            </span>
                                        </div>
                                        <button type="button" className="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                        <div className='position-relative' style={{ width: "max-content", margin: "auto" }}>
                                            <img src="src/images/ladiesBag-slider.png" className='extend image-3' alt="" />
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                -25%
                                            </span>
                                        </div>
                                        <button type="button" className="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                        <div className='position-relative' style={{ width: "max-content", margin: "auto" }}>
                                            <img src="src/images/faceWash-slider.png" className='extend image-4' alt="" />
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                -25%
                                            </span>
                                        </div>
                                        <button type="button" className="btn btn-primary view-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                        {/* MINI OFFER BANNER */}
                        <div className="mini-sidebar mt-4 position-relative">
                            <a href="/">
                                <img src="src/images/Tech-Item.jpg" alt="" />
                                <div className="sidebar-text position-absolute">
                                    Sale Up To <br /> <span>30% Off</span>
                                </div>
                            </a>
                        </div>
                        {/* LETEST ITEM SLIDER  */}

                        <div className="slick-track slick-track-2">
                            <div className="section-title">
                                <h3>Latest Items</h3>
                            </div>
                            <div className="slick-wrapper ">
                                <Swiper className='slider-func'
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{ delay: 3000000, disableOnIntraction: false }}
                                >
                                    <SwiperSlide className="slick-item slick-item-2">
                                        <ul className="none-list">
                                            <li className="letest-items letest-items-1">
                                                <div className='product-single'>
                                                    <a href="/">
                                                        <div className="row">
                                                            <div className="col letestitem-col-1">
                                                                <img src="src/images/hairDryer-removebg-preview.png" alt="" />
                                                            </div>
                                                            <div className="col letestitem-col-2 ">
                                                                <div className="title">
                                                                    Hair Dryer
                                                                </div>
                                                                <div className="deal-price price d-flex flex-column">
                                                                    <span>$195.00</span>
                                                                    <del>$299.99</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>

                                            <li className="letest-items letest-items-2">
                                                <div className='product-single'>
                                                    <a href="/">
                                                        <div className="row">
                                                            <div className="col letestitem-col-1">
                                                                <img src="src/images/HeadPhone.png" alt="" />
                                                            </div>
                                                            <div className="col letestitem-col-2">
                                                                <div className="title">
                                                                    BT-5 HeadPhone
                                                                </div>
                                                                <div className="deal-price price d-flex flex-column">
                                                                    <span>$195.00</span>
                                                                    <del>$299.99</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="letest-items letest-items-3"></li>
                                            <div className='product-single'>
                                                <a href="/">
                                                    <div className="row">
                                                        <div className="col letestitem-col-1">
                                                            <img src="src/images/Helmate-image.png" alt="" />
                                                        </div>
                                                        <div className="col letestitem-col-2">
                                                            <div className="title">
                                                                Sports Helmate
                                                            </div>
                                                            <div className="deal-price price d-flex flex-column">
                                                                <span>$195.00</span>
                                                                <del>$299.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <li className="letest-items letest-items-4"></li>
                                            <div className='product-single'>
                                                <a href="/">
                                                    <div className="row">
                                                        <div className="col letestitem-col-1">
                                                            <img src="src/images/hightechcctv-removebg-preview.png" alt="" />
                                                        </div>
                                                        <div className="col letestitem-col-2">
                                                            <div className="title">
                                                                BlueRay CCTV
                                                            </div>
                                                            <div className="deal-price price d-flex flex-column">
                                                                <span>$195.00</span>
                                                                <del>$299.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <li className="letest-items letest-items-5">
                                                <div className='product-single'>
                                                    <a href="">

                                                        <div className="row">
                                                            <div className="col letestitem-col-1">
                                                                <img src="src/images/faceWash-slider.png" alt="" />
                                                            </div>
                                                            <div className="col letestitem-col-2">
                                                                <div className="title">
                                                                    DermaCo FaceWash
                                                                </div>
                                                                <div className="deal-price price d-flex flex-column">
                                                                    <span>$195.00</span>
                                                                    <del>$299.99</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </SwiperSlide>
                                    <SwiperSlide className="slick-item slick-item-2">
                                        <ul className="none-list">
                                            <li className="letest-items letest-items-1">
                                                <div className='product-single'>
                                                    <a href="/">
                                                        <div className="row">
                                                            <div className="col letestitem-col-1">
                                                                <img src="src/images/hairDryer-removebg-preview.png" alt="" />
                                                            </div>
                                                            <div className="col letestitem-col-2">
                                                                <div className="title">
                                                                    Hair Dryer
                                                                </div>
                                                                <div className="deal-price price d-flex flex-column">
                                                                    <span>$195.00</span>
                                                                    <del>$299.99</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>

                                            <li className="letest-items letest-items-2">
                                                <div className='product-single'>
                                                    <a href="/">
                                                        <div className="row">
                                                            <div className="col letestitem-col-1">
                                                                <img src="src/images/HeadPhone.png" alt="" />
                                                            </div>
                                                            <div className="col letestitem-col-2">
                                                                <div className="title">
                                                                    BT-5 HeadPhone
                                                                </div>
                                                                <div className="deal-price price d-flex flex-column">
                                                                    <span>$195.00</span>
                                                                    <del>$299.99</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="letest-items letest-items-3"></li>
                                            <div className='product-single'>
                                                <a href="/">
                                                    <div className="row">
                                                        <div className="col letestitem-col-1">
                                                            <img src="src/images/Helmate-image.png" alt="" />
                                                        </div>
                                                        <div className="col letestitem-col-2">
                                                            <div className="title">
                                                                Hair Dryer
                                                            </div>
                                                            <div className="deal-price price d-flex flex-column">
                                                                <span>$195.00</span>
                                                                <del>$299.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <li className="letest-items letest-items-4"></li>
                                            <div className='product-single'>
                                                <a href="/">
                                                    <div className="row">
                                                        <div className="col letestitem-col-1">
                                                            <img src="src/images/hightechcctv-removebg-preview.png" alt="" />
                                                        </div>
                                                        <div className="col letestitem-col-2">
                                                            <div className="title">
                                                                Hair Dryer
                                                            </div>
                                                            <div className="deal-price price d-flex flex-column">
                                                                <span>$195.00</span>
                                                                <del>$299.99</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <li className="letest-items letest-items-5">
                                                <div className='product-single'>
                                                    <a href="">

                                                        <div className="row">
                                                            <div className="col letestitem-col-1">
                                                                <img src="src/images/faceWash-slider.png" alt="" />
                                                            </div>
                                                            <div className="col letestitem-col-2">
                                                                <div className="title">
                                                                    Hair Dryer
                                                                </div>
                                                                <div className="deal-price price d-flex flex-column">
                                                                    <span>$195.00</span>
                                                                    <del>$299.99</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                        {/* SUPPORT SERVICES  */}
                        <div className="mt-5">
                            <div className="store-support">
                                <ul className="none-list">
                                    <li className='d-flex'>
                                        <div className="support-icon col-md-5 d-flex">
                                            <i class="fa-solid fa-dolly"></i>
                                        </div>
                                        <div className="support-title col">
                                            <strong>Free Delivery</strong>
                                            <p>  For all order over 99$</p>
                                        </div>
                                    </li>
                                    <li className='d-flex'>
                                        <div className="support-icon col-md-5 d-flex">
                                            <i class="fa-brands fa-nfc-directional fa-rotate-90 fw-bold"></i>
                                        </div>
                                        <div className="support-title col">
                                            <strong>30 Days Return</strong>
                                            <p>If goods have Problems</p>
                                        </div>
                                    </li>

                                    <li className='d-flex'>
                                        <div className="support-icon col-md-5 d-flex">
                                            <i class="fa-regular fa-credit-card"></i>
                                        </div>
                                        <div className="support-title col">
                                            <strong>Secure Payment</strong>
                                            <p>100% secure payment</p>
                                        </div>
                                    </li>

                                    <li className='d-flex'>
                                        <div className="support-icon col-md-5 d-flex">
                                            <i class="fa-solid fa-headset"></i>
                                        </div>
                                        <div className="support-title col">
                                            <strong>24/7 Support</strong>
                                            <p>Dedicated Support</p>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>



                    </div>
                    {/*--------------- MAIN SECTION PRODUCT CATEGORY-------------*/}
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
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1,
                                                spaceBetween: 10
                                            },
                                            450: {
                                                slidesPerView: 2,
                                                spaceBetween: 10
                                            },
                                            700: {
                                                slidesPerView: 3,
                                                spaceBetween: 20
                                            },
                                            1080: {
                                                slidesPerView: 4,
                                                spaceBetween: 25
                                            }
                                        }}
                                    >
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="/">
                                                    <img src="src/images/Helmate-image.png" alt="" />
                                                    <span>Sports & Outdoors</span>
                                                </a>
                                            </div>


                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="/">
                                                    <img src="src/images/HeadPhone.png" alt="" />
                                                    <span>HeadSets</span>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="/">
                                                    <img src="src/images/Mobile-product.png" alt="" />
                                                    <span>Smart Phones</span>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="">

                                                    <img src="src/images/fridge-removebg-preview.png" alt="" />
                                                    <span>Home Appliances</span>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="">

                                                    <img src="src/images/CCTV-image.png" alt="" />
                                                    <span>Security</span>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="">

                                                    <img src="src/images/MIcrowave-image.png" alt="" />
                                                    <span>Home Appliances</span>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="">
                                                    <img src="src/images/WashingMachne.png" alt="" />
                                                    <span>Home Appliances</span>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="product-item-wrapper">
                                            <div className="product-item">
                                                <a href="">

                                                    <img src="src/images/AirCooler-image.png" alt="" />
                                                    <span>Home Appliances</span>
                                                </a>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>

                            {/*--------------- PRODUCT TAB HOME-------------*/}
                            <div className="product-tab mt-4">
                                <div className="product-nav">
                                    <button className='select-btn'>New Arrivals</button>
                                    <button className="mx-2">On Sale</button>
                                    <button className="mx-2">Best Rated</button>
                                </div>

                                <div className="tab-content mt-5">

                                    <div className="tab-product">
                                        <div className="title">
                                            <small>
                                                <a href="/">Phone</a>
                                            </small>
                                            <h3>Blue Yeti USB Microphone Blackout Edition</h3>
                                         </div>
                                         <div className="thumb">
                                             <img src="" alt="" />
                                        </div>
                                 <div className="rating"></div>
                                    </div>
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
