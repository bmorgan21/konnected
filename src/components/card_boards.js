import React from 'react';
import CardBoard from './card_board';

function CardBoards({ boards, format }) {
    return (
        <div className="row row-cols-1 row-cols-md-2">
            {boards.map((board, i) => (
                <div className="col mb-4" key={i}>
                    <CardBoard board={board} />
                </div>
            ))}
        </div>
    );
}

export default CardBoards;
