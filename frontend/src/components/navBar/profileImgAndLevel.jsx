import React from 'react'
import './profileImgAndLevel.css'
import {AiFillStar} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
//import {IoGameController} from 'react-icons/io'

export default function ProfileImgAndLevel() {
  return (
    <div className="profile-container">
              <div className="profile-img-border">
                <div className="profile-img">
                    
                </div>
              </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#01faff" />
               <stop offset="100%" stopColor="#258fff" />
            </linearGradient>
         </defs>
         <circle cx="50%" cy="50%" r="47%"  strokeLinecap="round" />
        </svg>
        <div className="level-container">
            <IoLogoGameControllerB/>
            <div className="level">10</div>
        </div>
        

    </div>
  )
}
/*
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#01faff" />
                    <stop offset="100%" stopColor="#258fff" />
                  </linearGradient>
                 </defs>
                <circle 
                  cx="25" 
                  cy="25" 
                  r="22" 
                  strokeLinecap="round" />
              </svg> */