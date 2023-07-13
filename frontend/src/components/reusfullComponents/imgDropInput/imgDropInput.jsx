import React from 'react'
import './imgDropInput.css';

export default function ImgDropInput({title,addImage}) {
  return (
    <label htmlFor="images" className="ImgDropInput">
        <span className="drop-title">{title || "Drop files here"}</span>
        or
        <input
          onChange={(e)=>addImage(e.target.files[0])}
          type="file" 
          id="images" 
          accept="image/*" 
          required={true} />
    </label>
  )
}
