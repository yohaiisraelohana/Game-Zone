import React, { useEffect, useState } from 'react'
import useMemoryGame from '../../../hooks/useMemoryGame'
import MemoryLevelNav from './memoryLevelNav'
import { apiGet } from '../../../services/apiRequests';
import './memoryGameStart.css';

export default function MemoryGameStart() {
    const [level,setLevel] = useState(null);
    const {currentGame} = useMemoryGame();
    const [memoryCards,setMemoryCards]=useState(null); 
    

    const updateMemoryCards = (data) => {
      setMemoryCards([...data,...data]);
    }
    

    const getMemoryCards = async () => {
      try {
        let {data} = await apiGet(`${currentGame.api}${level}`);
        for (let i = 0; i < currentGame.keys.length ; i++) {
          data = data[currentGame.keys[i]];
        }
        if (currentGame.img_keys.length > 0) {
          let imgs = [];
          for (let j = 0; j < currentGame.img_keys.length; j++) {
            for (let i = 0; i < data.length ; i++) {
              imgs.push(data[i][currentGame.img_keys[j]]);
            }
            data = [...imgs];
            imgs = [];
          }
        }
        updateMemoryCards(data);
      } catch (error) {
        console.log(error);
      }
    }
    

    useEffect(()=>{
      if (currentGame && level) {
        getMemoryCards();
      }
    },[level,currentGame])
  return (
    <div>
        {level ? 
        <div className="memory-game-start">
          <p>game started level {level}</p>
          <div className="memory-cards-container">
          {memoryCards ? 
            memoryCards.map((card,i)=>(
              <div className="memory-card" key={i}>
                <div 
                style={{backgroundImage:`url("https://res.cloudinary.com/dhojbnefp/image/upload/v1686320267/GameProject/memoryGame/9B55637C-4815-4169-947B-C0B1478146E9_mylsol.jpg")`}}
                className="back">
                </div>

                {/* <div 
                className='front'
                style={{backgroundImage:`url(${card})`}}  >
                </div> */}
              </div>

            ))      
            : <p>loading</p>
          }
          </div>
        </div>
        :<MemoryLevelNav setLevel={setLevel} /> }
    </div>
  )
}
