function cardGame(array) {
    let types = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }
    let cards = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let players = {};
    for (const line of array) {
        [name, hand] = line.split(': ');
        hand = hand.split(', ')
        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }
        players[name].push(...hand);
    }
    for (const key in players) {
        let uniqueCards = new Set(players[key]);
        let total = 0;
        Array.from(uniqueCards).forEach(card => {
            let elements = card.split('');
            let type = elements.pop();
            cardPower = elements.join('');
            if (isNaN(cardPower)) {
                cardPower = cards[cardPower];
            }

            total += types[type] * Number(cardPower);
        })
        players[key] = total;
    }
    for (const key in players) {
        console.log(`${key}: ${players[key]}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);