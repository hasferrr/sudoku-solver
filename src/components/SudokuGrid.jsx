import { useEffect } from 'react'
import {
  makeSudokuGrid,
  enableArrowKeysToNavigateInputs,
  onlyNumber,
} from '../helpers/sudokuLogic'

const SudokuGrid = () => {
  useEffect(() => {
    makeSudokuGrid()
    enableArrowKeysToNavigateInputs()
    onlyNumber()
  }, [])

  return <div className="container"></div>
}

export default SudokuGrid
