import React, {useEffect, useState, useMemo} from 'react';

import {GAME_STATUS, TURN_LABEL, PLAYER_SIGNS, getCleanSquares} from "../helpers/consts";
import {checkOnWinner, checkSquareAlreadyUsed} from "../helpers/squaresCheckHelper";

import styles from './Game.module.scss';

export default function Game({winCount, setWinner}) {
    const squares = useMemo(getCleanSquares, []);

    const [{currentPlayer, waitingPlayer}, setPlayers] = useState({
        currentPlayer: GAME_STATUS.firstPlayer,
        waitingPlayer: GAME_STATUS.secondPlayer
    });

    const onChooseSquare = (line, column) => {
        if (checkSquareAlreadyUsed({squares, waitingPlayer, line, column})) {
            return;
        }

        squares[line][column] = currentPlayer;
        if (checkOnWinner({squares, winCount, currentPlayer, currentSquare: {line, column}})) {
           setWinner(currentPlayer);
        }

        setPlayers({currentPlayer: waitingPlayer, waitingPlayer: currentPlayer});
    };

    return <div className={styles.container}>
        <h1>{TURN_LABEL[currentPlayer]}</h1>
        {squares.map((squareLine, lineIndex) => {
            return (
                <div className={styles.line} key={lineIndex}>
                    {squareLine.map((square, squareIndex) => <button
                        className={`${styles.square} ${styles[square]}`}
                        key={squareIndex}
                        onClick={() => onChooseSquare(lineIndex, squareIndex)}
                    >{PLAYER_SIGNS[square]}</button>)}
                </div>);
        })}
    </div>
}

