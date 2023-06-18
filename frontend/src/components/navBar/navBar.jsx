import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
//components
import Logo from './logo'
import ProfileImgAndLevel from "./profileImgAndLevel";
import LogInButton from "./logInButton";

//style
import "./navBar.css";
import useUser from "../../hooks/useUser";



export default function NavBar() {
  const [selected,setSelected] = useState("logo");
  const {user} = useUser(); 
  const navOptions = useState(
    [
      {provider:"logo",inner:""},
      {provider:"friends",inner:""},
      {provider:"account",inner:""}
    ]
    );
  const [modal,setModal] = useState(null);

  const closeModal = () => {
      setModal(null);
  }
  const getModal = (content) => {
    const modalContent = useModal(content,closeModal);
    setModal(modalContent);
  }


  return (
    <div className="nav-bar">
      {modal && modal}
      <div className="header">
        <Logo/>
        {user
        ? <ProfileImgAndLevel/>
        : <LogInButton closeModal={closeModal} updateModal={getModal}/> }
        
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
