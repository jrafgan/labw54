class CardDeck {
    static allRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    static suitInfo = {
        h: '♥hearts',
        d: '♦diams',
        s: '♠spades',
        c: '♣clubs'
    };

    constructor() {
        this.deck = [];
        for (let key in CardDeck.suitInfo) {
            for (let i = 0; i < CardDeck.allRanks.length; i++) {
                this.deck.push({
                    suit: key,
                    ranks: CardDeck.allRanks[i]
                });
            }
        }
    }

    getCard = () => {
        let randomKey = Math.round(Math.random() * this.deck.length -1);
        return this.deck.splice(randomKey, 1)[0];
    };

    getCards = howMany => {
       const fiveCards = [];
       for(let i = 0; i < howMany; i++) {
           fiveCards.push(this.getCard())
       }
       return fiveCards
    }
}

export default  CardDeck;
