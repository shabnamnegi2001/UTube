import React, {useState} from 'react'; 
import {BsThreeDots} from "react-icons/bs"
import {AiFillDislike ,AiFillLike,AiOutlineDislike,AiOutlineLike}  from "react-icons/ai";
import {MdPlaylistAddCheck} from "react-icons/md"
import {RiHeartAddFill,RiPlayListAddFill,RiShareForwardLine} from "react-icons/ri"
import './likeWatchlaterSaveBtn.css';

const LikeWatchlaterSaveBtn = ({vv, vidd}) => {
  const [saveVideo, setSaveVideo] = useState(false);
  const [dislikeBtn, setDislikeBtn] = useState(false);
  const [likeBtn, setLikeBtn] = useState(false);
  const currentUser =useSelector(state => state.currentuserreducer);
  
  const toggleSavedVideo = () => {
    if(currentUser){
      if(saveVideo){
        setSaveVideo(false);
      }
      else{
        setSaveVideo(true);
      }
    }
    else(alert('please login to save video'));
  }

  const toggleLikedVideo = () => {
    if(currentUser){
      console.log(currentUser);
      
      if(likeBtn){
        setLikeBtn(false);
      }
      else{
        setLikeBtn(true);
      }
    }
    else(alert('please login to like video'));
  }

  const toggleDislikedVideo = () => {
    if(currentUser){
      if(likeBtn){
        setDislikeBtn(false);
      }
      else{
        setDislikeBtn(true);
      }
    }
    else(alert('please login to dislike video'));
  }

  return (
    <div className='btns-container-page'>
      <div className='btn-page'>
        <BsThreeDots />
      </div>
      <div className='btn-page'>
        <div className='like-page' onClick={(e) => toggleLikedVideo(e)}>
          {likeBtn ?(
            <>
            <AiFillLike size={22} className='like-btn'/>
            </>
          ):(
            <>
            <AiOutlineLike size={22} className='like-btn'/>
            </>
          )}
          <b>{vv?.like}</b>
        </div>
        <div className='like-page' onClick={(e) => toggleDislikedVideo(e)}>
          {dislikeBtn ?(
            <>
            <AiFillDislike size={22} className='like-btn'/>
            </>
          ):(
            <>
            <AiOutlineDislike size={22} className='like-btn'/>
            </>
          )}
          <b>Dislike</b>
        </div>
        <div className='like-page' onClick={(e) => toggleSavedVideo(e)}>
          {saveVideo ?(
            <>
            <MdPlaylistAddCheck size={22} className='like-btn'/>
            <b>Saved</b>
            </>
          ):(
            <>
            <RiPlayListAddFill size={22} className='like-btn'/>
            <b>Save</b>
            </>
          )}
        </div>
        <div className='like-page'>
            <>
            <RiShareForwardLine size={22} className='like-btn'/>
            <b>Share</b>
            </>
        </div>
      </div>
    </div>
  )
}

export default LikeWatchlaterSaveBtn
