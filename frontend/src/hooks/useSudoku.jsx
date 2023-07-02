import { useDispatch, useSelector } from 'react-redux'
import { getSudoku, setCurrentSudoku } from '../redux/features/sudokuSlice';
import { apiDelete, apiPost, apiPut } from '../services/apiRequests';
import { Add_SUDOKU_TEMPLATE, DELETE_SUDOKU_TEMPLATE, UPDATE_SUDOKU_TEMPLATE } from '../constants/urls';

export default function useSudoku() {
    const {data,loading,error,currentSudoku,sudokuLevels } = useSelector(store => store.sudokuReducer);
    const dispatch  = useDispatch();
    const getSudokuTemolates = (payload) => {
        dispatch(getSudoku(payload ? payload : ""));
    }
    const setSudokuTemplate = (sudokuTemplate) => {
        dispatch(setCurrentSudoku(sudokuTemplate));
    }
    const addSudokuTemplate = async (sudoku) => {
        try {
            const response = await apiPost(Add_SUDOKU_TEMPLATE,sudoku);
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const updateSudokuTemplate = async (id,sudoku) => {
        try {
            const response = await apiPut(`${UPDATE_SUDOKU_TEMPLATE}${id}`,sudoku);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const deleteSudokuTemplate = async (id) => {
        try {
            const response = await apiDelete(`${DELETE_SUDOKU_TEMPLATE}${id}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
  return {
    data,
    loading,
    error,
    currentSudoku,
    sudokuLevels,
    setSudokuTemplate,
    getSudokuTemolates,
    addSudokuTemplate,
    updateSudokuTemplate,
    deleteSudokuTemplate
};
}
