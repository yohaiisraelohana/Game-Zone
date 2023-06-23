import React from 'react'
//style
import './userDropDownMenu.css';
export default function UserDropDownMenu({user:{email,name}}) {
    const user_menu = [
        {name:"Account",to:"/account"},
        {name:"Friends",to:"/account"},
        {name:"LogOut",to:"/logout"}
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
        <button key={i} className="dropdown-option">{link.name}</button>
      ))}
    </div>
  )
}
