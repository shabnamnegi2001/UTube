import React, { useState } from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import logo from "./youtube-ico.ico";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import Searchbar from './searchbar/searchbar';
import { GoSquareFill } from "react-icons/go";
import Auth from '../../Pages/auth/Auth';

const Navbar = ({setEditCreateChanelBtn, toggleDrawer}) => {

const [authBtn ,setAuthBtn] = useState(false);
// const currentUser = null;
const currentUser = {
  result: {
    id: 1,
    name: "abcjabsc",
    email: "abcd@gmail.com",
    joinedon: "222-07-134",
  }
}

  return (
    <>
    <div className='nav-container'>
      <div className='burger-logo-nav'>
        <div className='burger' onClick={() => toggleDrawer()}>
            <RxHamburgerMenu  size={30}/>
        </div>
        <Link to={"/"} className='logo-nav'>
          <img src={logo} alt=''  style={{ width: "50px", height: "50px" }}/>
          <p className='logo-title-nav'>UTube</p>
        </Link>
            
      </div>

  
      <Searchbar className='search-nav'/>

      <div className='icons-nav'>
      < RiVideoAddLine size={22}/>
      <div className='apps-box' >
        <p className='app'></p>
        <p className='app'></p>
        <p className='app'></p>
        <p className='app'></p>
        <p className='app'></p>
        <p className='app'></p>
        <p className='app'></p>
        <p className='app'></p>
        <p className='app'></p>
      </div>
      <FaBell size={22} color='white'/>
      <div className='auth-nav'>
        {currentUser ? (
          <>
          <div className='user-container' onClick={() => setAuthBtn(true)}>
            <p className='channel-logo'>
              {currentUser?.result.name ?(
                <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
              ): (
                <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
              )}
            </p>

          </div>
          </>
        ) : (
          <>
        <div className='user-container' onClick={() => setAuthBtn(true)}>
         < FaUserCircle className='channel-logo' size={30} />
         <div className='sign-in'>Sign in</div>
         </div>
         <div>
        
         </div>
          </>
        )
      }
      </div>
      </div>
    </div>
    {
    authBtn &&
      <Auth
       user={currentUser} setAuthBtn={setAuthBtn} setEditCreateChanelBtn={setEditCreateChanelBtn}
       />
    }
    </>
  )
}

export default Navbar
