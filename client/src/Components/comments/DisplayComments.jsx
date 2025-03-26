import React, { useState } from 'react';
import './comment.css';
import moment from 'moment';
import { useSelector } from 'react-redux';

const DisplayComments = ({cid, userId, commentBody, userCommented,commenton}) => {
  const [edit, setEdit] = useState(false);
  const [cmntBody, setCmntBody] = useState("");
  const [cmntId, setCmntId] = useState("");
  const currentUser = useSelector(state => state.currentuserreducer);
const handleEdit = (cid, commentBody) => {
  setEdit(true);
  setCmntId(cid);
  setCmntBody(commentBody)
}
  
  return (
    <>
    {
      edit?(
        <form className='display-comments-form'>
        <input type='text' onChange={(e) => setCmntBody(e.target.value)} placeholder='Edit comments' value={cmntBody} className='display-comments-input'/>
        <input type='submit' className='display-comments-add-btn' 
        // value={change} 
        />
        </form>
        
      ):(
        <p className='comment-body'>{commentBody}</p>
      )
    }
    <p className='user-commented'>{" "}- {userCommented} commented {moment(commenton).fromNow()}</p>
    {currentUser?.result.id=== userId && (
      <p className="edit-delete-comment">
      <i onClick={()=>handleEdit(cid,commentBody)}>Edit</i>
      <i >Delete</i>
  </p>
    ) }
    </>
  )
}

export default DisplayComments
