import React, { useEffect } from 'react';
import './describeChannel.css';
import { FaEdit } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";

const DescribeChannel = ({ cid, setVideoUploadPage, setEditCreateChanelBtn}) => {
  const channel = [
    {
      id: 1,
      name: "abcjabsc",
      email: "abcd@gmail.com",
      joinedon: "222-07-134",
      desc: "bithead"
    }
      ];
  const currentChannel = channel.filter((c) => c.id === Number(cid))[0];
  const currentUser = {
    result: {
      id: 1,
      name: "abcjabsc",
      email: "abcd@gmail.com",
      joinedon: "222-07-134",
    }
  };

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
