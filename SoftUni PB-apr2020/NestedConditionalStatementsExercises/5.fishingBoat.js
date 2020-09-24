function solve(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let fishermans = arg3;
    let diff = 0;
    let shipPrice = 0;

    if (season === "Spring") {
        shipPrice += 3000;
        if (fishermans <= 6) {
            shipPrice = shipPrice * 0.9;
        } else if (fishermans >= 7 && fishermans <= 11) {
            shipPrice = shipPrice * 0.85;
        } else if (fishermans >= 12) {
            shipPrice = shipPrice * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn") {
        shipPrice += 4200;
        if (fishermans <= 6) {
            shipPrice = shipPrice * 0.9;
        } else if (fishermans >= 7 && fishermans <= 11) {
            shipPrice = shipPrice * 0.85;
        } else if (fishermans >= 12) {
            shipPrice = shipPrice * 0.75;
        }
    } else if (season === "Winter") {
        shipPrice += 2600;
        if (fishermans <= 6) {
            shipPrice = shipPrice * 0.9;
        } else if (fishermans >= 7 && fishermans <= 11) {
            shipPrice = shipPrice * 0.85;
        } else if (fishermans >= 12) {
            shipPrice = shipPrice * 0.75;
        }
    }
    
    if(fishermans % 2 === 0 && season != "Autumn") {
        shipPrice = shipPrice * 0.95;
    }
    diff = (Math.abs(budget - shipPrice)).toFixed(2);
    if (budget >= shipPrice) {
        console.log(`Yes! You have ${diff} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff} leva.`)
    }
}