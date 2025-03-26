import React, { useState } from 'react';
import DisplayComments from './DisplayComments';
import { useSelector } from 'react-redux';

const Comment = ({videoid}) => {
    const [commentText, setCommentText] = useState('');
    const currentUser = useSelector(state => state.currentuserreducer);;
    const commmentList = [{
        id: 1,
        commentBody: "hello",
        userCommented: "ABC"
    } ,
    {
        id: 2,
        commentBody: "hello2",
        userCommented: "ABC2"
    },
    {
      id: 3,
      commentBody: "hello3",
      userCommented: "ABC3"
  } ,
  {
    id: 4,
    commentBody: "hello4",
    userCommented: "ABC4"
}  ,
{
  id: 2,
  commentBody: "bahut hogy hello",
  userCommented: "ABC2"
},
{
  id: 2,
  commentBody: "you are buffalow",
  userCommented: "ABC2"
}
    
    ];

    const handleOnSubmit = (e) => {
      e.preventDefault();
      if(currentUser){
        if(!commentText){
          alert('Please type your comment');
        }
        else{
          setCommentText("")
        }
      }
      else{
        alert('Please login to continue');
      }
    }

  return (
  <>
  <form className='comments-form' onSubmit={handleOnSubmit}>
    <input type='text' value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder='add comment...' className='comments-input'/>
    <input type='submit' value='add' className='comments-add-btn' />
  </form>
  <div className='display-comments-container'>
    {
      commmentList.filter((val) => val?.id === videoid).reverse().map((m) => {
        return(<DisplayComments cid={m.id} userId={m.userid} commentBody={m.commentBody}  userCommented={m.userCommented} />)
      } )
    }
  </div>
  </>
  )
}

export default Comment
