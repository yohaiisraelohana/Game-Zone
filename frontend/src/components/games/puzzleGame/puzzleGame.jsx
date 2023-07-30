import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable';


import topLeft from '../../../assets/images/puzzle9x9/pieces/topLeft.png';
import topCenter from '../../../assets/images/puzzle9x9/pieces/topCenter.png';
import topRight from '../../../assets/images/puzzle9x9/pieces/topRight.png'; 
import centerLeft from '../../../assets/images/puzzle9x9/pieces/centerLeft.png';
import center from '../../../assets/images/puzzle9x9/pieces/center.png';
import centerRight from '../../../assets/images/puzzle9x9/pieces/centerRight.png';
import bottomLeft from '../../../assets/images/puzzle9x9/pieces/bottomLeft.png';
import bottomCenter from '../../../assets/images/puzzle9x9/pieces/bottomCenter.png';
import bottomRight from '../../../assets/images/puzzle9x9/pieces/bottomRight.png';

import gameImage from '../../../assets/images/puzzle9x9/images/demo.jpg';
import './puzzleGame.css';
export default function PuzzleGame() {
    const piecesArr = [
        {piece:topLeft,position:"0% 0%",height:"100px",width:"100px",top:0,left:0},
        {piece:topCenter,position:"41% 0%",height:"100px",width:"130px",top:0,left:30},
        {piece:topRight,position:"100% 0%",height:"100px",width:"130px",top:0,left:30},
        {piece:centerLeft,position:"0% 41%",height:"130px",width:"130px",top:30,left:0},
        {piece:center,position:"59% 41%",height:"130px",width:"130px",top:30,left:30},
        {piece:centerRight,position:"100% 50%",height:"160px",width:"100px",top:30,left:30},
        {piece:bottomLeft,position:"0% 100%",height:"130px",width:"100px",top:60,left:0},
        {piece:bottomCenter,position:"50% 100%",height:"130px",width:"160px",top:60,left:30},
        {piece:bottomRight,position:"100% 100%",height:"100px",width:"100px",top:30,left:30}
    ];
  return (
    <div className='PuzzleGame'>
        <div className='game'>
        <div className="slice-image">
        {piecesArr && piecesArr.map((p,i)=>(
            <Draggable>
        <div className='slice' key={i}
        // className={`${i % 3 != 0 ? "take-left " : "take-space "}${i > 2 && i < 6 ? "take-top" : (i > 5 ? "take-double-top":"")}`}
        style={{
            WebkitMaskImage:`url(${p.piece})`,
            WebkitMaskRepeat:'no-repeat',
            maskImage:`url(${p.piece})`,
            maskRepeat:'no-repeat',
            marginLeft:`${-p.left}px`,
            marginTop:`${-p.top}px`
            // top:`${p.top}px`,
            // left:`${p.left}px`
            }} >
                <div 
                    style={{
                        backgroundImage:`url(${gameImage})`,
                        height:p.height,
                        width:p.width,
                        backgroundPosition:p.position
                        }}>
                </div>
        </div> 
        </Draggable>
        ))}
        </div>
        <div className='full-image'>
        <img src={gameImage} alt="" />
        </div>
        </div>
        <div className='board'></div>


    </div>
  )
}


