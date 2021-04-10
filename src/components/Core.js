import React, { useState } from 'react'
import Board from './Board';

const Core = () => {
    const [isXNext, setisXNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const resetHandler = () => {
        setisXNext(true);
        setSquares(Array(9).fill(null));
    }

    const calculateWinner = (squaress) => {
        const winnerArray = [
            // horizontal wins
            [0,1,2], 
            [3,4,5],
            [6,7,8],
            // vertical wins
            [0,3,6],
            [1,4,7],
            [2,5,8],
            // diagonal wins
            [0,4,8],
            [2,4,6]
        ];
        for (let i = 0; i < winnerArray.length; i++) {
            const [a, b, c] = winnerArray[i];
            if (squares[a] && squares[a] == squares[b] && squares[b] == squares[c]) {
                return squares[a];
            }
        }
    }

    const handleClick = (val) => {
        const winner = calculateWinner(squares);
        if (winner || squares[val]) {
            return; // if winner already exists or if the square is already filled, do nothing
        }
        if (isXNext) {
            squares[val] = 'X';
        } else {
            squares[val] = 'O';
        }
        setisXNext(!isXNext);
    }

    let winner = calculateWinner(squares);
    let status = winner ? 'Winner is : ' + winner : 'Next player is : ' + ( isXNext ? 'X' : 'O' )

    return (
        <div className="container">
            <div className="game">
                <div className="game-board">
                    <Board
                        onClick={(val) => handleClick(val)}
                        squares={squares}
                    />
                    <button onClick={resetHandler} type="button" class=" resetButton btn btn-light">Reset</button>
                </div>
            </div>
            <div className="info">
                {status}                
            </div>
        </div>
    )
}

export default Core;
