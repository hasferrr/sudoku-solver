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
    return []; // TODO !!!
}