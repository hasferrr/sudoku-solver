import { ChangeEvent, useEffect } from 'react'

import { useGrid, useGridSize, useInputRefs, useUpdateGrid } from '../contexts/GridContext'

import { enableArrowKeysToNavigateInputs } from '../helpers/gridEvent'

const SudokuGrid = () => {
  const SIZE = useGridSize()
  const grid = useGrid()
  const updateGrid = useUpdateGrid()
  const inputRefs = useInputRefs()

  useEffect(() => {
    enableArrowKeysToNavigateInputs(inputRefs.current)
  }, [grid])

  const handleChange = (e: ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const val = e.target.value.replace(/[^1-9]/g, '')
    updateGrid(row, col, Number(val))
  }

  return (
    <div className="container">
      {grid.map((_, rowIndex) => (
        <div key={rowIndex} className={`col c${rowIndex}`}>
          {grid[0].map((_, colIndex) => (
            <div key={colIndex} className={`box b${colIndex}`}>
              <input
                ref={(el) => (inputRefs.current[rowIndex * SIZE + colIndex] = el!)}
                className={`in ib${colIndex}`}
                maxLength={1}
                autoComplete="off"
                type="text"
                value={grid[rowIndex][colIndex] || ''}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SudokuGrid
