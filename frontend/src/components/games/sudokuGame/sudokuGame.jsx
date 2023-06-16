import React, { useEffect, useState } from 'react'
import './sudokuGame.css'

export default function SudokuGame() {
    const [template,setTemplete] = useState([
        [0,0,8,1,0,0,0,0,7],
        [0,4,7,8,5,0,6,0,0],
        [0,5,0,9,0,0,2,0,4],
        [7,0,6,2,0,8,0,0,1],
        [0,0,1,0,4,0,7,0,0],
        [2,0,0,0,7,0,3,0,8],
        [4,0,5,0,0,3,0,2,0],
        [0,0,2,0,1,9,8,7,0],
        [8,0,0,0,0,5,4,0,0]
    ])
    const [wrongNumber,setWrongNumber] = useState(null);
    const [disable,setDisable] = useState(false);
    console.log(template);

    const checkRow = (row)=>{
        let arr = new Array(10).fill(0);
        for(let i=0;i<row.length;i++){
            if(row[i]>0){
                if(arr[row[i]]>0){
                    return false;
                } else {
                    arr[row[i]]++;
                }
            }
        }
        return true;
    }

    const checkCol = (col) => {
        let arr = new Array(10).fill(0);
        for(let i=0;i < template[0].length;i++){
            if(template[i][col]>0){
                if (arr[template[i][col]]>0) {
                    return false;
                } else {
                    arr[template[i][col]]++;
                }
            }
        }
        return true;
    }

    const checkBox = (row_ind,col_ind) => {
        let arr = new Array(10).fill(0);
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (template[row_ind + i][col_ind + j] > 0) {
                    if (arr[template[row_ind + i][col_ind + j]]>0) {
                        return false;
                    } else {
                        arr[template[row_ind + i][col_ind + j]]++;
                    }
                }
            }
        }
        return true;
    }

    const getMiddleBox = (ind) =>{
        if(ind % 3 == 1){
            return ind;
        }else if(ind % 3 == 2){
            return ind -1;
        }
        return ind + 1;
    } 
    
    const checkSudoku = (row,col) => {
        if (!checkRow(template[row]) || !checkCol(col)) {
            return false;
        }
        let row_ind = getMiddleBox(row);
        let col_ind = getMiddleBox(col);
        if (!checkBox(row_ind,col_ind)) {
            return false;
        }
        return true;
    }

    const hundleChange = (row,col,val) => {
        setDisable(true);
        console.log(row,col,val);
        const newTmp = [...template];
        newTmp[row][col] = val;
        setTemplete(newTmp);
        if (checkSudoku(row,col)) {
            setDisable(false);
        } else {
            setWrongNumber(val);
        }
    }

  return ( 
    <div className='sudoku-game'>
        <h2>sudokuGame</h2>
        <div className="sudoku-grid">
        {template && template.map((row,i)=>(
            row.map((col,j)=>
                (
                    col > 0 ?
                    <p key={j} className={`
                    ${wrongNumber == col ? "wrong-number" : "" }
                    ${(j % 3) == 2 ? "border-right" : ""}
                    ${(i % 3) == 2 ? "border-bottom" : ""}
                    `} >{col}</p> 
                    : <input 
                        disabled={disable} 
                        className={`
                        ${(j % 3) == 2 ? "border-right" : ""}
                        ${(i % 3) == 2 ? "border-bottom" : ""}
                        `}
                        onChange={(e)=>hundleChange(i,j,parseInt(e.target.value))}
                        type="text" 
                        key={j}  />)
                
            )
        ))}
        </div>
    </div>
  )
}
