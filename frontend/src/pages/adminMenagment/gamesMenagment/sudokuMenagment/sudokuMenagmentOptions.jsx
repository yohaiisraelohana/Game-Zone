import React, { useEffect, useState } from 'react'
import useSudoku from '../../../../hooks/useSudoku'

import './sudokuMenagmentOptions.css'
import SudokuInputTemplate from './sudokuInputTemplate';
import DefineSudokuLevel from './defineSudokuLevel';

export default function SudokuMenagmentOptions({closeModal}) {
    const {currentSudoku,deleteSudokuTemplate,updateSudokuTemplate} = useSudoku();
    const [new_template,setNewTemplate] = useState(null);
    const [level,setLevel] = useState(null);
    useEffect(()=>{
      if (currentSudoku) {
        setNewTemplate(currentSudoku.template);
        setLevel(currentSudoku.level);
      }
    },[currentSudoku]);
  return (
    <div className='SudokuMenagmentOptions'>
        <h2>Edit Sudoku Template</h2>
        <div className="sudoku-change-level">
          <DefineSudokuLevel setLevel={setLevel} level={level} />
        </div>
            {/* the template will be here with opiton to delete or edit */}
            <SudokuInputTemplate template={new_template} handleClick={(template)=>setNewTemplate(template)} />
        <div className="options">
          <button 
            className='delete'
            onClick={()=>{
              deleteSudokuTemplate(currentSudoku._id);
              closeModal();
            }}
            >DELETE</button>
          <button 
            className='update'
            onClick={()=>{
              updateSudokuTemplate(currentSudoku._id,{
                template:new_template,
                level
              });
              closeModal();
            }}
            >UPDATE</button>
        </div>
    </div>
  )
}

//create nav to this 
