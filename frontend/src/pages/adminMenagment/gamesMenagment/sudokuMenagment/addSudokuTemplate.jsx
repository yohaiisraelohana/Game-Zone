import React from 'react'
import SudokuInputTemplate from './sudokuInputTemplate'

export default function addSudokuTemplate() {
  return (
    
    <div>
        <SudokuInputTemplate template={0} handleClick={(template)=>console.log(template)} />
    </div>
  )
}
