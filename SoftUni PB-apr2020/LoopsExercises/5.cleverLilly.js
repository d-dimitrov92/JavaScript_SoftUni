function cleverLilly(arg1, arg2, arg3) {
    let lillysAge = Number(arg1);
    let priceOfWashingMachine = Number(arg2);
    let priceOfToy = Number(arg3);

    let numberOfToys = 0;
    let moneySaved = 0;
    let takenFromHer = 0;
    let evenRd = 1;

    for (let i = 1; i <= lillysAge; i++) {
        if (i % 2 !== 0) {
            numberOfToys++;
        } else if (i % 2 === 0) {
            moneySaved += 10 * evenRd;
            takenFromHer++;
            evenRd++;
        }
    }

    let moneyFromToys = numberOfToys * priceOfToy;
    let totalMoney = moneySaved + moneyFromToys - takenFromHer;
    let diff = Math.abs(totalMoney - priceOfWashingMachine).toFixed(2);

    if (totalMoney >= priceOfWashingMachine) {
        console.log(`Yes! ${diff}`);
    } else console.log(`No! ${diff}`);
}

cleverLilly("21", "1570.98", "3")