import sudokuSolver from '../solver/sudokuSolver'

const toSolver = (board) => board.map((e) => (e === '' ? false : Number(e)))

const toBoard = (board) => board.map((e) => (e === false ? '' : e))

const abstractSolverFunction = (board, solverFunction, setBoard) => {
  const solved = solverFunction(toSolver(board), setBoard)
  if (solved === false) {
    alert('Unsolvable board')
    return toBoard(board)
  }
  return toBoard(solved)
}

const directSolve = (board) => {
  return abstractSolverFunction(board, sudokuSolver.solve)
}

const showSolve = (board, setBoard) => {
  return abstractSolverFunction(board, solve, setBoard)
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
