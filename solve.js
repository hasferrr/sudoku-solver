/**
 * @returns {Board | 1 | 2}
 */
function solveRightNow() {
    let board = getInputValues();
    let validity = checkValidity(board);
    if (!validity) {
        return 1; // Invalid board
    }
    let solvedBoard = solve(board);
    if (solvedBoard === false) {
        return 2; // Unsolvable board
    }
    return solvedBoard;
}

function getInputValues() {
    const inputs = document.querySelectorAll('.in');
    const values = Array.from(inputs).map((input) => input.value);
    for (let i = 0; i < values.length; i++) {
        let element = values[i];
        if (element === "") {
            element = false;
        } else {
            element = Number(element)
        }
        values[i] = element;
    }
    return values;
}

function checkValidity(bd) {
    return validBoard(bd);
}