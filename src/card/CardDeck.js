
class CardDeck {
    constructor() {
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
        this.suits = [
            {suit: "diams", symbol: "♦"},
            {suit: "hearts", symbol: "♥"},
            {suit: "clubs", symbol: "♣"},
            {suit: "spades", symbol: "♠"}
        ];
        this.deck = this.createDeck();
    }

    createDeck() {
        const arr = [];
        this.suits.map(suit => {
            return this.ranks.forEach(rank => {
                let card = {
                    suit: suit.suit,
                    rank: rank,
                    symbol: suit.symbol,
                };
                arr.push(card);
            })
        });
        return arr;
    }

    getCard() {
        let randomKey = Math.round(Math.random() * this.deck.length -1);
        return this.deck.splice(randomKey, 1);
    }

    getCards(qty) {
        const arr = [];
        for (let i = 0; i < qty; i++) {
            arr.push(this.getCard()[0]);
        }
        return arr;
    }
}

export default CardDeck;