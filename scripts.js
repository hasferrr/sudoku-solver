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
    return 0; // TODO !!!
}

/**
 * @param {number} index
 * @param {Board} [bd]
 * @returns {Board[]}
 */
function fillWithNumber(index, bd) {
    return [[false]]; // TODO !!!
}

/**
 * @param {Board[]} lobd
 * @returns {Board[]}
 */
function keepOnlyValid(lobd) {
    return [[false]]; // TODO !!!
}