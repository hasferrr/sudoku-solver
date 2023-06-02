//@ts-check

/**
 * @typedef {Array<number | false>} Board
 */

/**
 * @param {Board} bd
 * @returns {Board | false}
 */
function solve(bd) {
    /**
     * @param {Board} bd
     * @returns {Board | false}
     */
    function solve_bd(bd) {
        if (isSolved(bd)) {
            return bd;
        }
        return solve_lobd(nextBoards(bd));
    }

    /**
     * @param {Board[]} lobd
     * @returns {Board | false}
     */
    function solve_lobd(lobd) {
        if (lobd.length === 0) {
            return false;
        }

        let tryToSolve = solve_bd(lobd[0]);
        if (tryToSolve !== false) {
            return tryToSolve;
        }

        return solve_lobd(lobd.slice(1));
    }

    return solve_bd(bd);
}


/**
 * @param {Board} bd
 * @returns {boolean}
 */
function isSolved(bd) {
    // Assume the board is valid (no duplicates)
    // Use 'andmap' function
    return bd.every(e => typeof e === 'number');
}

/**
 * @param {Board} bd
 * @returns {Board[]}
 */
function nextBoards(bd) {
    /**
     * search the first blank (false)
     * fill with number 1-9
     * remove invalid board (duplicates)
     */
    return keepOnlyValid(fillWithNumber(findBlank(bd), bd));
}

/**
 * @param {Board} bd
 * @returns {number}
 */
function findBlank(bd) {
    // Assume: board has at least 1 blank square
    for (let index = 0; index < bd.length; index++) {
        if (bd[index] === false) {
            return index;
        }
    }
    return -1;
}

/**
 * @param {number} index
 * @param {Board} bd
 * @returns {Board[]}
 */
function fillWithNumber(index, bd) {
    let num = 1;
    let lobd = [];
    while (num <= 9) {
        let new_bd = Array.from(bd);
        new_bd[index] = num;
        lobd.push(new_bd);
        num++;
    }
    return lobd;
}

/**
 * @param {Board[]} lobd
 * @returns {Board[]}
 */
function keepOnlyValid(lobd) {
    return lobd.filter(validBoard);
}

/**
 * @param {Board} bd
 * @returns {boolean}
 */
function validBoard(bd) {

    let board = Array.from(bd);
    let pos = 0;

    while (board.length > 0) {
        if (board[0] !== false && !noDuplicate(pos)) {
            return false;
        }
        board = board.slice(1);
        pos++;
    }

    return true;

    /**
     * @param {number} pos
     */
    function noDuplicate(pos) {
        return (
            noDupInRow(pos, 0, 8, bd) &&
            noDupInCol(pos, 0, 8, bd) &&
            noDupInBox(pos, bd)
        );
    }
}

/**
 * @param {number} pos
 * @param {number} count
 * @param {number} max
 * @param {Board} BOARD
 */
function noDupInRow(pos, count, max, BOARD) {
    while (true) {
        if (count > max) {
            return true;
        } else {
            const tryValue = readSquare(BOARD, pos);
            const row = getRow(pos);

            if (!(tryValue !== false)
                ? (pos !== rCtoPos(row, count)
                    ? !sameValue(tryValue, row, count, BOARD)
                    : true)
                : true) {
                return false;
            }
            count++;
        }
    }
}

/**
 * @param {number} pos
 * @param {number} count
 * @param {number} max
 * @param {Board} BOARD
 */
function noDupInCol(pos, count, max, BOARD) {
    while (true) {
        if (count > max) {
            return true;
        } else {
            const tryValue = readSquare(BOARD, pos);
            const col = getCol(pos);

            if (!(tryValue !== false)
                ? (pos !== rCtoPos(count, col)
                    ? !sameValue(tryValue, count, col, BOARD)
                    : true)
                : true) {
                return false;
            }
            count++;
        }
    }
}

/**
 * @param {number} pos
 * @param {Board} BOARD
 */
function noDupInBox(pos, BOARD) {
    const BOX = getBox(pos);
    const FROW = getFirstRowFromBox(BOX);
    const FCOL = getFirstColFromBox(BOX);

    /**
     * @param {number} pos
     * @param {number} countRow
     */
    function rowIter(pos, countRow) {
        while (true) {
            if (countRow > FROW + 2) {
                return true;
            }
            if (!colIter(countRow, FCOL)) {
                return false;
            }
            countRow++;
        }
    }

    /**
     * @param {number} rowFixed
     * @param {number} countCol
     */
    function colIter(rowFixed, countCol) {
        while (true) {
            if (countCol > FCOL + 2) {
                return true;
            } else {
                const tryValue = readSquare(BOARD, pos);

                if (!(tryValue !== false
                    ? (pos !== rCtoPos(rowFixed, countCol)
                        ? !sameValue(tryValue, rowFixed, countCol, BOARD)
                        : true)
                    : true)) {
                    return false;
                }
                countCol++;
            }
        }
    }

    return rowIter(pos, FROW);
}
