import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/search/Search'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/'element={<Home />} />
    <Route path='/search/:searchquery'element={<Search />} />
   </Routes>
  )
}

export default AllRoutes;
