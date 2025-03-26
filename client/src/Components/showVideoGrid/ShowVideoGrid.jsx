import React from 'react';
import "./showVideoGrid.css";
import ShowVideo from '../showVideo/ShowVideo';

const ShowVideoGrid = ({vids}) => {
    return (
        <div className='vids-grid-container'>
            {
               vids?.map((vid) => {
                return(
                    <div key={vid.id} className='video-box-app'>
                        <ShowVideo vid={vid}/>
                     </div>
                )
               }) 
            }
        </div>
    )
}

export default ShowVideoGrid;