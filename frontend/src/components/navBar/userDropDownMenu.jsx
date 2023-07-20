import React from 'react'
import {useNavigate } from 'react-router-dom';
//components

//style
import './userDropDownMenu.css';
import SearchUsers from '../friends/searchUsers';
import useUser from "../../hooks/useUser";


export default function UserDropDownMenu({user:{email,name,role},getModal,closeMenu}) {
  const {userLogOut} = useUser();
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
          userLogOut();
          closeMenu();
        }}
      ];


      return (
    <div className="UserDropDownMenu">
    <div className="profile-details">
      <p>{name}</p>
      <p className="email">
        {email}
      </p>
    </div>
      {role === "admin" && 
              <button 
              className="dropdown-option"
              onClick={()=>{
                navigate("/admin");
                closeMenu();}}>Managment</button>
      }
      {user_menu.map((link,i)=>(
        <button 
          key={i}
          className="dropdown-option"
          onClick={link.function}>{link.name}</button>
      ))}
    </div>
  )
}
