import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FaArrowRight}  from 'react-icons/fa';

export default function NavBackButton({className,onClick,to}) {
    const navigate =  useNavigate();

   return (
    <button
        className={className || ""}
        style={{position:'absolute',top:'1%',right:'5%',color:'white',border:'none',backgroundColor:'transparent',fontSize:'20px', cursor:'pointer'}}
        onClick={()=>(onClick ? onClick() : navigate(to || -1))}
        >
            <FaArrowRight/>
    </button>
  )
}
