import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FaArrowRight}  from 'react-icons/fa';

export default function NavBackButton({className,onClick}) {
    const navigate =  useNavigate();

   return (
    <button
        className={className || ""}
        style={{position:'absolute',top:'0%',right:'5%',color:'white',border:'none',backgroundColor:'transparent',fontSize:'20px'}}
        onClick={()=>(onClick ? onClick() : navigate(-1))}
        >
            <FaArrowRight/>
    </button>
  )
}
