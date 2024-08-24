import { useGrid, useInputRefs, useResetGrid, useSetGrid } from '../contexts/GridContext'
import { useCopyGrid } from '../hooks/useCopyGrid'

import { BD2, BD3, BD4, BD5, BD6, BD7 } from '../helpers/constant'
import { clearGridColor } from '../helpers/gridEvent'
import { solveSudoku } from '../helpers/solveSudoku'

const Buttons = () => {
  const inputRefs = useInputRefs()
  const resetGrid = useResetGrid()
  const setGrid = useSetGrid()
  const copyGrid = useCopyGrid()
  const grid = useGrid()

  const handleClear = () => {
    resetGrid()
    clearGridColor(inputRefs.current)
  }

  const handleDemoButton = (board: number[][]) => {
    handleClear()
    setGrid(board)
  }

  const handleSolve = () => {
    const isSolved = solveSudoku(copyGrid)

    if (isSolved === null) {
      alert('Board is invalid')
    }
    if (isSolved === false) {
      alert('Unsolvable board')
    }
    setGrid(copyGrid)
    clearGridColor(inputRefs.current)

    if (isSolved) {
      inputRefs.current.forEach((input) => {
        const rowIndex = Number(input.classList[1][1])
        const colIndex = Number(input.classList[2][1])
        if (!grid[rowIndex][colIndex]) {
          input.style.backgroundColor = 'rgb(158 183 206 / 26%)'
        }
      })
    }
  }

  return (
    <>
      <div className="buttons">
        <button onClick={handleSolve}>Solve</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={() => clearGridColor(inputRefs.current)}>Clear Color</button>
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
