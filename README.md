# Sudoku Solver

![demo](../assets/demo.gif?raw=true)

## Detail

Sudoku Solver implements mutual recursion, generative recursion, and backtracking search to solve 9x9 Sudoku puzzles. It explores all valid number possibilities and selects the first available solution.

[Live Demo](https://hasferrr.github.io/sudoku-solver)

<details>
    <summary> Click to expand </summary>
    <br>

Array of 1-9 number or false represents the sudoku board. False value in the array means the empty slot of the sudoku.

In order to solve the Sudoku Board, the `solve(bd)` function tries to generate every possible valid _next board_ of the Sudoku Board, by adding the numbers 1, 2, 3, 4, ..., 9 into the empty slots and saves them into the array, until it's full (or solved).

![img1](../assets/img1.png?raw=true)

For each new board in the array, it also generates new valid boards until the board is solved, meaning it is both _full_ and _valid_ (all slots occupied by numbers, without any duplicates in row, colum, and box) OR until it is unsolvable (no way to solve the given board).

![img2](../assets/img2.png?raw=true)

</details>
