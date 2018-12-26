import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card/Card";
import CardDeck from "./components/CardDeck/CardDeck"
import PokerHand from "./components/PokerHand/PokerHand"

class App extends Component {
  state = {
      // Колода из 5 начальных карт
      fiveCards: [
          {suit: "h", ranks: "a"},
          {suit: "h", ranks: "k"},
          {suit: "h", ranks: "q"},
          {suit: "h", ranks: "j"},
          {suit: "h", ranks: "10"}
      ],
      result: 'Royal Flush (test)',
      money: 0
  };

  shuffleCards = () => {
      let deck = new CardDeck().getCards(5);
      this.setState({fiveCards: deck, result: PokerHand.getOutcome(deck)});
      this.updateAmount();
  };

  updateAmount = () => {
      let currentMoney = this.state.money;

      switch(this.state.result) {
          case 'Royal Flush':
              this.setState({money: currentMoney + 2000});
              break;
          case 'Straight Flush':
              this.setState({money: currentMoney + 1200});
              break;
          case 'Flush':
              this.setState({money: currentMoney + 900});
              break;
          case 'Four of a kind':
              this.setState({money: currentMoney + 700});
              break;
          case 'Full house':
              this.setState({money: currentMoney + 500});
              break;
          case 'Straight':
              this.setState({money: currentMoney + 300});
              break;
          case 'Three of a kind':
              this.setState({money: currentMoney + 150});
              break;
          case 'Two pairs':
              this.setState({money: currentMoney + 100});
              break;
          case 'One pair':
              this.setState({money: currentMoney + 50});
              break;
          default:
              break;
      }
  };

  render() {
    const fiveCards = this.state.fiveCards.map((card, index) => (
      <Card
          suit={card.suit}
          rank={card.ranks}
          key={index}
      />
    ));

      return (
      <div className="App">
          <div><button onClick={this.shuffleCards}>Shuffle Cards</button></div>
          <p>{this.state.result}</p>
          {fiveCards}
          <p>Your money: {this.state.money}</p>
      </div>
    );
  }
}

export default App;