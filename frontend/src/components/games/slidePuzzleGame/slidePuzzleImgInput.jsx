import React,{useState} from 'react'
import './slidePuzzleImgInput.css';
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
          <label htmlFor="images" className="drop-container">
            <span className="drop-title">Drop files here</span>
            or
            <input type="file" id="images" accept="image/*" required={true} />
          </label>
          }
      </div>
    );
}
