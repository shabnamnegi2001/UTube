import React from 'react';
import './showVideo.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ShowVideo = ({vid}) => {
  return (
    <>
   <Link to={'/'} >
    <video src={vid.vid_src}  className='video_showVideo' />
   </Link>
   <div className='video-description-nav'>
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
        {vid?.viewsf} views <div className='dot'>{moment(vid?.createdAt).fromNow()}</div>
    </pre>
   </div>
   </>
  )
}

export default ShowVideo
