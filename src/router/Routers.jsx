import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import About from '../pages/About';
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import Gallery from '../pages/Gallery';
import Blogs from '../pages/Blogs';
import ScrollToTop from '../utils/scrolltoTop';

const Routers = () => {
  return (
    <div>
    <ScrollToTop />
     <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/tours/search' element={<SearchResultList/>}/>
     </Routes>
    </div>
  )
}

export default Routers
