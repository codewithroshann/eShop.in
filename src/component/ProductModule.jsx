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
                        <div class="modal-body">
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


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModule
