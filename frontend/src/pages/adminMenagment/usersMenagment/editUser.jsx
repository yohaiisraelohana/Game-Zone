import React from 'react'
import './editUser.css'
import {useForm} from 'react-hook-form'
import useAdmin from '../../../hooks/useAdmin';
export default function EditUser({user,closeModal}) {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {adminUpdateUsers} = useAdmin();

    const saveChanges = (data) =>{
        if (data) {
            adminUpdateUsers(user._id,data);
            closeModal();
        }
    }
  return (
    <div className='EditUser'>
        <h2>Edit User</h2>
        <form className="EditUser-form" onSubmit={handleSubmit(saveChanges)}>
            <label >Name</label>
            <input 
                {...register("name")}
                defaultValue={user.name} 
                type="text" />

            <label >Email</label>
            <input 
                {...register("email")}
                type="text"
                defaultValue={user.email} />


            <div className="EditUser-form-level">
                <label >Level</label>
                <input 
                    {...register("level")}
                    defaultValue={user.level}
                    type='text' />
            </div>
            <div className="EditUser-form-level">
                <label >XP</label>
                <input 
                    {...register("xp")}
                    defaultValue={user.xp}
                    type="text" />
            </div>
            <button>Save</button>
        </form>
    </div>
  )
}
