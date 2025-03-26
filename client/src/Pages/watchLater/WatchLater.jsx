import React from 'react';
import WHL from '../../Components/WHL/WHL.jsx';
import vid from '../../Components/videos/vid.mp4';

const WatchLater = () => {
    const watchLaterVideoList = [
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
      <WHL page={'Watch Later'} videoList={watchLaterVideoList}/>
    )
}

export default WatchLater

