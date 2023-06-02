//@ts-check

/**
 * @type {false} B
 */
let B = false;

const BD1 = [
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B
];

const BD2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B,
    B, B, B, B, B, B, B, B, B
];

const BD3 = [
    1, B, B, B, B, B, B, B, B,
    2, B, B, B, B, B, B, B, B,
    3, B, B, B, B, B, B, B, B,
    4, B, B, B, B, B, B, B, B,
    5, B, B, B, B, B, B, B, B,
    6, B, B, B, B, B, B, B, B,
    7, B, B, B, B, B, B, B, B,
    8, B, B, B, B, B, B, B, B,
    9, B, B, B, B, B, B, B, B
];
B = false;
const BD4 = [
    2, 7, 4, B, 9, 1, B, B, 5,
    1, B, B, 5, B, B, B, 9, B,
    6, B, B, B, B, 3, 2, 8, B,
    B, B, 1, 9, B, B, B, B, 8,
    B, B, 5, 1, B, B, 6, B, B,
    7, B, B, B, 8, B, B, B, 3,
    4, B, 2, B, B, B, B, B, 9,
    B, B, B, B, B, B, B, 7, B,
    8, B, B, 3, 4, 9, B, B, B
];

const BD4s = [
    2, 7, 4, 8, 9, 1, 3, 6, 5,
    1, 3, 8, 5, 2, 6, 4, 9, 7,
    6, 5, 9, 4, 7, 3, 2, 8, 1,
    3, 2, 1, 9, 6, 4, 7, 5, 8,
    9, 8, 5, 1, 3, 7, 6, 4, 2,
    7, 4, 6, 2, 8, 5, 9, 1, 3,
    4, 6, 2, 7, 5, 8, 1, 3, 9,
    5, 9, 3, 6, 1, 2, 8, 7, 4,
    8, 1, 7, 3, 4, 9, 5, 2, 6
];

const BD5 = [
    5, B, B, B, B, 4, B, 7, B,
    B, 1, B, B, 5, B, 6, B, B,
    B, B, 4, 9, B, B, B, B, B,
    B, 9, B, B, B, 7, 5, B, B,
    1, 8, B, 2, B, B, B, B, B,
    B, B, B, B, B, 6, B, B, B,
    B, B, 3, B, B, B, B, B, 8,
    B, 6, B, B, 8, B, B, B, 9,
    B, B, 8, B, 7, B, B, 3, 1
];

const BD5s = [
    5, 3, 9, 1, 6, 4, 8, 7, 2,
    8, 1, 2, 7, 5, 3, 6, 9, 4,
    6, 7, 4, 9, 2, 8, 3, 1, 5,
    2, 9, 6, 4, 1, 7, 5, 8, 3,
    1, 8, 7, 2, 3, 5, 9, 4, 6,
    3, 4, 5, 8, 9, 6, 1, 2, 7,
    9, 2, 3, 5, 4, 1, 7, 6, 8,
    7, 6, 1, 3, 8, 2, 4, 5, 9,
    4, 5, 8, 6, 7, 9, 2, 3, 1
];

const BD6 = [
    B, B, 5, 3, B, B, B, B, B,
    8, B, B, B, B, B, B, 2, B,
    B, 7, B, B, 1, B, 5, B, B,
    4, B, B, B, B, 5, 3, B, B,
    B, 1, B, B, 7, B, B, B, 6,
    B, B, 3, 2, B, B, B, 8, B,
    B, 6, B, 5, B, B, B, B, 9,
    B, B, 4, B, B, B, B, 3, B,
    B, B, B, B, B, 9, 7, B, B
];

const BD7 = [
    1, 2, 3, 4, 5, 6, 7, 8, B,
    B, B, B, B, B, B, B, B, 2,
    B, B, B, B, B, B, B, B, 3,
    B, B, B, B, B, B, B, B, 4,
    B, B, B, B, B, B, B, B, 5,
    B, B, B, B, B, B, B, B, 6,
    B, B, B, B, B, B, B, B, 7,
    B, B, B, B, B, B, B, B, 8,
    B, B, B, B, B, B, B, B, 9
];


let pr = console.log

// test

console.log('solve sudoku board');
console.log(JSON.stringify(solve(BD4)) === JSON.stringify(BD4s));
console.log(JSON.stringify(solve(BD5)) === JSON.stringify(BD5s));
console.log(solve(BD7) === false);

