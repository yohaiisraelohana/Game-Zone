import React, { useEffect } from 'react'
import './slidePuzzleCollection.css'
import useCloudinaryImages from '../../../hooks/useCloudinaryImages';
export default function SlidePuzzleCollection({updatePuzzleImage}) {
  const {setImage,getCloudinaryImages,data:images_collection} = useCloudinaryImages();
  useEffect(()=>{
    getCloudinaryImages();
  },[])
 
  return (
    <div className='SlidePuzzleCollection'>
      {images_collection && images_collection.map((image)=>(
        <div 
          className="image-preview" 
          key={image.name}
          onClick={()=>setImage(image)}>
          <img  src={image.src + image.route + image.name} alt="" />
          <div className="demo-grid">
            {[1,2,3,4,5,6,7,8,9].map((i)=>(
              <div className="inner-demo-grid"  key={i}></div>
            ))}
          </div>
        </div>
      ))}
      
    </div>
  )
}
