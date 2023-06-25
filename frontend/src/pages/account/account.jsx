import React, { useState,useEffect } from 'react'
import './account.css';
import useUser from '../../hooks/useUser';
import {IoLogoGameControllerB} from 'react-icons/io'
import UsersList from '../../components/friends/usersList';



export default function Account() {
  const { user, loading ,error } = useUser();
  const [current_xp,setCurrentXp] = useState(null);
  const [xp_progress,setXpProgress] = useState(null);
  const [expected_xp,setExectedXp] = useState(null);
  const [user_details_nav,setUserDetailsNav] = useState(["friends","requests"]);
  useEffect(()=>{
    if (user) {
      let xp_riched = user.xp;
      let i;
      for (i = 1; i <=user.level -1; i++) {
        xp_riched -= (100 * i);  
      }
      setCurrentXp(xp_riched);
      setExectedXp(100 * i);
      setXpProgress((xp_riched / expected_xp) * 100);
    }
  },[user])
  console.log(current_xp);

  return (
    <div
      className='account'
      >
        {
          user ?
          
        <div className="account-container">
          <div className="account-user-details">
            <img src={user.image} className='account-profile-img' alt="profile img" />
            <h2 className='user-name'>{user.name}</h2>

              <div className="level-container">
                <IoLogoGameControllerB className='level-icon'/>
                <p className='level'>{user.level}</p> 
              </div>
              <div className="xp-container">
                {xp_progress && <progress value={xp_progress} max={100} /> }
                <div className="xp-details">
                  <p>XP</p>
                  <p>{current_xp}/{expected_xp}</p>
                </div>
              </div>
              <div className="details-container">
                <p>{user.email}</p>
                <p>Member since {user.createdAt.substring(0,10)}</p>
                <div className="friends-container">
                  {user_details_nav.map((item,index)=>(
                    <button 
                      onClick={()=>setUserDetailsNav([item,...user_details_nav.filter(n => n!== item)])}
                      className={index == 0 ? "selected" : ""} 
                      key={index}>{item}</button>
                  ))}
                </div>
                <div className="amount">
                  {user[user_details_nav[0]].length}
                </div>
              </div>
              <div className="">
                {user[user_details_nav[0]] && <UsersList users={user[user_details_nav[0]]} />}
              </div>
          </div>
        </div>
        : <p>loading</p> }
    </div>
  )
}
