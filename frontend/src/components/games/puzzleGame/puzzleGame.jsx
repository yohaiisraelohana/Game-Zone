import React from 'react'
import image from '../../../assets/images/games/slideImageTest.jpeg';
import blackPiece from '../../../assets/images/blackPuzzle.png' ;
import leftTop from '../../../assets/images/puzzle9x9/leftTop.png';
import topCenter from '../../../assets/images/puzzle9x9/topCenter.png';
import topRight from '../../../assets/images/puzzle9x9/topRight.png'; 
import './puzzleGame.css';
export default function PuzzleGame() {
    const piecesArr = [
        {piece:leftTop,position:"top left",height:"300",width:"300"},
        {piece:topCenter,position:"top center",height:"300",width:"383"},
        {piece:topRight,position:"top right",height:"300",width:"383"},
        {piece:blackPiece,position:"center left",height:"300",width:"300"},
        {piece:blackPiece,position:"center",height:"300",width:"300"},
        {piece:blackPiece,position:"center right",height:"300",width:"300"},
        {piece:blackPiece,position:"bottom left",height:"300",width:"300"},
        {piece:blackPiece,position:"bottom center",height:"300",width:"300"},
        {piece:blackPiece,position:"bottom right",height:"300",width:"300"}
    ];
  return (
    <div>
        <div className="pieces-container">
        {piecesArr && piecesArr.map((p,i)=>(
        <div key={i}
        className={i % 3 != 0 ? "take-left" : ""}
        style={{
            WebkitMaskImage:`url(${p.piece})`,
            WebkitMaskRepeat:'no-repeat',
            maskImage:`url(${p.piece})`,
            maskRepeat:'no-repeat'
            }} >
                <div 
                    style={{
                        backgroundImage:`url(${image})`,
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
