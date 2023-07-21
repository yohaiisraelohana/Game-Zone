import React from 'react'
import UseMemoryGame from '../../../../hooks/useMemoryGame'
//style
import './memoryGameMenagmentCollection.css';

//assets
import {AiOutlineEdit} from 'react-icons/ai' 
import { useNavigate } from 'react-router-dom';

export default function MemoryGameMenagmentCollection() {
    const {data,setMemoryGame} = UseMemoryGame();
    const navigate = useNavigate();
  return (
    <div className='MemoryGameMenagmentCollection'>
        {data && data.map((memory,i)=>(
          <div className="memory-details-container" key={i} >
            <AiOutlineEdit onClick={()=>{
              setMemoryGame(memory);
              navigate("/memoryGame/menagment");
            }} className='edit-icon' />
            <h1>{memory.name}</h1>
            <div className="details-container">
              <div className="keys-details">
              <h3>Main Keys:</h3>
              <div className="">
                {memory.keys.map((k)=>( <p>{k}</p> ))}
              </div>
              <h3>Image Keys:</h3>
              <div className="imgKeys">
                {memory.img_keys.map((k)=>( <p>{k}</p> ))}
              </div>
              <div className="desk">
                <div className='headers'><span>Headers:</span>{"{"}
                {memory.headers && Object.keys(memory.headers).map((key,value) => (
                    <p key={value}>
                      {key} : {memory.headers[key]},
                    </p>
                  ))}{"}"}</div>
                <p className='api'><span>API:</span> {memory.api }</p>
              </div> 
              </div>
              <img src={memory.img_url} alt="memory image" height="100px" width="100px" />
            </div>

           <div className="mobile">
           <div className='headers'><span>Headers:</span>{"{"}
              {memory.headers && Object.keys(memory.headers).map((key,value) => (
                  <p key={value}>
                    {key} : {memory.headers[key]},
                  </p>
                ))}{"}"}</div>
            <p className='api'><span>API:</span> {memory.api }</p>
          </div> 

          </div>
        ))}
    </div>
  )
}
