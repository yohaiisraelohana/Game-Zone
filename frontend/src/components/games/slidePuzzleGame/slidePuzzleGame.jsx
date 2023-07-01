import React, { useEffect, useState } from 'react'

//style
import './slidePuzzleGame.css'
//components
import SlidePuzzleCollection from './slidePuzzleCollection'
import SlidePuzzleImgInput from './slidePuzzleImgInput'
import SlidePuzzleStartGame from './slidePuzzleStartGame';
//services
import { resizeCloudinaryImage } from '../../../services/resizeCloudinaryImage'; 
import useCloudinaryImages from '../../../hooks/useCloudinaryImages';
import NavBackButton from '../../reusfullComponents/navigateBackButton/navBackButton';





export default function SlidePuzzleGame() {
  const [puzzle_image,setPuzzleImage] = useState(null);
  const box_size = window.innerWidth < 600 ? 300 : (window.innerWidth < 900 ? 600 : 900) ;
  const {data,currentImage,setImage} = useCloudinaryImages();
  

  const updatePuzzleImage = () => {
    setPuzzleImage(resizeCloudinaryImage(currentImage.route + currentImage.id,box_size,box_size));
  }

  useEffect(()=>{
    if(currentImage){
      updatePuzzleImage();
    }
  },[currentImage])

  console.log({currentImage});
  return (
    <div className='SlidePuzzleGame' >
      {currentImage
        ? 
          <div>
            <NavBackButton onClick={() => setImage(null)}/>
            <SlidePuzzleStartGame image={puzzle_image} box_size={box_size} />
          </div>
          
        : <div >
            <NavBackButton />
            <SlidePuzzleImgInput />
            <SlidePuzzleCollection  images_collection={data}/>
          </div>
        }
    </div>
  )
}

/*

*/
/**


 */
  

/*
import Resizer from 'react-image-file-resizer';



*/

  // const resizeFile = (file) =>
  // new Promise((resolve) => {
  //   Resizer.imageFileResizer(
  //     file,
  //     300,
  //     300,
  //     "JPEG",
  //     100,
  //     0,
  //     (uri) => {
  //       console.log(uri);
  //       resolve(uri);
  //     },
  //     "base64",
  //     300,
  //     300
  //   );
  // });

  // const resizeImage = async () => {
  //   try {
  //     const new_img = await resizeFile(image)
  //     setPuzzleImage(new_img);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }