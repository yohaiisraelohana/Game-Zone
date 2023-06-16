import React from "react";
import { Link } from "react-router-dom";
//style
import "./gameCollection.css";

export default function GameCollection() {
  return (
    <div>
      <div className="games">
        <Link to={"/memoryGame"} className="memory-game">
          <p>Memory Game</p>
        </Link>
        <Link to={"/ticTacGame"} className="ticTac-game">
          <p>Tic Tac Toe</p>
        </Link>
        <Link className="roulette-game">
          <p>Roulette</p>
        </Link>
        <Link to={"/sudokuGame"} className="sudoko-game">
          <p>Sudoko</p>
        </Link>
      </div>
    </div>
  );
}
