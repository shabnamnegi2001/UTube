import React, { useEffect } from 'react';
import ShowVideoList from '../showVideoList/ShowVideoList';

const WHLvideolist = ({page, currentUser, videoList}) => {

  return (
    <>
    {
      currentUser?(
        <>
       { videoList?.filter(q => q?.viewer === currentUser).reverse().map(m => {
        return (
          <>
          <ShowVideoList videoId = {m?.id} key={m?.id}/>
          </>
        )
       }) }
        </>
    ): (
        <>
        <h2 style={{color:"white"}}>Please login to Watch your {page}</h2>
        </>
        ) }
       </>

  )
}

export default WHLvideolist


//.filter(q => q?.viewer === currentUser) line no.11