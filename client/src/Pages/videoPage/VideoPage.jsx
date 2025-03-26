import React, { useEffect } from 'react';
import "./videoPage.css";
import moment from 'moment';
import  LikeWatchlaterSaveBtn from "./LikeWatchlaterSaveBtn.jsx"
import { Link, useParams } from 'react-router-dom';
import vid from '../../Components/videos/vid.mp4';
import Comment from '../../Components/comments/Comment.jsx';
import { useSelector } from 'react-redux';

const VideoPage = () => {
  // const vidd = useParams();
  const { vidd } = useParams(); 

const vids = [
  {
    id:1,
    vid_src: vid,
    channel: "Anna's channel",
    title: "my first crochet",
    uploader: "anna george",
    description:"In video 1 same description will be seen in  each video"
  },
  {
    id:2,
    vid_src: vid,
    channel: "Reena's channel",
    title: "my first pottery",
    uploader: "Reena",
    description:"In video 2 same description will be seen in  each video"
  },
  {
    id:3,
    vid_src: vid,
    channel: "Elsa's channel",
    title: "my first cooking",
    uploader: "Elsa george",
    description:"In video 3 same description will be seen in  each video"
  },
  {
    id:4,
    vid_src: vid,
    channel: "Albert's channel",
    title: "my first henna designing",
    uploader: "anna george",
    description:"In video 4 same description will be seen in  each video"
  },
  {
    id:5,
    vid_src: vid,
    channel: "Albatross's channel",
    title: "my first hairstyling",
    uploader: "albatross",
    description:"In video 5 same description will be seen in  each video"
  },
  {
    id:6,
    vid_src: vid,
    channel: "kitty's channel",
    title: "my first course",
    uploader: "kitty",
    description:"In video 6 same description will be seen in  each video"
  }
 ];

 const vidNumber =  parseInt(vidd, 10)
 const vv = vids?.filter(val => val.id === vidNumber)[0];
 const currentUser =useSelector(state => state.currentuserreducer);

  return (
    <>
      <div className='container_videoPage'>
      <div className='container2_videoPage'>
        <div className='video_displayPage'>
          <video src={vid} className='video_display' controls></video>
          <div className='video_details'>
            <div className='video_btns_title_page'>
              <p className='video_title'>{vv?.title}</p>
              <div className='views_page'>
                {vv?.views} views<div className='dot'></div>{" "}
                {moment(vv?.createdat).fromNow()}
              </div>
             <LikeWatchlaterSaveBtn vv={vv} vid={vidd}/> 
            </div>
          </div>
          <Link to={'/'} className='channel_details_page'>
          <b className='channel_page'>
            <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
          </b>
          <p className='channel_name'>{vv?.uploader}</p>
          </Link>
          <div className='comments_page'>
            <h2>
              <u>comments</u>
            </h2>
            <Comment  videoid={vv.id}/>
          </div>
        </div>
      </div>
      <div className='more_videos'>More Videos</div>
      </div>

    </>
  )
}

export default VideoPage;
