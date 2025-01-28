import React, { useState } from 'react';
import "./searchbar.css";
import { BsMicFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Searchlist from './searchlist';
import { Link } from 'react-router-dom';
import SearchList from './searchlist';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchList, setSearchList] = useState(false);
    const TitleArray = ["video1", "video2" , "animation video", "movies"].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()));
  
    return (
  <>
  <div className='searchbar-container'>
  
    <div className='seachbar-container2'>
    <div className='search-div'>
      <input type='text' className='search-input' placeholder='Search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onClick={e => setSearchList(true) }/>  
      <Link to={`/search/${searchQuery}`}>
      <div className='search-nav '>
      <CiSearch className='search-icon'  size={24} />
      </div>
      </Link>
      <BsMicFill className='mic-search-icon' size={24}/>

    </div>
    {
     searchList && searchQuery &&
    <Searchlist searchQuery={searchQuery} setSearchQuery={setSearchQuery} TitleArray={TitleArray} />  
    }

   </div> 
   
  </div></>
  )
}

export default Searchbar;
