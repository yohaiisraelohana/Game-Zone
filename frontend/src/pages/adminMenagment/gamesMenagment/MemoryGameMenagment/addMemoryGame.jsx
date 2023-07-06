import React, { useState } from 'react'
import './addMemoryGame.css';
import ImgDropInput from '../../../../components/reusfullComponents/imgDropInput/imgDropInput'

//assets
import {AiFillPlusSquare} from 'react-icons/ai';
export default function AddMemoryGame() {
  const [mainKeys,setMainKeys] = useState([""]);
  const [imgKeys,setImgKeys] = useState([""]);
  const [headers,setHeaders] = useState({name:"ss"}); 
  console.log(mainKeys);
  console.log(imgKeys);
  return (
    <div className='AddMemoryGame'>
        <h2>ADD Memory Game</h2>
        <form action="">
            <label className='api-lable' htmlFor="">API</label>
            <input 
              className='input'
              type="text" />

            <div className="headers-container">
              <label htmlFor="">Headers</label>
              <input 
                placeholder='key'
                className='input'
                type="text" />
              <p className='object-mid'>:</p>
              <input 
                placeholder='value'
                className='input'
                type="text" />
              {/* <div className="object-container">
                <p>{"{"}</p>
                {Object.keys(headers).map((key) => (
                  <p key={key}>
                    {key} : {headers[key]},
                  </p>
                ))}
                <p>{"}"}</p>
              </div> */}

            </div>

            

            <div className="lable-container">
              <label htmlFor="">Main Keys</label>
              <AiFillPlusSquare onClick={()=>setMainKeys([...mainKeys,""])} />
            </div>
            {mainKeys.map((inp,i)=>(
              <div className="input-container">
                <input type="text" 
                className='input'
                onChange={(e)=>{
                  const u_mainKeys = mainKeys.map((k,ind)=>(i==ind ? e.target.value : k));
                  setMainKeys(u_mainKeys);
                }} value={inp}  key={i} />
                <button
                  onClick={()=>{
                    const u_mainKeys = mainKeys.filter((k,ind)=> ind != i );
                    setMainKeys(u_mainKeys);
                  }}
                  >-</button>
              </div>

            ))}

            <div className="lable-container">
              <label htmlFor="">Image Keys</label>
              <AiFillPlusSquare onClick={()=>setImgKeys([...imgKeys,""])} />
            </div>
            {imgKeys.map((inp,i)=>(
              <div className="input-container">
                <input type="text" 
                className='input'
                onChange={(e)=>{
                  const u_imgKeys = imgKeys.map((k,ind)=>(i==ind ? e.target.value : k));
                  setImgKeys(u_imgKeys);
                }} value={inp}  key={i} />
                <button
                  onClick={()=>{
                    const u_imgKeys = imgKeys.filter((k,ind)=> ind != i );
                    setImgKeys(u_imgKeys);
                  }}
                  >-</button>
              </div>

            ))} 
          

                <div className="image-input-container">
                  <label htmlFor="">Background Image</label>
                  <ImgDropInput/>
                </div>
            
            

            <button>Submit</button>
        </form>
    </div> 
  )
}
