import React from 'react';
import { FaSearch } from "react-icons/fa";
import './searchlist.css'

const SearchList = ({setSearchQuery, TitleArray, searchQuery}) => {
  return (
    <>
    <div className='seachlist-container'>
      {
        TitleArray.map((val) => {
            return <p key={val} onClick={e => setSearchQuery(val)} className='titleItem'>
              <FaSearch className='search-icon'/>{val}
          </p>
          
        })
      }
    </div>
    </>
  )
}

export default SearchList;
