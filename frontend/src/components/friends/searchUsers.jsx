import React,{useEffect, useState} from 'react'
import './searchUsers.css';
import UsersList from './usersList';
import useUser from '../../hooks/useUser';
export default function SearchUsers({closeUsersList}) {
    const {searchUser}  = useUser();
    const [users,setUsers] = useState(null);
    const [search_input,setSerchInput] = useState(null);
    const hundleInput = async () => {
      try {
        const users_searched = await searchUser(search_input);
        console.log(users_searched);
        setUsers(users_searched);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
      if (search_input && search_input.length > 2) {
        hundleInput();
      } else {
        setUsers(null);
      }
    },[search_input])
  return (
    <div className='search-users-list-container'>
    <h3>Search For Friends</h3>
    <input 
      type="text" 
      className='search-input'
      onChange={(e)=>setSerchInput(e.target.value)}
      />
     {users && <UsersList users={users} />}
    </div>
  )
}
