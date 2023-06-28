import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import './adminMenagment.css';
import AdminMenagmentNav from './adminMenagmentNav';
import UsersMenagment from './usersMenagment/usersMenagment';
import GamesMenagment from './gamesMenagment/gamesMenagment';

export default function AdminMenagment() {
    const {user:{name}} = useUser();
    const [option, setOption] = useState("Users")
    const menagment_options = ["Users","Games"];
  return (
    <div className='adminMenagment'>
        <h1>Hello {name}</h1>
        <AdminMenagmentNav 
          selected={option}
          options={menagment_options} 
          setOption={setOption} />
        {   option == "Users" && <UsersMenagment/>  }
        {   option == "Games" && <GamesMenagment/>  }
    </div>
  )
}
