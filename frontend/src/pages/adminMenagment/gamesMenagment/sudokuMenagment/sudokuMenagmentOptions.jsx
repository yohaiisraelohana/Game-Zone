import React from 'react'
import useSudoku from '../../../../hooks/useSudoku'
import NavBackButton from '../../../../components/reusfullComponents/navigateBackButton/navBackButton';

import './sudokuMenagmentOptions.css'

export default function SudokuMenagmentOptions() {
    const {currentSudoku} = useSudoku();
    console.log(currentSudoku);
  return (
    <div className='SudokuMenagmentOptions'>
        <NavBackButton/>
        <div className="">
            {/* the template will be here with opiton to delete or edit */}
        </div>
    </div>
  )
}

//create nav to this 
