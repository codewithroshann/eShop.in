import React, { useState } from 'react'

function ProductSearch(props) {
    const [height, setHeight] = useState("")

    const toggleClass = () => {
        if (height === "") {
            setHeight("toggle-dropdown");
        }
        else {
            setHeight("");
        }

    }



    return (
        <>
            <div className="product-search my-2">
                <div className="search-container">

                    <div className="option-container"onClick={toggleClass} >
                        <div className="option-box">
                            <i className="fa-solid fa-bars"></i> <span> All Departments</span>
                        </div>

                        <div className={`dropdown ${height}${props.screenWidth<1080?"toggle-dropdown":""}`}>
                            <div className="dropdown-box">
                                <ul>
                                    <li><a href="/"><i className="fa-solid fa-laptop"></i>Computer </a></li>
                                    <li><a href="/"><i className="fa-solid fa-tv"></i>TV & Smart Box</a></li>
                                    <li><a href="/"><i className="fa-solid fa-camera"></i>Cameras & Photography</a></li>
                                    <li><a href="/"><i className="fa-solid fa-headphones"></i>Headphones</a></li>
                                    <li><a href="/"><i className="fa-solid fa-music"></i>Musical Instrument</a></li>
                                    <li><a href="/"><i className="fa-solid fa-tablet"></i>Smart Phones & Tablets</a></li>
                                    <li><a href="/"><i className="fa-solid fa-bolt"></i>Accessories</a></li>
                                    <li><a href="/"><i className="fa-solid fa-microphone"></i>Home Audio & Theator</a></li>
                                    <li><a href="/"><i className="fa-solid fa-print"></i>Printers</a></li>
                                    <li><a href="/"><i className="fa-solid fa-fax"></i>Fax Machine</a></li>
                                    <li><a href="/"><i className="fa-solid fa-house-chimney-window"></i>House Holds</a></li>
                                    <li><a href="/"><i className="fa-solid fa-clock"></i>Watches</a></li>
                                    <li><a href="/"><i className="fa-solid fa-shuffle"></i>Other</a></li>
                                </ul>
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
                    <div className="cart-section cart2">
                        <div className="cart-container">
                            <ul>
                                <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg></a></li>
                                <li><a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                    <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                                        1
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </a></li>
                                <li><a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>
                                    <span className="top-5 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                    <span className="cost">$180.00</span>

                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default ProductSearch
