import React,{useState} from 'react'
import './slidePuzzleImgInput.css';
import ImgDropInput from '../../reusfullComponents/imgDropInput/imgDropInput';

export default function SlidePuzzleImgInput({handleImageChange}) {
    const [open_input,setOpenInput] = useState(false);


  
    return (
      <div className='SlidePuzzleImgInput'>
          <button 
            onClick={()=>setOpenInput(!open_input)}
            className='open-input'>click to play with your own image</button>

          {open_input && 
            <div className="img-input-container">
              <ImgDropInput addImage={(img)=>handleImageChange(img)} />
            </div>}
      </div>
    );
}
