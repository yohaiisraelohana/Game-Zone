import React, { useEffect, useState } from 'react'
import useMemoryGame from '../../../hooks/useMemoryGame'
import MemoryLevelNav from './memoryLevelNav'
import { apiGet } from '../../../services/apiRequests';
import './memoryGameStart.css';
import MemoryCard from './memoryCard';

export default function MemoryGameStart() {
    const [level,setLevel] = useState(null);
    const {currentGame} = useMemoryGame();
    const [memoryCards,setMemoryCards]=useState(null); 

    const [turns,setTurns] = useState(0);
    const [firstCard,setFirstCard] = useState(null);
    const [secondCard,setSecondCard] = useState(null);
    const [disabled,setDisabled] =  useState(false);
    

    const updateMemoryCards = (data) => {
      const shuffledCardsArray = [...data,...data]
        .sort(()=>Math.random() - 0.5)
        .map((card,i)=>({src:card,mached:false,id:i}));
      
      setMemoryCards(shuffledCardsArray);

    }
    

    const getMemoryCards = async () => {
      try {
        let {data} = await apiGet(`${currentGame.api}${level}`,currentGame.headers);
        //getting tha image array
        for (let i = 0; i < currentGame.keys.length ; i++) {
          data = data[currentGame.keys[i]];
        }
        //gerring only the image needed
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

    const choiseCard = (card) => {
      if (firstCard) {
        setDisabled(true);
        setSecondCard(card);
      } else {
        setFirstCard(card);
      } 
    }

    const checkIfWon = () => {
      for (let i = 0; i < memoryCards.length ; i++) {
        if (!memoryCards[i].mached) {
          return false;
        }        
      }
      return true;
    }






    useEffect(()=>{
      if (firstCard && secondCard) {
        if (firstCard.src == secondCard.src) {
          setMemoryCards([...memoryCards.map((card)=>(
            card.src == firstCard.src 
            ? {...card,mached:true}
            : card
          ))]);
        }
        setTimeout(() => {
          setFirstCard(null);
          setSecondCard(null);
          setTurns(turns + 1);
          setDisabled(false);
        }, 1000);
      }
    },[firstCard,secondCard])

    useEffect(()=>{
      if (currentGame && level) {
        getMemoryCards();
      }
    },[level,currentGame])

    useEffect(()=>{
      if (memoryCards) {
        if (checkIfWon()) {
          alert(`congradilations!
          you won ${Math.ceil(level * 100 / turns)} xp`);
          setTurns(0);
        }
      }
    },[memoryCards])



  return (
    <div>

        {level ? 
        <div className="memory-game-start">
          <p>game started level {level}</p>
          <p>Turns{turns}</p>
          <div className="memory-cards-container">
          {memoryCards ? 
            memoryCards.map((card,i)=>(
              <MemoryCard 
                flipped={card == firstCard || card == secondCard}
                choiseCard={choiseCard} 
                card={card}
                disabled={disabled} 
                key={i} />
            ))      
            : <p>loading</p>
          }
          </div>
        </div>
        :<MemoryLevelNav setLevel={setLevel} /> }
    </div>
  )
}
