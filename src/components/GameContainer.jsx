import React, {useState, useCallback} from 'react';

import StartButton from './StartButton';
import EndGame from './EndGame';
import Game from './Game';

import {GAME_STATUS, WINNER_LABEL, DEFAULT_WIN_COUNT} from "../helpers/consts";
const DEFAULT_STATE = {status: GAME_STATUS.waiting, winner: null, winCount: DEFAULT_WIN_COUNT};

export default function GameContainer() {
    const [gameState, setGameState] = useState(DEFAULT_STATE);
    let result = null;
    const setWinCount = useCallback((value) => setGameState({...gameState, winCount: value}, [gameState.status]));
    console.log(gameState.winCount);
    switch (gameState.status) {
        case GAME_STATUS.waiting:
            result = <StartButton
                label="START"
                setWinCount={setWinCount}
                winCount={gameState.winCount}
                onClick={() => setGameState({...gameState, status: GAME_STATUS.firstPlayer})}/>;
            break;
        case GAME_STATUS.gameEnd:
            result = (
                <EndGame
                    winnerLabel={WINNER_LABEL[gameState.winner]}
                    setWinCount={setWinCount}
                    winCount={gameState.winCount}
                    onRestart={() => setGameState({...gameState, status: GAME_STATUS.firstPlayer, winner: null})}
                />);
            break;
        default:
            result = (
                <Game {...{
                    ...gameState,
                    setWinner: (winner) => setGameState({...gameState, status: GAME_STATUS.gameEnd, winner})
                }}/>);
    }
    return result;
}