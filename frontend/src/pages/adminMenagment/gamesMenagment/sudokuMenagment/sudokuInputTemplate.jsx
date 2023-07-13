
import React from 'react'
import './sudokuInputTemplate.css';

export default function SudokuInputTemplate({template,handleClick}) {
  return (
      <div className="SudokuInputTemplate">
      {template && template.map((row,i)=>(
          row.map((col,j)=>(
              <input 
                  className={`${col > 0 ? "exist" : "empty"}`}
                  key={j}
                  value={col > 0 ? col : ""}
                  onChange={(e)=>{
                    let new_template = JSON.parse(JSON.stringify(template));// [...template];
                    new_template[i][j] = Number(e.target.value);
                    handleClick(new_template);
                  }}
                  >
              </input>
          ))
      ))}
      </div>
  )
}
