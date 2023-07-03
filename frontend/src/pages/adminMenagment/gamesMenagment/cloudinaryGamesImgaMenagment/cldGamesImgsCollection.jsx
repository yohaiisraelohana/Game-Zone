import React from 'react'
import './cldGamesImgsCollection.css'
import useCloudinaryImages from '../../../../hooks/useCloudinaryImages'

export default function CldGamesImgsCollection() {
    const {data:imagesCollection} = useCloudinaryImages();
    console.log(imagesCollection);
    console.log("h");
  return (
    <div>cldGamesImgsCollection</div>
  )
}
