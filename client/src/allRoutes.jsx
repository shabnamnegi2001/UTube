import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/search/Search'
import VideoPage from './Pages/videoPage/VideoPage'
import Channel from './Pages/channel/Channel'
import Library from './Pages/library/Library'
import LikedVideo from './Pages/likedVideo/LikedVideo'
import WatchHistory from './Pages/watchHistory/WatchHistory'
import WatchLater from './Pages/watchLater/WatchLater'
import YourVideo from './Pages/yourVideo/YourVideo'

const AllRoutes = ({setEditCreateChanelBtn, setVideoUploadPage}) => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/search/:searchquery' element={<Search />} />
    <Route path='/videopage/:vidd' element={<VideoPage />} />
    <Route path='/library' element={<Library />} />
    <Route path='/likedVideo' element={<LikedVideo />} />
    <Route path='/watchHistory' element={<WatchHistory />} />
    <Route path='/watchLater' element={<WatchLater />} />
    <Route path='/yourVideo' element={<YourVideo />} />
    <Route path='/channel/:cid' element={<Channel setEditCreateChanelBtn={setEditCreateChanelBtn} setVideoUploadPage={setVideoUploadPage}/> } />
   </Routes>
  )
}

export default AllRoutes;
