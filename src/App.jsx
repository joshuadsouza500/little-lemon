import {  Route, Routes, useLocation} from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutTeam } from "./pages/AboutTeam";
import { BookingPage } from "./pages/BookingPage";
import { Menu } from "./pages/Menu";
import { DishPage } from "./pages/DishPage";
import { CartPage } from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";


function App() {


  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)  
      requestAnimationFrame(raf)
     }
       requestAnimationFrame(raf)
     },[])

  const location = useLocation();
   
  return (
    <>
    <CartProvider>
     <NavBar />

     <AnimatePresence>

      <ScrollToTop />
         <Routes location={location} key={location.pathname} >
             <Route index element= {<Home />} />
             <Route path="/home" element= {<Home />}/>
             <Route path="/about" element= {<AboutTeam />}/>
             <Route path="/menu" element= {<Menu   />} />
             <Route path="/:id" element= {<DishPage  />} />
             <Route path="/reservation" element= {<BookingPage />}/>
             <Route path="/cart" element= {<CartPage   />} /> 
         </Routes>
  
        </AnimatePresence>
        
    </CartProvider>
    </>
  )
}

export default App
