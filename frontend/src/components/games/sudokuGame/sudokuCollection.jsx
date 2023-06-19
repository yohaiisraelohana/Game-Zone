import React from 'react'
import './sudokuCollection.css';
import useSudoku from '../../../hooks/useSudoku';
import { useNavigate } from 'react-router-dom';

export default function SudokuCollection() {
    const {data,loading,error,setSudokuTemplate} = useSudoku();
    const navigate = useNavigate();
    console.log(data);
  return (
    <div className='sudoku-collection-container'>
        {data ? data.map((sudoku,i)=>(
            <div 
                onClick={()=>{
                    setSudokuTemplate(sudoku.template);
                    navigate(`/sudokuGame/${sudoku.level}`);
                }}
                className={`sudoku-preview `} key={i}>
                {sudoku.template.map((row)=>(
                    row.map((col,j)=>(
                        <div 
                            className={`${col > 0 ? sudoku.level : ""}`}
                            key={j}>
                            {col > 0 ? col : ""}
                        </div>
                    ))
                ))}
            </div>
        ))
        : 
        (loading 
            ? <p>loading skeletons</p> 
            : error && <p>{error}</p> 
            ) 
        }
    </div>
  )
}
