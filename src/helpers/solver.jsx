import sudokuSolver from '../solver/sudokuSolver'

const toSolver = (board) => board.map((e) => (e === '' ? false : Number(e)))

const toBoard = (board) => board.map((e) => (e === false ? '' : e))

const directSolve = (board) => {
  const solved = sudokuSolver.solve(toSolver(board))
  if (solved === false) {
    alert('Unsolvable board')
    return toBoard(board)
  }
  return toBoard(solved)
}

const showSolve = async (board, setBoard) => {
  const solved = await solve(toSolver(board), setBoard)
  if (solved === false) {
    alert('Unsolvable board')
    return toBoard(board)
  }
  return toBoard(solved)
}

const solve = (bd, setBoard) => {
  const solveBD = async (bd) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setBoard(toBoard([...bd]))
        resolve()
      }, 1)
    })

    if (sudokuSolver.isSolved(bd)) {
      return bd
    }
    return solveLOBD(sudokuSolver.nextBoards(bd))
  }

  const solveLOBD = async (lobd) => {
    if (lobd.length === 0) {
      return false
    }

    const tryToSolve = await solveBD(lobd[0])
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
