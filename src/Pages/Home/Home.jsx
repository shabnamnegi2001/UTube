import React from 'react';
import './Home.css'
import LeftSidebar from '../../Components/leftsidebar/leftSidebar';

const Home = () => {
  const navList = [
    "All",
    "Python", 
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
 ];
  return (
    <div className='container-pages-app'>
     <LeftSidebar />
    <div className='container2-pages-app'>
      <div className='navigation-home'>
        {navList.map((val) => {
          return(
            <p key={val} className='home-nav-btn'>{val}</p>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Home;
