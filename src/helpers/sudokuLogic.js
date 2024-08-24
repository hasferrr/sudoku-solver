import { clearGridColor } from './gridEvent'
import { solve, validBoard } from './sudokuSolver'

export function solveSudoku(inputs) {
  let newSolvedBoard = solveRightNow()
  if (newSolvedBoard === 1) {
    alert('Board is invalid')
    return
  } else if (newSolvedBoard === 2) {
    alert('Unsolvable board')
    return
  } else {
    setInputValues(inputs, newSolvedBoard)
  }
}

function setInputValues(inputs, board) {
  clearGridColor(inputs)
  inputs.forEach((input, index) => {
    if (input.value.trim() === '') {
      input.value = board[index] || ''
      input.style.backgroundColor = 'rgb(158 183 206 / 26%)'
    }
  })
}

function solveRightNow() {
  let board = getInputValues()
  let validity = validBoard(board)
  if (!validity) {
    return 1 // Invalid board
  }
  let solvedBoard = solve(board)
  if (solvedBoard === false) {
    return 2 // Unsolvable board
  }
  return solvedBoard
}

function getInputValues() {
  const inputs = document.querySelectorAll('.in')
  const values = Array.from(inputs).map((input) => input.value)
  for (let i = 0; i < values.length; i++) {
    let element = values[i]
    if (element === '') {
      element = false
    } else {
      element = Number(element)
    }
    values[i] = element
  }
  return values
}
