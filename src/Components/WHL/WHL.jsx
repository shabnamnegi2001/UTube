import React from 'react'
import LeftSidebar from '../../Components/leftsidebar/leftSidebar.jsx';
import './whl.css';
import WHLvideolist from '../../Components/WHL/WHLvideolist.jsx';

const WHL = ({page, videoList}) => {
  const currentUser = {
    result: {
      id: 1,
      name: "abcjabsc",
      email: "abcd@gmail.com",
      joinedon: "222-07-134",
    }
  }
  return (
    <div className='container-pages-app'>
      <LeftSidebar />
      <div className="container2-pages-app">
        <p className='container-WHL'>
          <div className='box-whl leftSide-whl'> 
            <b>Your {page} Shown Here</b>
            {
              page === "History" && 
              <div className="clear-history-btn">clear History</div>
            }
          </div>
          <div className="rightSide-whl">
            <div className="whl-list">
              <WHLvideolist page={page} currentUser={currentUser.result.id} videoList={videoList}/>
            </div>
          </div>
        </p>
      </div>
    </div>  
  )
}

export default WHL
