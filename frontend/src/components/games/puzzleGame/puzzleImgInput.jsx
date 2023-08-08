import React,{useState} from 'react'
import './puzzleImgInput.css';
import ImgDropInput from '../../reusfullComponents/imgDropInput/imgDropInput';

export default function PuzzleImgInput({handleImageChange}) {
    const [open_input,setOpenInput] = useState(false);


  
    return (
      <div className={`PuzzleImgInput${open_input ? "-open" : "-close"}`}>
          <button 
            onClick={()=>setOpenInput(!open_input)}
            className='PuzzleImgInput-open-input'>click to play with your own image</button>

          {open_input && 
            <div className="PuzzleImgInput-img-input-container">
              <ImgDropInput addImage={(img)=>handleImageChange(img)} />
            </div>}
      </div>
    );
}