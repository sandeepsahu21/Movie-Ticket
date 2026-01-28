import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Mybooking from './Mybooking'
import BookNow from '../pages/BookNow'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>
           <Route path='login' element={<Login/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='Booking' element={<Mybooking/>}></Route>
            <Route path='BookNow' element={<BookNow/>}></Route>
          </Route>
      </Routes>
    </>
  )
}

export default App
