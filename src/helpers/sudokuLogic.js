import { solve, validBoard } from './sudokuSolver'

export function enableArrowKeysToNavigateInputs(inputs) {
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

export function solveRightNow() {
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
