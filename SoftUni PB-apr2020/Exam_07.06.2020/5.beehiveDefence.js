function solve(arg1, arg2, arg3) {
    let startingBeeCount = Number(arg1);
    let hp = Number(arg2);
    let atk = Number(arg3);
    let beeCount = startingBeeCount;
    let isBearWon = false;
    let isBeeWon = false;

    while (beeCount >= 100 || hp <= 0) {
        beeCount = beeCount - atk;
        hp = hp - beeCount * 5;
        console.log();
        if (beeCount < 100) {
            isBearWon = true;
            break;
        } else if (hp <= 0) {
            isBeeWon = true;
            break;
        }
    }
    if (beeCount < 0){
        beeCount = 0;
    }
    if (isBearWon) {
        console.log(`The bear stole the honey! Bees left ${Math.abs(beeCount)}.`)
    } else if (isBeeWon) {
        console.log(`Beehive won! Bees left ${beeCount}.`)
    }
}
solve(200, 10000, 300)