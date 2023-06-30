import React, { useEffect, useState } from "react";
import "./usersMenagment.css";
import useAdmin from "../../../hooks/useAdmin";
import UsersTable from "./usersTable";
import UsersSortNav from "./usersSortNav";

export default function UsersMenagment() {
  const [users, setUsers] = useState(null);
  const { adminGetUsers} = useAdmin();
  const getUsers = async (sortObj) => {
    try {
      console.log(sortObj);
      const data = await adminGetUsers(sortObj);
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="sersMenagment">
      { users 
        ? <UsersSortNav handleSort={getUsers} />
        : <p></p>}
      { users 
        ? <UsersTable users={users} />
        : <h1>Table Skeleton</h1> } 
    </div>
  );
}

/*
              <div className="mobile-table-container" key={i}>
                <h3>
                  {u.name}{""}
                  {u.role == "admin" && <span className="role">(admin)</span>}
                </h3>
                <h5>{u._id}</h5>
                <div className="mobile-table-item">
                  <p className="field">Email:</p>
                  <p>{u.email}</p>
                </div>
                <div className="mobile-table-item">
                  <p className="field">Level:</p>
                  <p>{u.level}</p>
                </div>
                <div className="mobile-table-item">
                  <p className="field">Total XP:</p>
                  <p>{u.xp}</p>
                </div>
              </div>
*/