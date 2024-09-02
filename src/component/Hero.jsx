import React from 'react'
function Hero() {
    return (
        <>
            <div className="hero-section ">
                <div className="hero-container justify-content-end d-flex ">
                    <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="src/images/clothModel-image.avif" className="d-block w-100" alt="..." />
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h6>Clothing</h6>
                                    <h1>Mens Collection</h1>
                                    <p className='text-uppercase'>Top 10 best mens collections</p>
                                    <a href="/"><button className='btn btn-outline-primary btn-sm fw-semibold text-uppercase'>buy now</button></a>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="src/images/camera-Image.avif" className="d-block w-100" alt="..." />
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h6>Cameras</h6>
                                    <h1>Sony IMX Cameras</h1>
                                    <p className='text-uppercase'>all top companies cameras available.</p>
                                    <a href="/"><button className='btn btn-outline-primary btn-sm fw-semibold  text-uppercase'>buy now</button></a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="src/images/mobile-image.avif" className="d-block w-100" alt="..." />
                                <div className="carousel-caption text-start d-none d-md-block">
                                    <h6>Mobiles</h6>
                                    <h1>New Arrivels</h1>
                                    <p className='text-uppercase'>mobiles available in all segments.</p>
                                    <a href="/"><button className='btn btn-outline-primary btn-sm fw-semibold text-uppercase'>buy now</button></a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="offer-box " >
                        <div className="col">
                        <div className="card " >
                            <a href="/">
                                <img src="src/images/clothModel-3.avif" className="card-img-top" alt="..." />
                                <div className="text">
                                    <h6>clothing</h6>
                                    extra <span>30% off </span>in all styles
                                </div>
                           </a>
                        </div>
                        <div className="card" >
                            <a href="/">
                                <img src="src/images/camera-2.webp" className="card-img-top" alt="..." />
                                <div className="text">
                                    <h6>gadgets</h6>
                                    <span>45% off</span> in all cameras
                                </div>
                            </a>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card" >
                            <a href="/">
                                <img src="src/images/Headsets.webp" className="card-img-top" alt="..." />
                                <div className="text">
                                    <h6>electonics</h6>
                                    new headsets available under <span>1500</span>
                                </div>
                            </a>
                        </div>
                        <div className="card" >
                            <a href="/">
                                <img src="src/images/makeup-image.jpeg" className="card-img-top" alt="..." />
                                <div className="text">
                                    <h6>beauty</h6>
                                    <span>20% off </span>in all beauty products
                                </div>
                            </a>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Hero
