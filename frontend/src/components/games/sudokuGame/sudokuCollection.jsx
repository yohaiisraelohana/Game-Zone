import React,{useEffect} from 'react'
import './sudokuCollection.css';
import useSudoku from '../../../hooks/useSudoku';
import SkeletonElement from '../../reusfullComponents/skeletons/skeletonElement'


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
                            className={`${col > 0 ? sudoku.level + " cell" : "cell"}`}
                            key={j}>
                            {col > 0 ? col : ""}
                        </div>
                    ))
                ))}
            </div>
        ))
        : 
        (loading 
            ? Array(9).fill(0).map((_,k)=>
            <div key={k} className="sudoku-preview-skeleton">
                <SkeletonElement   type={"fit"}/>    
            </div>
                
                )
            : <p>{error}</p> 
            ) 
        }

    </div>
  )
}
