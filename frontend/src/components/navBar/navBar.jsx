import React, { useState } from "react";
import { Outlet } from "react-router-dom";

//hooks
import { useModal } from "../../hooks/useModal";
import useUser from "../../hooks/useUser";

//components
import Logo from './logo'
import ProfileImgAndLevel from "./profileImgAndLevel";
import LogInButton from "./logInButton";
import UserDropDownMenu from "./userDropDownMenu";

//style
import "./navBar.css";





export default function NavBar() {
  const [open_user_menu,setOpenUserMenu] = useState(false);
  const {user} = useUser(); 
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
          ? 
          <div>
            <ProfileImgAndLevel user={user} openUserMenu={()=>setOpenUserMenu(!open_user_menu)} />
            { open_user_menu && 
                <div className="account-dropdown">
                  <UserDropDownMenu user={user}/>
                </div>
            }
          </div> 
          : <LogInButton closeModal={closeModal} updateModal={getModal}/> }
        
      </div>
      <main>
        <Outlet /> 
        
      </main>
    </div>
  );
}
