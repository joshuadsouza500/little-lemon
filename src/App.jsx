import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutTeam } from "./pages/AboutTeam";
import { BookingPage } from "./pages/BookingPage";
import { Menu } from "./pages/Menu";

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element= {<Home />} />
        <Route path="/home" element= {<Home />}/>
        <Route path="/about" element= {<AboutTeam />}/>
        <Route path="/menu" element= {<Menu />}/>
        <Route path="/reservation" element= {<BookingPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
