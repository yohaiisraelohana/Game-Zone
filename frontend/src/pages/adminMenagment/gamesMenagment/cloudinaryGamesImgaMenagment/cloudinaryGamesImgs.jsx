import React, { useEffect, useState } from 'react'
import './cloudinaryGamesImgs.css'
import useCloudinaryImages from '../../../../hooks/useCloudinaryImages'
import CldGamesImgsCollection from './cldGamesImgsCollection';
import {useModal} from '../../../../hooks/useModal';
import AddImageInput from './addImageInput';
export default function CloudinaryGamesImgs() {
    const {getCloudinaryImages} = useCloudinaryImages();
    const [modal,setModal] = useState(null);

    useEffect(()=>{
        getCloudinaryImages();
    },[])
  return (
    <div className='CloudinaryGamesImgs'>
      {modal && modal}
        <h2>Coudinary Games Images</h2>
        <button
          className='add-button'
          onClick={()=>{
            const m = useModal(<AddImageInput closeModal={()=>setModal(null)} />,()=>setModal(null));
            setModal(m);
          }}
          >ADD</button>
        <CldGamesImgsCollection/>
    </div>
  )
}
