import { useState } from 'react'
import constant from './helpers/constant'
import solver from './helpers/solver'
import './App.css'

const App = () => {
  const [size, setSize] = useState(9)
  const [board, setBoard] = useState(Array(size ** 2).fill(''))

  const WIDTH = 3.75
  const FONTSIZE = WIDTH / 2

  const makeGrid = board.map((_, index) => {
    const col = 1 + (index % size)
    const row = 1 + Math.floor(index / size)

    const style = {
      width: `${WIDTH}rem`,
      height: `${WIDTH}rem`,
      fontSize: `${FONTSIZE}rem`,
    }
    const border = '3px'
    const color = 'white'

    if (row % 3 === 0) {
      style.borderBottomWidth = border
      style.borderBottomColor = color
    }
    if (col % 3 === 0) {
      style.borderRightWidth = border
      style.borderRightColor = color
    }
    if (row === 1) {
      style.borderTopWidth = border
      style.borderTopColor = color
    }
    if (col === 1) {
      style.borderLeftWidth = border
      style.borderLeftColor = color
    }

    const handleKeyDown = (e, currentIndex) => {
      const delta = {
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowUp: -size,
        ArrowDown: size,
      }
      const newIndex = currentIndex + (delta[e.key] || 0)

      if (newIndex >= 0 && newIndex < board.length) {
        const inputSelected = document.querySelector(`.index-${newIndex}`)
        inputSelected.focus()
        setTimeout(() => {
          if (inputSelected.value) {
            inputSelected.select()
          }
        }, 5)
      }
    }

    const handleOnChange = (e, index) => {
      const newValue = e.target.value.replace(/[^1-9]/g, '')
      const newBoard = [...board]
      newBoard[index] = newValue
      setBoard(newBoard)
    }

    return (
      <input
        key={index}
        className={`box index-${index}`}
        type="text"
        maxLength="1"
        style={style}
        onKeyDown={(e) => handleKeyDown(e, index)}
        onChange={(e) => handleOnChange(e, index)}
        value={board[index]}
      />
    )
  })

  const boardStyle = {
    maxWidth: `${size * WIDTH}rem`,
    display: 'grid',
    gridTemplateRows: `repeat(${size}, 1fr)`,
    gridTemplateColumns: `repeat(${size}, 1fr)`,
  }

  return (
    <div id="main">
      <h1>Sudoku Solver</h1>
      <div id="board" style={boardStyle}>
        {makeGrid}
      </div>
      <div className="buttons">
        <button onClick={() => setBoard(solver.directSolve(board))}>
          Solve
        </button>
        <button onClick={() => solver.showSolve(board, setBoard)}>
          Solve (Delayed)
        </button>
        <button onClick={() => setBoard(Array(size ** 2).fill(''))}>
          Clear
        </button>
      </div>
      <div className="buttons">
        <button onClick={() => setBoard(constant.BD2)}>BD2</button>
        <button onClick={() => setBoard(constant.BD3)}>BD3</button>
        <button onClick={() => setBoard(constant.BD4)}>BD4</button>
        <button onClick={() => setBoard(constant.BD5)}>BD5</button>
        <button onClick={() => setBoard(constant.BD6)}>BD6</button>
        <button onClick={() => setBoard(constant.BD7)}>BD7</button>
      </div>
    </div>
  )
}

export default App
