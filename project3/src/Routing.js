import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import About from './About'

function Routing() {
  return (
    <div>Menu<br></br>
        <BrowserRouter>
        <Link to="/home">Home Page</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contactus">Contact</Link>
        <Link to="/About">About</Link>
        <Routes>
            <><Route path="" element={<Gallery/>}></Route></>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/Contactus" element={<Contact/>}></Route>
            <Route path="/aboutus" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing