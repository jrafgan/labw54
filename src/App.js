import React, { Component } from 'react';
import Cards from './card/Cards'
import './card/cards.css'
import './App.css';
import CardDeck from './card/CardDeck';
import PokerHand from './card/PokerHand'

class App extends Component {
  state= {
    cards: [],
    result: ''
  };

  getFiveCards = () => {
    let myCards = new CardDeck().getCards(5);
    let hand = new PokerHand();
    this.setState({cards: myCards, result: hand.getOutCome(myCards)});
  };

  render() {
    return (
      <div className="App">
        <div className="Buttons">
          <button onClick={this.getFiveCards}>Get 5 cards</button>
        </div>
        <p className="result">{this.state.result}</p>
        {this.state.cards.map((card, id) => {
          return <Cards key={id} suit={card.suit} rank={card.rank} symbol={card.symbol}/>
        })}
      </div>
    );
  }
}

export default App;
