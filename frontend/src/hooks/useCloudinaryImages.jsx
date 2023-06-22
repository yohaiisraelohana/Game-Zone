import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentImage } from '../redux/features/cloudinaryImagesSlice';

export default function UseCloudinaryImages() {
    const {data,loading,error,currentImage} = useSelector(store=>store.cloudinaryImagesReducer);
    const dispatch  = useDispatch();

    const setImage = (img) => {
        dispatch(setCurrentImage(img));
    } 

  return {loading,data,error,currentImage,setImage};
}
