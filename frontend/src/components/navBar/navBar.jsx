import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from './logo'
import "./navBar.css";
import ProfileImgAndLevel from "./profileImgAndLevel";


export default function NavBar() {
  const [selected,setSelected] = useState("logo");
  const navOptions = useState(
    [
      {provider:"logo",inner:""},
      {provider:"friends",inner:""},
      {provider:"account",inner:""}
    ]
    );


  return (
    <div className="nav-bar">
      <div className="header">
        <Logo/>
        <ProfileImgAndLevel/>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
