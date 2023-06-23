import React from 'react'
//style
import './userDropDownMenu.css';
import UsersList from '../friends/usersList';
export default function UserDropDownMenu({user:{email,name,friends},getModal}) {
    const user_menu = [
        {name:"Account",to:"/account",function:()=>console.log("nav to /account")},
        {name:"Friends",to:"/account",function:()=>getModal(<UsersList users={friends} />)},
        {name:"LogOut",to:"/logout",function:()=>console.log("loging out")}
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
