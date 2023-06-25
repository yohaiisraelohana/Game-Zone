import React,{useEffect, useState} from 'react'
import './usersList.css';
import useUser from '../../hooks/useUser';
export default function UsersList({closeUsersList}) {
    const {user:{friends,_id},searchUser,sendFriendRequest} = useUser();
    const [users,setUsers] = useState(null);
    const [search_input,setSerchInput] = useState(null);
    const hundleInput = async () => {
      try {
        const users_searched = await searchUser(search_input);
        console.log(users_searched);
        setUsers(users_searched);
      } catch (error) {
        
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
    <div className='users-list-container'>
      <input 
        type="text" 
        className='search-input'
        onChange={(e)=>setSerchInput(e.target.value)}
        />
      <div className='users-list'>
       {users && users.map((user) => user._id != _id && (
            <div className='user' key={user._id}>
              <div className="user-profile">
                <img className='user-profile-img' src={user.image} alt="user profile img" />
                <p>{user.name}</p>
              </div>
                
                {
                  friends.find(friend => friend._id === user._id) 
                  ? <button onClick={()=>console.log("REMOVE")} >REMOVE</button>   
                  : <button 
                    onClick={()=>
                      {
                        sendFriendRequest(user._id);
                        hundleInput();
                      }
                    } 
                    className={user.requests.find(request  => request === _id ) ? 'pending' : 'add'}
                    >{user.requests.find(request  => request === _id ) ? 'PENDING' : 'ADD'}</button>
                  }
            </div>))}
      </div>
    </div>
  )
}
