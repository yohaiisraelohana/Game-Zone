import React, { useEffect } from 'react'
import './cloudinaryGamesImgs.css'
import useCloudinaryImages from '../../../../hooks/useCloudinaryImages'
import CldGamesImgsCollection from './cldGamesImgsCollection';
export default function CloudinaryGamesImgs() {
    const {getCloudinaryImages} = useCloudinaryImages();
    useEffect(()=>{
        getCloudinaryImages();
    },[])
  return (
    <div>
        cloudinaryGamesImgs
        <CldGamesImgsCollection/>
    </div>
  )
}
