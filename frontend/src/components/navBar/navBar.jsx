import React from "react";
import { Outlet } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <div>
      <div className="header">
            header
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
