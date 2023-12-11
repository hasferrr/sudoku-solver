//@ts-check

/**
 * Board is Array of <Number(1 to 9) OR False> that represents sudoku board
 * - Number in the board means actual number
 * - False in the board means empty slot
 * Look at constant.js for sudoku board example
 * @typedef {Array<number | false>} Board
 */

/**
 * Return solved sudoku Board if solvable or return False if unsolvable
 * ASSUME: bd is valid sudoku board (array of 1-9 OR False)
 * @param {Board} bd
 * @returns {Board | false}
 */
const solve = (bd) => {
  /**
   * @param {Board} bd
   * @returns {Board | false}
   */
  const solveBD = (bd) => {
    if (isSolved(bd)) {
      return bd
    }
    return solveLOBD(nextBoards(bd))
  }

  /**
   * @param {Board[]} lobd - lobd a.k.a. List of Board (Array of Boards)
   * @returns {Board | false}
   */
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

/**
 * Return True if the given board is solved (full) or False otherwise
 * @param {Board} bd
 * @returns {boolean}
 */
const isSolved = (bd) => {
  // Assume the board is valid (no duplicates)
  // Use 'andmap' function
  return bd.every((e) => typeof e === 'number')
}

/**
 * Return the next possible valid boards to the Array
 * @param {Board} bd
 * @returns {Board[]}
 */
const nextBoards = (bd) => {
  /**
   * search the first blank (false)
   * fill with number 1-9
   * remove invalid board (duplicates)
   */
  return keepOnlyValid(fillWithNumber(findBlank(bd), bd))
}

/**
 * @param {Board} bd
 * @returns {number}
 */
const findBlank = (bd) => {
  // Assume: board has at least 1 blank square
  for (let index = 0; index < bd.length; index++) {
    if (bd[index] === false) {
      return index
    }
  }
  return -1
}

/**
 * @param {number} index
 * @param {Board} bd
 * @returns {Board[]}
 */
const fillWithNumber = (index, bd) => {
  let num = 1
  let lobd = []
  while (num <= 9) {
    let new_bd = Array.from(bd)
    new_bd[index] = num
    lobd.push(new_bd)
    num++
  }
  return lobd
}

/**
 * @param {Board[]} lobd
 * @returns {Board[]}
 */
const keepOnlyValid = (lobd) => {
  return lobd.filter(validBoard)
}

/**
 * @param {Board} bd
 * @returns {boolean}
 */
const validBoard = (bd) => {
  let board = Array.from(bd)
  let pos = 0

  /**
   * @param {number} pos
   */
  const noDuplicate = (pos) => {
    return noDupInRow(pos, bd) && noDupInCol(pos, bd) && noDupInBox(pos, bd)
  }

  while (board.length > 0) {
    if (board[0] !== false && !noDuplicate(pos)) {
      return false
    }
    board = board.slice(1)
    pos++
  }

  return true
}

/**
 * Abstract function: for noDupInRow and noDupInCol
 * @param {number} pos
 * @param {Board} bd
 * @param {(pos: number, count: number) => number} row
 * @param {(pos: number, count: number) => number} col
 */
const noDuplicateInRowOrColumn = (pos, bd, row, col) => {
  let count = 0 // accumulator
  let grid = 9 // number of sudoku grid

  while (true) {
    if (count >= grid) {
      return true
    }
    const tryValue = readSquare(bd, pos)

    if (
      !(tryValue !== false
        ? pos !== rCtoPos(row(pos, count), col(pos, count))
          ? !sameValue(tryValue, row(pos, count), col(pos, count), bd)
          : true
        : true)
    ) {
      return false
    }
    count++
  }
}

/**
 * @param {number} pos
 * @param {Board} bd
 */
const noDupInRow = (pos, bd) => {
  /**
   * @param {number} pos
   */
  const row = (pos) => getRow(pos)
  /**
   * @param {number} pos
   * @param {number} count
   */
  const col = (pos, count) => count

  return noDuplicateInRowOrColumn(pos, bd, row, col)
}

/**
 * @param {number} pos
 * @param {Board} bd
 */
const noDupInCol = (pos, bd) => {
  /**
   * @param {number} pos
   * @param {number} count
   */
  const row = (pos, count) => count
  /**
   * @param {number} pos
   */
  const col = (pos) => getCol(pos)

  return noDuplicateInRowOrColumn(pos, bd, row, col)
}

/**
 * @param {number} pos
 * @param {Board} BOARD
 */
const noDupInBox = (pos, BOARD) => {
  const BOX = getBox(pos)
  const FROW = getFirstRowFromBox(BOX)
  const FCOL = getFirstColFromBox(BOX)

  /**
   * @param {number} pos
   * @param {number} countRow
   */
  const rowIter = (pos, countRow) => {
    while (true) {
      if (countRow > FROW + 2) {
        return true
      }
      if (!colIter(countRow, FCOL)) {
        return false
      }
      countRow++
    }
  }

  /**
   * @param {number} rowFixed
   * @param {number} countCol
   */
  const colIter = (rowFixed, countCol) => {
    while (true) {
      if (countCol > FCOL + 2) {
        return true
      }
      const tryValue = readSquare(BOARD, pos)

      if (
        !(tryValue !== false
          ? pos !== rCtoPos(rowFixed, countCol)
            ? !sameValue(tryValue, rowFixed, countCol, BOARD)
            : true
          : true)
      ) {
        return false
      }
      countCol++
    }
  }

  return rowIter(pos, FROW)
}

/**
 * @param {number | false} value
 * @param {number} row
 * @param {number} column
 * @param {Board} BOARD
 */
const sameValue = (value, row, column, BOARD) => {
  const tryValue = readSquare(BOARD, rCtoPos(row, column))
  if (tryValue !== false) {
    return value === tryValue
  }
  return false
}

/**
 * @param {number} pos
 */
const getRow = (pos) => {
  return Math.floor(pos / 9)
}

/**
 * @param {number} pos
 */
const getCol = (pos) => {
  return pos % 9
}

/**
 * @param {number} pos
 */
const getBox = (pos) => {
  const row = getRow(pos)
  const col = getCol(pos)

  if (row < 3) {
    if (col < 3) return 0
    else if (col < 6) return 1
    else return 2
  } else if (row < 6) {
    if (col < 3) return 3
    else if (col < 6) return 4
    else return 5
  } else {
    if (col < 3) return 6
    else if (col < 6) return 7
    else return 8
  }
}

/**
 * @param {number} box
 * @returns {number}
 */
const getFirstColFromBox = (box) => {
  const remainder = box % 3
  if (remainder === 0) {
    return 0
  } else if (remainder === 1) {
    return 3
  } else {
    return 6
  }
}

/**
 * @param {number} box
 * @returns {number}
 */
const getFirstRowFromBox = (box) => {
  if (box < 3) {
    return 0
  } else if (box < 6) {
    return 3
  } else {
    return 6
  }
}

/**
 * Convert 0-based row and column to Pos
 * @param {number} r
 * @param {number} c
 */
const rCtoPos = (r, c) => {
  return r * 9 + c
}

/**
 * Produce value at given position on board.
 * @param {Board} bd
 * @param {number} p
 */
const readSquare = (bd, p) => {
  return bd[p]
}

export default {
  solve,
  isSolved,
  nextBoards,
}
