import React, { useState } from 'react';
import './videoUpload.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';

const VideoUpload = ({setVideoUpload}) => {
    const [title, setTitle] = useState("");
    const [videoFile, setVideoFile] = useState("");
    const [progress, setProgress] = useState("");

    const handleSetVideoFile = (e) => {
        setVideoFile(e.target.files[0])
    }

    const currentUser =useSelector(state => state.currentuserreducer);
      

    const uploadVideoFile = () => {
        if (!title) {
            alert("plz enter a title of the video")
        } else if (!videoFile) {
            alert("plz attach a video file");
        } else if (videoFile.size > 1000000) {
            alert("Plz attach video file less than 1 kb")
        } else {
            const filedata = new FormData()
            filedata.append("file", videoFile)
            filedata.append("title", title)
            filedata.append("channel", currentUser?.result?.id)
            filedata.append("uploader", currentUser?.result.name)
        }
    }

    return (
        <div className="vidUpload-container">
            <input type="submit" name='text' onClick={() => setVideoUpload(false)} value={"X"} className="ibtn-x" />
            <div className="vidUpload-container2">
                <div className='ibox-div-vidupload'>
                <input type='text' placeholder='Enter Title of your video' maxLength={30} className='ibox-vidUpload'/>
                <label htmlFor='file' className='ibox-label'>
                    <input type='file' name='file' className='ibox-label2' style={{fontSize:'1rem'}} onChange={(e) => handleSetVideoFile} />
                </label>
            </div>
              <div className='ibox-div-vidupload'>
                <input type='submit' onClick={() => uploadVideoFile()} value={'upload'} className='ibox-vidUpload vidUpload-btn'/>
                <div className="loader ibox-div-vidupload">
                <div style={{ width: "100px", height: "100px" }}> 
                    <CircularProgressbar 
                    value={progress}
                    text = {`${progress}`}
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: "butt",
                        textSize: "20px",
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(255,255,255,${progress / 100})`,
                        textColor: "#f88",
                        trailColor: "#adff2f",
                        backgroundColor: "#3e98c7",
                    })}
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default VideoUpload;
