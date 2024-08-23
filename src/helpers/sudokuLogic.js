export function enableArrowKeysToNavigateInputs() {
  // Get all the input elements
  const inputs = document.querySelectorAll('input')

  // Add keydown event listener to the inputs
  inputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
      // Get the current input index
      const currentIndex = Array.from(inputs).indexOf(input)

      // Calculate the index of the input to navigate to
      let newIndex
      switch (e.key) {
        case 'ArrowLeft':
          // Left arrow key
          newIndex = currentIndex - 1
          break
        case 'ArrowRight':
          // Right arrow key
          newIndex = currentIndex + 1
          break
        case 'ArrowUp':
          // Up arrow key
          newIndex = currentIndex - 9
          break
        case 'ArrowDown':
          // Down arrow key
          newIndex = currentIndex + 9
          break
      }

      // Check if the new index is within bounds
      if (newIndex >= 0 && newIndex < inputs.length) {
        // Focus on the new input
        inputs[newIndex].focus()

        // Check if the new input has a value and select its text after a short delay
        setTimeout(() => {
          if (inputs[newIndex].value) {
            inputs[newIndex].select()
          }
        }, 10)
      }
    })
  })
}

export function onlyNumber() {
  // Get all the input elements with class "in"
  const inputFields = document.querySelectorAll('.in')

  // Add input event listener to the input fields
  inputFields.forEach((input) => {
    input.addEventListener('input', (e) => {
      // Remove any non-numeric characters from the input value
      const newValue = e.target.value.replace(/[^1-9]/g, '')
      e.target.value = newValue
    })
  })
}

export function clearInputValues() {
  const inputs = document.querySelectorAll('.in')

  inputs.forEach((input) => {
    input.value = ''
    input.style.backgroundColor = 'transparent'
  })
}

export function clearBackgroundColor() {
  const inputs = document.querySelectorAll('.in')
  inputs.forEach((input) => {
    input.style.backgroundColor = 'transparent'
  })
}

export function viewSolvedBoard() {
  let newSolvedBoard = solveRightNow()
  if (newSolvedBoard === 1) {
    alert('Board is invalid')
    return
  } else if (newSolvedBoard === 2) {
    alert('Unsolvable board')
    return
  } else {
    setInputValues(newSolvedBoard)
  }
}

export function setInputValues(board) {
  const inputs = document.querySelectorAll('.in')
  clearBackgroundColor()
  inputs.forEach((input, index) => {
    if (input.value.trim() === '') {
      input.value = board[index] || ''
      input.style.backgroundColor = 'rgb(158 183 206 / 26%)'
    }
  })
}

import { solve, validBoard } from './sudokuSolver'

export function solveRightNow() {
  let board = getInputValues()
  let validity = checkValidity(board)
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

function checkValidity(bd) {
  return validBoard(bd)
}
