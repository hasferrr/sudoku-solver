export function enableArrowKeysToNavigateInputs(inputs: HTMLInputElement[]) {
  // Add keydown event listener to the inputs
  inputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
      // Get the current input index
      const currentIndex = Array.from(inputs).indexOf(input)

      // Calculate the index of the input to navigate to
      let newIndex: number | undefined = undefined
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
      if (newIndex && newIndex >= 0 && newIndex < inputs.length) {
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

export function clearGridColor(inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    input.style.backgroundColor = 'transparent'
  })
}
