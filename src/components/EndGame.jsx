import React from 'react';
import StartButton from "./StartButton";

export default function EndGame({winnerLabel, onRestart, setWinCount, winCount}) {
    return <div>
        <h1>{winnerLabel}</h1>
        <StartButton
            onClick={onRestart}
            winCount={winCount}
            setWinCount={setWinCount}
            label="RESTART"
        />
    </div>
}