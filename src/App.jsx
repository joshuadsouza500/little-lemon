import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutTeam } from "./pages/AboutTeam";
import { BookingPage } from "./pages/BookingPage";
import { Menu } from "./pages/Menu";
import { DishPage } from "./pages/DishPage";
import { CartPage } from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";




function App() {

 

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route index element= {<Home />} />
        <Route path="/home" element= {<Home />}/>
        <Route path="/about" element= {<AboutTeam />}/>
        <Route path="/menu" element= {<Menu   />} />
        <Route path="/:id" element= {<DishPage  />} />
       
        <Route path="/reservation" element= {<BookingPage />}/>
        <Route path="/cart" element= {<CartPage   />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
