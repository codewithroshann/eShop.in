import React from 'react'
import '../App.css'

const TopNavbar = () => {
    return (
        <>
            <div className="top-navbar">
                <div className="navbar">
                <div className="nav-row">
                    <div className="topnav-left">
                        <ul className='nav-info'>
                            <li>SHOP EVENTS & SAVE UP TO <span>65% OFF!</span></li>
                            <li>CALL US: <span> 001-1234-88888</span></li>
                        </ul>
                    </div>
                    <div className="topnav-right">
                        <ul className='nav-info nav-info-right' >
                            <li>
                                <select >
                                <option defaultValue="usd">USD</option>
                                <option value="aud">AUD</option>
                                <option value="eur">EUR</option>
                            </select>
                            </li>
                            <li className='breaker'><span >|</span></li>
                        </ul>
                            <ul className='nav-info nav-info-right  nav-info-right-2' >
                            <li>
                                <select >
                                <option defaultValue="usd">ENGLISH</option>
                                <option value="aud">FRENCH</option>
                                <option value="eur">CHINESE</option>
                            </select>
                            </li>
                            <li className='breaker'><span >|</span></li>
                        </ul>
                            <ul className='nav-info nav-info-right  nav-info-right-3' >
                            <li><a href=""> <i className="fa-brands fa-facebook-f"></i></a>  </li>
                            <li> <a href=""><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa-brands fa-instagram"></i> </a></li>
                            <li> <a href=""><i className="fa-brands fa-youtube"></i></a> </li>
                        </ul>



                    </div>

                </div>
                </div>

            </div>

        </>
    )
}

export default TopNavbar
