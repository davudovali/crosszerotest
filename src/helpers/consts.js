export const GAME_STATUS = {
    waiting: 'waiting',
    firstPlayer: 'firstPlayer',
    secondPlayer: 'secondPlayer',
    gameEnd: 'gameEnd'
};

export const WINNER_LABEL = {
    [GAME_STATUS.firstPlayer]: "First Player Wins",
    [GAME_STATUS.secondPlayer]: "Second Player Wins",
};

export const TURN_LABEL = {
    [GAME_STATUS.firstPlayer]: "First Player Turn",
    [GAME_STATUS.secondPlayer]: "Second Player Turn",
};

export const PLAYER_SIGNS = {
    [GAME_STATUS.firstPlayer]: "X",
    [GAME_STATUS.secondPlayer]: "O",
};

export const DEFAULT_WIN_COUNT = 3;

export function getCleanSquares() {
    const squares = [];
    for (let i = 0; i < 10; i++) {
        squares[i] = [];
        for (let j = 0; j < 10; j++) {
            squares[i][j] = false;
        }
    }
    return squares;
}
