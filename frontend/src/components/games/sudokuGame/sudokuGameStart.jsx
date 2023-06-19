import React, { useEffect, useState } from 'react'
import useSudoku from '../../../hooks/useSudoku';
import {useParams} from 'react-router-dom'
import './sudokuGameStart.css'

export default function SudokuGameStart() {
    const {currentSudoku} = useSudoku();
    const [template,setTemplete] = useState(null);
    const [wrongNumber,setWrongNumber] = useState(null);
    const [disable,setDisable] = useState(false);
    const {level} = useParams();
    console.log(level);

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
        const newTmp = [...template.map((rowArr) => [...rowArr])];
        newTmp[row][col] = val;
        setTemplete(newTmp);
        if (checkSudoku(row,col)) {
            setDisable(false);
        } else {
            setWrongNumber(val);
        }
    }

    useEffect(()=>{
        if (currentSudoku) {
            setTemplete(currentSudoku);
        }
    },[currentSudoku])



  return ( 
    <div className='sudoku-game'>
        <h2>sudokuGame</h2>
        <div className={`sudoku-grid ${level}`} >
        {template && template.map((row,i)=>( 
            row.map((col,j)=>
                (
                     <input 
                        disabled={disable || col > 0} 
                        value={col > 0 ? col : ''}
                        className={`
                        ${(j % 3) == 2 ? "border-right" : ""}
                        ${(i % 3) == 2 ? "border-bottom" : ""}
                        ${wrongNumber == col ? "wrong-number" : "" }
                        ${currentSudoku[i][j] == col && col > 0 ? `exist-${level}` : ""}
                        `}
                        onChange={(e)=>hundleChange(i,j,parseInt(e.target.value))}
                        type="text" 
                        key={j}  />)
                        // if equals to the basic
            )
        ))}
        </div>
        <button 
            onClick={()=>setTemplete(currentSudoku)}
            className='reset-sudoku'>
            Reset
        </button>
    </div>
  )
}
