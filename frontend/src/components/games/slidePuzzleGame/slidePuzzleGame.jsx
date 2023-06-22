import React, { useEffect, useState } from 'react'

//style
import './slidePuzzleGame.css'
//components
import SlidePuzzleCollection from './slidePuzzleCollection'
import SlidePuzzleImgInput from './slidePuzzleImgInput'
import SlidePuzzleStartGame from './slidePuzzleStartGame';
//services
import { resizeCloudinaryImage } from '../../../services/resizeCloudinaryImage'; 





export default function SlidePuzzleGame() {
  const [puzzle_image,setPuzzleImage] = useState(null);
  
  const box_size = window.innerWidth < 600 ? 300 : (window.innerWidth < 900 ? 600 : 900) ;
  const images_collection = [
    {
      id:"8D95449E-A44F-4A03-B2D7-F6DB3D59F7D0_1_105_c_o8ejzp.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687409882"
    },
    {
      id:"57C19211-866B-4D0D-9CD5-5745B3449F5A_1_105_c_sxradj.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687409887"
    },
    {
      id:"3A3FC9A7-D98C-4435-87E4-FED7FFFD89A0_r0ltsi.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687409891"
    },
    {
      id:"D3D8097C-B566-4817-BE67-75F6E53BF40D_1_105_c_agaxwy.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687409913",
    },
    {
      id:"875A4D64-1D5C-4935-A92A-13E2A60471AE_wxslhn_uf4nq1.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687410012",
    },
    {
      id:"E905691D-C29C-4D9D-8312-6FA7247F7691_1_105_c_haq0sz.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687409864",
    }
  ];

  const image_id = "E905691D-C29C-4D9D-8312-6FA7247F7691_1_105_c_haq0sz.jpg"

  const route = "/GameProject/slidingPuzzle/8D95449E-A44F-4A03-B2D7-F6DB3D59F7D0_1_105_c_o8ejzp.jpg";

  const updatePuzzleImage = (route) => {
    setPuzzleImage(resizeCloudinaryImage(route,box_size,box_size));
  }


  return (
    <div >
      <SlidePuzzleImgInput />
      <SlidePuzzleCollection updatePuzzleImage={updatePuzzleImage} images_collection={images_collection}/>
      
      {puzzle_image && <SlidePuzzleStartGame image={puzzle_image} box_size={box_size} />}
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