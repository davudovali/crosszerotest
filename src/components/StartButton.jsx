import React from 'react';

export default function StartButton({onClick, label, setWinCount, winCount}) {
    return <div>
        <button onClick={onClick}>{label}</button>
        <br/>
        <br/>
        <label>Set count to win: </label>
        <select onChange={(event) => setWinCount(Number.parseInt(event.target.value))} value={winCount.toString()}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>;
}