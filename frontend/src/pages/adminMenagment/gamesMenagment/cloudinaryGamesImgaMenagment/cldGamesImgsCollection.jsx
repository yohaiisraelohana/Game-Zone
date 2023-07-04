import React from 'react'
import './cldGamesImgsCollection.css'
import useCloudinaryImages from '../../../../hooks/useCloudinaryImages'

export default function CldGamesImgsCollection() {
    const {data:imagesCollection} = useCloudinaryImages();
    console.log(imagesCollection);
    console.log("h");
  return (
    <div className='CldGamesImgsCollection'>
      {imagesCollection && imagesCollection.map((image,index)=>(
        <div 
          className="img-container"
          key={index}>
          <img 
            src={image.src + image.route + image.name} 
            alt="image from the collection" 
             />
             <div className="deleteContainer">
              <button 
               onClick={()=>console.log("delete")}
               className="delete-img">
                 Delete
              </button>
             </div>

        </div>

      ))}
    </div>
  )
}
