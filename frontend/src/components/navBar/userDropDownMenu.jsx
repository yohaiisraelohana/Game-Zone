import React from 'react'
import {useNavigate } from 'react-router-dom';
//components

//style
import './userDropDownMenu.css';
import SearchUsers from '../friends/searchUsers';

export default function UserDropDownMenu({user:{email,name},getModal,closeMenu}) {
  const navigate = useNavigate();
    const user_menu = [
        {name:"Account",to:"/account",function:()=>{
          navigate("/account");
          closeMenu();
        }},
        {name:"Friends",to:"/account",function:()=>{
          getModal(<SearchUsers />);
          closeMenu();
        }},
        {name:"LogOut",to:"/logout",function:()=>{
          console.log("loging out");
          closeMenu();
        }}
      ];
  return (
    <div className="dropdowm-options-container">
    <div className="profile-details">
      <p>{name}</p>
      <p className="email">
        {email}
      </p>
    </div>
      {user_menu.map((link,i)=>(
        <button 
          key={i}
          className="dropdown-option"
          onClick={link.function}>{link.name}</button>
      ))}
    </div>
  )
}
