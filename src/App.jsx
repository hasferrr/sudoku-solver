import { useEffect, useState } from 'react'
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

    return (
      <input
        key={index}
        className={`box index-${index}`}
        type="text"
        maxLength="1"
        style={style}
        onKeyDown={(e) => handleKeyDown(e, index)}
      />
    )
  })

  const boardStyle = {
    maxWidth: `${size * 4}rem`,
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
