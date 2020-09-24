function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let tourPrice = Number(arg1);
    let puzzles = Number(arg2);
    let dolls = Number(arg3);
    let bears = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);

    let totalNumber = puzzles + dolls + bears + minions + trucks;
    let totalPrice = puzzles *2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if(totalNumber >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    let profit = totalPrice * 0.9;
    let diff = Math.abs(profit - tourPrice)
    if(profit >= tourPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}