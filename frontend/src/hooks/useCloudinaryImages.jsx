import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCloudinaryGamesImages, setCurrentImage } from '../redux/features/cloudinaryGamesImagesSlice';

export default function UseCloudinaryImages() {
    const {data,loading,error,currentImage} = useSelector(store=>store.cloudinaryGamesImagesReducer);
    const dispatch  = useDispatch();

    const setImage = (img) => {
        dispatch(setCurrentImage(img));
    } 
    const getCloudinaryImages = () => {
      dispatch(getCloudinaryGamesImages());
    }

    const addImageToCloudinary = (src,route,name) => {
      //sending request in redux and updating the images arr
    }
  return {loading,data,error,currentImage,setImage,getCloudinaryImages,addImageToCloudinary};
}
