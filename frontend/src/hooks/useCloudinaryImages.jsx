import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCloudinaryGamesImages,  setCurrentImage,addCloudinaryGamesImage, deleteCloudinaryGamesImage, countCloudinaryGamesImages, setPage } from '../redux/features/cloudinaryGamesImagesSlice';


export default function UseCloudinaryImages() {
    const {data,loading,error,currentImage,page,pages} = useSelector(store=>store.cloudinaryGamesImagesReducer);
    const dispatch  = useDispatch();

    const setImage = (img) => {
        dispatch(setCurrentImage(img));
    } 
    const getCloudinaryImages = (paylaod) => {
      dispatch(getCloudinaryGamesImages(paylaod));
      dispatch(countCloudinaryGamesImages(paylaod));
    }

    const addImageToGamesImgs = async (src,route,name) => {
      dispatch(addCloudinaryGamesImage({src,route,name}));
    }
    const deleteImageFromGamesImgs = async (id) => {
      dispatch(deleteCloudinaryGamesImage(id));
    }
    const selectPage = (pageSelected) => {
      dispatch(setPage(pageSelected));
      getCloudinaryImages(`?page=${pageSelected}`);
    }
  return {
    loading,
    data,
    error,
    currentImage,
    page,
    pages,
    setImage,
    getCloudinaryImages,
    addImageToGamesImgs,
    deleteImageFromGamesImgs,
    selectPage
  };
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