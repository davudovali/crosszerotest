
export function checkSquareAlreadyUsed({squares, waitingPlayer, line, column}) {
    return squares[line][column] === waitingPlayer;
}

export function checkOnWinner({squares, winCount, currentSquare}) {
    return checkHorizontalLine(squares, winCount, currentSquare) ||
        checkVerticalLine(squares, winCount, currentSquare) ||
        checkDiagonals(squares, winCount, currentSquare);
}

function checkHorizontalLine(squares, winCount, {line: lineIndex, column: columnIndex}) {
    const line = squares[lineIndex];
    const currentValue = line[columnIndex];
    const startPosition = columnIndex === 0 ? columnIndex : findStartColumnPosition({currentValue, columnIndex, line});
    return countRowLength({startPosition, currentValue, line}) >= winCount;
}


function checkVerticalLine(squares, winCount, {line: lineIndex, column: columnIndex}) {
    const currentValue = squares[lineIndex][columnIndex];
    const startPosition = lineIndex === 0 ? lineIndex : findStartLinePosition({squares, currentValue, columnIndex, lineIndex});
    return countColumnLength({startPosition, columnIndex, currentValue, squares}) >= winCount;
}

function checkDiagonals(squares, winCount, {line: lineIndex, column: columnIndex}) {
    const currentValue = squares[lineIndex][columnIndex];
    const startPositionLeftToRight = findStartLeftToRightPosition({squares, currentValue, columnIndex, lineIndex});
    const startPositionRightToLeft = findStartRightToLeftPosition({squares, currentValue, columnIndex, lineIndex});
    return countLeftToRightDiagonalLength({startPositionLeftToRight, currentValue, squares}) >= winCount ||
        countRightToLeftDiagonalLength({startPositionRightToLeft, currentValue, squares}) >= winCount;
}



function findStartLinePosition({squares, currentValue, columnIndex, lineIndex}) {
    let result;
    for (let i = lineIndex; i >= 0; i--) {
        if (squares[i][columnIndex] === currentValue) {
            result = i;
        } else {
            break;
        }
    }
    return result;
}

function findStartColumnPosition({currentValue, columnIndex, line}) {
    let result;
    for (let i = columnIndex; i >= 0; i--) {
        if (line[i] === currentValue) {
            result = i;
        } else {
            break;
        }
    }
    return result;
}

function findStartLeftToRightPosition({squares, currentValue, columnIndex, lineIndex}) {
    let result = {line: lineIndex, column: columnIndex};
    for (let i = lineIndex, j = columnIndex; i >= 0 && j >= 0; i--, j--) {
        if (squares[i][j] === currentValue) {
            result = {line: i, column: j};
        } else {
            break;
        }
    }
    return result;
}

function findStartRightToLeftPosition({squares, currentValue, columnIndex, lineIndex}) {
    let result = {line: lineIndex, column: columnIndex};
    for (let i = lineIndex, j = columnIndex; i >= 0 && j < 10; i--, j++) {
        if (squares[i][j] === currentValue) {
            result = {line: i, column: j};
        } else {
            break;
        }
    }
    return result;

}

function countRowLength({startPosition, currentValue, line}) {
    let result = 0;
    for (let i = startPosition; i < 10; i++) {
        if (line[i] !== currentValue) {
            break;
        }
        result++;
    }
    return result;
}


function countColumnLength({startPosition, columnIndex, currentValue, squares}) {
    let result = 0;
    for (let i = startPosition; i < 10; i++) {
        if (squares[i][columnIndex] !== currentValue) {
            break;
        }
        result++;
    }
    return result;
}

function countLeftToRightDiagonalLength({startPositionLeftToRight: {line: lineIndex, column: columnIndex}, currentValue, squares}) {
    let result = 0;
    for (let i = lineIndex, j = columnIndex; i < 10 && j < 10; i++, j++) {
        if (squares[i][j] !== currentValue) {
            break;
        } else {
            result++;
        }
    }
    return result;
}

function countRightToLeftDiagonalLength({startPositionRightToLeft: {line: lineIndex, column: columnIndex}, currentValue, squares}) {
    let result = 0;
    for (let i = lineIndex, j = columnIndex; i < 10 && j >= 0; i++, j--) {
        if (squares[i][j] !== currentValue) {
            break;
        } else {
            result++;
        }
    }
    return result;
}
