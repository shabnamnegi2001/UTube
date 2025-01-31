import React, { useState } from 'react'

const Comment = ({videoid}) => {
    const [commentText, setCommentText] = useState('');
    const currentUser = 1;
    const commmentList = [{
        id: "1",
        commentBody: "hello",
        useCommented: "ABC"
    } ,
    {
        id: "2",
        commentBody: "hello2",
        useCommented: "ABC2"
    } 
    
    ]
  return (
  <>
  <form className='comments-form'>
    <input type='text' value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder='add comment...' className='comments-input'/>
    <input type='submit' value='add' className='comments-add-btn' />
  </form>
  <div className='display-comments-container'>
    {/* {
      commmentList.filter((val) => val?.id === videoid).reverse().map((m) => {
        return(<Displaycomment cid={val.id} userId={val.} />)
      } )
    } */}
  </div>
  </>
  )
}

export default Comment
