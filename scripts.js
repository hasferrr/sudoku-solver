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
        if (solved(bd)) {
            return bd;
        }
        return solve_lobd(next_boards(bd));
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
function solved(bd) {
    return true;
}

/**
 * @param {Board} bd
 * @returns {Board[]}
*/
function next_boards(bd) {
    return [[1, false], [3, 4]];
}