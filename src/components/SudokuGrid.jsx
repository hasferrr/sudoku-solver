import { useEffect, useRef } from 'react'
import {
  enableArrowKeysToNavigateInputs,
  onlyNumber,
} from '../helpers/sudokuLogic'

const SudokuGrid = () => {
  useEffect(() => {
    enableArrowKeysToNavigateInputs()
    onlyNumber()
  }, [])

  const SIZE = 9
  const rows = Array.from({ length: SIZE }, (_, rowIndex) => rowIndex)
  const columns = Array.from({ length: SIZE }, (_, colIndex) => colIndex)

  const inputRefs = useRef(Array(SIZE * SIZE))

  return (
    <div className="container">
      {rows.map((rowIndex) => (
        <div key={rowIndex} className={`col c${rowIndex}`}>
          {columns.map((colIndex) => (
            <div key={colIndex} className={`box b${colIndex}`}>
              <input
                ref={(el) => (inputRefs.current[rowIndex * SIZE + colIndex] = el)}
                className={`in ib${colIndex}`}
                maxLength={1}
                autoComplete="off"
                type="text"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SudokuGrid
