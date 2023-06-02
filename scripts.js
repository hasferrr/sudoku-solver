//@ts-check

/**
 * @typedef {Array<Array<number | false>>} Board
 */

const SIZE = 9;

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
     * fill with number 1-SIZE
     * remove invalid board (duplicates)
     */
    return keepOnlyValid(fillWithNumber(findBlank(bd), bd));
}

/**
 * @param {Board} bd
 * @returns {number[]}
 */
function findBlank(bd) {
    // Assume: board has at least 1 blank square
    for (let i = 0; i < bd.length; i++) {
        const row = bd[i];

        for (let j = 0; j < row.length; j++) {
            if (row[j] === false) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

/**
 * @param {number[]} index
 * @param {Board} bd
 * @returns {Board[]}
 */
function fillWithNumber(index, bd) {
    const i = index[0];
    const j = index[1];

    let num = 1;
    let lobd = [];

    while (num <= SIZE) {
        let new_bd = deepCopyArray(bd);
        new_bd[i][j] = num;
        lobd.push(new_bd);
        num++;
    }
    return lobd;
}

/**
 * @param {Board} arr
 */
function deepCopyArray(arr) {
    return arr.map(subArray => subArray.slice());
}


/**
 * @param {Board[]} lobd
 * @returns {Board[]}
 */
function keepOnlyValid(lobd) {
    return lobd.filter(isValidBoard);
}

/**
 * @param {Board} bd
 * @returns {boolean}
 */
function isValidBoard(bd) {
    return validRow(bd) && validColumn(bd) && validBox(bd);
}

/**
 * @param {Board} bd
 * @returns {boolean}
 */
function validRow(bd) {
    for (let i = 0; i < bd.length; i++) {
        const row = bd[i];
        if (hasDuplicate(row)) {
            return false;
        }
    }
    return true;
}

/**
 * @param {any[]} arr
 */
function hasDuplicate(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size !== arr.length;
}

/**
 * @param {Board} bd
 * @returns {boolean}
 */
function validColumn(bd) {
    /**
     * for each column 1, 2, 3, ..., SIZE
     * - make new array
     * - check valid with hasDuplicate
     * - if not valid, return false
     * return true
     */
    const transposedBoard = transposeArray(bd);
    return validRow(transposedBoard);
}

/**
 * @param {Board} arr
 * @returns {Board}
 */
function transposeArray(arr) {
    return arr[0].map((_, columnIndex) => arr.map(row => row[columnIndex]));
}

/**
 * @param {Board} bd
 * @returns {boolean}
 */
function validBox(bd) {
    return false; // TODO !!!
}