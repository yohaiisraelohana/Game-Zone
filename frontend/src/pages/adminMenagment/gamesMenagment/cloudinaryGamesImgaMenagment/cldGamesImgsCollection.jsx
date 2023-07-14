import React from 'react'
import './cldGamesImgsCollection.css'
import useCloudinaryImages from '../../../../hooks/useCloudinaryImages'
import { deleteImageFromCloudinary } from '../../../../services/cloudinaryRequests';

export default function CldGamesImgsCollection() {
    const {data:imagesCollection , deleteImageFromGamesImgs} = useCloudinaryImages();
    console.log(imagesCollection);
    console.log("h");

    const handleDelete = async (name,id) => {
      const public_id = name.substring(0, name.lastIndexOf('.'));
      try {
        const {result} = await deleteImageFromCloudinary(public_id);
        console.log(result);
        if (result == "ok") deleteImageFromGamesImgs(id);
      } catch (error) {
        console.log(error);
      }
    }
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
               onClick={()=>handleDelete(image.name,image._id)}
               className="delete-img">
                 x
              </button>
             </div>

        </div>

      ))}
    </div>
  )
}
