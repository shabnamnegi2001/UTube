import React from 'react';
import './leftSidebar.css'
import shorts from './shorts.png';
import { SiYoutubeshorts } from "react-icons/si";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
  
  return (
    <div className='leftsidebar-container'>
      <NavLink to={'/'} className='icon-sidebar-div'>
      <AiOutlineHome size={22} className='icon-sidebar'/>
      <div className='icon-sidebar-text'>Home</div>
      </NavLink>
      <div className='icon-sidebar-div'>
        <MdOutlineExplore size={22} className='icon-sidebar'/>
        <div className='icon-sidebar-text'>Explore</div>
      </div>
      <div className='icon-sidebar-div'>
        < SiYoutubeshorts size={22} className='icon-sidebar'/>
        <div className='icon-sidebar-text'>Shorts</div>
      </div>
      <div className='icon-sidebar-div'>
        < MdOutlineSubscriptions size={22} className='icon-sidebar'/>
        <div className='icon-sidebar-text'>Subscriptions</div>
      </div>
      <NavLink to={'/library'} className='icon-sidebar-div'>
      < MdOutlineVideoLibrary size={22} className='icon-sidebar'/>
      <div className='icon-sidebar-text'>Library</div>
      </NavLink>
    </div>
  )
}

export default LeftSidebar;
