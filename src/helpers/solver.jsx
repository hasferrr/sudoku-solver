import sudokuSolver from '../solver/sudokuSolver'

const toSolver = (board) => board.map((e) => (e === '' ? false : Number(e)))

const toBoard = (board) => board.map((e) => (e === false ? '' : e))

const directSolve = (board) => {
  const solved = sudokuSolver.solve(toSolver(board))
  return solved === false ? toBoard(board) : toBoard(solved)
}

const showSolve = (board, setBoard) => {
  const solved = solve(toSolver(board), setBoard)
  return solved === false ? toBoard(board) : toBoard(solved)
}

const solve = (bd, setBoard) => {
  const solveBD = (bd) => {
    setTimeout(() => {
      setBoard(toBoard([...bd]))
    }, 100)

    if (sudokuSolver.isSolved(bd)) {
      return bd
    }
    return solveLOBD(sudokuSolver.nextBoards(bd))
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

  return solveBD(bd)
}

export default {
  directSolve,
  showSolve,
}
