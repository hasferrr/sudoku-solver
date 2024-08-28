import { useGrid, useInputRefs, useResetGrid, useSetGrid } from '../contexts/GridContext'
import { useIsProcessingRef, useQueueRef } from '../contexts/QueueGridContext'
import { useCopyGrid } from '../hooks/useCopyGrid'

import { BD2, BD3, BD4, BD5, BD6, BD7 } from '../helpers/constant'
import { clearGridColor } from '../helpers/gridEvent'
import { solveSudoku } from '../helpers/solveSudoku'
import { copy } from '../helpers/helpers'
import { SinglyLinkedListQueue } from '../utils/queue'

export interface QueueObject {
  row: number
  col: number
  val: number
}

const Buttons = () => {
  const inputRefs = useInputRefs()
  const resetGrid = useResetGrid()
  const setGrid = useSetGrid()
  const copyGrid = useCopyGrid()
  const grid = useGrid()
  const queueRef = useQueueRef()
  const isProcessingRef = useIsProcessingRef()

  const handleClear = () => {
    isProcessingRef.current = false
    clearGridColor(inputRefs.current)
    while (queueRef.current !== null) {
      clearTimeout(queueRef.current)
      queueRef.current = null
    }
    resetGrid()
  }

  const handleDemoButton = (board: number[][]) => {
    handleClear()
    setGrid(board)
  }

  const handleDirectSolve = () => {
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

  const handleDelayedSolve = () => {
    if (isProcessingRef.current) {
      return
    }

    const queue = new SinglyLinkedListQueue<QueueObject>()
    let queueCopy = copy(copyGrid)

    const isSolved = solveSudoku(copyGrid, queue)

    if (isSolved === null) {
      alert('Board is invalid')
    }

    const processQueue = () => {
      if (!isProcessingRef.current) {
        return
      }

      if (queue.isEmpty()) {
        isProcessingRef.current = false
        if (isSolved) {
          inputRefs.current.forEach((input) => {
            const rowIndex = Number(input.classList[1][1])
            const colIndex = Number(input.classList[2][1])
            if (!grid[rowIndex][colIndex]) {
              input.style.backgroundColor = 'rgb(158 183 206 / 26%)'
            }
          })
        }
        return
      }

      const { row, col, val } = queue.dequeue()!
      const copiedCopyGrid = copy(queueCopy)
      copiedCopyGrid[row][col] = val
      queueCopy = copiedCopyGrid

      queueRef.current = setTimeout(() => {
        setGrid(copiedCopyGrid)
        processQueue()
      }, 1)
    }

    queueRef.current = null
    isProcessingRef.current = true
    processQueue()

    if (isSolved === false) {
      alert('Unsolvable board')
    }

    clearGridColor(inputRefs.current)
  }

  return (
    <>
      <div className="buttons">
        <button onClick={handleDirectSolve}>Solve</button>
        <button onClick={handleDelayedSolve}>Solve (Delayed)</button>
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
