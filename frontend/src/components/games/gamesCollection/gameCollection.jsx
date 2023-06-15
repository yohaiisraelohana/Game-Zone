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
        <div className="roulette-game">
          <p>Roulette</p>
        </div>
      </div>
    </div>
  );
}
