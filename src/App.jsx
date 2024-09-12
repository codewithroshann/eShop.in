import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './component/Navbar'
import TopNavbar from './component/TopNavbar'
import ProductSearch from './component/ProductSearch'
import Home from './component/Home'

function App() {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 return (
    <>

      <TopNavbar />
      <div className={`${screenWidth>1440?"container":""}`}>
        <Navbar />
        <ProductSearch screenWidth={screenWidth}/>
        <Home screenWidth={screenWidth}/>
      </div>

    </>
  )
}

export default App
