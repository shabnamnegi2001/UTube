import React from 'react';
import './Home.css'
import LeftSidebar from '../../Components/leftsidebar/leftSidebar';
import vid from '../../Components/videos/vid.mp4';
import ShowVideoGrid from '../../Components/showVideoGrid/ShowVideoGrid.jsx';

const Home = () => {
  const navList = [
    "All",
    "Python", 
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
 ];
 
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

  return (
    <div className='container-pages-app'>
     <LeftSidebar />
    <div className='container2-pages-app'>
      <div className='navigation-home'>
        {navList.map((val) => {
          return(
            <p key={val} className='home-nav-btn'>{val}</p>
          )
        })}
      </div>
      <div>
        <ShowVideoGrid vids={vids}/>
      </div>
    </div>
    </div>
  )
}

export default Home;
