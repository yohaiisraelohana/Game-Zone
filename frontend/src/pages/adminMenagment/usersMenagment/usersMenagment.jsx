import React, { useEffect } from 'react'
import './usersMenagment.css'
import useUser from '../../../hooks/useUser'

export default function UsersMenagment() {
  const [users, setUsers] = useState(null);
  const {adminGetUsers} = useUser();
 const getUsers = async () => {
   try {
     const data = await adminGetUsers();
     setUsers(data);
   } catch (error) {
     console.log(error);
   }
 }
  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div>
      <div className="">
        {users ? users.map((u,i)=>(
          <div className="" key={i}>
            <h2>{u.name}</h2>
          </div>
        )):
        <p>Loading</p> }
      </div>
    </div>
  )
}
