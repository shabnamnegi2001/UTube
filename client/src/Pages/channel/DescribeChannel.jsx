import React, { useEffect } from 'react';
import './describeChannel.css';
import { FaEdit } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { useSelector } from 'react-redux';

const DescribeChannel = ({ cid, setVideoUploadPage, setEditCreateChanelBtn}) => {
  // const channel = [
  //   {
  //     id: 1,
  //     name: "abcjabsc",
  //     email: "abcd@gmail.com",
  //     joinedon: "222-07-134",
  //     desc: "bithead"
  //   }
  //     ];

  const channel = useSelector(state => state.chanelreducer);

  const currentChannel = channel.filter((c) => c._id === cid)[0]; 
  const currentUser = useSelector(state => state.currentuserreducer);

  return (
    <div className="container3-channel">
      <div className="describe-channel-logo">
        <b>{currentChannel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="channel-description">
        <b>{currentChannel?.name}</b>
        <p>{currentChannel?.desc}</p>
      </div>
      {currentUser?.result.id === currentChannel?.id && (
        <>
        <p className='editChanel-btn' onClick={() => setEditCreateChanelBtn(true)}>
          <FaEdit />
          <b>Edit Channel</b>
        </p>
        <p className="uploadBtn-channel" onClick={() => setVideoUploadPage(true)}>
          <FaUpload />
          <b>Upload Videos</b>
        </p>
        </>
      )}
    </div>
  )
}

export default DescribeChannel
