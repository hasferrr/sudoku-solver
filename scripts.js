//@ts-check

const ALL_VALS = [...Array(9)].map((_, index) => index + 1);
const B = false;


/**
 * @param {number | false} bd
 */
function solve(bd) {
    function solve_bd(bd) {
        if (solved(bd)) {
            return bd;
        } else {
            return solve_lobd(next_boards(bd));
        }
    }

    function solve_lobd(lobd) {
        if (lobd.length === 0) {
            return false;
        } else {
            var tryResult = solve_bd(lobd[0]);
            if (tryResult !== false) {
                return tryResult;
            } else {
                return solve_lobd(lobd.slice(1));
            }
        }
    }

    return solve_bd(bd);
}
