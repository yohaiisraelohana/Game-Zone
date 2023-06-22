import React from 'react'
import './slidePuzzleCollection.css'
export default function SlidePuzzleCollection({updatePuzzleImage,images_collection}) {
  console.log(images_collection);
  return (
    <div className='sliding-puzzle-collection'>
      {images_collection && images_collection.map((image)=>(
        <div 
          className="image-preview" 
          key={image.id}
          onClick={()=>updatePuzzleImage(image.route + image.id)}>
          <img  src={image.src + image.route + image.id} alt="" />
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
