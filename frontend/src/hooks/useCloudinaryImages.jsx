import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCloudinaryGamesImages,  setCurrentImage,addCloudinaryGamesImage, deleteCloudinaryGamesImage } from '../redux/features/cloudinaryGamesImagesSlice';


export default function UseCloudinaryImages() {
    const {data,loading,error,currentImage} = useSelector(store=>store.cloudinaryGamesImagesReducer);
    const dispatch  = useDispatch();

    const setImage = (img) => {
        dispatch(setCurrentImage(img));
    } 
    const getCloudinaryImages = () => {
      dispatch(getCloudinaryGamesImages());
    }

    const addImageToGamesImgs = async (src,route,name) => {
      dispatch(addCloudinaryGamesImage({src,route,name}));
    }
    const deleteImageFromGamesImgs = async (id) => {
      dispatch(deleteCloudinaryGamesImage(id));
    }
  return {loading,data,error,currentImage,setImage,getCloudinaryImages,addImageToGamesImgs,deleteImageFromGamesImgs};
}
/**
 *     const deleteImageFromGamesImgs = async (id) => {
      try {
        const response = await apiDelete(DELETE_CLOUDINARY_GAMES_IMG + id);
        if (response.statusText == "OK") {
          dispatch(removeImage(id));
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
 */