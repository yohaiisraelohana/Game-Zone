import React, { useState } from 'react'
import './usersSortNav.css';
import {FiRefreshCw} from 'react-icons/fi';
export default function UsersSortNav({handleSort}) {
  const [sort,setSort] = useState("_id");
  const [searchInput,setSearchedInput] = useState("");

  return (
    <div className='UsersSortNav'>
      {/* text blue bg trans */}
      <div className="UsersSortNav-select">
        <select  value={sort} onChange={(e)=>{
          setSort(e.target.value);
          if (searchInput.length > 2) {
            handleSort({sort:e.target.value,name:searchInput});
          } else {
            handleSort({sort:e.target.value});
          }
          }} >
          <option value="_id">_id</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="xp">XP</option>
          <option value="level">Level</option>
        </select>
      </div>
      <div className="UsersSortNav-input-container">
        <input type="text" onChange={(e)=>{
          setSearchedInput(e.target.value);
          if (e.target.value.length > 2) {
            if (sort) {
              handleSort({sort,name:e.target.value});
            } else {
              handleSort({name:e.target.value});
            }
          } else {
            if (sort) {
              handleSort({sort});
            } else {
              handleSort();
            }
          }
        }} placeholder='Search for users' />
      </div>
      <div 
        onClick={()=>handleSort()}
        className="UsersSortNav-refresh-container">
        <FiRefreshCw className='iconR'/>
      </div>

    </div>
  )
}
