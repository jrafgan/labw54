import CardDeck from '../CardDeck/CardDeck';

class PokerHand {
    static getOutcome = cards => {
        let sortRank = [];
        let sortSuit = [];

        cards.forEach(item => {
            sortRank.push(CardDeck.allRanks.indexOf(item.ranks));
            sortSuit.push(item.suit);
        });

        sortRank = sortRank.sort(function(a, b){return a-b});
        sortSuit = sortSuit.join('');

        const result = [0,0,0,0,0,0,0,0,0,0,0,0,0];
        for (let i = 0; i < sortRank.length; i++) {
            result[sortRank[i]]++;
        }

        if (sortSuit === 'hhhhh' || sortSuit === 'ddddd' || sortSuit === 'sssss' || sortSuit === 'ccccc' ) {
            if (result.slice(8).join('') === '11111') {
                return 'Royal Flush';
            } else if (result.join('').match(/1{5}/) !== null) {
                return 'Straight Flush';
            } else {
                return 'Flush';
            }
        } else {
            if (result.indexOf(4) !== -1) {
                return 'Four of a kind';
            } else if (result.indexOf(3) !== -1 && result.indexOf(2) !== -1) {
                return 'Full house';
            } else if (result.slice(result.indexOf(1), result.indexOf(1) + 5).join('') === '11111') {
                return 'Straight';
            } else   if (result.indexOf(3) !== -1) {
                return 'Three of a kind';
            } else {
                var pair = result.join('').match(/2/g);
                if (pair !== null) {
                    if (pair.length === 2) {
                        return 'Two pairs';
                    } else {
                        return 'One pair';
                    }
                } else {
                    return 'Nothing on your hand, try again !';
                }
            }
        }
    };
}

export default PokerHand;