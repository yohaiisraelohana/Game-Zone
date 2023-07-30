import React, { useEffect, useState } from 'react'
import './breakOutGame.css'
import BreakOutGameBoard from './breakOutGameBoard'
import EndedGameAllert from '../../reusfullComponents/endedGameAllert/endedGameAllert';
import useUser from '../../../hooks/useUser';
import SelectLevel from '../../reusfullComponents/selectLevel/selectLevel';
import NavBackButton from '../../reusfullComponents/navigateBackButton/navBackButton';

export default function BreakOutGame() {
  const [endGame , setEndGame] = useState(null);
  const {updateXp,user} = useUser();
  const [level,setLevel] = useState(0);
  const gameEnded = (xp,message) => {
    setEndGame(<EndedGameAllert 
      xp={xp} 
      message={message} 
      restart={()=>{
        setLevel(0);
        setEndGame(null);
      }} />)
    if (user) { updateXp(xp); }
  }


  return (
    <div className='BreakOutGame' style={level ? {position:'absolute'} : 
      {position:'relative',backgroundColor:"var(--dark-bg)",height:"90vh",width:'100vw',top:'0'}}>
        {level > 0
        ? <BreakOutGameBoard level={level} gameEnded={gameEnded} />
        : <div className="">
            <NavBackButton/>
            <SelectLevel 
            options={["easy","medium","hard"]} 
            handleChoice={(levelSelected)=>levelSelected == "easy" 
              ?  setLevel(3) 
              : (levelSelected == "medium" ? setLevel(6) : setLevel(9))} />
          </div> }
        
        {endGame && endGame}
        
    </div>
  )
}
/*
            handleChoice={(levelSelected)=>levelSelected == "easy" 
              ? setLevel(3) 
              : (levelSelected == "medium" ? setLevel(6) : setLevel(9))} />
*/
