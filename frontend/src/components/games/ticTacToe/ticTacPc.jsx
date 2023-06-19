import React, { useEffect, useState } from "react";
import "./ticTacPc.css";

export default function TicTacPc() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [move, setMove] = useState("X");
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState(null);
  const [toggle, setToggle] = useState(true);

  const reset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setToggle(true);
    setRound(0);
  };

  const [winConditions] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]);

  const opposite = () => {
    return move === "X" ? "O" : "X";
  };

  const checkWinner = () => {
    let check = "O";
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (
          board[a] === check &&
          board[b] === check &&
          board[c] === check
        ) {
          setWinner(check);
          setToggle(false);
          return true;
        }
      }
      check = "X";
    }
    if (board.every((cell) => cell !== null)) {
      setWinner("draw");
      setToggle(false);
      return true;
    }
    return false;
  };

  const starterMove = () => {
    const indexes = board.filter((square, i) => square !== null);
    let rnd = Math.floor(Math.random() * 9);

    if (indexes.length === 0) {
      setBoard((prev) =>
        prev.map((square, i) => (i === rnd ? move : square))
      );
      return true;
    }

    if (indexes.length === 1) {
      while (board[rnd] !== null) {
        rnd = Math.floor(Math.random() * 9);
      }
      console.log(rnd);
      setBoard((prev) =>
        prev.map((square, i) => (i === rnd ? move : square))
      );
      return true;
    }

    return false;
  };

  const win = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        (board[a] === move && board[b] === move && board[c] === null) ||
        (board[a] === move && board[b] === null && board[c] === move) ||
        (board[a] === null && board[b] === move && board[c] === move)
      ) {
        setBoard((prev) =>
          prev.map((x, i) => (i === a || i === b || i === c ? move : x))
        );
        return true;
      }
    }
    return false;
  };

  const blockUser = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        board[a] === opposite() &&
        board[b] === opposite() &&
        board[c] === null
      ) {
        setBoard((prev) => prev.map((x, i) => (i === c ? move : x)));
        return true;
      } else if (
        board[a] === opposite() &&
        board[b] === null &&
        board[c] === opposite()
      ) {
        setBoard((prev) => prev.map((x, i) => (i === b ? move : x)));
        return true;
      } else if (
        board[a] === null &&
        board[b] === opposite() &&
        board[c] === opposite()
      ) {
        setBoard((prev) => prev.map((x, i) => (i === a ? move : x)));
        return true;
      }
    }
    return false;
  };

  const advance = () => {
    let rnd = Math.round(Math.random());
    let flag = false;
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        (board[a] === null && board[b] === move && board[c] === null) ||
        (board[a] === move && board[b] === null && board[c] === null) ||
        (board[a] === null && board[b] === null && board[c] === move)
      ) {
        setBoard((prev) =>
          prev.map((x, i) => {
            if (
              (i === a || i === b || i === c) &&
              i > rnd &&
              !flag &&
              board[i] === null
            ) {
              flag = true;
              return move;
            }
            return x;
          })
        );
        return true;
      }
    }
    return false;
  };

  const randomMove = () => {
      const emptyCells = board.filter((square,i) => {
        if(square == null) return i;
      })
      const rnd = Math.floor(Math.random()*emptyCells.length);
      setBoard(prev => prev.map((x,i) => emptyCells[rnd] === i ? move : 'X'))
  }

  const makeComputerMove = () => {
    setTimeout(() => {
      if (!toggle) return;
      if (!starterMove())
      if (!win())
      if (!blockUser())
      if (!advance());
        // randomMove();
        console.log("true");
      setMove(opposite());
      setRound(round + 1);
    }, 1000);
  };

  useEffect(() => {
    if (!checkWinner()) {
      if (round % 2 === 1 && toggle) {
        makeComputerMove();
      }
    } else {
      setRound(0);
    }
  }, [board, move, round, toggle]);

  const doMove = (index) => {
    if (!toggle || move !== "X") return; 

    if (board[index] === null) {
      setBoard((prev) => prev.map((x, i) => (i === index ? move : x)));
      setMove((prev) => (prev === "X" ? "O" : "X"));
      setRound(round + 1);
    }
  };

  return (
    <div className="game">
      <div className={`board ${toggle ? "" : "disabled"}`}>
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => doMove(index)}>
            {cell}
          </div>
        ))}
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
      <button onClick={() => reset()} className="button">
        reset
      </button>
    </div>
  );
}
