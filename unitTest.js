function CHECK_EXPECT() {
    let pr = console.log

    // test

    console.log('solve sudoku board');
    console.log(JSON.stringify(solve(BD4)) === JSON.stringify(BD4s));
    console.log(JSON.stringify(solve(BD5)) === JSON.stringify(BD5s));
    console.log(solve(BD7) === false);

    pr('isSolved')
    pr(isSolved(BD1) === false)
    pr(isSolved(BD2) === false)
    pr(isSolved(BD4s) === true)

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
}