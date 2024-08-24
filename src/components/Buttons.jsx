import { solveRightNow } from '../helpers/sudokuLogic'
import { BD2, BD3, BD4, BD5, BD6, BD7 } from '../helpers/constant'
import { useInputRefs, useResetGrid } from '../contexts/GridContext'

const Buttons = () => {
  const inputRefs = useInputRefs()
  const resetGrid = useResetGrid()

  const clearColor = () => {
    inputRefs.current.forEach((input) => {
      input.style.backgroundColor = 'transparent'
    })
  }

  const setInputValues = (inputs, board) => {
    clearColor()
    inputs.forEach((input, index) => {
      if (input.value.trim() === '') {
        input.value = board[index] || ''
        input.style.backgroundColor = 'rgb(158 183 206 / 26%)'
      }
    })
  }

  const handleDemoButton = (board) => {
    resetGrid()
    clearColor()
    setInputValues(inputRefs.current, board)
  }

  const handleSolve = () => {
    let newSolvedBoard = solveRightNow()
    if (newSolvedBoard === 1) {
      alert('Board is invalid')
      return
    } else if (newSolvedBoard === 2) {
      alert('Unsolvable board')
      return
    } else {
      setInputValues(inputRefs.current, newSolvedBoard)
    }
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
