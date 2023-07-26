import React,{useEffect} from 'react'
import './sudokuCollection.css';
import useSudoku from '../../../hooks/useSudoku';


export default function SudokuCollection({handleClick}) {
    const {data,loading,error,getSudokuTemolates} = useSudoku();
    useEffect(()=>{
        getSudokuTemolates();
    },[])

  return (
    <div className='SudokuCollection'>
        {data ? data.map((sudoku,i)=>(
            <div 
                onClick={()=>handleClick(sudoku)}
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
