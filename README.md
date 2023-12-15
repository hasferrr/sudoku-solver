# Sudoku Solver

Sudoku Solver implements mutual recursion, generative recursion, and backtracking search to solve 9x9 Sudoku puzzles. It explores all valid number possibilities and selects the first available solution from the 'next-board' node.

[Live Demo](https://hasferrr.github.io/sudoku-solver)

## Detail

Array of 1-9 number or false represents the sudoku board. False value in the array means the empty slot of the sudoku.

In order to solve the Sudoku Board, the `solve(bd)` function tries to generate every possible valid _next board_ of the Sudoku Board, by adding the numbers 1, 2, 3, 4, ..., 9 into the empty slots and saves them into the array, until it's full (or solved).

![img1](../assets/img1.png?raw=true)

For each new board in the array, it also generates new valid boards until the board is solved, meaning it is both _full_ and _valid_ (all slots occupied by numbers, without any duplicates in row, colum, and box) OR until it is unsolvable (no way to solve the given board).

![img2](../assets/img2.png?raw=true)

## Code explained

Here's my code:

```js
const solve = (bd) => {
  const solveBD = (bd) => {
    if (isSolved(bd)) {
      return bd
    }
    return solveLOBD(nextBoards(bd))
  }

  const solveLOBD = (lobd) => {
    if (lobd.length === 0) {
      return false
    }
    let tryToSolve = solveBD(lobd[0])
    if (tryToSolve !== false) {
      return tryToSolve
    }
    return solveLOBD(lobd.slice(1))
  }

  return solveBD(bd) // <------ Code starts here
}
```

- Look at the `solveBD(bd)` function.
- As you can see, if `bd` (the given board) is not a solved sudoku board, then generate 9 or less new valid next boards and store them into the array.
- Array of the next board will be handled by `solveLOBD(bd)` function, as you can see in the return value `return solveLOBD(nextBoards(bd))`.
- Then, every Board in the array will be handled back by `solveBD(bd)` function.
- The process will back and forth between `solveBD` and `solveLOBD` (mutual recursion), until it's solved (or not solved).
