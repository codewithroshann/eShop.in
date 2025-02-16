import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './component/Navbar'
import TopNavbar from './component/TopNavbar'
import Alert from './component/Alert'
import ProductSearch from './component/ProductSearch'
import Home from './component/Home'
import Shop from './component/Shop';
import Footer from './component/Footer';
import Dryers from './component/Electronics/Dryers';
import Phones from './component/Mobiles/Phones';
import Mi from './component/Mobiles/Mi';
import MensShirt from './component/Fashion/MensShirt';
import FootWearMens from './component/Fashion/FootWearMens';
import MensHoodie from './component/Fashion/MensHoodie';
import NightDress from './component/Fashion/NightDress';
import WeddingDress from './component/Fashion/WeddingDress';
import KidsWear from './component/Fashion/KidsWear';
import AllFAshion from './component/Fashion/AllFAshion';
import GirlsBottomWear from './component/Fashion/GirlsBottomWear';
import GirlsTopWear from './component/Fashion/GirlsTopWear';
import MensTshirt from './component/Fashion/MensTshirt';
import EvCycle from './component/Electronics/EvCycle';
import Lights from './component/Electronics/Lights';
import Moniters from './component/Electronics/Moniters';
import Fans from './component/Electronics/Fans';
import Trimmers from './component/Electronics/Trimmers';
import Clocks from './component/Electronics/Clocks';
import Allelectronics from './component/Electronics/Allelectronics';
import AllApliances from './component/Home Appliances/AllApliances';
import Tv from './component/Home Appliances/Tv';
import MicroWave from './component/Home Appliances/MicroWave';
import MixerGrinder from './component/Home Appliances/MixerGrinder';
import VaccumCleaner from './component/Home Appliances/VaccumCleaner';
import WashingMachine from './component/Home Appliances/WashingMachine';
import Fridge from './component/Home Appliances/Fridge';
import GasStove from './component/Home Appliances/GasStove';
import Coolers from './component/Home Appliances/Coolers';
import Roomheater from './component/Home Appliances/Roomheater';
import Speakers from './component/Electronics/Speakers';
import AllGadgets from './component/Gadgets/AllGadgets';
import Vivo from './component/Mobiles/Vivo';
import Realme from './component/Mobiles/Realme';
import NothingPhone from './component/Mobiles/NothingPhone';
import Oppo from './component/Mobiles/Oppo';
import Samsung from './component/Mobiles/Samsung';
import OnePlus from './component/Mobiles/OnePlus';
import Infinix from './component/Mobiles/Infinix';
import OthersMobile from './component/Mobiles/OthersMobile';
import GooglePixel from './component/Mobiles/GooglePixel';
import Apple from './component/Mobiles/Apple';
import Nothing from './component/Mobiles/Nothing';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Foundation from './component/Beauty/Foundation';
import EyeLiner from './component/Beauty/EyeLiner';
import LipSticks from './component/Beauty/LipSticks';
import Mascara from './component/Beauty/Mascara';
import AllBeauty from './component/Beauty/AllBeauty';
import AllLaptops from './component/Laptops/AllLaptops';
import SmartWatches from './component/Gadgets/SmartWatches';
import Headphones from './component/Gadgets/Headphones';
import EarBuds from './component/Gadgets/EarBuds'
import Charger from './component/Gadgets/Charger';
import NeckBands from './component/Gadgets/NeckBands';
import Lenovo from './component/Laptops/Lenovo';
import InfinixLaptop from './component/Laptops/InfinixLaptop';
import Gigabyte from './component/Laptops/Gigabyte';
import AsusLaptop from './component/Laptops/AsusLaptop';
import AserLaptops from './component/Laptops/AserLaptops';



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
  //add to cart function
  const [cartItems, setCartItems] = useState([]);
  // Save cart data to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  // Load cart data from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);
  // UPDATING CART NOTIFY NUMBERS
  const [totalItems, setTotalItems] = useState(0);

  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <div className={`${screenWidth > 1440 ? "container" : ""}`}>
          <Navbar totalItems={totalItems} />
          <ProductSearch screenWidth={screenWidth} />
          <Alert />
          <Routes>
            <Route path="/" element={<Home screenWidth={screenWidth} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fashion" element={<AllFAshion />} />
            <Route path="/electronics/" element={<Allelectronics />} />
            <Route path="/home appliances/" element={<AllApliances />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/electronics" element={<Allelectronics />} />
            <Route path="/gadgets" element={<AllGadgets />} />
            {/* Files Under The Shop Components */}
            {/* ELECTRONICS */}
            <Route path="/:shop/dryers" element={<Dryers />} />
            <Route path="/:shop/cycles" element={<EvCycle />} />
            <Route path="/:shop/lights" element={<Lights />} />
            <Route path="/:shop/moniters" element={<Moniters />} />
            <Route path="/:shop/fans" element={<Fans />} />
            <Route path="/:shop/trimmers" element={<Trimmers />} />
            <Route path="/:shop/clocks" element={<Clocks />} />
            <Route path="/:shop/speakers" element={<Speakers />} />
            {/* HOME APPLIANCES */}
            <Route path="/:shop/tv" element={<Tv />} />
            <Route path="/:shop/micro waves" element={<MicroWave />} />
            <Route path="/:shop/grinders" element={<MixerGrinder />} />
            <Route path="/:shop/vaccum cleaners" element={<VaccumCleaner />} />
            <Route path="/:shop/washing machines" element={<WashingMachine />} />
            <Route path="/:shop/fridges" element={<Fridge />} />
            <Route path="/:shop/gas stoves" element={<GasStove />} />
            <Route path="/:shop/coolers" element={<Coolers />} />
            <Route path="/:shop/room heaters" element={<Roomheater />} />
            {/* MOBILES */}
            <Route path="/:shop/mi" element={<Mi />} />
            <Route path="/:shop/vivo" element={<Vivo />} />
            <Route path="/:shop/realme" element={<Realme />} />
            <Route path="/:shop/nothing phone" element={<NothingPhone />} />
            <Route path="/:shop/oppo" element={<Oppo />} />
            <Route path="/:shop/samsung" element={<Samsung />} />
            <Route path="/:shop/1+" element={<OnePlus />} />
            <Route path="/:shop/infinix" element={<Infinix />} />
            <Route path="/:shop/google pixel" element={<GooglePixel />} />
            <Route path="/:shop/apple" element={<Apple />} />
            <Route path="/:shop/nothing phone" element={<Nothing />} />
            <Route path="/:shop/other" element={<OthersMobile />} />

            {/* FASHION */}
            <Route path="/:shop/mens shirt" element={<MensShirt />} />
            <Route path="/:shop/mens tshirt" element={<MensTshirt />} />
            <Route path="/:shop/mens foot wear" element={<FootWearMens />} />
            <Route path="/:shop/boys hoodie" element={<MensHoodie />} />
            <Route path="/:shop/family night dress" element={<NightDress />} />
            <Route path="/:shop/wedding dress" element={<WeddingDress />} />
            <Route path="/:shop/kids wear" element={<KidsWear />} />
            <Route path="/:shop/girls bottom wear" element={<GirlsBottomWear />} />
            <Route path="/:shop/girls top wear" element={<GirlsTopWear />} />
            {/* BEAUTY PRODUCTS */}
            <Route path="/beauty" element={<AllBeauty />} />
            <Route path="/:shop/foundations" element={<Foundation />} />
            <Route path="/:shop/eyeliners" element={<EyeLiner />} />
            <Route path="/:shop/lipsticks" element={<LipSticks />} />
            <Route path="/:shop/mascaras" element={<Mascara />} />
            {/* LAPTOPS & COMPUTERS */}
            <Route path="/laptops&computers" element={< AllLaptops />} />
            <Route path="/:shop/gigabyte" element={<Mascara />} />
            <Route path="/:shop/lenovo laptops" element={<Lenovo/>} />
            <Route path="/:shop/infinix laptops" element={<InfinixLaptop/>} />
            <Route path="/:shop/gigabyte laptops" element={<Gigabyte/>} />
            <Route path="/:shop/asus laptops" element={<AsusLaptop/>} />
            <Route path="/:shop/aser laptops" element={<AserLaptops/>} />
            {/* GADGETS  */}
            <Route path="/:shop/headphones" element={<Headphones />} />
            <Route path="/:shop/smartwatches" element={<SmartWatches />} />
            <Route path="/:shop/tws" element={<EarBuds/>} />
            <Route path="/:shop/neckbands" element={<NeckBands/>} />
            <Route path="/:shop/chargers" element={<Charger/>} />
          
            


          </Routes>

        </div>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
