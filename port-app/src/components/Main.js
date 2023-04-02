import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const Main = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pages/About' element={<About />} />
            <Route path='/pages/Work' element={<Work />} />
            <Route path='/pages/Blog' element={<Blog />} />
            <Route path='/pages/Contact' element={<Contact />} />
        </Routes>
    );
}
 
export default Main;