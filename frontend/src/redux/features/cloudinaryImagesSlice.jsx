import { createSlice} from "@reduxjs/toolkit";

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
    },
    {
      id:"_2fef51e3-1a67-4f8f-8ebb-9f7784e2e1c7_yzuawf.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687434393"
    },
    {
      id:"_01830ead-b7ee-4312-9a24-dd4511d6bf31_srqvry.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687434394"
    },
    {
      id:"_67558b98-2bd9-4047-9787-d15ae137fa0d_ryjtmw.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687434398"
    },
    {
      id:"_97eff32a-5fba-42ef-882f-eef8100618ba_me7l1p.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687434429"
    },
    {
      id:"_ae8ce2cf-b099-43be-b8a4-02e0ba8ba29a_bju1jy.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687434817"
    },
    {
      id:"_96cca7a1-93fb-4a73-a15c-ebbe68a74b0f_wrtjtw.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687435024"
    },
    {
      id:"_cc021293-ceea-458e-bc9b-ea7e661fdade_uzfnbw.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687435814"
    },
    {
      id:"_95e8eb75-b339-4395-89e1-01a62d71e368_yxo23u.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687435827"
    },
    {
      id:"_00a14afb-0767-43eb-8db9-2e675de90de2_khq884.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687435833"
    },
    {
      id:"_ba157ea9-d84a-46e5-87b1-b9cfc58f6c98_ztoedf.jpg",
      route:"/GameProject/slidingPuzzle/",
      src:"https://res.cloudinary.com/dhojbnefp/image/upload/v1687435839"
    }
  ];

const initialState = {
    data:images_collection,
    loading:false,
    error:null,
    currentImage:null,
}

const cloudinaryImagesSlice = createSlice({
    initialState,
    name:"cloudinary_images",
    reducers:{
        setCurrentImage: (state,action) =>{
            state.currentImage = action.payload;
        }
    }
})


export const {setCurrentImage} = cloudinaryImagesSlice.actions;
export default cloudinaryImagesSlice.reducer;