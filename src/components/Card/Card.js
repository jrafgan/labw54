import React from 'react';
import './Card.css';
import CardDeck from '../CardDeck/CardDeck'

const Card = props => {
    return (
        <div className={"Card Card-rank-" + props.rank + " Card-" + CardDeck.suitInfo[props.suit].slice(1)}>
            <span className="Card-rank">{props.rank.toUpperCase()}</span>
            <span className="Card-suit">{CardDeck.suitInfo[props.suit].slice(0,1)}</span>
        </div>
    );
};

export default Card;
