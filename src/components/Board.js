import React from 'react';
import Square from './Square';

const Board = (props) => {
    const renderSquare = (val) => {
        return (
            <Square
                onClick={() => props.onClick(val)}
                value={props.squares[val]} // this is the value (X/O) that should be shown in the Square.
            />
        );
    } 
    return (
        <div>
            <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board;
