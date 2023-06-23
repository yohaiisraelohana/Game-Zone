import React from 'react'
import './usersList.css';

export default function UsersList({users,closeUsersList}) {
    console.log("UsersList");
  return (
    <div className='users-list'>
        <h2 className="">UsersList</h2>
       {users && users.map(user => 
            <div className='user' key={user._id}>
                {user.name}
            </div>)}
    </div>
  )
}
