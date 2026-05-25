import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Programm from "./pages/program/Programm"
import Gallery from "./pages/gallery/Gallery"
import Contact from "./pages/contact/Contact"
import About from "./pages/About/About"


function App() {
 
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/program" element={<Programm/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
