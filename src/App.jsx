import { useState } from 'react'
import './App.css'

const App = () => {
  const [size, setSize] = useState(9)
  const [board, setBoard] = useState(Array(size ** 2).fill(''))

  const makeGrid = board.map((_, index) => {
    const col = 1 + (index % size)
    const row = 1 + Math.floor(index / size)

    const style = {}
    const width = '3px'
    const color = 'white'

    if (row % 3 === 0) {
      style.borderBottomWidth = width
      style.borderBottomColor = color
    }
    if (col % 3 === 0) {
      style.borderRightWidth = width
      style.borderRightColor = color
    }
    if (row === 1) {
      style.borderTopWidth = width
      style.borderTopColor = color
    }
    if (col === 1) {
      style.borderLeftWidth = width
      style.borderLeftColor = color
    }

    return (
      <input
        key={index}
        className={`box index-${index}`}
        type="text"
        maxLength="1"
        style={style}
      />
    )
  })

  const boardStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${size}, 1fr)`,
    gridTemplateColumns: `repeat(${size}, 1fr)`,
  }

  return (
    <>
      <h1>Sudoku Solver</h1>
      <div id="board" style={boardStyle}>
        {makeGrid}
      </div>
    </>
  )
}

export default App
