import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/search/Search'
import VideoPage from './Pages/videoPage/VideoPage'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/'element={<Home />} />
    <Route path='/search/:searchquery'element={<Search />} />
    <Route path='/videopage/:vidd'element={<VideoPage />} />
   </Routes>
  )
}

export default AllRoutes;
