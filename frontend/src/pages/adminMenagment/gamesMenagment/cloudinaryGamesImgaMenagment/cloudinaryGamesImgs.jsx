import React, { useEffect, useState } from 'react'
import './cloudinaryGamesImgs.css'
import useCloudinaryImages from '../../../../hooks/useCloudinaryImages'
import CldGamesImgsCollection from './cldGamesImgsCollection';
import {useModal} from '../../../../hooks/useModal';
import AddImageInput from './addImageInput';
import Pagination from '../../../../components/reusfullComponents/pagination/pagination';
import { setPage } from '../../../../redux/features/cloudinaryGamesImagesSlice';
export default function CloudinaryGamesImgs() {
    const {page,pages,selectPage} = useCloudinaryImages();
    const [modal,setModal] = useState(null);

    useEffect(()=>{
        selectPage(1);
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
        <Pagination page={page} pages={pages} setPage={(p)=>selectPage(p)}/>
    </div>
  )
}
