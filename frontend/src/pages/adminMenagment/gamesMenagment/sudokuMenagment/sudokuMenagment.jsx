import React, { useState } from 'react'

import useSudoku from '../../../../hooks/useSudoku'

import SudokuGameNav from '../../../../components/games/sudokuGame/sudokuGameNav'
import SudokuCollection from '../../../../components/games/sudokuGame/sudokuCollection'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import { useModal } from '../../../../hooks/useModal';
import AddSudokuTemplate from './addSudokuTemplate';

import './sudokuMenagment.css'
import Pagination from '../../../../components/reusfullComponents/pagination/pagination';
import SudokuMenagmentOptions from './sudokuMenagmentOptions';

export default function SudokuMenagment() {
  const {setSudokuTemplate,page,pages,selectPage} = useSudoku();
  const [modal,setModal] = useState(null);
  const navigate = useNavigate();  
  const closeModal = () => {
    setModal(null);
  }
  const openModal = (content) => {
    const m = useModal(content,closeModal);
    setModal(m);
  }

  return (
    <div className='SudokuMenagment'>
        {modal && modal}
        <h2>Sudoku Game Menagment</h2>
        <SudokuGameNav additional={ <button 
          className={`add-template`}
          onClick={()=>openModal(<AddSudokuTemplate closeModal={closeModal}/>)}
          >Add</button>}/>
        <SudokuCollection handleClick={(sudoku)=>{
          setSudokuTemplate(sudoku);
          openModal(<SudokuMenagmentOptions closeModal={closeModal} />)
        }} />
        <Pagination page={page} setPage={selectPage} pages={pages} />

    </div>
  )
}
