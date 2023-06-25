import React from 'react'
import './rouletteBoard.css'

export default function RouletteBoard({setChoice,setRevard,chice}) {
  return (
    <div className='board-container'>
      <div className="rows-options-container">
      <div className="two-rows-container">
            {[[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]
            ,[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]].map((n,i)=>(
              <button   
                onClick={()=>{
                  setChoice(n);
                  setRevard(6);
                }}
                key={i}>^</button>
            ))}
        </div>
        <div className="one-row-container">
            {[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]
            ,[19,20,21],[22,23,24],[25,26,27],[28,29,30],[31,32,33],[34,35,36]].map((n,i)=>(
              <button 
                onClick={()=>{
                  setChoice(n);
                  setRevard(12);
                }}
                key={i}>^</button>
            ))}
        </div>
      </div>
      <div className="options-container">
        {[{},{color:"red"},{color:"black"},{color:"red"},{color:"black"},{color:"red"},
        {color:"black"},{color:"red"},{color:"black"},{color:"red"},{color:"black"},
        {color:"black"},{color:"red"},{color:"black"},{color:"red"},{color:"black"},
        {color:"red"},{color:"black"},{color:"red"},{color:"red"},{color:"black"},
        {color:"red"},{color:"black"},{color:"red"},{color:"black"},{color:"red"},
        {color:"black"},{color:"red"},{color:"black"},{color:"black"},{color:"red"},
        {color:"black"},{color:"red"},{color:"black"},{color:"red"},{color:"black"},{color:"red"}].map((n,i)=>(
            <button 
              onClick={()=>{
                setChoice([i]);
                setRevard(36);
              }}
              className={`${chice && chice.includes(i) ? " selected-number " : ""}${i == 0 ? " zero" : n.color}`}
              key={i}>{i}</button>
          ))}
          {[[1,4,7,10,13,16,19,22,25,28,31,34],
          [2,5,8,11,14,17,20,23,26,29,32,35],
          [3,6,9,12,15,18,21,24,27,30,33,36]].map((n,i)=>(
            <button 
              onClick={()=>{
                setChoice(n);
                setRevard(3);
              }}
              key={i}>
                2:1
            </button>
          ))}
      </div>
      <div className="four-rows-container">
        {[
          {name:"1 st 12",value:[1,2,3,4,5,6,7,8,9,10,11,12]},
          {name:"2nd 12",value:[13,14,15,16,17,18,19,20,21,22,23,24]},
          {name:"3rd 12",value:[25,26,27,28,29,30,31,32,33,34,35,36]}].map((n,i)=>(
          <button 
            onClick={()=>{
              setChoice(n.value);
              setRevard(3);
            }}
            key={i}>
            {n.name} 
          </button>
        ))}
      </div>
      <div className="specials-options-container">
      {
          [
            {name:"1 to 18",value:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]},
            {name:"EVEN",value:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]},
            {name:"<>",className:"red",value:[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]},
            {name:"<>",className:"black",value:[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]},
            {name:"ODD",value:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]},
            {name:"19 to 36",value:[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]}
          ].map((n,i)=>(
            <button 
              onClick={()=>{
                setChoice(n.value);
                setRevard(3);
              }}
              key={i} className={n.className ? n.className : ""}>
              {n.name}
            </button>
          ))
        }
      </div>
    </div>
  )
}
