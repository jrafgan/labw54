import React from 'react';

const Cards = props => (
    <div className="playingCards">
        <div className={"card rank-" + props.rank + " " + props.suit}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.symbol}</span>
        </div>
    </div>
);

export default Cards;
