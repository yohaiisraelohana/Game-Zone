import React, { useEffect } from 'react'
import './slidePuzzleCollection.css'
import useCloudinaryImages from '../../../hooks/useCloudinaryImages';
import SkeletonElement from '../../reusfullComponents/skeletons/skeletonElement';
export default function SlidePuzzleCollection({updatePuzzleImage}) {
  const {setImage,data:images_collection,selectPage,loading,error} = useCloudinaryImages();
  useEffect(()=>{
    selectPage(1);
  },[])
 
  return (
    <div className='SlidePuzzleCollection'>
      {images_collection 
      ? images_collection.map((image)=>(
        <div 
          className="image-preview" 
          key={image.name}
          onClick={()=>setImage(image)}>
          <img  src={image.src + image.route + image.name} className='img' alt="image preview" />
          <div className="demo-grid">
            {[1,2,3,4,5,6,7,8,9].map((i)=>(
              <div className="inner-demo-grid"  key={i}></div>
            ))}
          </div>
        </div>
        ))
      : (loading 
        ? Array(12).fill(0).map((_,k)=>
          <div key={k} className="img">
              <SkeletonElement   type={"fit"}/>    
          </div>)
        : <p>{error}</p> 
        ) 
      }
      
    </div>
  )
}
