import React from 'react';
import './leftSidebar.css'
import { AiFillPlaySquare, AiOutlineHome,  AiFillLike } from "react-icons/ai";
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { NavLink } from 'react-router-dom';

const DrawerSliderbar = ({toggleDrawer, setToggledrawerSidebar, toggledrawerSidebar}) => {
  return (
    <div className='drawersidebar-container-nav'  style={toggledrawerSidebar}>
      <div className='drawersidebar-container'>
        <div className='drawer-leftsidebar'>
          <NavLink to={'/'} className='drawer-icon-sidebar-div'>
            < AiOutlineHome size={30} style={{margin:'auto 0.7rem'}}/>
            <p>Home</p>
          </NavLink>
          <NavLink to={'/'} className='drawer-icon-sidebar-div'>
            <MdOutlineExplore className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>Explore</p>
          </NavLink>
          <NavLink to={'/watchLater'} className='drawer-icon-sidebar-div'>
            <SiYoutubeshorts className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>Shorts</p>
          </NavLink>
          <div className='drawer-icon-sidebar-div border-div'>
            <MdOutlineSubscriptions className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>Subsciptions</p>
          </div>
          <NavLink to={'/library'} className='drawer-icon-sidebar-div'>
            <MdOutlineVideoLibrary className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>Library</p>
          </NavLink>
          <NavLink to={'/watchHistory'} className='drawer-icon-sidebar-div'>
            <FaHistory className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>History</p>
          </NavLink>
          <NavLink to={'/yourVideo'} className='drawer-icon-sidebar-div'>
            <AiFillPlaySquare className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>Your Videos</p>
          </NavLink>
          <NavLink to={'/watchLater'} className='drawer-icon-sidebar-div border-div'>
            < AiFillLike  className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>Watch Later</p>
          </NavLink>
          <NavLink to={'/likedVideo'} className='drawer-icon-sidebar-div border-div'>
            < AiFillLike  className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <p>Liked Videos</p>
          </NavLink>
          <div className='subscription-icon-sidebar-div'>
            <div style={{display: 'flex', margin: '-10px auto'}}>
            <MdOutlineSubscriptions className='icon-sidebar' size={26} style={{margin:'auto 0.7rem'}}/>
            <h3>Your Subsciptions</h3>
            </div>
            <div className='chanel-sidebar'>
              <p className='chanel'>C</p>
              <div>chanel</div>
            </div>
            <div className='chanel-sidebar'>
              <p className='chanel'>C</p>
              <div>chanel</div>
            </div>
            <div className='chanel-sidebar'>
              <p className='chanel'>C</p>
              <div>chanel</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container3_DrawaerLeftSidebar" onClick={() => setToggledrawerSidebar({
        display: "none",
      }) }></div> 
    </div>
  )
}

export default DrawerSliderbar


