import React from 'react';
import './showVideo.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { GoDotFill } from "react-icons/go";

const ShowVideo = ({vid}) => {
  return (
    <>
   <Link to={`/videopage/${vid.id}`} >
    <video src={vid.vid_src}  className='video_showVideo' />
   </Link>
   <div className='video-description-nav'>
   <div className='video-description'>
    <div className='vid-channel-logo'>
        <>{vid?.uploader?.charAt(0).toUpperCase()}</>
    </div>
    <div>
      <p className='video-title'>{vid?.title}</p>
    </div>
   </div>
   <div className='video-details'>
    <pre>{vid?.uploader}</pre>
    <pre className='video-uploadtime'>
        {vid?.views} views 
        <div className='dot'><GoDotFill size={10}/>{moment(vid?.createdAt).fromNow()}</div>
    </pre>
   </div>
   </div>
   </>
  )
}

export default ShowVideo