pr('solved')
pr(solved(BD1) === false)
pr(solved(BD2) === false)
pr(solved(BD4s) === true)

pr(
    JSON.stringify(
        nextBoards([1].concat(BD1.slice(1)))
    )
    ===
    JSON.stringify([
        [1].concat([2].concat(BD1.slice(2))),
        [1].concat([3].concat(BD1.slice(2))),
        [1].concat([4].concat(BD1.slice(2))),
        [1].concat([5].concat(BD1.slice(2))),
        [1].concat([6].concat(BD1.slice(2))),
        [1].concat([7].concat(BD1.slice(2))),
        [1].concat([8].concat(BD1.slice(2))),
        [1].concat([9].concat(BD1.slice(2)))
    ])
    , "next board")

pr('find blank:')
console.log(findBlank(BD1) === 0);
console.log(findBlank([1, ...BD1.slice(1)]) === 1);
console.log(findBlank(BD4) === 3);
console.log(findBlank(BD6) === 0);

pr('fill 1-9:')
console.log(
    JSON.stringify(fillWithNumber(0, BD1)) ===
    JSON.stringify([
        [1, ...BD1.slice(1)],
        [2, ...BD1.slice(1)],
        [3, ...BD1.slice(1)],
        [4, ...BD1.slice(1)],
        [5, ...BD1.slice(1)],
        [6, ...BD1.slice(1)],
        [7, ...BD1.slice(1)],
        [8, ...BD1.slice(1)],
        [9, ...BD1.slice(1)],
    ])
);

console.log(
    JSON.stringify(keepOnlyValid([[1, 1, ...BD1.slice(2)]])) === JSON.stringify([])
    , 'keep only valid');

console.log('validBoard:');
console.log(validBoard([]) === true);
console.log(validBoard(BD1) === true);
console.log(validBoard(BD2) === true);
console.log(validBoard(BD3) === true);
console.log(validBoard(BD4) === true);
console.log(validBoard([1, 1, ...BD1.slice(2)]) === false);
console.log(validBoard([2, ...BD2.slice(1)]) === false);
console.log(validBoard(fillSquare(BD4, 1, 6)) === false);

console.log('no dub in row');
console.log(noDupInRow(0, 0, 8, BD1) === true);
console.log(noDupInRow(4, 0, 8, BD2) === true);
console.log(noDupInCol(56, 0, 8, BD4s) === true);
console.log(noDupInCol(30, 0, 8, BD4) === true);
console.log(noDupInRow(3, 0, 8, fillSquare(BD4, 3, 5)) === false);

console.log('no dub in col');
console.log(noDupInCol(0, 0, 8, BD1) === true);
console.log(noDupInCol(9, 0, 8, BD3) === true);
console.log(noDupInCol(45, 0, 8, BD4s) === true);
console.log(noDupInCol(30, 0, 8, BD4) === true);
console.log(noDupInCol(20, 0, 8, fillSquare(BD4, 20, 2)) === false);


console.log('no DUPLICATE in BOX');
console.log('no DUPLICATE in BOX');
console.log('no DUPLICATE in BOX');
console.log(noDupInBox(0, BD1) === true);
console.log(noDupInBox(1, BD4) === true);
console.log(noDupInBox(40, BD4) === true);
console.log(noDupInBox(53, BD4) === true);
console.log(noDupInBox(53, BD4s) === true);
console.log(noDupInBox(53, fillSquare(BD4, 33, 3)) === false);
console.log(noDupInBox(53, fillSquare(BD4, 34, 3)) === false);
console.log(noDupInBox(53, fillSquare(BD4, 35, 3)) === false);
console.log(noDupInBox(53, fillSquare(BD4, 42, 3)) === false);
console.log(noDupInBox(53, fillSquare(BD4, 43, 3)) === false);
console.log(noDupInBox(53, fillSquare(BD4, 44, 3)) === false);
console.log(noDupInBox(53, fillSquare(BD4, 51, 3)) === false);
console.log(noDupInBox(53, fillSquare(BD4, 52, 3)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 6, 9)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 7, 9)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 8, 9)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 15, 9)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 17, 9)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 24, 9)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 25, 9)) === false);
console.log(noDupInBox(16, fillSquare(BD4, 26, 9)) === false);
console.log(noDupInBox(1, fillSquare(BD4s, 0, 7)) === false);
console.log(noDupInBox(1, fillSquare(BD4s, 20, 7)) === false);
