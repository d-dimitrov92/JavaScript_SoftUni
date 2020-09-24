function darts(input) {
    let points = Number(input.shift());
    let diff = 0;
    let turns = 0;
    let isWon = false;

    while (points > 0) {
        let sector = input.shift();
        let turnPoints = input.shift();

        switch (sector) {
            case "number section": {
                points -= turnPoints;
            } break;
            case "double ring": {
                points -= turnPoints * 2;
            } break;
            case "triple ring": {
                points -= turnPoints * 3;
            } break;
            case "bullseye": {
                isWon = true;
                turns++;
                console.log(`Congratulations! You won the game with a bullseye in ${turns} moves!`)
                return;
            }
        }
        turns++;
        diff = Math.abs(0 - points);
        if (points === 0) {
            isWon = true;
            break;
        } else if (points < 0) {
            isWon = false;
            break;
        }
    }
    if (isWon) {
        console.log(`Congratulations! You won the game in ${turns} moves!`)
    } else {
        console.log(`Sorry, you lost. Score difference: ${diff}.`)
    }
}
darts([
    '150',
    'double ring',
    '20',
    'triple ring',
    '10',
    'number section',
    '20',
    'triple ring',
    '20'
  ]
  

)