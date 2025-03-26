import React, { useEffect, useState } from 'react';
import "./navbar.css";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import logo from "./youtube-ico.ico";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import Searchbar from './searchbar/searchbar';
import Auth from '../../Pages/auth/Auth';
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';

import axios from 'axios';
import { login } from '../../Action/auth'; 
import { setCurrentUser } from '../../Action/currentuser';
import {jwtDecode} from "jwt-decode"

const Navbar = ({setEditCreateChanelBtn, toggleDrawer}) => {

const [authBtn ,setAuthBtn] = useState(false);
const [user, setUser] = useState([]);
const [profile, setProfile] = useState([]);
const dispatch = useDispatch();

const successLogin = () => {
if(profile.email){
  dispatch(login({email:profile.email}));
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
  
  // console.log(profile.email);
} }

const currentUser = useSelector(state => state.currentuserreducer);
console.log(currentUser);
// const currentUser = { 
//   result: {
//     id: 1,
//     name: "abcjabsc",
//     email: "abcd@gmail.com",
//     joinedon: "222-07-134",
//   }
// }


const googleLogin = useGoogleLogin({
  onSuccess: tokenResponse => setUser(tokenResponse),
  onError: (error) => console.log("Login failed", error)
});

useEffect(() => {
  if(user){
    axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${user.access_token}`,{
      headers: {
        Authorization:`Bearer ${user.access_token}`,
        ACCEPT: 'application/json'
      }
    })
    .then((res) => {
      console.log("google res", res)
      setProfile(res.data);
      successLogin();
    })
    .catch((error) => console.log(error))
  }
}, [user]
)
 
const logout = () => {
  dispatch(setCurrentUser(null));
  localStorage.clear();
  googleLogout();
}

useEffect(() => {
  const token = currentUser?.token;
  if(token){
    const decodetoken = jwtDecode(token);
    console.log("this is the jwt decode token:", decodetoken)
    if(decodetoken.exp *1000 <new Date().getTime()){
      logout()
      }
  }
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))))
},[currentUser?.token, dispatch]
)

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
        <div className='user-container' onClick={() => {
          // setAuthBtn(true);
          googleLogin();
          }}>
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
