import React from 'react'

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
        {piece:topLeft,position:"top left",height:"100px",width:"100px",top:0,left:30},
        {piece:topCenter,position:"top center",height:"100px",width:"130px",top:0,left:100},
        {piece:topRight,position:"top right",height:"100px",width:"130px",top:0,left:200},
        {piece:centerLeft,position:"center left",height:"130px",width:"130px",top:72,left:30},
        {piece:center,position:"center",height:"130px",width:"130px",top:72,left:130},
        {piece:centerRight,position:"center right",height:"160px",width:"100px",top:72,left:230},
        {piece:bottomLeft,position:"bottom left",height:"130px",width:"100px",top:172,left:30},
        {piece:bottomCenter,position:"bottom center",height:"130px",width:"160px",top:172,left:100},
        {piece:bottomRight,position:"bottom right",height:"100px",width:"100px",top:202,left:230}
    ];
  return (
    <div>
        <div className="pieces-container">
        {piecesArr && piecesArr.map((p,i)=>(
        <div key={i}
        className={`${i % 3 != 0 ? "take-left " : "take-space "}${i > 2 && i < 6 ? "take-top" : (i > 5 ? "take-double-top":"")}`}
        style={{
            WebkitMaskImage:`url(${p.piece})`,
            WebkitMaskRepeat:'no-repeat',
            maskImage:`url(${p.piece})`,
            maskRepeat:'no-repeat',
            top:`${p.top}px`,
            left:`${p.left}px`
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
        ))}
        </div>
    </div>
  )
}
