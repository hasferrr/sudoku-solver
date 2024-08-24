import { useInputRefs, useResetGrid, useSetGrid } from '../contexts/GridContext'

import { BD2, BD3, BD4, BD5, BD6, BD7 } from '../helpers/constant'
import { clearGridColor } from '../helpers/gridEvent'
import { solveSudoku } from '../helpers/sudokuLogic'

const Buttons = () => {
  const inputRefs = useInputRefs()
  const resetGrid = useResetGrid()
  const setGrid = useSetGrid()

  const clearColor = () => {
    clearGridColor(inputRefs.current)
  }

  const handleDemoButton = (board: number[][]) => {
    resetGrid()
    clearColor()
    setGrid(board)
  }

  const handleSolve = () => {
    solveSudoku(inputRefs.current)
  }

  return (
    <>
      <div className="buttons">
        <button onClick={handleSolve}>Solve</button>
        <button onClick={resetGrid}>Clear</button>
        <button onClick={clearColor}>Clear Color</button>
      </div>
      <div className="demo">
        <button onClick={() => handleDemoButton(BD2)}>BD2</button>
        <button onClick={() => handleDemoButton(BD3)}>BD3</button>
        <button onClick={() => handleDemoButton(BD4)}>BD4</button>
        <button onClick={() => handleDemoButton(BD5)}>BD5</button>
        <button onClick={() => handleDemoButton(BD6)}>BD6</button>
        <button onClick={() => handleDemoButton(BD7)}>BD7</button>
      </div>
    </>
  )
}

export default Buttons
