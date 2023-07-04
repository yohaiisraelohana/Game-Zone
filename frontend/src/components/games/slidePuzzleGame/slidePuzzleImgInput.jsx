import React,{useState} from 'react'
import './slidePuzzleImgInput.css';
import ImgDropInput from '../../reusfullComponents/imgDropInput/imgDropInput';
export default function SlidePuzzleImgInput() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [open_input,setOpenInput] = useState(false);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className='SlidePuzzleImgInput'>
          <button 
            onClick={()=>setOpenInput(!open_input)}
            className='open-input'>click to play with your own image</button>

          {open_input && 
            <div className="img-input-container">
              <ImgDropInput/>
            </div>}
      </div>
    );
}
