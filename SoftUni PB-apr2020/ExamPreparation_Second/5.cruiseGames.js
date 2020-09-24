function games(input) {
    let nameOfPlayer = input.shift();
    let numberOfGames = Number(input.shift());
    let totalPoints = 0;
    let volleyballGameCounter = 0;
    let tennisGameCounter = 0;
    let badmintonGameCounter = 0;
    let volPts = 0;
    let tenPts = 0;
    let badPts = 0;


    for (let i = 0; i < numberOfGames; i++) {
        let nameOfGame = input.shift();
        let gamePoints = Number(input.shift());
        switch (nameOfGame) {
            case "volleyball": {
                volPts += gamePoints * 1.07;
                volleyballGameCounter++;
            } break;
            case "tennis": {
                tenPts += gamePoints * 1.05;
                tennisGameCounter++;
            } break;
            case "badminton": {
                badPts += gamePoints * 1.02;
                badmintonGameCounter++;
            } break;
        }
    }
    let averageVol = Math.floor(volPts / volleyballGameCounter);
    let averageTen = Math.floor(tenPts / tennisGameCounter);
    let averageBad = Math.floor(badPts / badmintonGameCounter);

    totalPoints += Math.floor(volPts + tenPts + badPts);

    if (averageVol < 75 || averageTen < 75 || averageBad < 75) {
        console.log(`Sorry, ${nameOfPlayer}, you lost. Your points are only ${totalPoints}.`);
    } else {
        console.log(`Congratulations, ${nameOfPlayer}! You won the cruise games with ${totalPoints} points.`);
    }
}
games(['Pepi', '3', 'volleyball', '78', 'tennis', '98', 'badminton', '105']
);