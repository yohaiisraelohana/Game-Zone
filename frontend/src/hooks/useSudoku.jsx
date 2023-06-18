import { useDispatch, useSelector } from 'react-redux'
import { getSudoku, setCurrentSudoku } from '../redux/features/sudokuSlice';

export default function useSudoku() {
    const {data,loading,error,currentSudoku,sudokuLevels } = useSelector(store => store.sudokuReducer);
    const dispatch  = useDispatch();
    const getSudokuTemolates = () => {
        dispatch(getSudoku());
    }
    const setSudokuTemplate = (sudokuTemplate) => {
        dispatch(setCurrentSudoku(sudokuTemplate));
    }
  return {data,loading,error,currentSudoku,sudokuLevels,setSudokuTemplate,getSudokuTemolates};
}
