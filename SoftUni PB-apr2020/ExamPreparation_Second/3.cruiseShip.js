function cruise(input) {
    let cruiseType = input.shift();
    let apartamentType = input.shift();
    let nights = Number(input.shift());
    let nightsCost = 0;

    switch (cruiseType) {
        case "Mediterranean": {
            switch (apartamentType) {
                case "standard cabin": {
                    nightsCost += 27.50 * nights * 4;
                } break;
                case "cabin with balcony": {
                    nightsCost += 30.20 * nights * 4;
                } break;
                case "apartment": {
                    nightsCost += 40.50 * nights * 4;
                } break;
            }
        } break;
        case "Adriatic": {
            switch (apartamentType) {
                case "standard cabin": {
                    nightsCost += 22.99 * nights * 4;
                } break;
                case "cabin with balcony": {
                    nightsCost += 25.00 * nights * 4;
                } break;
                case "apartment": {
                    nightsCost += 34.99 * nights * 4;
                } break;
            }
        } break;
        case "Aegean": {
            switch (apartamentType) {
                case "standard cabin": {
                    nightsCost += 23.00 * nights * 4;
                } break;
                case "cabin with balcony": {
                    nightsCost += 26.60 * nights * 4;
                } break;
                case "apartment": {
                    nightsCost += 39.80 * nights * 4;
                } break;
            }
        } break;
    }
    if(nights > 7){
        nightsCost = nightsCost * 0.75;
    }
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${nightsCost.toFixed(2)} lv.`)
}

