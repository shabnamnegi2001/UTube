import React from 'react';
import './library.css';
import LeftSidebar from '../../Components/leftsidebar/leftSidebar.jsx';
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import vid from '../../Components/videos/vid.mp4';
import WHLvideolist from '../../Components/WHL/WHLvideolist.jsx';
import { useSelector } from 'react-redux';

const Library = () => {

    const currentUser =useSelector(state => state.currentuserreducer);

     const vids = [
      {
        id:1,
        vid_src: vid,
        channel: "Anna's channel",
        title: "my first crochet",
        uploader: "anna george",
        description:"In video 1 same description will be seen in  each video",
        viewer: 1

      },
      {
        id:2,
        vid_src: vid,
        channel: "Reena's channel",
        title: "my first pottery",
        uploader: "Reena",
        description:"In video 2 same description will be seen in  each video",
        viewer: 1
      },
      {
        id:3,
        vid_src: vid,
        channel: "Elsa's channel",
        title: "my first cooking",
        uploader: "Elsa george",
        description:"In video 3 same description will be seen in  each video",
        viewer: 1
      },
      {
        id:4,
        vid_src: vid,
        channel: "Albert's channel",
        title: "my first henna designing",
        uploader: "anna george",
        description:"In video 4 same description will be seen in  each video",
        viewer: 1
      },
      {
        id:5,
        vid_src: vid,
        channel: "Albatross's channel",
        title: "my first hairstyling",
        uploader: "albatross",
        description:"In video 5 same description will be seen in  each video",
        viewer: 1
      },
      {
        id:6,
        vid_src: vid,
        channel: "kitty's channel",
        title: "my first course",
        uploader: "kitty",
        description:"In video 6 same description will be seen in  each video",
        viewer: 1
      }
     ];

  return (
    <div className='container-pages-app'>
      <LeftSidebar />
      <div className="container2-pages-app">
        <div className="container-library-page">
            <h1 className="title-container-page">
                <b>
                    <FaHistory  />
                </b>
                <b>History</b>
            </h1>
            <div className='videoList-container'>
                <WHLvideolist page={"History"} currentUser={currentUser?.result?.id} videoList={vids}/>
            </div>
        </div>
        <div className="container-library-page">
            <h1 className="title-container-page">
                <b>
                    <MdOutlineWatchLater />
                </b>
                <b>Watch Later</b>
            </h1>
            <div className='videoList-container'>
                <WHLvideolist page={"Watch Later"} currentUser={currentUser?.result?.id} videoList={vids}/>
            </div>
        </div>
        <div className="container-library-page">
            <h1 className="title-container-page">
                <b>
                    <AiOutlineLike  />
                </b>
                <b>Liked Videos</b>
            </h1>
            <div className='videoList-container'>
                <WHLvideolist page={"Liked Videos"} currentUser={currentUser?.result?.id} videoList={vids}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Library
